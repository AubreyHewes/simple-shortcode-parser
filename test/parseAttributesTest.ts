import test from "ava";

import { parseAttributes } from "../src/util";

test("empty string is undefined", (t) => {
  t.deepEqual(parseAttributes(""), undefined);
});

test("number as a string is a string ", (t) => {
  t.deepEqual(parseAttributes('one="1"'), { one: "1" });
});

test("number value is a number ", (t) => {
  t.deepEqual(parseAttributes("one=1"), { one: 1 });
});
