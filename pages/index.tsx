import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Footer from '../components/Footer'
import { TiSocialGithubCircular, TiSocialLinkedinCircular } from 'react-icons/ti'

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
          <div className={styles.homeContainer__icons}>
            <a href="https://github.com/Raist90" target="_blank" rel="noreferrer" title="Github profile"><TiSocialGithubCircular title="Github profile" /></a>
            <a href="https://www.linkedin.com/in/manuel-de-toma/" target="_blank" rel="noreferrer" title="LinkedIn profile"><TiSocialLinkedinCircular title="LinkedIn profile" /></a>
          </div>
          <hr />
          <h4>Frontend Dev</h4>
          <p>I am an experienced web developer interested in projects that require both creative and analytical thinking, and I prioritize user experience in my work.
          </p>
          <p>📚 <a href="https://forgiailtuosito.it/" title="See the book!" target="_blank" rel="noreferrer">I published a book</a> about how to realize websites with WordPress for dummies.
          </p>
          <Button text="Hire me!" href="mailto:manuel.detoma@gmail.com" title="Send me an email!" />
        </div>
        <Footer />
      </Layout>
    </>
  )
}
