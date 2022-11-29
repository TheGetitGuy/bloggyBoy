import fs from "node:fs";
import Markdown from 'marked-react'
import grayMatter from 'gray-matter'
import styles from '../../styles/Home.module.scss'
interface IPostRouter{
    element: string
}
const PostRoute = ({element}:IPostRouter) =>{  
    const parseProperties = grayMatter(element)
    const {content, data:{title, image}} = parseProperties
    return (
        <div className={'box-border text-primary flex flex-wrap'}>
            <h1 className="m-8 w-full text-center text-6xl">{title}</h1> 
            <div className="w-full flex justify-center">
                <img src={image} alt={title}></img>
            </div>
            <div className={styles.markdownPage}>
                <Markdown gfm={true}>{content}</Markdown>
            </div>
        </div>
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
