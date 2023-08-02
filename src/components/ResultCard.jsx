
import { Paper, Typography, Stack, Box } from '@mui/material'

export default function ResultCard({ score }) {
    return (
        <Paper
            sx={
                {
                    maxWidth: '400px',
                    background: 'linear-gradient(#6743FF, #312CEB)',
                    color: 'white',
                    borderRadius: {
                        sm: '8%',
                        xs: '0 0 8% 8%',
                    },
                }
            }
        >
            <Stack 
                direction='column'
                alignItems='center'
                pt={
                    {
                        sm: 7,
                        xs: 2,
                    }
                }
                px={7}
                pb={{
                    sm: 5,
                    xs: 1,
                }}
            >
                <Typography variant='h5' color='melrose.main' fontWeight='bold' fontSize='1.7rem'>Your Result</Typography>
                <Box
                    sx={
                        {
                            width: {
                                sm: '230px',
                                xs: '160px',
                            },
                            height: {
                                sm: '230px',
                                xs: '160px',
                            },
                            borderRadius: '50%',
                            background: 'linear-gradient(#4C23CA, #4734F0)',
                        }
                    }
                    my={
                        {
                            sm: 4,
                            xs: 1,
                        }
                    }
                >
                    <Stack 
                        direction='column'
                        alignItems='center'
                        justifyContent='center'
                        height='100%'
                    >
                        <Typography variant='h2' fontWeight='900' fontSize='5rem'>{score}</Typography>
                        <Typography variant='h6' color='cornflowerBlue.main' fontWeight='bold'>of 100</Typography>
                    </Stack>
                </Box>
                <Typography variant='h4' fontWeight='bold'>Great</Typography>
                <Typography align='center' mt={2} color='melrose.main'>You scored higher than 65% of the people who have taken these tests.</Typography>
            </Stack>
        </Paper>
    )
}