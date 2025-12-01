import CourseAddForm from "@/components/course-add-form";
import CourseList from "@/components/course-list";
import { Suspense } from "react";


export default async function Home() {
  return (
  <main className="flex flex-col items-center justify-center space-y-4 h-full w-full py-8">
    <CourseAddForm/>

    <div className="flex flex-col items-center justify-center">
   	<div className="mb-8">
				<h1 className="text-3xl font-bold mb-2">All Courses</h1>
				<p className="text-muted-foreground">
					Manage and view all available courses
				</p>
			</div>
    
   <Suspense fallback={<div>Loading courses...</div>}>
      <CourseList />
  </Suspense>
    </div>
  </main>
  );
}
