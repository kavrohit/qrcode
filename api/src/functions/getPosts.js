import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const handler = async () => {
  const posts = await prisma.post.findMany()
  console.log({ posts })
  return {
    statusCode: 200,
    body: JSON.stringify({ posts }),
  }
}
