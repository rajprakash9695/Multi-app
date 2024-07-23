import { Chip } from '@mui/material';
import { useDrag } from 'react-dnd';

import React from 'react';

function DraggableChips({ label }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CHIP',
    item: { label },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Chip label={label} />
    </div>
  );
}

export default DraggableChips;
