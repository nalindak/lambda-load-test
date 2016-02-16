# lambda-load-test
Lambda based load testing utility

```sh
npm install lambda-load-test
touch test.js
```

add following content to test.js

```js
'use strict';

var LoadTest = require('lambda-load-test');

var loadTest = new LoadTest({
    method: 'POST',
    applicationType: 'application/json',
    header: {
        'x-api-key': 'xxxxxKeyxxxxx'
    },
    body: {
        "test": "this is a test"
    },
    endpoint: 'https://something.com/something',
    requests: 1000,
    concurrency: 10
});

loadTest();
```

Then run the test,

```sh
AWS_PROFILE={PROFILE} node test.js
```
