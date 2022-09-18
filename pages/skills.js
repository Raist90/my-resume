import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Footer from '../components/Footer'

export default function Home({ title = "Skills" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Layout>
                <Navbar />
                <div className={styles.homeContainer}>
                    <div className={styles.homeContainer__skillsTitleContainer}>
                        <h1 className={styles.homeContainer__pageTitle}>{title}</h1>
                    </div>

                    <hr className="gap" />

                    <p>I am able to build simple websites like this and more complex React apps using components and styling with all the various CSS implementation methods (styled components, CSS modules, vanilla CSS, Sass, BEM)</p>

                    <hr className="gap" />

                    <h4>I can code with:</h4>

                    <p>HTML, CSS, Sass, Javascript, React, Gatsby, Next, PHP, SQL, Git, GraphQl</p>

                    <hr className="gap" />

                    <h4>I can work with:</h4>
                    <p>
                        WordPress, Ghost, Netlify, Gatsby Cloud, Active Campaign, Keap, Aweber, Hubspot, Headless CMS, Jamstack, Bootstrap, Tailwind, Bulma
                    </p>

                    <hr className="gap" />

                    <div className={styles.homeContainer__languageTitleContainer}>
                        <h1 className={styles.homeContainer__pageTitle}>Languages</h1>
                    </div>

                    <hr className="gap" />

                    <ul className={styles.homeContainer__list}>
                        <li className={styles.homeContainer__listItem}>
                            • <em>Italian</em>, mother tongue
                        </li>
                        <li className={styles.homeContainer__listItem}>
                            • <em>English</em>, B2
                        </li>
                        <li className={styles.homeContainer__listItem}>
                            • <em>Spanish</em>, B1
                        </li>
                    </ul>

                    <Button text="Hire me!" href="mailto:manuel.detoma@gmail.com" title="Send me an email!" />
                </div>
                <Footer />
            </Layout>
        </>
    )
}