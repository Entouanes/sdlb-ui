import React from 'react';
import MyVirtualizedTimeline from './MyVirtualizedTimeline';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../GlobalStyle';
import '../../theme/font/roboto.css'
import theme from '../../theme';
import Attempt from '../../utils/Attempt';

type TimelineComponentProps = {
    attempt: Attempt;
};
const TimelineComponent: React.FC<TimelineComponentProps> = ({attempt}) => {
    return (
        <ThemeProvider theme={theme}>
        <GlobalStyle />
            <MyVirtualizedTimeline run={attempt.run} rows={attempt.rows} mode="startTime" />
        </ThemeProvider>
    );
};

export default TimelineComponent;
