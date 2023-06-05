import { useState } from 'react'
import { Box, TextField, InputAdornment, IconButton } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'
import SendIcon from '@mui/icons-material/Send'

const TextInputField = ({ onSend }) => {
  const [value, setValue] = useState('')
  const handleSend = () => {
    onSend({ role: 'user', content: value })
  }
  return (
    <Box padding={2} sx={{ display: "flex", alignItems: "center"}}>
      <TextField
        sx={{flexGrow: 1}}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={handleSend}>
              <SendIcon />
            </InputAdornment>
          ),
        }}>
      </TextField>
      <IconButton onClick={() => console.log("Clicked!!!")} size="large" color='inherit'>
        <MicIcon />
      </IconButton>
    </Box>
  );
}

export default TextInputField;