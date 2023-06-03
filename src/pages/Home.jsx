import { AppBar, Container, Toolbar} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SettingsIcon from '@mui/icons-material/Settings'

export default function Home() {
    return (
        <>
            <AppBar color="transparent">
                <Toolbar>
                    <IconButton size='large'>
                        <SettingsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container>
                <h1>Hi User!</h1>
            </Container>
        </>
    );
}