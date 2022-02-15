import { PrismaClient } from '@prisma/client';
import type { RequestEvent } from '@sveltejs/kit';

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

export const post = async ({ request }) => {
	try {
		const body = await request.json();
		await prisma.$connect();
		await prisma.user.create({
			data: { ...body }
		});

		return {
			status: 201,
			body: { message: 'You were just added to our database' }
		};
	} catch (error) {
		console.error(error);
		await prisma.$disconnect();
	}
};
