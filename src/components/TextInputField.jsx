import { useEffect, useState } from 'react'
import { Box, TextField, InputAdornment, IconButton } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'
import SendIcon from '@mui/icons-material/Send'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const TextInputField = ({ onSend }) => {
  const [value, setValue] = useState('')

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (!listening && transcript) {
      onSend({ role: 'user', content: transcript })
      console.log(transcript);
      resetTranscript()
    }
  }, [listening, onSend, resetTranscript, transcript, value])

  const handleSend = () => {
    onSend({ role: 'user', content: value })
    setValue('')
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&apos;t support speech recognition.</span>;
  }

  return (
    <Box padding={2} sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        autoComplete="off"
        sx={{ flexGrow: 1, '& .MuiInputBase-input': { color: 'white' } }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={listening}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={handleSend}>
              <SendIcon sx={{ color: 'white' }} />
            </InputAdornment>
          ),
        }}>
      </TextField>
      <IconButton onClick={() => SpeechRecognition.startListening({ language: 'en-US' })} size="large" color="inherit">
        <MicIcon />
      </IconButton>
    </Box>
  );
}

export default TextInputField;