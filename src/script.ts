import { PrismaClient } from '@prisma/client'
import UserService from './services/UserService'

const prisma = new PrismaClient()

async function main() {
    // console.log(await UserService.deleteUser('15aafa44-0ce8-413f-8b8e-7dee49849f59'))
    console.log(await UserService.listUsers())
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })