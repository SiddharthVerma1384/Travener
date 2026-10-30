import test from "node:test";
import assert from "node:assert/strict";
import { validationResult } from "express-validator";
import {
    createTravelOfferValidator,
    createTravelRequestValidator
} from "../src/validators/index.js";

const validate = async (validator, body) => {
    const request = { body };
    await Promise.all(validator().map((chain) => chain.run(request)));
    return validationResult(request).array();
};

const futureDeparture = () => new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString();
const requestBody = (overrides = {}) => ({
    source: "Chennai",
    destination: "Bengaluru",
    departureAt: futureDeparture(),
    ...overrides
});

test("travel requests accept only cab and auto as ride preferences", async () => {
    for (const transportMode of ["CAB", "AUTO"]) {
        assert.deepEqual(await validate(createTravelRequestValidator, requestBody({ transportMode })), []);
    }

    for (const transportMode of ["CAR", "BUS", "TRAIN", "FLIGHT", "OTHER"]) {
        const errors = await validate(createTravelRequestValidator, requestBody({ transportMode }));
        assert.ok(errors.some((error) => error.path === "transportMode"));
    }
});

test("travel offers accept only cab and auto", async () => {
    const offer = (overrides = {}) => ({
        ...requestBody(),
        transportMode: "CAB",
        availableSeats: 2,
        ...overrides
    });

    for (const transportMode of ["CAB", "AUTO"]) {
        assert.deepEqual(await validate(createTravelOfferValidator, offer({ transportMode })), []);
    }

    assert.ok((await validate(createTravelOfferValidator, offer({ transportMode: "TRAIN" })))
        .some((error) => error.path === "transportMode"));
});

test("legacy terminal and flexibility fields are ignored by current validators", async () => {
    const legacyFields = {
        terminalType: "NOT_A_TERMINAL",
        terminalName: null,
        timeFlexibilityMinutes: "not-a-window"
    };
    assert.deepEqual(
        await validate(createTravelRequestValidator, requestBody(legacyFields)),
        []
    );
    assert.deepEqual(
        await validate(createTravelOfferValidator, requestBody({
            transportMode: "CAB",
            availableSeats: 2,
            ...legacyFields
        })),
        []
    );
});
