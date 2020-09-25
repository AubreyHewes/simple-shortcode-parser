import test from "ava";

import { parse } from "../src";

test("can parse a shortcode", (t) => {
  t.deepEqual(parse("[test]"), [{ type: "shortcode", token: "[test]", name: "test" }]);
});

test("can parse a shortcode with one boolean implicit true parameter", (t) => {
  t.deepEqual(parse("[test id]"), [{ type: "shortcode", token: "[test id]", name: "test", attributes: { id: true } }]);
});

test("can parse a shortcode with one boolean explicit true parameter", (t) => {
  t.deepEqual(parse("[test id=true]"), [
    { type: "shortcode", token: "[test id=true]", name: "test", attributes: { id: true } },
  ]);
});

test("can parse a shortcode with one boolean explicit false parameter", (t) => {
  t.deepEqual(parse("[test id=false]"), [
    { type: "shortcode", token: "[test id=false]", name: "test", attributes: { id: false } },
  ]);
});

test("can parse a shortcode with one string parameterin double quotes", (t) => {
  t.deepEqual(parse('[test id="1"]'), [
    { type: "shortcode", token: '[test id="1"]', name: "test", attributes: { id: "1" } },
  ]);
});

test("can parse a shortcode with one string parameter in single quotes", (t) => {
  t.deepEqual(parse("[test id='1']"), [
    { type: "shortcode", token: "[test id='1']", name: "test", attributes: { id: "1" } },
  ]);
});

test("can parse a shortcode with multiple parameter types in mixed quotes", (t) => {
  t.deepEqual(parse("[test one='1' two=\"2\" three=3]"), [
    {
      type: "shortcode",
      token: "[test one='1' two=\"2\" three=3]",
      name: "test",
      attributes: { one: "1", two: "2", three: 3 },
    },
  ]);
});

test("can parse multiple shortcodes", (t) => {
  t.deepEqual(parse("[test][test]"), [
    { type: "shortcode", token: "[test]", name: "test" },
    { type: "shortcode", token: "[test]", name: "test" },
  ]);
});

test("can parse multiple shortcodes with whitespace between", (t) => {
  t.deepEqual(parse("[test a=1 b=2] test [test]"), [
    { type: "shortcode", token: "[test a=1 b=2]", name: "test", attributes: { a: 1, b: 2 } },
    { type: "text", token: " test " },
    { type: "shortcode", token: "[test]", name: "test" },
  ]);
});
