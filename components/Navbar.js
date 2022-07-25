import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__listItem}><Link href="/">Home</Link></li>
                <li className={styles.navbar__listItem}><Link href="/skills">Skills</Link></li>
                <li className={styles.navbar__listItem}><Link href="/experience">Experience</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar