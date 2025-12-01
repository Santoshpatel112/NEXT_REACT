let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();
  const newUser = {
    id: Date.now(),
    name: body.name,
    email: body.email,
  };
  users.push(newUser);
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Response.json(newUser);
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = Number.parseInt(searchParams.get("id"));
  users = users.filter((user) => user.id !== id);
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Response.json({ success: true });
}
