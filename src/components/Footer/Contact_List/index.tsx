import { FooterLinks, Link, LinksItem } from "./styles";

interface ILinkList {
  href: string;
  content: string;
  urlIcon?: string;
}
interface ListLinkProps {
  listLink: ILinkList[];
  title?: string;
  gridArea?: string;
}

const ListLink = ({ listLink, title, gridArea }: ListLinkProps) => {
  return (
    <FooterLinks gridArea={gridArea}>
      <LinksItem>{title}</LinksItem>
      {listLink.map(({ href, content, urlIcon }, index) => (
        <LinksItem key={index}>
          <Link href={href} urlIcon={urlIcon}>
            {content}
          </Link>
        </LinksItem>
      ))}
    </FooterLinks>
  );
};

export default ListLink;
