import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyled from './styles/global';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyled />
      <Header />
      <Board />
    </DndProvider>
  );
}

export default App;
