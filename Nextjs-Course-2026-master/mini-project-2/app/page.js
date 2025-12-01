import NotesClient from "@/components/NotesClient";
import dbConnect from "@/lib/db";
import Note from "@/models/Note";
import Image from "next/image";

async function getNotes() {
    await dbConnect();
  const notes = await Note.find({}).sort({createdAt:-1}).lean()

  return notes.map((note)=>({
    ...note,
    _id:note._id.toString()
  }))
}
export default async function Home() {

  const notes = await getNotes()

  console.log(notes)
  return (
   <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Notes App</h1>
      <NotesClient initialNotes={notes}/>
   </div>
  );
}
