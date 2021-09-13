import { useRouter } from 'next/router'

const RecipeDetail = (props) => {
  const router = useRouter()

  const { pid } = router.query
  

  return <p>Recipe:{ JSON.stringify(router.query)}</p>
}

export default RecipeDetail