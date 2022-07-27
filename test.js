db.routes.find({
    "$and": [{
      "$or": [{
        "dst_airport": "KZN"
      }, {
        "src_airport": "KZN"
      }]
    }, {
      "$or": [{
        "airplane": "CR2"
      }, {
        "airplane": "A81"
      }]
    }]
  }).pretty()

  .find({
      $or: [{
        $and: {
          first expression
        },
        {
          second expression
        }
      }]
    },

  )


db.companies.find({
  "$or": [{
    "$and": [{
      "founded_year": 2004
    }, {
      "$or": [{
        "category_code": "web"
      }, {
        "category_code": "social"
      }]
    }]
  }],
  [{
    "$and": [{
      "founded_month": 10
    }, {
      "$or": [{
        "category_code": "web"
      }, {
        "category_code": "social"
      }]
    }]
  }]
}).count()