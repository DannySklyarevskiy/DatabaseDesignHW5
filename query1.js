
//Query 1:  How many tweets are not retweets or replies? (hint the field retweeted_status contains an object when the tweet is a retweeet)
//Result: 1117 tweets

[
    {
      '$match': {
        '$and': [
          {
            'retweeted_status': {
              '$exists': false
            }
          }, {
            'in_reply_to_status_id': null
          }
        ]
      }
    }, {
      '$count': 'FinalResult'
    }
  ]