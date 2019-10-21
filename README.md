# String to OID

> Pretty self-explanatory

## Install

`npm i string-to-objectid`

## Usage

**JavaScript**

```js
const stringToOID = require('string-to-objectid')

const s = 'not a valid OID'
stringToOID(s) // Will throw a TypeError
```

```js
const stringToOID = require('string-to-objectid')

const s = '5dad562161791408b2b0e639'
stringToOID(s) // ObjectId('5dad562161791408b2b0e639')
```

**TypeScript**

```js
import stringToOID from 'string-to-objectid'

const s = 'not a valid OID'
stringToOID(s) // Will throw a TypeError
```

```js
const stringToOID = require('string-to-objectid')

const s = '5dad562161791408b2b0e639'
stringToOID(s) // ObjectId('5dad562161791408b2b0e639')
```
