import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import theme from '@chakra-ui/react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    // initialColorMode: 'dark',
    useSystemColorMode: true
  }
})

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
