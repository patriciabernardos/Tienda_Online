import { Container } from "react-bootstrap"
import products from "./data/products.json"
import { Store } from "./components/Store"
import Header from "./components/Header"

function App() {


  return (
 
        <Container> <Header />
          <Store products={products} />

        </Container>
    
      )
}

      export default App
