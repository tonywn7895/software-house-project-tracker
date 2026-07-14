import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log("Users:", users);

  const projects = await prisma.project.findMany();
  console.log("Projects:", projects);

  const tasks = await prisma.task.findMany();
  console.log("Tasks:", tasks);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
