
import { Form, Navbar } from "react-bootstrap";
import { useFiltersContext } from "../context/FiltersContext";


export function FilterNavbar() {
    const { setSelectedPostalCode, setSelectedCategory } = useFiltersContext();

    const handleCategorySelect = (value: string) => {
        setSelectedCategory(value);
        console.log('Opción seleccionada:', value);
        // Aquí puedes agregar más lógica si necesitas hacer algo con la opción seleccionada
    };

    const handlePostalCodeSelect = (value: string) => {
        setSelectedPostalCode(value);
        console.log('Opción seleccionada:', value);
        // Aquí puedes agregar más lógica si necesitas hacer algo con la opción seleccionada
    };


    return (
        <Navbar className="d-flex flex-column align-items-baseline mb-4 ">
            <h4>Filtra por</h4>
            <div className="d-flex justify-content-start align-items-baseline gap-3">
                 <Form.Group >
                <Form.Label>Código postal</Form.Label>
                    <Form.Control as="select" onChange={(e) => handlePostalCodeSelect(e.target.value)}>
                        <option value="">Selecciona Código Postal</option>
                        <option value="par">Par</option>
                        <option value="impar">Impar</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select" onChange={(e) => handleCategorySelect(e.target.value)}>
                        <option value="">Todas</option>
                        <option value="Alimentacion">Alimentación</option>
                        <option value="Limpieza">Limpieza</option>
                        <option value="Cosmetica">Cosmética</option>
                    </Form.Control>
                </Form.Group>
                
            </div>
        </Navbar>
    )
}