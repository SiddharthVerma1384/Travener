/* ---------- mode ---------- */
const normalizeMode = (text = '') => {
  const v = text.toUpperCase();
  if (/\b(IRCTC|RAILWAYS?|TRAIN|SLEEPER|BERTH|COACH|EXPRESS|EXP)\b/.test(v)) return 'TRAIN';
  if (/\b(FLIGHT|AIRLINES?|AIRWAYS|BOARDING PASS)\b/.test(v)) return 'FLIGHT';
  if (/\b(BUS|REDBUS|TNSTC|KSRTC|SETC|VOLVO)\b/.test(v)) return 'BUS';
  if (/\b(AUTO(?:\s*(?:RICKSHAW|RICK|3[- ]?WHEELER))?|TUK[\s-]?TUK)\b/.test(v)) return 'AUTO';
  if (/\b(CAB|TAXI|OLA|UBER)\b/.test(v)) return 'CAB';
  if (/\bCAR\b/.test(v)) return 'CAR';
  return 'OTHER';
};

/* ---------- dates ---------- */
const MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
const MON = '(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|June?|July?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)';
const SEP = '[ \\-\\/,.]*';

const makeDate = (y, m, d) => {
  y = Number(y); m = Number(m); d = Number(d);
  if (y < 100) y += 2000;
  const dt = new Date(y, m, d);
  const ok = dt.getFullYear() === y && dt.getMonth() === m && dt.getDate() === d;
  return ok && y >= 2000 && y <= 2100 ? dt : null;
};

const findDates = (text) => {
  const found = [];
  const add = (m, y, mo, d) => {
    const date = makeDate(y, mo, d);
    if (date) found.push({ date, index: m.index, end: m.index + m[0].length });
  };

  // yyyy-mm-dd
  for (const m of text.matchAll(/(?<!\d)(\d{4})[\/.-](\d{1,2})[\/.-](\d{1,2})(?!\d)/g))
    add(m, m[1], m[2] - 1, m[3]);
  // dd-mm-yyyy (Indian order)
  for (const m of text.matchAll(/(?<![\d.])(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4}|\d{2})(?![\d:])/g))
    add(m, m[3], m[2] - 1, m[1]);
  // 04-Nov-2026 / 4 November 2026 / 04 Nov 26
  for (const m of text.matchAll(new RegExp(`(?<!\\d)(\\d{1,2})(?:st|nd|rd|th)?${SEP}${MON}${SEP}(\\d{4}|\\d{2})(?![\\d:])`, 'gi')))
    add(m, m[3], MONTHS[m[2].slice(0, 3).toLowerCase()], m[1]);
  // Nov 04, 2026
  for (const m of text.matchAll(new RegExp(`${MON}${SEP}(\\d{1,2})(?:st|nd|rd|th)?${SEP}(\\d{4})(?!\\d)`, 'gi')))
    add(m, m[3], MONTHS[m[1].slice(0, 3).toLowerCase()], m[2]);

  found.sort((a, b) => a.index - b.index);
  return found.filter((f, i) => i === 0 || f.index >= found[i - 1].end); // drop overlaps
};

/* ---------- times ---------- */
const findTimes = (text) => {
  const found = [];
  const re = /(?<![\d.:])(\d{1,2})\s*([:;.])\s*(\d{2})(?::\d{2})?\s*(AM|PM)?(?!\d)/gi;
  for (const m of text.matchAll(re)) {
    let hours = Number(m[1]);
    const minutes = Number(m[3]);
    const mer = m[4]?.toUpperCase();
    const timeLabel = text.slice(Math.max(0, m.index - 28), m.index);
    if (m[2] === '.' && !mer && !/(?:time|departure|depart|arrival|arrive)\s*[:\-]?\s*$/i.test(timeLabel)) continue;
    if (hours > 23 || minutes > 59) continue;
    if (mer && hours > 12) continue;
    if (mer === 'PM' && hours < 12) hours += 12;
    if (mer === 'AM' && hours === 12) hours = 0;
    found.push({ value: { hours, minutes }, index: m.index });
  }
  return found;
};

// true if the text just before idx says booking/print/arrival etc.
const isNoise = (text, idx) =>
  /(book|print|transaction|chart|issued|generated|arriv|valid|received)[^\n]{0,25}$/i
    .test(text.slice(Math.max(0, idx - 40), idx));

const extractDateTime = (text) => {
  let date = null;
  let time = null;

  // 1) "Departure* 20:40 04-Nov-2026"
  for (const m of text.matchAll(/\bdep(?:arture|arts?)?\b\*?/gi)) {
    let win = text.slice(m.index + m[0].length, m.index + m[0].length + 60);
    const cut = win.search(/arriv/i);
    if (cut >= 0) win = win.slice(0, cut);
    const t = findTimes(win)[0];
    const d = findDates(win)[0];
    if (t || d) {
      time = t?.value ?? null;
      date = d?.date ?? null;
      break;
    }
  }

  const dates = findDates(text);

  // 2) "Date of Journey: 04-Nov-2026"
  if (!date) {
    const label = /(?:date\s+of\s+(?:journey|travel)|journey\s+date|travel\s+date|doj|start\s+date)\s*\*?\s*[:\-]?/gi;
    for (const m of text.matchAll(label)) {
      const end = m.index + m[0].length;
      const hit = dates.find((d) => d.index >= end && d.index - end <= 40);
      if (hit) { date = hit.date; break; }
    }
  }

  // 3) fallbacks that skip booking/print dates and times
  if (!date) date = (dates.find((d) => !isNoise(text, d.index)) || dates[0])?.date ?? null;
  if (!time) time = findTimes(text).find((t) => !isNoise(text, t.index))?.value ?? null;

  return { date, time };
};

