import Main from "components/Main"
import PageTemplate from "pages/templates"
import { useRecoilValue } from "recoil"
import { postListState } from "state/atoms"

const Home = () => {
   const products = useRecoilValue(postListState)
   return (
      <PageTemplate title="Home">
         <Main/>
      </PageTemplate>
   )
}

export default Home