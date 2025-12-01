"use server"

import {prisma} from "@/lib/db"



export const seedDB = async ()=>{
    await prisma.post.createMany({
        data:[
            { title: "Hello Prisma" }, 
            { title: "Prisma + Next.js is easy" }, 
            { title: "Postgress for quick demos" }
        ]
    })

    console.log(`[seed] Data seeded successfully✅`)
}

export const createPost = async (formData)=>{

    const title = formData.get("title")
    const description = formData.get("description")

    const post = await prisma.post.create({
        data:{
            title:title,
            description:description
        }
    })

    console.log('Data inserted successfully')

    return {
        success:true,
        data:post
    }
}

export const getPost = async()=>{
    const posts = await prisma.post.findMany();

    return posts
}