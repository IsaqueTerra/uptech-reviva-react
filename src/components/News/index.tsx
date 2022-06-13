import styles from './News.module.scss'

const News = () =>
(
    <article className={styles["content_news-blog"]}>
        <h3 className={styles["news-blog_title"]}>Na dúvida sobre combinar suas roupas e ficar incrível?<br />Confira nossas
            dicas em nosso blog.</h3>
        <img className={styles["news-blog_image-1"]} title="Ir para o blog"
            src="https://midia.fotos-riachuelo.com.br/fotos/hotsites/home/new/blog/2022/04/19.jpg"
            alt="Sabrina Sato, Eulá e Filha da Eulá com Looks Usados no Carnaval" />
        <a href="#" className={styles["news-blog_text-1"]}>O que fazer com o look que usou no carnaval? Confira já como fazer
            uso dessas mesmas peças no inverso e continuar na moda!</a>
        <img className={styles["news-blog_image-2"]} title="Ir para o blog"
            src="https://rchloblogprod.blob.core.windows.net/wp-content/blog-preview-outono-conteudo5-ads10303.jpg"
            alt="Modelos Usando Conjuntos Estampados" />
        <a href="#" className={styles["news-blog_text-2"]}>Está pronto para receber os melhores spoilers da próxima
            temporada? Acabam de chegar à Riachu as tendências mais aguardadas do Outono Inverno 2022.</a>
        <img className={styles["news-blog_image-3"]} title="Ir para o blog"
            src="https://rchloblogprod.blob.core.windows.net/wp-content/blog-preview-outono-conteudo-ads10303-697x580.jpg"
            alt="Modelo Usando Blusa com Transparência e Colete por Cima em Tons Neutros " />
        <a href="#" className={styles["news-blog_text-3"]}>O colete é tendência htmlForte para 2022. Seja no inverno ou no verão,
            essa terceira peça é aquele truque de estilo que vale a pena ter no armário.</a>
    </article>
)

export default News;