const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.getUsers = async (req, res, next) => {

  const users = await prisma.users.findMany({
    select: {
      first_name: true,
      active: true,
      created_at: true,
      updated_at: true
    }
  })

  res.status(200).json({
    data: users
  })
}

exports.createUser = async (req, res, next) => {
  const user = await prisma.users.create({
    data: {
      first_name: 'Alice',
      active: true
    }
  })
  res.status(201).json({
    data: user
  })
}
