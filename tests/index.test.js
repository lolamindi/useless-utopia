import { describe, expect, it, vi, beforeAll } from "vitest";
import { get_fact } from "../js/data";
import { JSDOM } from "jsdom";
import test from "node:test";
import exp from "constants";

describe("index.js test", () => {
  let dom;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });
    global.document = dom.window.document;
  });

  it("should render css", async () => {
    let link = document.querySelector("link");
    expect(link.href).toMatch(/styles.css$/);
  });
});

describe("data.js test", () => {
    let apiResponse = Response;

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


});
