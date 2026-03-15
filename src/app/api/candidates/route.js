import Candidate from "@/models/candidate";
import sequelize from "@/lib/db";

export async function GET() {

  await sequelize.sync();

  const candidates = await Candidate.findAll();

  return Response.json(candidates);
}
