import { PrismaClient } from ".prisma/client";
import { isInProduction } from "../helpers";

let prisma: PrismaClient;

if (isInProduction()) {
  prisma = new PrismaClient();
} else {
  // @ts-expect-error
  if (!global.prisma) {
    // @ts-expect-error
    global.prisma = new PrismaClient();
  }
  // @ts-expect-error
  prisma = global.prisma;
}
export default prisma;
