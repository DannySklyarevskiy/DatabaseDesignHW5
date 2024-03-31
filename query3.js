
//Query 3: Who is the person that got the most tweets?
//Result: 
// _id
// "tmrhyne"
// tweetCount
// 156

[
    {
      '$group': {
        '_id': '$user.screen_name', 
        'tweetCount': {
          '$sum': 1
        }
      }
    }, {
      '$sort': {
        'tweetCount': -1
      }
    }, {
      '$limit': 1
    }
  ]