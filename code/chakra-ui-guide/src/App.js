import React from 'react';
import { Box, useColorMode, Text, Button, useColorModeValue, LightMode } from '@chakra-ui/react';

function App() {
  const {colorMode, toggleColorMode} = useColorMode();
  const bgColor = useColorModeValue('tomato', 'skyblue')

  return (
    <div>
      <Box w="200px" h="100px" bgColor={bgColor}>盒子</Box>
      <Text>当前的颜色模式为 { colorMode }</Text>
      <LightMode>
        <Button onClick={toggleColorMode}>切换颜色模式</Button>
      </LightMode>
    </div>
  );
}

export default App;
