'use strict';

var Promise = require('bluebird');
var log = require('winston');

function createTable(params) {
    var db = params.db;
    var dbParams = params.dbParams;

    return new Promise(function (resolve, reject) {
        db.createTable(dbParams, function (err, data) {
            if (err) {
                reject(err.message);
            } else {
                resolve(data);
            }
        });
    });
}

function waitForTableCreate(params) {
    var db = params.db;
    var tableName = params.tableName;

    return new Promise(function (resolve, reject) {
        log.info('Waiting for table to be created');
        db.waitFor('tableExists', {TableName: tableName}, function (err, data) {
            if (err) {
                reject(err.message);
            } else {
                resolve(data);
            }
        });
    });
}

function removeTable(params) {
    var db = params.db;
    var tableName = params.tableName;

    return new Promise(function (resolve, reject) {
        db.deleteTable({TableName: tableName}, function(err, data) {
            if (err) {
                reject(err.message);
            } else {
                log.info('Successfully removed dynamodb table');
                resolve(data);
            }
        });
    });
}

module.exports = {
    createTable: createTable,
    waitForTableCreate: waitForTableCreate,
    removeTable: removeTable
};
