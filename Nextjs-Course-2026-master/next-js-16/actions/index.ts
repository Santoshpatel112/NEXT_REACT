"use server";

import prisma from "@/lib/db";
import { cacheLife, cacheTag, updateTag } from "next/cache";



export const createCourse = async(title:string , description:string) => {
    const course = await prisma.course.create({
        data:{
            title,
            description,
            slug:title.toLocaleLowerCase().replace(/\s+/g,"-"),
        }
    })

    updateTag("course")
    return course
}


export const getAllCourse = async() => {
    "use cache";
    cacheTag("course")
 
    const course = await prisma.course.findMany()
    return course
}

export const deleteCourse = async(id:string) => {
    const course = await prisma.course.delete({
        where:{
            id
        }
    })
    updateTag("course")
    return course
}

