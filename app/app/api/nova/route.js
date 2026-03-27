export async function POST(req) {
  const { message } = await req.json();

  let reply = "";

  if (!message) {
    reply = "Start anywhere.";
  } else {
    reply = `I'm not here to give you surface answers.

You're testing whether this is real.

So skip the meta question.

What are you actually trying to build or figure out right now?`;
  }

  return Response.json({ reply });
}
