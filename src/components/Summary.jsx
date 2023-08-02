
import { Paper, Stack, Grid } from '@mui/material';
import ResultCard from './ResultCard';
import DetailsCard from './DetailsCard';
import scoreDetails from '../data.json';

const calculateAvgScore = function (details) {
    const totalScore =  details.reduce((total, item) => {
        total += item.score;
        return total;
    }, 0);

    return Math.round(totalScore / details.length);
};

export default function Summary() {
    const avgScore = calculateAvgScore(scoreDetails);

    return (
        <Paper
            sx={
                {
                    maxWidth: {
                        xs: '100%',
                        sm: 'min-content'
                    },
                    borderRadius: {
                        xs: '0',
                        sm: '8%',
                    },
                    boxShadow: {
                        xs: 0,
                        sm: 1,
                    },
                }
            }
        >
            <Stack 
                direction={
                    {
                        xs: 'column',
                        sm: 'row',
                    }
                }
            >
                <ResultCard score={avgScore} />
                <DetailsCard details={scoreDetails} />
            </Stack>
        </Paper>
    )
};
