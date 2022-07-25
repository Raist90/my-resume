import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Footer from '../components/Footer'

export default function Home({ title = "Home" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Navbar />
        <div className={styles.homeContainer}>
          <div className={styles.portraitContainer}></div>
          <h1 className={styles.homeContainer__title}>MANUEL DE TOMA</h1>
          <p className={styles.homeContainer__small}><em>Born in Italy, 32 years old</em></p>
          <h4>Frontend Dev</h4>
          <p>I am an experienced web developer interested in projects that require both creative and analytical thinking, and I prioritize user experience in my work
          </p>
          <p>📚 <a href="https://forgiailtuosito.it/" title="See the book!" target="_blank" rel="noreferrer">I published a book</a> about how to realize websites with WordPress for dummies
          </p>
          <Button text="Hire me!" />
        </div>
        <Footer />
      </Layout>
    </>
  )
}
