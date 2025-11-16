export const GET = async (request: Request) => {
  return new Response("Hello, this is the photo API route!");
};

export const POST = async (request: Request) => {
  const data = await request.json();
  return new Response(`Received photo data: ${JSON.stringify(data)}`);
};
