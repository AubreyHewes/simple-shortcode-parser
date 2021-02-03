export const matchAll = (haystack: string, regexp: RegExp): IterableIterator<RegExpMatchArray> => {
  if (!String.prototype.matchAll) {
    // simple polyfill.. could possibly use core-js but this works for now and is less code
    // @ts-ignore
    return Array.from(haystack.match(regexp) ?? []).map((item) => item.match(new RegExp(regexp.source))) ?? [];
  }
  return haystack.matchAll(regexp);
};

export default matchAll;
