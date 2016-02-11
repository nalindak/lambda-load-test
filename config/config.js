{
    "dbConfig": {
        "AttributeDefinitions": [
            {
                "AttributeName": "test_id",
                "AttributeType": "S"
            }
        ],
        "KeySchema": [
            {
                "AttributeName": "test_id",
                "KeyType": "HASH"
            }
        ],
        "ProvisionedThroughput": {
            "ReadCapacityUnits": 100,
            "WriteCapacityUnits": 100
        },
        "TableName": "table-name"
    }
}
