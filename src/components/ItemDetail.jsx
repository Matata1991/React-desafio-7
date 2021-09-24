import React from 'react'
import { useState } from 'react';
import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap';

const ItemDetail = ({ producto }) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const onAdd = (cant) => {
        console.log(cant)
        setCantidadAgregada(cant)
    }

    return (
            <>
            <Card className="card text-center bg-secondary mx-auto" style={{ width: '17rem' }}>
                <Card.Title > { producto.titulo } </Card.Title>
                <Card.Img variant="top" src= {producto.imagen} />
                <Card.Body>
                <Card.Title >Precio $ { producto.precio }</Card.Title>
                <Card.Text>
                { producto.descripcion }
                </Card.Text>
                <ItemCount stock={5} initial={0} onAdd={onAdd}/>
                </Card.Body>
            </Card>
            </>
    )
}

export default ItemDetail
