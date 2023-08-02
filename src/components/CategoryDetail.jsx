
import { Stack, Paper, Typography, Box } from "@mui/material";

export default function CategoryDetail( { item, firstItem }) {
    const backgroundColor = `${item.category.toLowerCase()}.light`;
    const categoryTextColor = `${item.category.toLowerCase()}.main`;

    return (
        <Paper
            sx={
                {
                    width: '300px',
                    height: {
                        xs: '50px',
                        sm: '60px',
                    },
                    bgcolor: backgroundColor,
                    borderRadius: '10px',
                    mt: firstItem? 0 : 2,
                    alignSelf: {
                        xs: 'center',
                    },
                }
            }
        >
            <Stack 
                width="100%"
                height="100%"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                p={2}
            >
                <Stack
                    direction="row"
                >
                    <img src={item.icon} alt="icon" />
                    <Typography 
                        ml={1} 
                        color={categoryTextColor}
                    >
                        {item.category}
                    s</Typography>
                </Stack>
                <Typography justifySelf="flex-end" fontWeight="bold">
                    <Box component="span">{item.score}</Box> / <Box component="span" color="santasGray.main">100</Box>
                </Typography>
            </Stack>
        </Paper>
    );
}