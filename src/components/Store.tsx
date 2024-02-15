
import Product from '../interfaces/Product.tsx'
import { Col, Row } from "react-bootstrap";
import CardProducts from './CardProducts.tsx';
import { useFiltersContext } from '../context/FiltersContext.tsx';

/*Componente que muestra los productos de la tienda con su componente hijo: CardProducts*/

interface ProductList {
    products: Product[];
}


export function Store({ products }: ProductList) {


    const { selectedPostalCode, selectedCategory } = useFiltersContext();


    const isPostalCodeEven = (postalCodeNumber: number): boolean => { 
        return postalCodeNumber % 2 === 0;
    };


    // Filtro de productos según las opciones seleccionadas
    const filteredProducts = products.filter(product => {
        if (selectedCategory !== null && product.category !== selectedCategory && selectedCategory !== "") {
            return false;
        }
        if (selectedPostalCode !== null) {
            
          
            const isEven = isPostalCodeEven(product.postalCode);
            // Si el código postal es par e igual a 'par', o si es impar e igual a 'impar', incluir el producto
            if ((isEven && selectedPostalCode === 'par') || (!isEven && selectedPostalCode === 'impar' ) ) {
               
   
                return true;
            }
            return false;
        
    }
        return true;
    });


    return (

        <Row md={2} xs={1} lg={3} className="g-4">
           
            {filteredProducts.map(product => (
                <Col key={product.id}>
                    <CardProducts{...product} />
                </Col>

            ))}
        </Row>

    )
}