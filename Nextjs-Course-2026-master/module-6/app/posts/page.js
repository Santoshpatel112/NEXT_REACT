import React from "react";
import Todo from "./components/Todo";
import Users from "./components/Users";
import { revalidatePath } from "next/cache";

const PostPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 container px-4 py-4">
      <h1 className="text-4xl text-zinc-800">NextJs Caching</h1>
      <p className="italic text-base">RevalidatePath vs RevalidaterTag</p>

      <button  className="px-4 py-3 bg-black rounded-md text-white font-bold text-center">
        RevalidatePath
      </button>

       <main className="min-h-screen bg-gray-50">
      <div className="py-8">
        <Users />
      </div>
      <div className="py-8 border-t border-gray-200">

        <Todo />
      </div>
    </main>
    </div>
  );
};

export default PostPage;
