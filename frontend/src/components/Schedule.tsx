import { Box } from '@mui/material';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

type ScheduleProps = {
    
};

const Schedule:React.FC<ScheduleProps> = () => {
    
    return (
        <Box 
            width="100%" 
            height="100%" 
            display="flex" 
            flexDirection="column" 
            borderLeft="1px solid red" 
            alignItems="center" 
            justifyContent="flex-start"
        >
            Schedule
        </Box>
    )
}
export default Schedule;