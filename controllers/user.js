exports.getUsers = async (req, res, next) => {
  res.status(200).json({
    data: [{
      name: "Will",
      balance: "$32.00"
    }]
  })
}

exports.createUser = async (req, res, next) => {

}
