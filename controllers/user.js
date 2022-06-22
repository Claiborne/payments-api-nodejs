// TODO const User = require('./../models/user')

exports.getUsers = async (req, res, next) => {

  res.status(200).json({
    count: 1,
    start: 0,
    end: 1,
    data: [
      {
        token: "$2423kd2d",
        name: "Will"
      }
    ]
  })
}

/*
exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id)

  if (!tour) {
    return next(new AppError('No tour found with that ID', 404))
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: tour
    }
  })
})
*/
