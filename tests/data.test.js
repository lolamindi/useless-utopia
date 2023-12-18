import { describe, expect, it, vi, beforeAll } from "vitest";
import { get_fact } from "../js/data";

global.fetch = vi.fn();

describe("data.js test", () => {    
    const apiResponse = {
        "id": "1a2b3c",
        "text": "this is an useless fact"
    };

    const successfulApiResponse = () => {
        return {
            ok: true,   
            json: () => Promise.resolve(apiResponse)
        };
    }; 

    it("should receive a 'text' inside the API", async () => {
        fetch.mockResolvedValue(successfulApiResponse());

        const result = await get_fact();

        expect(fetch).toHaveBeenCalledWith(
            'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en',
            {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            },
        );

        expect(result).toBe(apiResponse.text);
    });
});