![GitHub](https://img.shields.io/github/license/aubreyhewes/simple-shortcode-parser?style=flat-square)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/aubreyhewes/simple-shortcode-parser?style=flat-square)
![npm (scoped)](https://img.shields.io/npm/v/@hewes/shortcode?style=flat-square)
![node-current (scoped)](https://img.shields.io/node/v/@hewes/shortcode?style=flat-square)

# Simple ShortCode Parser

> Tokenize a string to an AST (sic) of shortcode/text nodes

When rendering an AST of "content" you end up with text nodes, that may contain so called "shortcodes".
You would like to handle these shortcodes differently than text nodes.
You can use this to parse the text node into text and shortcode nodes to continue the rendering.

## Features

  * Customizable start/end tags
  * Attribute support
    * String attribute values (i.e. quoted string value)
    * Number attribute values (i.e. unquoted number value)
    * Boolean attribute values (i.e. unquoted boolean value)
      * Default Boolean value (i.e. without a value is `true`)

## Usage

Install

    npm install @hewes/shortcode

Use

````typescript
import { parse } from "@hewes/shortcode"

const nodes = parse("[shortcode]");
````

Produces

````json
[
  {
    "type": "shortcode",
    "token": "[shortcode]",
    "name": "shortcode"
  }
]
````

## Examples

See [Examples](./docs/examples/simple.md)
