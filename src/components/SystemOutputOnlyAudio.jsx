import { Box, Container } from "@mui/material"

export default function SystemOutputOnlyAudio() {
    return (
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <Box
                sx={{
                width: 300,
                height: 300,
                borderRadius: '50%',
                backgroundColor: 'primary.dark',
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                }}} />
        </Container>
    )
}