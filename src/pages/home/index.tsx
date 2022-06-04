import { Product, products } from "../../data"
import Products from "./product"

const listProduct = products;

const Index = () => {
    return (
        <>
            <header className='header'>
                <a href="index.html" className="header_logo">
                    <h1 className="logo_top">Reviva Fashion</h1>
                    <span className="logo_bottom">by RCHLO</span>
                </a>
                <a href="cart.html" className="header_cart" aria-label="carrinho de compra"></a>
            </header>
            <nav className="menu-navegation">
                <button className="menu-navegation_button">Menu</button>
                <ul className="menu-navegation_items">
                    <li className="item_menu-navegation"><a className="item_link" href="#">Página Inicial</a></li>
                    <li className="item_menu-navegation"><a className="item_link" href="#">Moda Masculina</a></li>
                    <li className="item_menu-navegation"><a className="item_link" href="#">Moda Feminina</a></li>
                    <li className="item_menu-navegation"><a className="item_link" href="#">Moda Infantíl</a></li>
                    <li className="item_menu-navegation"><a className="item_link" href="#">Manual de Moda</a></li>
                </ul>
            </nav>
            <main className="content">
                <section className="content_search">
                    <input className="search_field" placeholder="Faça sua busca aqui se já souber o que está procurando..."
                        type="text" />
                    <button className="search_button"></button>
                </section>
                <section className="content_products">
                    <h2 className="products_title"><a className="products_link" href="#">Últimos lançamentos</a></h2>

                    {listProduct.map((product: Product, index) => {
                        if (index <= 3) {
                            return <Products key={product.id} {...product} />
                        }
                    })}

                </section>
                <a href="#" title="Ir para menu da moda" className="content_banner">
                    <p className="banner_text">Fique por dentro de tudo que há de novidade no mundo da moda!<br />Baixe já nosso
                        manual de moda!</p>
                    <div className="banner_logo">
                        <h1 className="logo_top">Reviva Fashion</h1>
                        <span className="logo_bottom">by RCHLO</span>
                    </div>
                </a>
                <section className="content_products">
                    <h2 className="products_title"><a className="products_link" href="#">Coleção de Verão 2022</a></h2>

                    {listProduct.map((product: Product, index) => {
                        if (index > 3 && index < 8) {
                            return <Products key={product.id} {...product} />
                        }
                    })}

                </section>
                <article className="content_news-blog">
                    <h3 className="news-blog_title">Na dúvida sobre combinar suas roupas e ficar incrível?<br />Confira nossas
                        dicas em nosso blog.</h3>
                    <img className="news-blog_image-1" title="Ir para o blog"
                        src="https://midia.fotos-riachuelo.com.br/fotos/hotsites/home/new/blog/2022/04/19.jpg"
                        alt="Sabrina Sato, Eulá e Filha da Eulá com Looks Usados no Carnaval" />
                    <a href="#" className="news-blog_text-1">O que fazer com o look que usou no carnaval? Confira já como fazer
                        uso dessas mesmas peças no inverso e continuar na moda!</a>
                    <img className="news-blog_image-2" title="Ir para o blog"
                        src="https://rchloblogprod.blob.core.windows.net/wp-content/blog-preview-outono-conteudo5-ads10303.jpg"
                        alt="Modelos Usando Conjuntos Estampados" />
                    <a href="#" className="news-blog_text-2">Está pronto para receber os melhores spoilers da próxima
                        temporada? Acabam de chegar à Riachu as tendências mais aguardadas do Outono Inverno 2022.</a>
                    <img className="news-blog_image-3" title="Ir para o blog"
                        src="https://rchloblogprod.blob.core.windows.net/wp-content/blog-preview-outono-conteudo-ads10303-697x580.jpg"
                        alt="Modelo Usando Blusa com Transparência e Colete por Cima em Tons Neutros " />
                    <a href="#" className="news-blog_text-3">O colete é tendência htmlForte para 2022. Seja no inverno ou no verão,
                        essa terceira peça é aquele truque de estilo que vale a pena ter no armário.</a>
                </article>
            </main>
            <footer className="base-footer">
                <section className="footer">
                    <a href="index.html" className="footer_logo">
                        <h1 className="logo_top">Reviva Fashion</h1>
                        <span className="logo_bottom">by RCHLO</span>
                    </a>
                    <ul className="footer_menu-navegation">
                        <li className="menu-navegation_title">Menu</li>
                        <li className="menu-navegation_item"><a className="menu-navegation_link" href="#">Página Inicial</a></li>
                        <li className="menu-navegation_item"><a className="menu-navegation_link" href="#">Moda Masculina</a></li>
                        <li className="menu-navegation_item"><a className="menu-navegation_link" href="#">Moda Feminina</a></li>
                        <li className="menu-navegation_item"><a className="menu-navegation_link" href="#">Moda Infantíl</a></li>
                        <li className="menu-navegation_item"><a className="menu-navegation_link" href="#">Manual de Moda</a></li>
                    </ul>
                    <nav className="footer_network-social">
                        <p className="network-social_title">Siga-nos nas redes sociais</p>
                        <ul className="network-social_list-icons">
                            <li><a href="#"><img className="list-icons_icon" src="icons/logo-facebook.svg"
                                alt="facebook" /></a></li>
                            <li><a href="#"><img className="list-icons_icon" src="icons/logo-twitter.svg" alt="twitter" /></a>
                            </li>
                            <li><a href="#"><img className="list-icons_icon" src="icons/logo-instagram.svg"
                                alt="instagram" /></a></li>
                            <li><a href="#"><img className="list-icons_icon" src="icons/logo-youtube.svg" alt="youtube" /></a>
                            </li>
                        </ul>
                    </nav>
                    <ul className="footer_contacts">
                        <li className="contacts_item">Entre em contato</li>
                        <li className="contacts_item"><a className="contacts_link" href="#">Contato</a></li>
                        <li className="contacts_item"><a className="contacts_link"
                            href="mailto:reviva@rchlo.com.br?">reviva@rchlo.com.br</a></li>
                        <li className="contacts_item"><a className="contacts_link contacts_link-whats"
                            href="https://web.whatsapp.com/send?phone=#############">WhatsApp</a></li>
                        <li className="contacts_item"><a className="contacts_link contacts_link-tel" href="tel:+551121233321">11
                            2123-3321</a></li>
                    </ul>
                    <fieldset className="footer_newsletter">
                        <label className="newsletter_label" htmlFor="newsletter_field">Assine nossa newsletter</label>
                        <input className="newsletter_input" type="text" id="newsletter_field" />
                        <button className="newsletter_button">ASSINAR JÁ</button>
                    </fieldset>
                </section>
            </footer>
        </>
    )
}

export default Index