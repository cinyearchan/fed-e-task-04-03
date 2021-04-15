import React from 'react';
import { chakra, Box, useColorMode, Text, Button, useColorModeValue, LightMode } from '@chakra-ui/react';

const CustomButton = chakra('button', {
  baseStyle: {
    borderRadius: 'lg'
  },
  sizes: {
    sm: {
      px: '3',
      py: '1',
      fontSize: '12px'
    },
    md: {
      px: '4',
      py: '2',
      fontSize: '14px'
    }
  },
  variants: {
    primary: {
      bgColor: 'blue.500',
      color: 'white'
    },
    danger: {
      bgColor: 'red.500',
      color: 'white'
    }
  }
})

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
      <CustomButton size="md" variant="danger">自定义按钮</CustomButton>
    </div>
  );
}

export default App;
