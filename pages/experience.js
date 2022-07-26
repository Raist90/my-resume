import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Footer from '../components/Footer'
import leonardo from '../public/leonardo-da-vinci_100x100.jpg'

export default function Home({ title = "Experience" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Layout>
                <Navbar />
                <div className={styles.homeContainer}>
                    <h1 className={styles.homeContainer__titleYellow}>{title}</h1>
                    <blockquote>💬 Experience does not err; only your judgements err by expecting from her what is not in her power.
                        <div className={styles.blockquote__author}>
                            <Image
                                src=
                                {leonardo}
                                className={styles.blockquote__authorImg}
                                width={50}
                                height={50}
                            />
                            <span className={styles.blockquote__authorName}>Leonardo da Vinci</span>
                        </div>
                    </blockquote>
                    <hr />
                    <h4>Frontend Dev</h4>
                    <p className={styles.homeContainer__small}><em>I Sarti del Web | May 2018 - present</em></p>
                    <ul className={styles.homeContainer__list}>
                        <li className={styles.homeContainer__listItem}>
                            • I realized 50+ websites and landing pages
                        </li>
                        <li className={styles.homeContainer__listItem}>
                            • I built several marketing automations and campaigns with Infusionsoft Keap and Active Campaign
                        </li>
                        <li className={styles.homeContainer__listItem}>
                            • Participated in project meetings, with technical staff members, business analysts, and external stakeholders.
                        </li>
                    </ul>

                    <hr className="gap" />

                    <h4>Frontend Dev</h4>
                    <p className={styles.homeContainer__small}><em>UpBrain | Feb 2016 - May 2018</em></p>
                    <ul className={styles.homeContainer__list}>
                        <li className={styles.homeContainer__listItem}>
                            • Designed, prototyped, and developed websites using HTML, CSS and JavaScript libraries
                        </li>
                        <li className={styles.homeContainer__listItem}>
                            • Collaborated with back-end developers and UX designers
                        </li>
                    </ul>

                    <hr className="gap" />

                    <h4>Photographer & Videomaker</h4>
                    <p className={styles.homeContainer__small}><em>Eurovideo | Mar 2015 - Feb 2016</em></p>
                    <ul className={styles.homeContainer__list}>
                        <li className={styles.homeContainer__listItem}>
                            • I wrote several short films and coordinated audiovisual projects
                        </li>
                    </ul>

                    <hr className="gap" />

                    <h4>Audiovisual Editor, Internship</h4>
                    <p className={styles.homeContainer__small}><em>Radiocittà Fujiko | Sep 2014 - Feb 2015</em></p>
                    <ul className={styles.homeContainer__list}>
                        <li className={styles.homeContainer__listItem}>
                            • I interviewed emerging italian bands and managed the audiovisual editing of several YouTube videos and podcasts
                        </li>
                    </ul>

                    <hr className="gap" />

                    <h1 className={styles.homeContainer__titleYellow}>Academics</h1>

                    <hr className="gap" />

                    <h4>Three-year Degree</h4>
                    <p className={styles.homeContainer__small}><em>DAMS, Università di Bologna | 2015
                    </em></p>
                    <ul className={styles.homeContainer__list}>
                        <li className={styles.homeContainer__listItem}>
                            • I studied Cinema, Film-making, Theater and Music
                        </li>
                        <li>
                            • Graduate thesis on the evolution of the caption from silent cinema to today
                        </li>
                    </ul>

                    <hr className="gap" />

                    <h4>Artistic Diploma</h4>
                    <p className={styles.homeContainer__small}><em>Liceo Artistico di Benevento | 2008
                    </em></p>
                    <ul className={styles.homeContainer__list}>
                        <li className={styles.homeContainer__listItem}>
                            • Learned how to create immersive digital experiences through classes on illustration, web design, and animation
                        </li>
                        <li>
                            • Specialized in art history and music
                        </li>
                    </ul>

                    <Button text="Hire me!" href="mailto:manuel.detoma@gmail.com" title="Send me an email!" />
                </div>
                <Footer />
            </Layout>
        </>
    )
}