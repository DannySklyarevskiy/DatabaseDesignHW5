
//Query 5: Write the instructions that will separate the Users information into a different collection
//1. Create a user collection that contains all the unique users.
//2. Create a new Tweets_Only collection, that doesn't embed the user information, but instead references it using the user id
//Result (run both steps below in MongoShell and not the aggregation pipeline): 

//Before this, create a new collection called Uinque_Users
db.Tweets.aggregate([
    { $group: { _id: "$user.id", userDoc: { $first: "$user" } } },
    { $replaceRoot: { newRoot: "$userDoc" } }
]).forEach(doc => db.Unique_Users.insertOne(doc));

//Before this, create a new collection called Tweets_Only
db.Tweets.find().forEach(tweet => {
    tweet.userId = tweet.user.id; 
    delete tweet.user; 
    db.Tweets_Only.insertOne(tweet);
});
