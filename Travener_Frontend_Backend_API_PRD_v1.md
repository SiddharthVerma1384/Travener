# Travener Frontend → Backend API PRD
## Product Requirements Document — API Contract v1.0

**Project:** Travener  
**Purpose:** Define the exact data contract between the React frontend and Node.js/Express backend so both can be developed independently and integrated with minimal ambiguity.

> **Contract rule:** The frontend owns presentation and user input. The backend owns validation, authentication, authorization, business rules, IDs, timestamps, status transitions, match scores, and other trusted fields.

---

# 1. Scope

This document defines:

- API endpoints
- HTTP methods
- Authentication requirements
- Path parameters
- Query parameters
- Request bodies
- Multipart/form-data requirements
- Expected success responses
- Standard error responses
- Backend-derived fields
- Basic validation expectations
- State-transition rules

This is **API Contract v1.0**. UI design may change independently, but changes to endpoint names, request/response structures, or business semantics must be discussed by both frontend and backend developers.

---

# 2. Base URL

Local development:

```text
http://localhost:5000/api
```

Production:

```text
https://<production-domain>/api
```

The frontend should keep the base URL in an environment variable.

Example:

```text
VITE_API_BASE_URL=http://localhost:5000/api
```

---

# 3. Authentication

Authenticated endpoints use:

```http
Authorization: Bearer <JWT>
```

The frontend sends the JWT.

The backend derives the following from the JWT/session:

- `userId`
- authenticated identity
- role
- authorization context

The frontend must **not** send trusted identity fields such as:

```json
{
  "userId": 101,
  "role": "STUDENT"
}
```

The backend must derive these itself.

---

# 4. General Request Rules

## Frontend sends

Depending on the endpoint:

- HTTP method
- URL
- path parameters
- query parameters
- request body
- authorization header
- uploaded files where required

## Backend derives

The backend is responsible for:

- IDs
- `userId` from JWT
- ownership
- role
- timestamps
- default statuses
- match scores
- request sender/receiver
- report reporter
- conversation participants
- message sender
- database-generated values
- business-rule calculations

---

# 5. Standard Success Response

Successful responses should preferably follow a predictable structure.

Example:

```json
{
  "success": true,
  "data": {
    "..."
  }
}
```

For list endpoints:

```json
{
  "success": true,
  "data": {
    "items": [],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100
    }
  }
}
```

The exact response shape can be refined during backend implementation, but frontend and backend should agree before integration.

---

# 6. Standard Error Response

All API errors should follow one structure:

```json
{
  "success": false,
  "error": {
    "code": "TRAVEL_PLAN_NOT_FOUND",
    "message": "Travel plan does not exist."
  }
}
```

Recommended HTTP status meanings:

| Status | Meaning |
|---|---|
| 200 | Successful request |
| 201 | Resource created |
| 400 | Bad request |
| 401 | Not authenticated |
| 403 | Authenticated but not authorized |
| 404 | Resource not found |
| 409 | Business/data conflict |
| 422 | Validation failure |
| 500 | Internal server error |
| 503 | External dependency unavailable |

---

# 7. Authentication APIs

## 7.1 Register

### Endpoint

```http
POST /api/auth/register
```

### Authentication

Not required.

### Request body

```json
{
  "name": "Siddharth Verma",
  "email": "siddharth@university.edu",
  "password": "userPassword123"
}
```

### Backend responsibilities

- Validate fields
- Validate email format
- Check whether email already exists
- Hash password
- Create user
- Generate/return authentication token according to implementation

Frontend must never send a password hash.

---

## 7.2 Login

### Endpoint

```http
POST /api/auth/login
```

### Authentication

Not required.

### Request body

```json
{
  "email": "siddharth@university.edu",
  "password": "userPassword123"
}
```

### Expected response example

```json
{
  "success": true,
  "data": {
    "token": "<JWT>",
    "user": {
      "id": 101,
      "name": "Siddharth Verma",
      "email": "siddharth@university.edu",
      "role": "STUDENT"
    }
  }
}
```

---

# 8. User/Profile APIs

## 8.1 Get Current User

