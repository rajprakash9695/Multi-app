import { Box } from '@mui/material';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DraggableChips } from './DragableChips';

const groupedVideos = {
  name: 'L',
};

function DragProvider() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Box my={3} display={'flex'} gap={2} flexWrap={'wrap'}>
          {groupedVideos &&
            Object.keys(groupedVideos).map((key) => (
              <Box key={key}>
                <DraggableChips label={capitalCase(key)} />
              </Box>
            ))}
        </Box>
      </DndProvider>
    </div>
  );
}

export default DragProvider;
