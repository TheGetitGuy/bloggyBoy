import React, { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import arrowRSvg from "../public/arrowRight.svg"
import receptionImage from "../public/receptionImage.jpg"
import Markdown from "marked-react" 
import styles from '../styles/Home.module.scss'
interface Props {
  id:string, 
  content:string,
  }
const Post = ( props: Props ):JSX.Element => {
    const { id, content } = props
    const { content: contentParsed, data:dataParsed } = JSON.parse(content)
    console.log()
    return(
        <div className='text-black w-full h-fit sm:w-1/2 md:w-96 relative border border-secondary shadow-md'>
          <img src={dataParsed.image} className="aspect-video shadow-inner shadow-black" alt={dataParsed.title}></img>
          <div className='flex justify-between flex-wrap  gap-2 p-2'>
            <div className='w-full h-24 text-ellipsis text-primaryLight overflow-hidden'>
                <div className={styles.markdown}>
                <Markdown>{contentParsed}</Markdown>
                </div>
            </div>
            <Link href={`/posts/${id}`} className='h-fit'>
                <div role="button" className=' bg-white rounded border-secondary text-center text-md hover:bg-secondary text-secondaryDark transition-all shadow-lg p-1 hover:shadow-x'>
                Read More
                    <Image className='inline h-8 ' src={arrowRSvg} alt="->"/>
                </div>
            </Link>
          </div> 
        </div>
    ) 

}
export default Post

