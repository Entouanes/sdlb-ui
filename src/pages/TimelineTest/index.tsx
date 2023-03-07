import React from 'react';
import MyVirtualizedTimeline from '../../components/Timeline/MyVirtualizedTimeline';
import { TaskRow } from '../../components/Timeline/MyVirtualizedTimeline';
import { Run } from '../../types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../GlobalStyle';
import '../../theme/font/roboto.css'
import theme from '../../theme';
import Attempt from '../../utils/Attempt';


const TimelineTest: React.FC = () => {
    const x = new Attempt('vmdl.9619.1');
  
    const rows: TaskRow[] = x.rows;
    const run: Run = {
        flow_id: 'HelloFlow',
        run_number: 1,
        status: 'completed',
        user: 'test',
        user_name: 'testName',
        ts_epoch: Math.min(...(rows.flatMap(row => row.data.map(t => t.started_at!).filter(x=>x)))) - 10, // start 10ms earlier
        finished_at: Math.max(...(rows.flatMap(row => row.data.map(t => t.finished_at!).filter(x=>x)))),
        system_tags: []
    }
    return (
        <ThemeProvider theme={theme}>
        <GlobalStyle />
            <MyVirtualizedTimeline run={run} rows={rows} mode="startTime" />
        </ThemeProvider>
    );
};

export default TimelineTest;
