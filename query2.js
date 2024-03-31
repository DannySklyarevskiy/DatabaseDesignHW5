
//Query 2: Return the top 10 screen_names by their number of followers.
//Result (query itself is under al the comments): 
// _id
// "ieeevis"
// followersCount
// 822288

// _id
// "MSFTResearch"
// followersCount
// 513811

// _id
// "tamaramunzner"
// followersCount
// 470506

// _id
// "AlbertoCairo"
// followersCount
// 401598

// _id
// "eagereyes"
// followersCount
// 233219

// _id
// "jschwabish"
// followersCount
// 171385

// _id
// "duto_guerra"
// followersCount
// 148570

// _id
// "maartenzam"
// followersCount
// 121369

// _id
// "FILWD"
// followersCount
// 107638

// _id
// "jeffrey_heer"
// followersCount
// 104735

[
    {
      '$group': {
        '_id': '$user.screen_name', 
        'followersCount': {
          '$sum': '$user.followers_count'
        }
      }
    }, {
      '$sort': {
        'followersCount': -1
      }
    }, {
      '$limit': 10
    }
  ]