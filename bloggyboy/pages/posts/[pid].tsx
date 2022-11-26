import { useRouter } from "next/router";
import Post from "../../components/Post";
import fs from "node:fs";
import { remark } from "remark";
import reactMark from "remark-react";
import parse from "remark-parse";
import Markdown from 'marked-react'
import  {unified } from "unified";
import grayMatter from 'gray-matter'

interface IPostRouter{
    element: string
}
const PostRoute = ({element}:IPostRouter) =>{  
    const parseProperties = grayMatter(element)
    const {content, data:{title}} = parseProperties
    return (
        <>
            <h1>{title}</h1> 
            <Markdown gfm={true}>{content}</Markdown>
        </>
    )
}
export default PostRoute

export function getStaticPaths(){
    
    const dir = fs.readdirSync((process.cwd() + "/markdown"))

    const paths =  dir.map((currentItem)=>{
        const itemName = currentItem.replace(/\.md$/, "")
        return {
            params:{
                pid: itemName.slice(itemName.length - 1)
            }
        }
    })
    console.log(paths)
    return ({
        paths,
        fallback: false,
    })
}

export function getStaticProps(props:{params:{pid:string}}){
    const {params} = props
    const content = (fs.readFileSync(process.cwd() + '/markdown/page' + params.pid + '.md')).toString()
    return{
        props: {element: content}
    }
}
