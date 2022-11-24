import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import postsUrl from './posts/[pid]'

export default function Home() {
  return (
      <div className={styles.pageContainer}>
      <Head>
        <title> Blog It UP!</title>
        <meta name="description" content="Let's blog baby" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is an H1</h1>
      <Link href="/posts/1">Epoch 0</Link>
      <Link href="posts/2">Blog 1</Link>
      
      </div>
  )
}
