"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';
import { createCourse } from '@/actions';

const CourseAddForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      title: '',
      description: ''
    }
  });

  const onSubmit = async (data: { title: string; description: string }) => {
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    try {
      await createCourse(data.title, data.description);
      
      setSubmitMessage({
        type: 'success',
        text: 'Course created successfully!'
      });
      
      reset();
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to create course. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl w-full mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Course</CardTitle>
          <CardDescription>Add a new course to your platform</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Course Title</Label>
              <Input
                id="title"
                placeholder="Enter course title"
                {...register('title', {
                  required: 'Title is required',
                  minLength: {
                    value: 3,
                    message: 'Title must be at least 3 characters'
                  },
                  maxLength: {
                    value: 100,
                    message: 'Title must not exceed 100 characters'
                  }
                })}
                className={errors.title ? 'border-red-500' : ''}
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter course description"
                rows={5}
                {...register('description', {
                  required: 'Description is required',
                  minLength: {
                    value: 10,
                    message: 'Description must be at least 10 characters'
                  },
                  maxLength: {
                    value: 500,
                    message: 'Description must not exceed 500 characters'
                  }
                })}
                className={errors.description ? 'border-red-500' : ''}
              />
              {errors.description && (
                <p className="text-sm text-red-500">{errors.description.message}</p>
              )}
            </div>

            {submitMessage.text && (
              <Alert variant={submitMessage.type === 'error' ? 'destructive' : 'default'}>
                <AlertDescription>{submitMessage.text}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Course...
                </>
              ) : (
                'Create Course'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseAddForm;