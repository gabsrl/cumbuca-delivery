import theming from './theme';
import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';
import { Dishes } from './pages/menu/dishes';

function App() {
  return (
    <ChakraProvider theme={theming}>
      <Dishes />
      <Button backgroundColor="goldenYellow.800">teste</Button>
    </ChakraProvider>
  );
}

export default App;
