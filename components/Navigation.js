import styles from "./Navigation.module.css"
import Link from "next/link"

export default function Navigation(){
    return (
        <div className={styles.navigation}>
            <Link href={"/"}>home</Link>
            <Link href={"/about"}>about</Link>
        </div>
    )
}