const uqas = [{
    "_id" : "621d7b8b84e66e8d623cf7ed",
    "qType" : "multipleChoice",
    "score" : 0,
    "userResponse" : [ 
        "bf84edb3-3ec0-4994-bf37-a138c754a26f", 
        "16d54d8c-d3a6-41a8-abe3-e14c53026419"
    ]
},
{
    "_id" : "621d7b8b84e66e8d623cf7ef",
    "qType" : "multipleChoice",
    "score" : 0,
    "userResponse" : [ 
        "9638a71c-b2e1-4825-aa7d-60fe046476e0", 
        "89a7d2a0-c74d-4dd4-af59-58f8faf17236"
    ]
},
{
    "_id" : "6222c52d84e66e8d625f8cde",
    "qType" : "multipleChoice",
    "score" : 0,
    "userResponse" : [ 
        "b8c3f682-501c-4950-9ae9-59c55700e3b8", 
        "3913db7c-797b-48ff-a11b-bf0c28dcfa59"
    ]
},
{
    "_id" : "62241d5f84e66e8d62ba9993",
    "qType" : "multipleChoice",
    "score" : 0,
    "userResponse" : [ 
        "e70344a4-b9d8-4fc7-a90e-61c36f13351a", 
        "37ae6aa0-fdf3-4cc3-aa62-fc228fd6a145"
    ]
},
{
    "_id" : "62241d6084e66e8d62ba9a73",
    "qType" : "multipleChoice",
    "score" : 0,
    "userResponse" : [ 
        "6ed98031-1676-4231-9919-33703e7594fa", 
        "ba35f3ad-e3d9-485f-bc24-20ddda593ddf"
    ]
},
{
    "_id" : "62241d6184e66e8d62ba9c3e",
    "qType" : "multipleChoice",
    "score" : 0,
    "userResponse" : [ 
        "688e4fda-c33f-45fa-a24d-15f8445267cd", 
        "ba35f3ad-e3d9-485f-bc24-20ddda593ddf"
    ]
},
{
    "_id" : "622656d384e66e8d62508df2",
    "qType" : "multipleChoice",
    "score" : 0,
    "userResponse" : [ 
        "a15779bf-5301-46df-b5df-b5e8c93749ad", 
        "a3caff84-bc31-40fb-b860-9d0b62fb0477"
    ]
}]

const generateHash = (s) => {
    // http://mediocredeveloper.com/wp/?p=55
    const strlen = s.length
    let hash = 0
    let i = 0
    let c
    if (strlen === 0) {
      return hash
    }
    for (; i < strlen; i++) {
      c = s.charCodeAt(i)
      // eslint-disable-next-line no-bitwise
      hash = (hash << 5) - hash + c
      // eslint-disable-next-line no-bitwise
      hash &= hash // Convert to 32bit integer
    }
    return hash
  }
  
  const getMetricHash = (type, userResponses, score) => {
    if (userResponses) {
      let mHash = ''
      if (type === 'multipleChoice') {
        mHash += userResponses.join()
      }
      mHash += !!score ? `${score}` : ``
      return generateHash(mHash)
    }
    return 0
  }
  
//   console.log(getMetricHash('multipleChoice',['b8f2bfa0-8fa6-4cf6-90ff-2e8a63f9b829'], 0))

// db.UserQuestionActivities.update({"_id":ObjectId("62241d6184e66e8d62ba9c3e")},{$set:{"evaluation":{"0" : false,"1" : true},"userResponse" : [ "688e4fda-c33f-45fa-a24d-15f8445267cd" , "ba35f3ad-e3d9-485f-bc24-20ddda593ddf"]}});
for (const uqa of uqas) {
    console.log(`
    db.UserQuestionActivities.update({ _id: ObjectId('${uqa._id}')}, {
        $set: {
            "mHash": ${getMetricHash(uqa.qType, uqa.userResponse, uqa.score)}
        }
    } )
    `)
}