import theming from './theme';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <ChakraProvider theme={theming}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
{
  /* <Button backgroundColor="goldenYellow.800">teste</Button> */
}
