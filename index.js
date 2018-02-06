'use strict';

const mean = require('stats-mean');
const variance = require('stats-variance');
const covariance = require('@elstats/covariance');

function linearRegression(data) {
    var X = data.map(x => x[0]);
    var Y = data.map(y => y[1]);

    const b = covariance(X, Y) / variance.calc(X);
    const a = mean.calc(Y) - b * mean.calc(X);

    return {
        a,
        b
    };
}

module.exports = linearRegression;