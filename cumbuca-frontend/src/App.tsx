import theming from './theme';
import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theming}>
      <p>teste</p>
      <Button backgroundColor="goldenYellow.800">teste</Button>
    </ChakraProvider>
  );
}

export default App;
