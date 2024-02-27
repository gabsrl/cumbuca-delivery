import theming from './theme';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <ChakraProvider
      theme={theming}
      toastOptions={{ defaultOptions: { isClosable: true, duration: 4000 } }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AppRoutes />
      </Box>
    </ChakraProvider>
  );
}

export default App;
{
  /* <Button backgroundColor="goldenYellow.800">teste</Button> */
}
