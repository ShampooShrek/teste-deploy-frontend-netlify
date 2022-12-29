import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import api from '../server/axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    async function loadData() {
      await api.get('/').then(_ => console.log("aaa"))
      .catch(err => console.log("rerrr"))
    }
    loadData()
  }, [])

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      alignItems: 'center',
      justifyContent: "center"
    }}>
      <div style={{
        width: "30%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
        <button style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "100px",
          outline: 0,
          border: 0,
          background: "#444",
          fontSize: "2rem"
        }} onClick={() => setCount(count + 1)}>+</button>
        <h1 style={{ fontSize: "4rem" }}>{count}</h1>
        <button style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "100px",
          outline: 0,
          border: 0,
          background: "#444",
          fontSize: "2rem"
        }} onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  )
}
