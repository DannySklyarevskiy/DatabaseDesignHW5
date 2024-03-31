
//Query 4:  Who are the top 10 people that got more retweets in average, after tweeting more than 3 times
//Result: 
// {
//     "tweetCount": 5,
//     "screen_name": "DamonCrockett",
//     "avgRetweets": 16.8
//   }

// {
//     "tweetCount": 4,
//     "screen_name": "antarcticdesign",
//     "avgRetweets": 14
// }

//   {
//     "tweetCount": 6,
//     "screen_name": "mjskay",
//     "avgRetweets": 13.833333333333334
//   }

// {
//     "tweetCount": 7,
//     "screen_name": "AlbertoCairo",
//     "avgRetweets": 13.714285714285714
//   }

// {
//     "tweetCount": 4,
//     "screen_name": "chadstolper",
//     "avgRetweets": 13.5
//   }

// {
//     "tweetCount": 7,
//     "screen_name": "miskaknapek",
//     "avgRetweets": 12.857142857142858
//   }

//   {
//     "tweetCount": 7,
//     "screen_name": "SlaveSocieties",
//     "avgRetweets": 12.571428571428571
//   }

// {
//     "tweetCount": 4,
//     "screen_name": "domoritz",
//     "avgRetweets": 12.5
//   }

//   {
//     "tweetCount": 7,
//     "screen_name": "flekschas",
//     "avgRetweets": 12.285714285714286
//   }

//   {
//     "tweetCount": 4,
//     "screen_name": "KadekASatriadi",
//     "avgRetweets": 12
//   }

[
    {
      '$group': {
        '_id': '$user.screen_name', 
        'totalRetweets': {
          '$sum': '$retweet_count'
        }, 
        'tweetCount': {
          '$sum': 1
        }
      }
    }, {
      '$match': {
        'tweetCount': {
          '$gt': 3
        }
      }
    }, {
      '$project': {
        '_id': 0, 
        'screen_name': '$_id', 
        'avgRetweets': {
          '$divide': [
            '$totalRetweets', '$tweetCount'
          ]
        }, 
        'tweetCount': 1
      }
    }, {
      '$sort': {
        'avgRetweets': -1
      }
    }, {
      '$limit': 10
    }
  ]