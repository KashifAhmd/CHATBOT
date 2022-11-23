import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import "./App.css";
import {Route, Router, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Stack>
        <Button colorScheme="whiteAlpha">
          Facebook
        </Button>
        <Button colorScheme="blackAlpha">
          Facebook
        </Button>
      </Stack>
    </div>
  );
}

export default App;
