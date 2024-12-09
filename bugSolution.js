```javascript
db.collection('myCollection').updateOne( 
  { "_id": ObjectId("65196a6565a565a565a565a") },
  { $inc: { "correctField": 1 } },
  { upsert: true }
);
```