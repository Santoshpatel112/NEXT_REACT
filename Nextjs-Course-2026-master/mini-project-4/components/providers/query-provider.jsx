"use client";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner";
import { useState } from "react";


export function QueryProvider({children}){
    const [queryClient] = useState(()=>new QueryClient())


    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster/>
        </QueryClientProvider>
    )
}