```http
GET /api/users/me
```

### Authentication

Required.

### Body

None.

---

## 8.2 Update Current User

```http
PATCH /api/users/me
```

### Authentication

Required.

### Request body

```json
{
  "name": "Siddharth Verma",
  "bio": "CSE student",
  "profileImageKey": "profiles/101/profile.jpg"
}
```

Only fields that need to be changed should be sent.

### Backend responsibilities

The backend determines which user is being updated from the JWT.

The frontend must not send:

```json
{
  "userId": 101
}
```

---

# 9. Travel Plan APIs

A Travel Plan represents the user's intended journey to or from a transport hub.

---

## 9.1 Create Travel Plan

```http
POST /api/travel-plans
```

### Authentication

Required.

### Request body

```json
{
  "source": {
    "name": "VIT Vellore",
    "type": "UNIVERSITY"
  },
  "destinationHub": {
    "name": "Katpadi Railway Station",
    "type": "RAILWAY_STATION"
  },
  "travelDate": "2026-09-15",
  "departureTime": "19:30",
  "transportType": "TRAIN",
  "arrivalPreference": {
    "bufferMinutes": 45
  },
  "coordination": {
    "mode": "LOOKING_FOR_RIDE",
    "cabSharing": true,
    "availableSeats": 0
  }
}
```

### Supported coordination modes

```text
LOOKING_FOR_RIDE
HAS_RIDE
```

### Example for a user with available seats

```json
{
  "coordination": {
    "mode": "HAS_RIDE",
    "cabSharing": true,
    "availableSeats": 2
  }
}
```

### Backend derives

- `userId`
- `preferredArrivalTime`
- `createdAt`
- `updatedAt`
- initial status
- database ID

### Important

Frontend sends:

```json
"bufferMinutes": 45
```

Backend calculates:

```text
preferredArrivalTime = departureTime - bufferMinutes
```

The frontend should not implement this business rule.

---

## 9.2 Get My Travel Plans

```http
GET /api/travel-plans/me
```

### Authentication

Required.

### Body

None.

---

## 9.3 Get One Travel Plan

```http
GET /api/travel-plans/:travelPlanId
```

### Authentication

Required.

### Path parameter

```text
travelPlanId
```

### Body

None.

---

## 9.4 Update Travel Plan

```http
PATCH /api/travel-plans/:travelPlanId
```

### Authentication

Required.

### Path parameter

```text
travelPlanId
```

### Example body

```json
{
  "departureTime": "20:00",
  "arrivalPreference": {
    "bufferMinutes": 60
  }
}
```

Another example:

```json
{
  "coordination": {
    "availableSeats": 1
  }
}
```

### Backend responsibilities

- Verify JWT user owns the travel plan
- Validate changed fields
- Recalculate derived values
- Update timestamps
- Prevent invalid changes to completed/cancelled plans

---

## 9.5 Change Travel Plan Status

```http
PATCH /api/travel-plans/:travelPlanId/status
```

### Request body

```json
{
  "status": "CANCELLED"
}
```

### Backend responsibilities

Validate whether the requested state transition is legal.

Example:

```text
ACTIVE → CANCELLED
ACTIVE → COMPLETED
```

The frontend must not arbitrarily transition the resource to any status.

---

# 10. Ticket Upload / OCR APIs

## 10.1 Upload Ticket

```http
POST /api/travel-documents
```

### Authentication

Required.

### Content-Type

```http
multipart/form-data
```

### Form fields

```text
file = <ticket file>
documentType = TICKET
```

Do not send the file inside JSON.

### Example response

```json
{
  "success": true,
  "data": {
    "documentId": 501,
    "ocrStatus": "COMPLETED",
    "extractedData": {
      "destinationHub": {
        "name": "Katpadi Railway Station",
        "type": "RAILWAY_STATION"
      },
      "travelDate": "2026-09-15",
      "departureTime": "19:30",
      "transportType": "TRAIN"
    }
  }
}
```

### Important rule

OCR output is **not automatically the final source of truth**.

The user must review and confirm the extracted information.

---

