# esm-compat

Check the ES module compatibility of a browser.

## Installation

```
npm i esm-compat
```

## Usage

```js
import { getEsmaVersionFromUA } from "esm-compat"

const ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
const version = getEsmaVersionFromUA(ua)
console.log(version) // => es2022
```

## License

MIT
