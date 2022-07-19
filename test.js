db.companines.find({
  $or: [{
    $and: [{
        first expression
      },
      $and: {
        second expression
      }
    ]
  }]
} {
  $or: [{
      $and: {
        first expression
      }
    },
    {
      $and: {
        second expression
      }
    }
  ]
})