/**
 * https://gist.github.com/borgar/451393/7698c95178898c9466214867b46acb2ab2f56d68
 *
 * Tiny tokenizer
 *
 * - Accepts a subject string and an object of regular expressions for parsing
 * - Returns an array of token objects
 *
 * tokenize('this is text.', { word:/\w+/, whitespace:/\s+/, punctuation:/[^\w\s]/ }, 'invalid');
 * result => [{ token="this", type="word" },{ token=" ", type="whitespace" }, Object { token="is", type="word" }, ... ]
 */
export function tokenize(s: string, parsers: any, deftok: string) {
  let m;
  let r;
  let t;
  const tokens = [];
  while (s) {
    t = null;
    m = s.length;
    for (const key in parsers) {
      r = parsers[key].exec(s);
      // try to choose the best match if there are several
      // where "best" is the closest to the current starting point
      if (r && r.index < m) {
        t = {
          token: r[0],
          type: key,
          matches: r.slice(1),
        };
        m = r.index;
      }
    }
    if (m) {
      // there is text between last token and currently
      // matched token - push that out as default or "unknown"
      tokens.push({
        token: s.substr(0, m),
        type: deftok || "unknown",
      });
    }
    if (t) {
      // push current token onto sequence
      tokens.push(t);
    }
    s = s.substr(m + (t ? t.token.length : 0));
  }
  return tokens;
}
