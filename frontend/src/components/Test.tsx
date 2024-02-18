import React from 'react';
import { Box, Button } from '@mui/material';


type TestProps = {
};

const Test:React.FC<TestProps> = () => {
    
    return (
        <>
            <Box width="100%" display="flex" border="1px solid red" height="50vh" color="black">
                <Button variant="contained" color="secondary" onClick={() => console.log("test")}>
                    {"Click Me"}
                </Button>
                <Box width="75%" mt={3} mb={3} border="1px solid green">
                </Box>
            </Box>
        </>
    )
}
export default Test;