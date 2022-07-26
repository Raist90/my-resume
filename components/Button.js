import styles from '../styles/Button.module.css'
import Link from 'next/dist/client/link'

const Button = ({ text, href, title }) => {
    return (
        <Link href={href}>
            <button className={styles.btnPrimary} >
                {text}
            </button >
        </Link>
    )
}

export default Button