import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ItemContainer from './components/ItemContainer/ItemContainer'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChakraProvider>
        <ItemContainer />
      </ChakraProvider>
    </>
  )
}

export default App
