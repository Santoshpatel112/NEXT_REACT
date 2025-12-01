import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET(request) {
    // Read cookie from request
    // const theme = request.cookies.get("theme")

    const cookieStore = await cookies()

    // const resultsPerPage = cookieStore.get("resultsPerPage")

    // cookieStore.set("score" , "100")

    cookieStore.delete("score")

    
    // console.log("Cookies" , resultsPerPage)
    return NextResponse.json({message:"Cookie deleted!"})
}