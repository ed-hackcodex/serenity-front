import { Box, TextareaAutosize, IconButton} from "@mui/material";
import { styled } from '@mui/material/styles';
import MicIcon from '@mui/icons-material/Mic';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const CustomTextarea = styled(TextareaAutosize)(
  () => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
`,
);

const TextInputField = () => {
  const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }
  return (
      <Box component='form' padding={2} sx={{ display: "flex", alignItems: "center"}}>
          <CustomTextarea 
            sx={{flexGrow: 1}}
            value={transcript}
          >
          </CustomTextarea>
          <IconButton onClick={SpeechRecognition.startListening} size="large" color="inherit">
            <MicIcon />
          </IconButton>
      </Box>
  );
}

export default TextInputField;