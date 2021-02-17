[![Circle CI](https://img.shields.io/circleci/build/github/AubreyHewes/simple-shortcode-parser?style=flat-square&label=tests)](https://app.circleci.com/pipelines/github/AubreyHewes/simple-shortcode-parser?branch=canary)
[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/aubreyhewes/simple-shortcode-parser?style=flat-square)](https://github.com/AubreyHewes/simple-shortcode-parser/tags)
[![npm (scoped)](https://img.shields.io/npm/v/@hewes/shortcode?style=flat-square)](https://www.npmjs.com/package/@hewes/shortcode)
![node-current (scoped)](https://img.shields.io/node/v/@hewes/shortcode?style=flat-square)
[![License](https://img.shields.io/github/license/aubreyhewes/simple-shortcode-parser?style=flat-square)](https://github.com/AubreyHewes/simple-shortcode-parser/blob/canary/LICENSE)

# A Simple ShortCode Parser

> Tokenizes a string to an AST of shortcode/text nodes

When rendering a string of "content" that contains so-called "shortcodes", you may want to handle the shortcodes differently. i.e. render something else.
This tokenizes the given string to an AST of shortcode/text nodes allowing an intuitive structure for rendering the shortcodes.

## What is a shortcode?

A "shortcode" is a name used for embedding other/generated content in user supplied content.
Generally attributed to the [wordpress project](https://wordpress.com/support/shortcodes/) and look like `[shortcode]`.

## Features

  * Attribute support
    * String attribute values (i.e. quoted string value)
    * Number attribute values (i.e. unquoted number value)
    * Boolean attribute values (i.e. unquoted boolean value)
      * Default Boolean value (i.e. without a value is `true`)
  * Customizable start/end tags

## Usage

### Node
Install

````shell
npm install @hewes/shortcode
# or yarn
````

Use

````typescript
import { parse } from "@hewes/shortcode"

parse("[shortcode]");
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

### Browser
Install

````html
<script src="https://unpkg.com/@hewes/shortcode"></script>
<!-- note: specify version to ensure your code expectancies -->
````

Use

````html
<script>
  SimpleShortCodeParser.parse("[shortcode]");
</script>
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

## Credits

 * @borgar for https://gist.github.com/borgar/451393/7698c95178898c9466214867b46acb2ab2f56d68 (currently used to get it going)
