import Receipecomponent from "../src/receipe/receipecomponent";
import Layout from "../src/layout/Container";
export default function Recipes(props) {
  return (
    <Layout>
      <Receipecomponent {...props} />
    </Layout>
  );
}
