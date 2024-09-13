import { currentUser } from "@clerk/nextjs/server"
import prisma from "./db"

export const checkUser = async () => {
  const user = await currentUser()
  if (!user) {
    return null
  }
  const loggedInUser = await prisma.user.findUnique({
    where: {
      clerkId: user.id
    }
  })
  if (loggedInUser) {
    return loggedInUser
  }

  const newUser = await prisma.user.create({
    data: {
      clerkId: user.id,
      username: `${user.username}`,
    }
  })
  return newUser
}