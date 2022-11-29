import Head from 'next/head'
import Image from 'next/image'
import react from "react"
import heartSvg from "../public/heart.svg"
import arrowRSvg from "../public/arrowRight.svg"
import receptionImage from "../public/receptionImage.jpg"
import Link from 'next/link'
import Post from '../components/Post'

import getMarkDownInfo from "../helperFunctions/getMarkDownInfo"
import fs from "node:fs"
import path from "path"
interface ImdId{
  post:string,
  id: string
}
interface IHome{
mdIds:Array<ImdId>
}
export default function Home({ mdIds }:IHome) {
console.log(mdIds)
  return (
    <div className="flex min-h-full justify-center">
      <Head>
        <title> Blog It UP!</title>
        <meta name="description" content="Let's blog baby" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col gap-2 container box-border ">
        <h1 className='text-5xl mt-3 text-primary row-span-1 col-span-3 text-center underline'>Joseph Riter</h1>
        <p className='text-xl text-primaryLight col-span-3 text-center'>Web development, and stupidity.  <Image className='scale-150 inline rotate-6' alt="heart" src={heartSvg}></Image></p>
      <div className="flex flex-wrap p-8 gap-3 w-full justify-around">
      {mdIds.map((currId: ImdId)=>{ //render the posts based on data
        return <Post key={currId.id} id={currId.id} content={currId.post}/>
      })} 
      </div>
      </div>
    </div>
  )
}
export function getStaticProps(){
    const files = fs.readdirSync(path.resolve('markdown'))
    return {props:{mdIds:( 
        files.map((file)=>{
        const postId = file.slice( 4 , file.length - 3)
        console.log(postId)
        return {post:JSON.stringify(getMarkDownInfo({ postId })), id: postId}
    }))}
    }
}
