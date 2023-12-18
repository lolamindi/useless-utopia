import { describe, expect, it, vi, beforeAll } from "vitest";
import { get_fact } from "../js/data";

describe("data.js test", () => {
    let apiResponse = Response;
    
    const factMock = {
        "id": "1a2b3c",
        "text": "this is an useless fact"
    };

    beforeAll(async () => {
        apiResponse = await fetch ('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
    });

    it("should exist the function get_fact", async () => {
        expect(get_fact).toBeDefined();
        expect(typeof get_fact).toBe("function");
    });

    it("should have response status 200", async () => {
        expect(apiResponse.status).toBe(200);
    });

    it("should receive a 'text' inside the API", async () => {
        vi.fn().mockImplementation(() => {
            return Promise.resolve({
              json: () => Promise.resolve(factMock.text),
            });
          });
    });

});