## 10.2 Confirm OCR Data

```http
POST /api/travel-documents/:documentId/confirm
```

### Request body

If correct:

```json
{
  "confirmed": true
}
```

If corrections are needed:

```json
{
  "confirmed": true,
  "corrections": {
    "departureTime": "19:45"
  }
}
```

### Backend responsibilities

- Verify document ownership
- Validate corrections
- Store confirmed data
- Use confirmed data for the Travel Plan

---

# 11. AI Travel Intent API

## 11.1 Extract Travel Intent

```http
POST /api/assistant/travel-intent
```

### Authentication

Required.

### Request body

```json
{
  "message": "I have a train from Katpadi at 7:30 tomorrow. I want to reach 45 minutes early and share a cab."
}
```

### Example response

```json
{
  "success": true,
  "data": {
    "intent": {
      "destinationHub": {
        "name": "Katpadi Railway Station",
        "type": "RAILWAY_STATION"
      },
      "travelDate": "2026-09-07",
      "departureTime": "19:30",
      "bufferMinutes": 45,
      "coordinationMode": "LOOKING_FOR_RIDE",
      "cabSharing": true
    },
    "requiresConfirmation": true
  }
}
```

### Critical rule

The LLM should extract structured information.

It should **not directly create a database record**.

The user must confirm the information before the backend creates the Travel Plan.

---

# 12. Matching APIs

## 12.1 Get Matches

```http
GET /api/matches?travelPlanId=501
```

### Authentication

Required.

### Query parameter

```text
travelPlanId
```

### Body

None.

### Example response

```json
{
  "success": true,
  "data": {
    "matches": [
      {
        "travelPlanId": 612,
        "user": {
          "id": 72,
          "name": "Rahul"
        },
        "destinationHub": {
          "name": "Katpadi Railway Station",
          "type": "RAILWAY_STATION"
        },
        "preferredArrivalTime": "18:55",
        "coordinationMode": "HAS_RIDE",
        "availableSeats": 2,
        "matchScore": 92
      }
    ]
  }
}
```

### Backend responsibilities

The backend calculates:

- eligibility
- compatibility
- match score
- ranking
- blocked-user exclusion
- travel-plan compatibility

Frontend must not calculate or submit `matchScore`.

---

# 13. Request APIs

## 13.1 Send Companion/Ride Request

```http
POST /api/requests
```

### Authentication

Required.

### Request body

```json
{
  "travelPlanId": 612
}
```

### Backend derives

- requester/sender from JWT
- recipient from Travel Plan owner
- request ID
- initial status
- created timestamp

### Initial status

```text
PENDING
```

---

## 13.2 Get Sent Requests

```http
GET /api/requests/sent
```

No body.

---

## 13.3 Get Received Requests

```http
GET /api/requests/received
```

No body.

---

## 13.4 Accept / Reject / Cancel Request

```http
PATCH /api/requests/:requestId
```

### Accept

```json
{
  "action": "ACCEPT"
}
```

### Reject

```json
{
  "action": "REJECT"
}
```

### Cancel

```json
{
  "action": "CANCEL"
}
```

### Request state

```text
PENDING
   ├── ACCEPTED
   ├── REJECTED
   └── CANCELLED
```

### Accept rules

When accepting a request, the backend must check:

- request exists
- request is still pending
- authenticated user is authorized
- travel plan is active
- users are not blocked
- available seats/capacity is sufficient
- no conflicting accepted journey exists

Where necessary, this operation should be protected by a PostgreSQL transaction/locking strategy so simultaneous requests cannot overbook available seats.

### Example accepted response

```json
{
  "success": true,
  "data": {
    "requestId": 901,
    "status": "ACCEPTED",
    "journeyId": 104,
    "conversationId": 3001
  }
}
```

### Important

A conversation is created **only after acceptance**.

Rejected/pending requests do not create chat access.

---

# 14. Conversation APIs

## 14.1 Get Conversations

```http
GET /api/conversations
```

### Authentication

Required.

### Body

None.

---

## 14.2 Get Messages

```http
GET /api/conversations/:conversationId/messages
```

