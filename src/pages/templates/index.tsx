import Footer from "components/Footer"
import Header from "components/Header"
import Menu from "components/Menu";
import ContainerSearch from "components/Search"
interface IPageTemplate {
    title: string
    children: React.ReactNode
}

const PageTemplate = ({ title, children }: IPageTemplate) => {
    return (
        <>
            <Header />
            <Menu />
            <ContainerSearch />
                {children}
            <Footer />
        </>
    )
}

export default PageTemplate