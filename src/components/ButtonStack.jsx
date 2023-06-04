import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const CustomButton = styled(Button) ({
    color: 'white',
    borderColor: 'white',
    borderRadius: '50px'
})

export default function ButtonStack(prop) {
    return (
        <Stack spacing={1} padding={2}>
            <CustomButton size='large' variant='outlined' onClick={prop.handleButtonStack}>Chat</CustomButton>
            <CustomButton  size='large' variant='outlined' onClick={prop.handleShowResponseInText}>Talk</CustomButton>
            {/* <CustomButton  size='large' variant='outlined' onClick={prop.handleButtonStack}>Both</CustomButton> */}
        </Stack>
    );
}
