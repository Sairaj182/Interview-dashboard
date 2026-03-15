import Candidate from "@/models/candidate";
import sequelize from "@/lib/db";

export async function POST(req) {

  await sequelize.sync();

  const data = await req.json();
  if (!data.name) {
    return Response.json(
      { error: "Candidate name missing" },
      { status: 400 }
    );
  }
  await Candidate.update(
    {
      commScore: data.commScore,
      reactScore: data.reactScore,
      expressScore: data.expressScore,
      dsaScore: data.dsaScore,
      notes: data.notes
    },
    {
      where: { name: data.name }
    }
  );

  const updated = await Candidate.findOne({
    where: { name: data.name }
  });

  return Response.json(updated);
}
