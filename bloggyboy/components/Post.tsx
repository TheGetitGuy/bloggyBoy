import { remark } from "remark"
import html from 'remark-html'
import { pid } from "process"
import React from "react"


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

export function getStaticPaths(){

}

export function getStaticProps(){
    
}