import { Typography } from '@mui/material';
import { useCallback, useEffect, useRef } from 'react';

let timer;
let letterIndex = 0;
export default function SystemOutputText({ text }) {
    const label = useRef()

    const typeWriter = useCallback(() => {
        if (letterIndex < text.length) {
            label.current.innerHTML += text[letterIndex]
            letterIndex++;
        }
    }, [text])

    useEffect(() => {
        timer = setInterval(() => {
            typeWriter()
        }, 40)
        return () => clearInterval(timer)
    }, [typeWriter])

    useEffect(() => {
        label.current.innerHTML = ''
        letterIndex = 0
    }, [text])

    return (
        <Typography variant='h4' fontFamily='karla' ref={label} onClick={() => clearInterval(timer)} />
    )
}