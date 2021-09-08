import Receipecomponent from '../src/receipe/receipecomponent'
import { Layout } from '../src/layout/Container';


  const ReceipeList = Layout(Receipecomponent);

  export default function Receipe(props) {
    return <ReceipeList {...props}/>
  }