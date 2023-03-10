import React, { useCallback } from 'react';
import { Run } from '../../types';
import styled from 'styled-components';
import Timeline from './Timeline';
import useTimelineControls from './useTimelineControls';

import { Step, Task } from '../../types';
import { StepRowData } from './useTaskData';

//
// Typedef
//

export type StepRow = { type: 'step'; data: Step; rowObject: StepRowData };
export type TaskRow = { type: 'task'; data: Task[] };
export type Row = StepRow | TaskRow;

type MyTimelineProps = {
  run: Run;
  rows: Row[];
  mode: 'left' | 'startTime'; // use 'left' if sort order is duration. 
};

//
// Component
//

const VirtualizedTimeline: React.FC<MyTimelineProps> = ({
  run,
  rows,
  mode
}) => {
  const { timelineControls, dispatch: timelineControlDispatch } = useTimelineControls(run, rows, mode);

  //
  // Event handling
  //

  const footerHandleUpdate = useCallback(
    (which: 'left' | 'right', to: number) => {
      if (which === 'left') {
        timelineControlDispatch({
          type: 'setZoom',
          start:
            to < timelineControls.min
              ? timelineControls.min
              : to > timelineControls.timelineEnd - 500
              ? timelineControls.timelineStart
              : to,
          end: timelineControls.timelineEnd,
        });
      } else {
        timelineControlDispatch({
          type: 'setZoom',
          start: timelineControls.timelineStart,
          end:
            to > timelineControls.max
              ? timelineControls.max
              : to < timelineControls.timelineStart + 500
              ? timelineControls.timelineEnd
              : to,
        });
      }
    },
    [
      timelineControlDispatch,
      timelineControls.max,
      timelineControls.min,
      timelineControls.timelineEnd,
      timelineControls.timelineStart,
    ],
  );

  /* kept for later...
  const zoom = (type: 'in' | 'out' | 'reset') => {
    if (type === 'in') {
      timelineControlDispatch({ type: 'zoomIn' });
    } else if (type === 'out') {
      timelineControlDispatch({ type: 'zoomOut' });
    } else if (type === 'reset') {
      timelineControlDispatch({ type: 'resetZoom' });
    }
  };
  */

  const handleMove = useCallback(
    (value: number) => timelineControlDispatch({ type: 'move', value: value }),
    [timelineControlDispatch],
  );

  return (
    <VirtualizedTimelineContainer>
        {rows.length > 0 && (
          <Timeline
            rows={rows}
            timeline={{
              startTime: timelineControls.min,
              endTime: timelineControls.max,
              visibleStartTime: timelineControls.timelineStart,
              visibleEndTime: timelineControls.timelineEnd,
              sortBy: "startTime",
              groupingEnabled: false
            }}
            onHandleMove={footerHandleUpdate}
            onMove={handleMove}
          />
        )}
    </VirtualizedTimelineContainer>
  );
};

//
// Style
//

const VirtualizedTimelineContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  user-select: none;
`;

/* const MyVirtualizedTimelineSubContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`; */

export default VirtualizedTimeline;
