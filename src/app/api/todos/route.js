import { AiFillWeiboSquare } from "react-icons/ai";
import { prisma } from "../../../utils/prisma";

export const POST = async (req, res) => {
  // get payload
  // validate the payload
  // create/insert the data
  // return response

  const payload = await req.json();
  const { text } = payload;

  if (!text) {
    return new Response(JSON.stringify({ error: 'text is required' }), { status: 422 })
  }

  const todo = await prisma.todo.create({
    data: { ...payload, isDone: false }
  })
  return new Response(JSON.stringify(todo), { status: 201 })
}

export const GET = async (req, res) => {
  // fetch the data here ...
  const todos = await prisma.todo.findMany();
  return new Response(JSON.stringify(todos), { status: 200 })

}

export const PUT = async (req, res) => {
  // do something here ...
  const payload = await req.json();
  const { id, text } = payload;

  if (!id || !text) {
    return new Response(JSON.stringify({ error: 'id and text are required' }), { status: 422 });
  }

  const todo = await prisma.todo.update({
    where: { id },
    data: { text },
  });

  return new Response(JSON.stringify(todo), { status: 200 });

}

export const DELETE = async (req, res) => {
  // do something here ...
  const payload = await req.json();
  const { id } = payload;

  if (!id) {
    return new Response(JSON.stringify({ error: 'id is required' }), { status: 422 })
  }

  await prisma.todo.delete({
    where: { id }
  })
  return new Response(JSON.stringify({ message: 'deteled' }, { status: 200 }))

}