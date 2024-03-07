import Navigation from './Navigation'
import Header from './Header'
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Navigation />
            <main>{children}</main>
            <Footer />
        </>
    )
}