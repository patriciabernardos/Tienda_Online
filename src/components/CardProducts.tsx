

/*Componente que recibe un objeto products y muestra sus propiedades*/

import { useState } from "react"
import { Button, Card, CardBody, CardLink, Modal } from "react-bootstrap"

type StoreProductProps = {
    id: number
    name: string
    category: string
    price: number
    img: string
    description: string,
    postalCode: number
}

export default function StoreProduct({ name, category, price, img, description, postalCode }: StoreProductProps) {
    //TEMPORAL Valor por defecto para el boton "Añadir al carrito"
    const quantity = 0;
    //State para el modal
    const [show, setShow] = useState(false);

    //Manejo del modal. Cierre y apertura
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card>
                <Card.Img variant="top" src={img} height="300px" style={{ objectFit: "cover" }} />
                <CardBody className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-2">{name}</span>
                        <span className="ms-2 text-muted">{price}€</span>
                    </Card.Title>
                    <div className="mt-auto d-flex justify-content-between">
                        {quantity == 0 ? (
                            <Button className="btn btn-light btn-outline-dark"> Añadir al carrito</Button>
                        ) : <div className="d-flex justify-content-around"><Button className="btn btn-light btn-outline-dark ">+</Button><div className="d-flex align-items-center"> {quantity} </div><Button className="btn btn-light btn-outline-dark">-</Button></div>}
                        <CardLink onClick={handleShow} >Ver más detalles</CardLink>
                    </div>
                </CardBody>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Card.Img variant="top" src={img} height="300px" style={{ objectFit: "cover" }} />
                    <div className="mb-2">
                        <small>{category}</small> - <small> Código postal: {postalCode}</small>
                    </div>
                    <div className="mb-2">
                        {description}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        {quantity == 0 ? (
                            <Button className="btn btn-light btn-outline-dark"> Añadir al carrito</Button>
                        ) : <div className="d-flex justify-content-around"><Button className="btn btn-light btn-outline-dark ">+</Button><div className="d-flex align-items-center"> {quantity} </div><Button className="btn btn-light btn-outline-dark">-</Button></div>}

                        <h4>{price}€</h4>
                    </div>
                </Modal.Footer>
            </Modal>
        </>


    )

}