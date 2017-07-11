# g.js

> Yet another code-golfing library for JavaScript

## Install

```sh
$ npm install schas002/g.js
```

## Usage

```javascript
// 22 bytes
let g=require('g.lib')
// TODO 'Hello, World!' example
```

## Notes

- The 22 bytes needed for the `require`ment *do* count for code-golfing purposes.

## API

The below tree lists the relation of function conversions. Leaves in the tree represent those that convert to clear JavaScript, while branches represent those that convert into other functions in g.js.

* * *

- `VERSION`, `VER`, `_V`: returns the g.js version
- `c(x)`: `cl(x)`
	- `cl(x)`: `console.log(x)`
- `o(x)`, `p(x)`: `cl(x)`

* * *

## Maintainer

- Andrew Zyabin - @schas002 - [@zyabin101@botsin.space](https://botsin.space/@zyabin101)

## Contribute

A huge aye on that! Every issue and PR is welcome.

Every contributor to this repository must follow the code of conduct, which is: don't be rude.

## License

[MIT](LICENSE) © Andrew Zyabin
