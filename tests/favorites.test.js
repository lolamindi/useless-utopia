import { describe, expect, it, vi, beforeAll } from "vitest";
import { load_favorites, save_favorites, add_favorite, list_favorites } from "../src/js/favorites.js";

import { JSDOM } from "jsdom";

describe("favorites.js test", () => {
  let dom;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });
    global.document = dom.window.document;
  });
  it("should exist the function add_favorite", async () => {
    expect(add_favorite).toBeDefined();
    expect(typeof add_favorite).toBe("function");
  });

  it("should exist the function list_favorites", async () => {
    expect(list_favorites).toBeDefined();
    expect(typeof list_favorites).toBe("function");
  });


})