import { NextResponse } from "next/server";
import * as fs from "fs";

export function middleware(req) {
   try {
    const files = fs.readdirSync("./");

    return NextResponse.json({
        runtime:"nodejs",
        files:files,
        success:true
    })
   } catch (error) {
    return NextResponse.json({
        runtime:"edge",
        error:error.message,
        success:false
    })
   }
}

export const config =  {
    matcher:"/api/runtime"
}