### Authentication

Required.

### Path parameter

```text
conversationId
```

### Body

None.

### Backend must verify

The authenticated user is a participant in the conversation.

---

# 15. Real-Time Chat

Chat uses Socket.IO/WebSocket rather than normal REST requests for real-time delivery.

## Event: send_message

Frontend sends:

```json
{
  "conversationId": 3001,
  "message": "Where should we meet?"
}
```

### Backend performs

1. Authenticate the socket/user.
2. Verify conversation membership.
3. Validate message.
4. Save message to PostgreSQL.
5. Generate message ID.
6. Generate timestamp.
7. Emit the persisted message to the relevant participant(s).

### Server-generated message

```json
{
  "messageId": 7001,
  "conversationId": 3001,
  "senderId": 101,
  "message": "Where should we meet?",
  "sentAt": "2026-09-15T16:20:00Z"
}
```

Frontend must not be trusted to generate:

- `senderId`
- `messageId`
- `sentAt`

---

# 16. Journey APIs

## 16.1 Get Journey

```http
GET /api/journeys/:journeyId
```

No body.

---

## 16.2 Change Journey Status

```http
PATCH /api/journeys/:journeyId/status
```

### Request body

```json
{
  "status": "STARTED"
}
```

Later:

```json
{
  "status": "COMPLETED"
}
```

### State transition

```text
UPCOMING
   ↓
STARTED
   ↓
COMPLETED
```

Backend validates legal transitions.

---

# 17. Reporting APIs

## 17.1 Report a User

```http
POST /api/reports
```

### Authentication

Required.

### Request body

```json
{
  "reportedUserId": 72,
  "journeyId": 104,
  "reason": "NO_SHOW",
  "description": "The user did not arrive at the agreed meeting point."
}
```

### Allowed reasons

```text
HARASSMENT
INAPPROPRIATE_BEHAVIOR
FAKE_INFORMATION
NO_SHOW
SAFETY_CONCERN
SPAM
OTHER
```

### Backend derives

- `reporterId` from JWT
- report ID
- creation timestamp
- initial status

Frontend must not send `reporterId`.

---

# 18. Blocking APIs

## 18.1 Block User

```http
POST /api/users/:userId/block
```

### Authentication

Required.

### Body

None.

The path parameter identifies the user being blocked.

The JWT identifies the blocker.

### Backend behavior

Blocked users should be excluded from:

- future matching
- new requests
- inappropriate interactions

Existing journeys/conversations may require separate policy decisions.

---

# 19. Notification APIs

## 19.1 Get Notifications

```http
GET /api/notifications
```

No body.

### Example response

```json
{
  "success": true,
  "data": {
    "notifications": [
      {
        "id": 501,
        "type": "REQUEST_ACCEPTED",
        "title": "Request accepted",
        "message": "Rahul accepted your companion request.",
        "isRead": false,
        "createdAt": "2026-09-15T10:00:00Z"
      }
    ]
  }
}
```

---

## 19.2 Mark Notification as Read

```http
PATCH /api/notifications/:notificationId
```

### Request body

```json
{
  "isRead": true
}
```

Backend verifies that the notification belongs to the authenticated user.

---

# 20. Admin APIs

All admin APIs require:

```text
JWT + ADMIN role
```

---

## 20.1 Get Users

```http
GET /api/admin/users?page=1&limit=20&status=ACTIVE
```

### Query parameters

```text
page
limit
status
```

---

## 20.2 Change User Status

```http
PATCH /api/admin/users/:userId/status
```

### Request body

```json
{
  "status": "SUSPENDED"
}
```

Backend validates the status transition and admin authorization.

---

## 20.3 Get Reports

```http
GET /api/admin/reports?status=OPEN&page=1&limit=20
```

### Query parameters

```text
status
page
limit
```

---

## 20.4 Resolve Report

```http
PATCH /api/admin/reports/:reportId
```

### Request body

```json
{
  "status": "RESOLVED",
  "resolution": "Warning issued to reported user."
}
```

---

# 21. API Contract Summary

