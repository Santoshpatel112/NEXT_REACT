import Image from "next/image";
import { Button } from "@/components/ui/button";
import connectDB from "@/lib/db";
import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";
import TodoFilter from "@/components/todo-filter";
export default async function Home() {
  await connectDB();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
         <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Todo App</h1>
          <p className="text-muted-foreground">Built with Next.js, Zustand, TanStack Query, Zod & Mongoose</p>
        </header>
        <main>
          <TodoForm/>
          <TodoFilter/>
          <TodoList/>
        </main>
      </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>This app demonstrates CRUD operations with modern React patterns</p>
        </footer>
    </div>
  );
}
