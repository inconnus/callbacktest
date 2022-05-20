import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    if (!router.query.status) return
    window.parent.postMessage(router.query.status || 'empty', "*")
  }, [router.query.status])
  return (
    <div className={styles.container}>
      test
    </div>
  )
}

export default Home
