import { remark } from "remark"
import html from 'remark-html'
import { pid } from "process"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import heartSvg from "../public/heart.svg"
import arrowRSvg from "../public/arrowRight.svg"
import receptionImage from "../public/receptionImage.jpg"
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
        <div className="flex flex-col gap-2 container box-border ">
        <h1 className='text-5xl text-primary row-span-1 col-span-3 text-center underline'>Joseph Riter</h1>
        <p className='text-xl text-primaryLight col-span-3 text-center'>Web development, and stupidity.  <Image className='scale-150 inline rotate-6' alt="heart" src={heartSvg}></Image></p>
        <div className='text-black w-full h-fit sm:w-1/2 md:w-96 relative border border-secondary shadow-md'>
          <Image src={receptionImage} className="relative shadow-inner shadow-black" alt="Image depicting a reception label on a desk"></Image>
          <div className='flex justify-between flex-wrap  gap-2 p-2'>
            <p  className='w-full h-24 text-ellipsis text-primaryLight overflow-clip'> Just some stuff being written about ff being written about ff being written about ff being written about ff being written about ff being written about ff being written about ff being written about this post.</p>
            <Link href="/posts/1" className='h-fit'><div className='block bg-white rounded border-secondary text-center text-md hover:bg-secondary text-secondaryDark focus:scale-90 transition-all shadow-lg p-1 hover:shadow-x'>Read More<Image className='inline h-8 ' src={arrowRSvg} alt="->"/></div></Link>
          </div>
        </div>
        <Link href="posts/2" className='col-span-3 sm:col-span-2 md:col-span-1'>Blog 1</Link>

      </div>
    ) 

}
export default Post