/* ---------- stations ---------- */
const LABEL_WORDS = new Set([
  'from', 'to', 'station', 'boarding', 'at', 'origin', 'source',
  'destination', 'dest', 'upto', 'reservation', 'journey', 'booked',
]);

// bracketed codes that are NOT stations (headings, classes, quotas, statuses)
const NOT_STATION_CODES = new Set([
  'ERS', 'PNR', 'IRCTC', 'UTS', 'GST', 'SL', 'AC', '3A', '2A', '1A', 'CC', 'EC', 'GN', 'TQ', 'RAC', 'WL', 'CNF',
]);

const CODE_RE = /\(\s*[A-Za-z]{2,5}\s*\)/;
const LAB_FROM = '(?:from|origin|source)(?:\\s+station)?';
const LAB_TO = '(?:to|destination|dest)(?:\\s+station)?';
const STOP = /\s+(?:class|quota|date|journey|train|pnr|dist(?:ance)?|boarding|departure|arrival|reservation|fare|age|sex|gender)\b.*$/i;

const fmt = (name, code) => `${name.replace(/\s+/g, ' ').trim()} (${code.toUpperCase()})`;
const same = (a, b) => !!a && !!b && a.toUpperCase() === b.toUpperCase();

const cleanLocation = (value) => {
  if (!value) return null;
  const s = value.replace(STOP, '').replace(/[*|;:,]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
  if (s.length < 2 || LABEL_WORDS.has(s.toLowerCase())) return null;
  return s;
};

// value right after a label: "MADURAI JN (MDU) Class SL" -> "MADURAI JN (MDU)"
const stationFromValue = (value) => {
  if (!value) return null;
  const m = value.match(/^\s*([^()\n]+?)\s*\(\s*([A-Za-z]{2,5})\s*\)/);
  if (m && !NOT_STATION_CODES.has(m[2].toUpperCase())) return fmt(m[1], m[2]);
  return cleanLocation(value);
};

// every "NAME (CODE)" in the text, in order, ignoring headings like "(ERS)"
const codeStations = (text) => {
  const re = /((?:[A-Za-z][A-Za-z.'&-]*[ \t]+){0,4}[A-Za-z][A-Za-z.'&-]*)[ \t]*\(\s*([A-Za-z]{2,5})\s*\)/g;
  const out = [];
  for (const m of text.matchAll(re)) {
    if (NOT_STATION_CODES.has(m[2].toUpperCase())) continue;
    const words = m[1].trim().split(/\s+/);
    while (words.length > 1 && LABEL_WORDS.has(words[0].toLowerCase())) words.shift();
    const st = fmt(words.join(' '), m[2]);
    if (!same(out[out.length - 1], st)) out.push(st);
  }
  return out;
};

const labelledRoute = (text, requireCode) => {
  const val = (v) => {
    const s = stationFromValue(v);
    return s && (!requireCode || CODE_RE.test(s)) ? s : null;
  };

  // "From X To Y" on one line
  const one = text.match(new RegExp(
    `\\b${LAB_FROM}\\b\\s*[:\\-]?\\s*([^\\n]+?)\\s+${LAB_TO}\\b\\s*[:\\-]?\\s*([^\\n]+)`, 'i'));
  if (one) {
    const s = val(one[1]);
    const d = val(one[2]);
    if (s && d) return { source: s, destination: d };
  }

  // labels on separate lines/columns
  const firstValid = (label) => {
    for (const m of text.matchAll(new RegExp(`\\b${label}\\b\\s*[:\\-]?\\s*([^\\n]+)`, 'gi'))) {
      const s = val(m[1]);
      if (s) return s;
    }
    return null;
  };
  return { source: firstValid(LAB_FROM), destination: firstValid(LAB_TO) };
};

const extractRoute = (text) => {
  // drop the page heading so it can never be read as a station
  const body = text.replace(/electronic\s+reservation\s+slip(\s*\(\s*ERS\s*\))?/gi, ' ');

  // IRCTC ERS: "Booked From   To" row, then "KATPADI JN. (KPD)  DANAPUR (DNR)"
  const ers = body.match(/booked\s+from\s*(?:[:\-]\s*)?to\b([\s\S]{0,200})/i);
  if (ers) {
    const [a, b] = codeStations(ers[1]);
    if (a && b) return { source: a, destination: b };
  }

  let { source, destination } = labelledRoute(body, true);

  if (!source || !destination) {
    const list = codeStations(body); // order on the slip: From, To, Boarding, Upto
    source ||= list[0] ?? null;
    destination ||= list.find((s) => !same(s, source)) ?? null;
  }

  if (!source || !destination) {
    const l = labelledRoute(body, false);
    source ||= l.source;
    destination ||= l.destination;
  }

  if (!source || !destination) {
    const route = body.match(/\b([A-Za-z][A-Za-z .'-]{2,30}?)\s*(?:->|→|–|—|\bto\b)\s*([A-Za-z][A-Za-z .'-]{2,30}?)(?=\s*(?:\n|$|date|journey|train|pnr))/i);
    source ||= cleanLocation(route?.[1]);
    destination ||= cleanLocation(route?.[2]);
  }

  return { source: source || null, destination: destination || null };
};

/* ---------- main ---------- */
export const extractTicketFields = (rawText = '') => {
  const text = rawText.replace(/\r/g, '').replace(/[ \t\u00a0]+/g, ' ');
  const { source, destination } = extractRoute(text);
  const { date, time } = extractDateTime(text);
  const travelDate = date
    ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    : '';
  const departureTime = time
    ? `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}`
    : '';

  const departureAt = date && time
    ? new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.hours, time.minutes)
    : date;

  return {
    source,
    destination,
    departureAt,
    travelDate,
    departureTime,
    transportMode: normalizeMode(text)
  };
};