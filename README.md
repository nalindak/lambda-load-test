# lambda-load-test
Lambda based load testing utility

- How to

1. create dynamodb table
2. get api endpoint and loadtest details
```sh
load-test --endpoint [ENDPOINT] --concurrency [NUMBER] --hits [NUMBER] --expeced-result [body.json] --output [OUTPUT.csv]
```
3. run test
4. download results
5. clean up tasks
