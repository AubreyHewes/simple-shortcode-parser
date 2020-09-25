import { tokenize } from "./tokenizer";
import { parseAttributes } from "./util";

export namespace SimpleShortCodeParser {
  export interface ParserOptions {
    tagStart?: string;
    tagEnd?: string;
  }

  export interface TextToken {
    type: "text";
    token: string;
  }

  export interface ShortCodeToken {
    type: "shortcode";
    token: string;
    name: string;
    attributes?: {
      [key: string]: string | number | boolean;
    };
  }
}

const DEFAULT_PARSER_OPTIONS: SimpleShortCodeParser.ParserOptions = {
  tagStart: "[",
  tagEnd: "]",
};

export const parse = (
  string: string,
  options: SimpleShortCodeParser.ParserOptions = DEFAULT_PARSER_OPTIONS
): (SimpleShortCodeParser.ShortCodeToken | SimpleShortCodeParser.TextToken)[] => {
  options = {
    ...DEFAULT_PARSER_OPTIONS,
    ...options,
  };

  return tokenize(
    string,
    {
      shortcode: /\[(\w+)(\s+(.*?))?]/,
    },
    "text"
  ).map((token) => {
    if (token.type === "shortcode") {
      const node = {
        type: token.type,
        token: token.token,
        name: token.matches[0],
      } as SimpleShortCodeParser.ShortCodeToken;
      if (token.matches[2]) {
        node.attributes = parseAttributes(token.matches[2]);
      }
      return node;
    }
    return {
      type: token.type,
      token: token.token,
    } as SimpleShortCodeParser.TextToken;
  });
};
