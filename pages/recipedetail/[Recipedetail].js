import { useRouter } from 'next/router'
import Layout from "../../src/layout/Container";
import Detail from '../../src/recipedetail/Detail';

const RecipeDetail = (props) => {
  const router = useRouter()
  const {Recipedetail} =  router.query
  return(
    <Layout>
      <Detail {...props}id={Recipedetail} />
    </Layout>
  ) 
}

export default RecipeDetail