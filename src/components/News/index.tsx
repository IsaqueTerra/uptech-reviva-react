import styled from "styled-components";
import theme from "styles/global";

const ContentNewsBlog = styled.article`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(4, 24%);
  grid-template-rows: repeat(5, auto);
  grid-template-areas:
    "title title title title"
    "banner-1 banner-1 banner-2 text-2"
    "banner-1 banner-1 banner-2 text-2"
    "banner-1 banner-1 banner-3 text-3"
    "text-1 text-1 banner-3 text-3";

  @media screen and (max-width: ${theme.breackpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, auto);
    grid-template-areas:
      "title"
      "banner-1"
      "text-1"
      "banner-2"
      "text-2"
      "banner-3"
      "text-3";
  }
`;

const NewsBlogTitle = styled.h3`
  font-size: 2.2em;
  grid-area: title;
  margin: 2em 0 0 0;

  @media screen and (max-width: ${theme.breackpoints.md}) {
    font-size: 1.8em;
  }
`;

const NewsBlogImageMain = styled.img`
  grid-area: banner-1;
  height: 100%;
  width: 100%;
`;

const NewsBlogTextMain = styled.a`
  color: inherit;
  font-size: 2.2em;
  grid-area: text-1;
  text-decoration: none;
  width: 90%;

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    font-size: 1.6em;
  }

  @media screen and (max-width: ${theme.breackpoints.md}) {
    font-size: 2em;
  }
`;

const NewsBlogImage2 = styled.img`
  grid-area: banner-2;
  width: 100%;
`;

const NewsBlogText2 = styled.a`
  color: inherit;
  font-size: 2em;
  grid-area: text-2;
  text-decoration: none;

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    font-size: 1.6em;
  }

  @media screen and (max-width: ${theme.breackpoints.md}) {
    font-size: 2em;
  }
`;

const NewsBlogImage3 = styled.img`
  grid-area: banner-3;
  width: 100%;
`;

const NewsBlogText3 = styled.a`
  color: inherit;
  font-size: 2em;
  grid-area: text-3;
  text-decoration: none;

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    font-size: 1.6em;
  }

  @media screen and (max-width: ${theme.breackpoints.md}) {
    font-size: 2em;
  }
`;

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
