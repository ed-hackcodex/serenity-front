import { Typography} from '@mui/material';
import { useEffect, useState } from 'react';

let timer;
const welcomeMsg = 'Hi User, my name is Karla, your mental health companion. Do you feel like talking or just messaging?';
const welcomeMsgWords = welcomeMsg.split(' ');
let wordIdx = 0;
export default function SystemOutputText() {
    const [text, setText] = useState('');
    const typeWriter = () => {
        if (wordIdx < welcomeMsgWords.length) {
            console.log(welcomeMsgWords[wordIdx])
            setText(value => value + ' ' + welcomeMsgWords[wordIdx])
            wordIdx++;
        }
        clearInterval(timer);
    }
    useEffect(() => {
        timer = setInterval(() => {
            typeWriter()
        }, 200)
    }, [])
    return (
        <Typography variant='h3' component='div' fontFamily='karla'>
            {text}
        </Typography>
    )
}