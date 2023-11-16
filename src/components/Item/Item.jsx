import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'

export default function Item({name,description,price,sku,stock,image}) {
    return (
        <>
            <Card m='50px' maxW='sm'>
                <CardBody>
                    <Image
                        src={image}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text>{description}</Text>
                        <Text color='blue.600' fontSize='2xl'>{price}</Text>
                        <Text>SKU: {sku}</Text>
                        <Text>STOCK: {stock}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Comprar
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Agregar al carrito
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}
