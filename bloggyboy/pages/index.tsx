import Head from 'next/head'
import Image from 'next/image'
import react from "react"
import heartSvg from "../public/heart.svg"
import arrowRSvg from "../public/arrowRight.svg"
import receptionImage from "../public/receptionImage.jpg"
import Link from 'next/link'
import Post from '../components/Post'
import styles from '../styles/Home.module.scss'
import postsUrl from './posts/[pid]'
export default function Home() {
  return (
    <div className="flex min-h-full justify-center">
      <Head>
        <title> Blog It UP!</title>
        <meta name="description" content="Let's blog baby" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post id='1'/>
      
    </div>
  )
}
