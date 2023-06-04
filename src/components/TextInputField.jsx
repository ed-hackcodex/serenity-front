import { Box, TextField, InputAdornment } from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';

export default function TextInputField() {
    return (
        <Box component='form' padding={2} sx={{ display: "flex", alignItems: "center"}}>
            <TextField sx={{flexGrow: 1}}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SendIcon />
                      </InputAdornment>
                    ),
                  }}>
            </TextField>
            <MicIcon fontSize="large"/>
        </Box>
    );
}