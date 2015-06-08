#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Get some metadata from otbm file


## Install

```sh
$ npm install --save otbm-metadata
```


## Usage

```js
var OTBM = require('otbm-metadata');

new OTBM('forgotten.otbm', function (data) {
  // console.log(data);
});
```


## License

MIT © [Gabriel Pedro](https://gpedro.net)


[npm-image]: https://badge.fury.io/js/otbm-metadata.svg
[npm-url]: https://npmjs.org/package/otbm-metadata
[travis-image]: https://travis-ci.org/gpedro/otbm-metadata.svg?branch=master
[travis-url]: https://travis-ci.org/gpedro/otbm-metadata
[daviddm-image]: https://david-dm.org/gpedro/otbm-metadata.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/gpedro/otbm-metadata
