import styles from "./index.module.css"

export default function IndexPage() {

    const message = "I am a string!"
    const someFunction = () => {
        return "I am also a string!"
    }
    const aDiv = <div>Hello, I am a div in JSX!</div>

    return (
        <div className={styles.index}>
            <h1>Hello world!</h1>
            <div>{5 + 5}</div>
            <div>{message}</div>
            <div>{someFunction()}</div>
            {aDiv}

            <img src="https://via.placeholder.com/150" alt="placeholder" width="150" />

            <br />

            <input
                onClick={(e) => console.log("click")}
                type="text"
                id="country"
                name="country"
                value="Schweiz"
            />

            <p className="warning">
                class wird zu className
            </p>


        </div>
    )
}
