```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("65196a6565a565a565a565a")},{$inc:{incorrectField:1}});
```