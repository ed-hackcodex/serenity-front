import { Box, TextField, InputAdornment, IconButton} from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const TextInputField = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }
  return (
      <Box component='form' padding={2} sx={{ display: "flex", alignItems: "center"}}>
          <TextField 
            sx={{flexGrow: 1}}
            value={{transcript}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SendIcon />
                </InputAdornment>
              ),
            }}>
          </TextField>
          <IconButton onClick={console.log("Clicked!!!")} size="large">
            <MicIcon />
          </IconButton>
      </Box>
  );
}

export default TextInputField;