import {
  ContentNewsBlog,
  NewsBlogImage2,
  NewsBlogImage3,
  NewsBlogImageMain,
  NewsBlogText2,
  NewsBlogText3,
  NewsBlogTextMain,
  NewsBlogTitle,
} from "./styles";

const News = () => (
  <ContentNewsBlog>
    <NewsBlogTitle>
      Na dúvida sobre combinar suas roupas e ficar incrível?
      <br />
      Confira nossas dicas em nosso blog.
    </NewsBlogTitle>
    <NewsBlogImageMain
      title="Ir para o blog"
      src="https://midia.fotos-riachuelo.com.br/fotos/hotsites/home/new/blog/2022/04/19.jpg"
      alt="Sabrina Sato, Eulá e Filha da Eulá com Looks Usados no Carnaval"
    />
    <NewsBlogTextMain href="#">
      O que fazer com o look que usou no carnaval? Confira já como fazer uso
      dessas mesmas peças no inverso e continuar na moda!
    </NewsBlogTextMain>
    <NewsBlogImage2
      title="Ir para o blog"
      src="https://rchloblogprod.blob.core.windows.net/wp-content/blog-preview-outono-conteudo5-ads10303.jpg"
      alt="Modelos Usando Conjuntos Estampados"
    />
    <NewsBlogText2 href="#">
      Está pronto para receber os melhores spoilers da próxima temporada? Acabam
      de chegar à Riachu as tendências mais aguardadas do Outono Inverno 2022.
    </NewsBlogText2>
    <NewsBlogImage3
      title="Ir para o blog"
      src="https://rchloblogprod.blob.core.windows.net/wp-content/blog-preview-outono-conteudo-ads10303-697x580.jpg"
      alt="Modelo Usando Blusa com Transparência e Colete por Cima em Tons Neutros "
    />
    <NewsBlogText3 href="#">
      O colete é tendência htmlForte para 2022. Seja no inverno ou no verão,
      essa terceira peça é aquele truque de estilo que vale a pena ter no
      armário.
    </NewsBlogText3>
  </ContentNewsBlog>
);

export default News;
