import test from "ava";

import { introspectValue } from "../src/util";

test("empty string is a an empty string", (t) => {
  t.deepEqual(introspectValue(""), "");
});

test('unquoted "false" is a boolean false', (t) => {
  t.deepEqual(introspectValue("false"), false);
});

test('quoted "false" is a string', (t) => {
  t.deepEqual(introspectValue('"false"'), "false");
});

test('unquoted "true" is a boolean true', (t) => {
  t.deepEqual(introspectValue("true"), true);
});

test('quoted "true" is a string', (t) => {
  t.deepEqual(introspectValue('"true"'), "true");
});

test("undefined is a boolean true", (t) => {
  t.deepEqual(introspectValue(undefined), true);
});

test("quoted number is a string", (t) => {
  t.deepEqual(introspectValue('"42"'), "42");
});
test("unquoted number is a number", (t) => {
  t.deepEqual(introspectValue("42"), 42);
});
