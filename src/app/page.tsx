import Image from 'next/image'
import styles from './page.module.css'

import logo from '@/assets/logo-svg.svg'
import banner from '@/assets/banner.jpg'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image src={logo} alt="" width={200} height={150} objectFit="contain" />
      </header>
      <div className={styles.banner}>
        <Image
          src={banner}
          alt="foto gessi segurando pilotos e placa escrito english teacher"
          layout="responsive"
        />
      </div>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>oimeeeeeeeeeeeeeeee</h1>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </main>
    </>
  )
}

