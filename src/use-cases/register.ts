import { prisma } from '@/lib/prisma'
import { PrismaUsersRepository } from '@/repositories/prisma-users-repository'
import { hash } from 'bcryptjs'

interface registerUseCaseRequest {
  name: string
  email: string
  password: string
}

export async function registerUseCase({
  name,
  email,
  password,
}: registerUseCaseRequest) {
  // ----------- email -----------
  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userWithSameEmail) {
    throw new Error('Email already exists.')
  }

  // ----------- password hash -----------
  const password_hash = await hash(password, 6)

  // ----------- insert -----------
  const prismaUsersRepository = new PrismaUsersRepository()
  await prismaUsersRepository.create({
    name,
    email,
    password_hash,
  })
}
