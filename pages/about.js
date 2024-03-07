import styles from "./about.module.css"

export default function AboutPage() {
    console.log(styles);
    const message = "I am a string!"
    const aDiv = <div>Hell, i am a div in JSX!</div>
    const someFunction = () => {
        return "I am also a string!"
    }
    return (
        <div className={styles.about}>
            <h1>About page!</h1>

            <div className={styles.container}>
                <h2>JSX</h2>

                <div className={styles.content}>
                    <p>It is called JSX, and it is a syntax extension to JavaScript.
                        We recommend using it with React to describe what the UI should look like.
                        JSX may remind you of a template language,
                        but it comes with the full power of JavaScript.
                    </p>
                    <div>{5+5}</div>
                    <div>{message}</div>
                    <div>{someFunction()}</div>
                    {aDiv}
                    <img src="https://via.placeholder.com/150" alt="placeholder" width="150"/>
                    <br />
                    <input
                        onClick={(e) => console.log("click")}
                        type={"text"}
                        id={"country"}
                        name={"country"}
                        value={"Schweiz"}
                        />
                    <p className={"warning"}>class wird zu className</p>
                </div>
            </div>
        </div>
    )
}