| Feature | Method | Endpoint | Frontend Input |
|---|---|---|---|
| Register | POST | `/api/auth/register` | name, email, password |
| Login | POST | `/api/auth/login` | email, password |
| Current user | GET | `/api/users/me` | JWT |
| Update profile | PATCH | `/api/users/me` | profile fields |
| Create plan | POST | `/api/travel-plans` | travel details |
| My plans | GET | `/api/travel-plans/me` | JWT |
| Get plan | GET | `/api/travel-plans/:id` | path ID |
| Update plan | PATCH | `/api/travel-plans/:id` | changed fields |
| Cancel plan | PATCH | `/api/travel-plans/:id/status` | status |
| Upload ticket | POST | `/api/travel-documents` | multipart file |
| Confirm OCR | POST | `/api/travel-documents/:id/confirm` | confirmation/corrections |
| AI intent | POST | `/api/assistant/travel-intent` | message |
| Matches | GET | `/api/matches` | travelPlanId |
| Send request | POST | `/api/requests` | travelPlanId |
| Sent requests | GET | `/api/requests/sent` | JWT |
| Received requests | GET | `/api/requests/received` | JWT |
| Request action | PATCH | `/api/requests/:id` | action |
| Conversations | GET | `/api/conversations` | JWT |
| Messages | GET | `/api/conversations/:id/messages` | path ID |
| Chat message | Socket.IO | `send_message` | conversationId, message |
| Journey | GET | `/api/journeys/:id` | path ID |
| Journey status | PATCH | `/api/journeys/:id/status` | status |
| Report | POST | `/api/reports` | reportedUserId, journeyId, reason, description |
| Block | POST | `/api/users/:id/block` | path ID |
| Notifications | GET | `/api/notifications` | JWT |
| Mark notification | PATCH | `/api/notifications/:id` | isRead |
| Admin users | GET | `/api/admin/users` | filters |
| Admin reports | GET | `/api/admin/reports` | filters |
| Suspend user | PATCH | `/api/admin/users/:id/status` | status |
| Resolve report | PATCH | `/api/admin/reports/:id` | status, resolution |

---

# 22. Frontend/Backend Ownership Matrix

| Data/Decision | Frontend | Backend |
|---|---:|---:|
| Form input | YES | Validate |
| UI state | YES | NO |
| JWT storage/handling | YES* | YES |
| User ID | NO | YES |
| Role | Display only | YES |
| Database IDs | NO | YES |
| Created timestamps | NO | YES |
| Match score | NO | YES |
| Preferred arrival calculation | NO | YES |
| Request status | Display | YES |
| Journey status rules | Display/control request | YES |
| Authorization | UI guard | YES |
| Password hashing | NO | YES |
| OCR display | YES | YES |
| OCR final confirmation | YES | YES |
| LLM extraction | Display result | YES |
| Database writes | NO | YES |
| Message sender ID | NO | YES |
| Message timestamp | NO | YES |

\* Exact token storage strategy should be decided during authentication implementation.

---

# 23. Validation Requirements

Backend validation is mandatory even if frontend validation exists.

Example:

Frontend:

```text
departureTime required
```

Backend:

```text
departureTime required
AND
valid time format
AND
valid travel date
AND
authorized user
AND
valid business state
```

Never assume frontend validation is sufficient.

---

# 24. Important Business Rules

## Travel Plan

- User can create their own Travel Plan.
- User can update only their own active Travel Plan.
- Backend calculates preferred arrival time.
- Cancelled/completed plans cannot be arbitrarily edited.

## Matching

- Match only compatible active Travel Plans.
- Exclude blocked users.
- Backend calculates ranking/score.
- Frontend only displays results.

## Requests

```text
PENDING → ACCEPTED
PENDING → REJECTED
PENDING → CANCELLED
```

Invalid transitions must return an appropriate error.

## Chat

Chat becomes available only after request acceptance.

```text
REQUEST ACCEPTED
       ↓
JOURNEY CREATED
       ↓
CONVERSATION CREATED
       ↓
CHAT AVAILABLE
```

## Reports

Only appropriate authenticated users should be able to report another user.

## Admin

