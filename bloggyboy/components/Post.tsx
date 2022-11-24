import { remark } from "remark"
import html from 'remark-html'
import { pid } from "process"
import React from "react"
import fs from "node:fs"

interface Props {
    id:string | string[] | undefined
}
const Post = ( props: Props )=>{
    const { id } = props
    
    if (!id){
        return (
            <p>error</p>
        )
    }

    return(
        <p>{id}</p>
    ) 

}
export default Post