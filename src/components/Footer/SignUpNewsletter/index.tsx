import {
  FooterNewsletter,
  NewsletterButton,
  NewsletterInput,
  NewsletterLabel,
} from "./styles";

const SignUpNewsletter = () => {
  return (
    <FooterNewsletter>
      <NewsletterLabel htmlFor="newsletter_field">
        Assine nossa newsletter
      </NewsletterLabel>
      <NewsletterInput placeholder="Digite seu email..." type="text" id="newsletter_field" />
      <NewsletterButton>ASSINAR JÁ</NewsletterButton>
    </FooterNewsletter>
  );
};

export default SignUpNewsletter;