Admin authorization must be enforced by the backend, not merely hidden in the frontend.

---

# 25. Frontend Integration Rules

Frontend developers should build API service functions around this contract.

Example conceptual structure:

```text
frontend/
  src/
    api/
      auth.js
      users.js
      travelPlans.js
      documents.js
      matches.js
      requests.js
      conversations.js
      journeys.js
      reports.js
      notifications.js
      admin.js
```

The frontend should not scatter raw API URLs throughout UI components.

Instead:

```text
React Component
      ↓
API Service
      ↓
HTTP Request
      ↓
Backend
```

---

# 26. Backend Implementation Order

Backend should be implemented in this order:

### Phase 1 — Foundation

1. Express server
2. Environment configuration
3. PostgreSQL connection
4. Error handling
5. Request validation
6. Logging

### Phase 2 — Database

Design:

```text
User
TravelPlan
TravelDocument
Request
Journey
Conversation
Message
Report
Block
Notification
```

Define:

- primary keys
- foreign keys
- unique constraints
- indexes
- enums/statuses
- timestamps
- relationships

### Phase 3 — Authentication

Implement:

```text
Register
Login
JWT middleware
Role middleware
Current user
```

### Phase 4 — Core Travel Flow

Implement:

```text
Travel Plan
    ↓
Matching
    ↓
Request
    ↓
Accept/Reject
    ↓
Journey
```

### Phase 5 — Communication/Safety

Implement:

```text
Conversation
    ↓
Socket.IO
    ↓
Messages
    ↓
Report
    ↓
Block
```

### Phase 6 — OCR/AI

Implement:

```text
Upload
   ↓
S3
   ↓
Textract
   ↓
Extracted data
   ↓
User confirmation
   ↓
Travel Plan
```

and:

```text
User message
   ↓
LLM
   ↓
Structured intent
   ↓
Validation
   ↓
User confirmation
   ↓
Travel Plan
```

### Phase 7 — Admin

Implement moderation APIs after the core student flow works.

---

# 27. Definition of Done for an API

An endpoint is not considered complete merely because it returns a response.

For each endpoint, backend should have:

- route
- controller
- validation
- authorization where required
- service/business logic
- database interaction
- consistent success response
- consistent error response
- appropriate HTTP status
- unit/API tests
- documented request/response examples

---

# 28. Integration Checklist

Before frontend and backend integration:

- [ ] Base URL agreed
- [ ] Authentication method agreed
- [ ] JWT flow agreed
- [ ] Request body fields agreed
- [ ] Path parameters agreed
- [ ] Query parameters agreed
- [ ] Success response shape agreed
- [ ] Error response shape agreed
- [ ] Status values agreed
- [ ] Enum values agreed
- [ ] Date/time format agreed
- [ ] File upload format agreed
- [ ] Socket.IO event names agreed
- [ ] Database-generated fields identified
- [ ] Frontend-only fields identified
- [ ] Backend-derived fields identified

---

# 29. Contract Change Policy

This document is **v1.0**, not a promise that the API can never change.

If either developer needs a new field:

```text
Do not silently change the contract.
        ↓
Discuss the requirement.
        ↓
Update API Contract.
        ↓
Agree on request/response shape.
        ↓
Implement backend + frontend.
        ↓
Test integration.
```

Example:

Bad:

```text
Frontend suddenly sends:
"arrivalBuffer": 45
```

while backend expects:

```text
"bufferMinutes": 45
```

Good:

```text
Both developers agree to rename the field.
Contract is updated.
Both implementations are changed.
```

---

# 30. Final Engineering Principle

The API contract is the agreement between the two halves of Travener.

```text
                 API CONTRACT
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
      FRONTEND                 BACKEND
       React                  Node/Express
          │                       │
          │   HTTP / WebSocket    │
          └───────────┬───────────┘
                      ↓
                 PostgreSQL
```

Frontend asks:

> “What data does the user need to provide?”

Backend asks:

> “What data can I trust, what must I calculate, and what rules must I enforce?”

The frontend should never be responsible for enforcing security or business integrity. The backend is the final authority.
