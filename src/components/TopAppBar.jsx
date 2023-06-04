import { AppBar, Toolbar, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopAppBar() {
    return (
        <AppBar color="transparent" position='static' sx={{boxShadow: 0}}>
            <Toolbar>
                <Typography sx={{flexGrow: 1}} />
                <IconButton size='large' color='inherit'>
                    <SettingsIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}