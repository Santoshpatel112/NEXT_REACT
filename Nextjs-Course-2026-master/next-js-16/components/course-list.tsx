import React from 'react';
import { getAllCourse, deleteCourse } from '@/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Trash2 } from 'lucide-react';

const CourseList = async () => {
  const courses = await getAllCourse();

  return (
    <div className="container mx-auto p-6">


      {courses.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">No courses found</p>
            <p className="text-sm text-muted-foreground">
              Create your first course to get started
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="line-clamp-2 mb-2">
                      {course.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {course.slug}
                    </Badge>
                  </div>
                  <BookOpen className="h-5 w-5 text-muted-foreground ml-2" />
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="line-clamp-3 mb-4 flex-1">
                  {course.description}
                </CardDescription>

                <form action={async () => {
                  'use server';
                  await deleteCourse(course.id);
                }}>
                  <Button
                    type="submit"
                    variant="destructive"
                    size="sm"
                    className="w-full"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Course
                  </Button>
                </form>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;