
## Without attributes

    [shortcode]

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

## Boolean attributes

    [shortcode a1 a2=true a3="true"]

Produces

````json
[
  {
    "type": "shortcode",
    "token": "[shortcode a1 a2=true a3=\"true\"]",
    "name": "shortcode",
    "attributes": {
      "a1": true,
      "a2": true,
      "a3": "true"
    }
  }
]
````
