import styles from "./Header.module.css"

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <img src="logo.png" alt={"Bild"}/>
                <p>My First Next.js App</p>
            </div>
        </>
    );
}
