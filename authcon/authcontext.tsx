"use client";

import {SessionProvider} from "next-auth/react"

export default function Provider({child , session}:any){
    return(
        <SessionProvider session={session}>
            {child}
        </SessionProvider>
    )
}