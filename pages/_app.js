export default function App({Component, pageProps}) {
    return (
        <div>
            <header>
                <img src="https://via.placeholder.com/150" alt="placeholder" width="150"/>
                <ul>
                    <nav>
                        <a href={"/"}>HOME</a>
                        <a href={"/about"}>ABOUT</a>
                    </nav>
                </ul>
            </header>
            <Component {...pageProps} />
            <h1>footer</h1>
        </div>
    )
}