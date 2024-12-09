# MongoDB $inc Operator Error: Incrementing Non-Existent or Non-Numerical Field

This example demonstrates an error that occurs when using the MongoDB `$inc` operator to increment a field that either does not exist or is not of a numerical type.  The `$inc` operator is designed to increment numerical fields.  Attempting to increment a field that doesn't exist or is not a number will result in an error.

## Bug

The `bug.js` file shows the incorrect usage of the `$inc` operator, attempting to increment a field that might not exist or is not a number.

## Solution

The `bugSolution.js` file shows the correct usage of the `$inc` operator: ensuring the field exists and is of the correct type before performing the increment operation.  It provides a mechanism for handling the case where the field doesn't exist, either by creating it or skipping the increment operation.