import * as t from "https://deno.land/std/testing/asserts.ts";
import { parseSec } from "./parseSec.js";

Deno.test("simple", () => {
  t.assertEquals(parseSec("10"), 10);
  t.assertEquals(parseSec("1:01"), 61);
  t.assertEquals(parseSec("1:00:01"), 60 * 60 + 1);
  t.assertEquals(parseSec(""), null);
});
