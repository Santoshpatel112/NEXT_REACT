import { NextResponse } from "next/server";
import * as fs from "fs";

export function proxy(req: Request) {
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
        error:(error as Error).message,
        success:false
    })
   }
}

export const config =  {
    matcher:"/api/runtime"
}