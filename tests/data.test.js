import { describe, expect, it, vi, beforeAll } from "vitest";
import { get_fact } from "../src/js/data.js";

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

    const wrongApiResponse = () => {
        return {
            ok: false,   
            json: () => vi.fn()
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

    it("should fails when API response is not ok", async () => {
        fetch.mockResolvedValue(wrongApiResponse());

        try {
            await get_fact()
        } catch(error) {
            expect(error.message).toBe('Error when get facts. Trace: Response was not ok.');
        }
    });
});