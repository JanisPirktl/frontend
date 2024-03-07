
import styles from "./about.module.css"

export default function AboutPage() {
    console.log(styles)
    return (
        <div className={styles.about}>
            <h1>About page!</h1>

            <div className={styles.container}>
                <h2>JSX</h2>

                <div className={styles.content}>
                    <p>
                        It is called JSX, and it is a syntax extension to JavaScript.
                        We recommend using it with React to describe what the UI should look like.
                        JSX may remind you of a template language,
                        but it comes with the full power of JavaScript.
                    </p>
                </div>
            </div>
        </div>
    )
}
