
import { PrismaClient } from '../generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("✅ PostgreSQL connected");
    } catch (error) {
        console.error("❌ PostgreSQL connection error", error);
        process.exit(1);
    }
};

export { prisma };
export default connectDB;