import React from 'react'
import Item from '../Item/Item'
import { Flex } from '@chakra-ui/react';


export default function ItemContainer() {
    const array = [
        { name: 'Sofa 2 cuerpos', description: 'Este sofá es perfecto para espacios tropicales modernos, espacios de inspiración barroca, espacios en tonos tierra y para personas que aman un diseño elegante con un toque de diseño vintage.', price: '$ 450', sku: '1', stock: '15', image: 'https://muebleriapapa.com.ar/wp-content/uploads/2021/08/Fondo-Blanco-MALOW-TRES-CUERPOS-CUERINA-BEIGE-1.png' },
        { name: 'Sofa 3 cuerpos', description: 'Este sofá es perfecto para espacios tropicales modernos, espacios de inspiración barroca, espacios en tonos tierra y para personas que aman un diseño elegante con un toque de diseño vintage.', price: '$ 450', sku: '2', stock: '15', image: 'https://muebleriapapa.com.ar/wp-content/uploads/2021/08/FONDO-BLANCO-SILLON-2-CUERPO-MELBY-CHENILLE-TURQUESA.png' }
    ];

    return (
        <Flex>
                {array.map((element) => (
                    <Item  key={element.sku} name={element.name} description={element.description} price={element.price} sku={element.sku} stock={element.stock} image={element.image} />
                ))}
        </Flex>
    );
}
