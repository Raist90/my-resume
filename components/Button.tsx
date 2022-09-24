import styles from '../styles/Button.module.css'
import Link from 'next/dist/client/link'

export interface Button {
    text: string
    href: string
    title: string
}

const Button = (props: Button) => {
    return (
        <Link href={props.href}>
            <a title={props.title}>
                <button className={styles.btnPrimary} >
                    {props.text}
                </button>
            </a>
        </Link>
    )
}

export default Button