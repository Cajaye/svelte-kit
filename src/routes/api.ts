import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const get = async () => {
	try {
		await prisma.$connect();
		const users = await prisma.user.findMany();

		return {
			status: 200,
			body: { users }
		};
	} catch (error) {
		console.error(error);
		await prisma.$disconnect();
	}
};
