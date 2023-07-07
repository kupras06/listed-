"use client"
import styles from './page.module.css'
import Login from '@/compenets/logInPage/login'

import { signIn } from 'next-auth/react'
export default function Home() {
  return (
    <>
      <button style={{background:'white',color:'red',fontSize:100}} onClick={() => signIn()}>Login</button>
    </>
  )
}
