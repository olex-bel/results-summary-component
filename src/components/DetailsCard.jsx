import { Box, Button, Stack, Typography } from "@mui/material";
import CategoryDetail from "./CategoryDetail";

export default function DetailsCard({ details }) {
    return (
        <Stack 
            direction="column"
            maxWidth={
                {
                    xs: '100%',
                    sm: '400px',
                }
            }
            sx={
                {
                    p: 2,
                    mt: {
                        xs: 1,
                        sm: 6,
                    },
                }
            }
        >
            <Typography variant="h5" fontWeight={600}  mb={3}>Summary</Typography>
            
            {
                details.map((item, index) => (<CategoryDetail key={index} item={item} firstItem={index ===0} />))
            }
                
            <Box
                sx={
                    {
                        mt: {
                            xs: 2,
                            sm: 6,
                        },
                        alignSelf: {
                            xs: 'center',
                        },
                    }
                } 
            >
                <Button 
                    variant="contained"
                    sx={
                        {
                            width: '300px',
                            height: '50px',
                            borderRadius: '30px',
                        }
                    }
                >
                    Continue
                </Button>
            </Box>
        </Stack>
    );
}