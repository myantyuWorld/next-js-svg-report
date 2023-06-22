import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Report1 from '../components/Report1'

import styles from '../styles/Home.module.css'

// ================
// tips
// ================
// dynamic importは不要
// ただし、DOM描画「後」でないと、svg pager内の処理で、DOM取得に失敗する。
// ので、useEffectで描画した後に、書き換え処理を行うようにする
// 
// const Report = dynamic(()  => import('../components/Report1'), {
//   ssr : false,
// })

export default function Home() {
  return (
    <div>
      <Report1/>
    </div >
  )
}
