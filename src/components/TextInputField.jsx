import { Box, TextField } from "@mui/material";

export default function TextInputField() {
    return (
        <Box component='form' padding={2}>
            <TextField fullWidth></TextField>
        </Box>
    );
}