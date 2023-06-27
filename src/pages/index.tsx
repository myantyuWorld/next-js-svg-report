import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
// import Report1 from '../components/Report1'

import styles from '../styles/Home.module.css'

// ================
// tips
// ================
const Report1 = dynamic(()  => import('../components/Report1'), {
  ssr : false,
})

export default function Home() {
  return (
    <div>
      <Report1/>
    </div >
  )
}
