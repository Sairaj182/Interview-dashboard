import Candidate from "@/models/candidate";
import sequelize from "@/lib/db";

export async function POST(req) {

  await sequelize.sync();

  const data = await req.json();

  const candidate = await Candidate.create({
    name: data.name
  });

  return Response.json(candidate);
}
