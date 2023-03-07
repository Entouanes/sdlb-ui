import React from 'react';
import MyVirtualizedTimeline from './MyVirtualizedTimeline';
import { TaskRow } from './MyVirtualizedTimeline';
import { Run } from '../../types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../GlobalStyle';
import '../../theme/font/roboto.css'
import theme from '../../theme';
import Attempt from '../../utils/Attempt';


const TimelineComponent: React.FC = () => {
    const x = new Attempt('vmdl.9619.2');
  
    const rows: TaskRow[] = x.rows;
    const run: Run = x.run;
    return (
        <ThemeProvider theme={theme}>
        <GlobalStyle />
            <MyVirtualizedTimeline run={run} rows={rows} mode="startTime" />
        </ThemeProvider>
    );
};

export default TimelineComponent;
