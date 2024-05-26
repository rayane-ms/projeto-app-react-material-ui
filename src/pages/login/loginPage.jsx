import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import { teal } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LoginPage = () => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(teal[500]),
        backgroundColor: teal[500],
        '&:hover': {
        backgroundColor: teal[700],
        },
    }));

    return (
        <Grid container sx={{ background: 'white', borderRadius: '20px' }} xs={6} sm={5} md={4} justifyContent="center" alignItems="center" py={5}>
            <Stack direction="column" spacing={{ xs: 0.5, sm: 1, md: 2, lg: 4 }} justifyContent="center" alignItems="center" >
                <Grid justifyContent="center" item xs={12} minWidth="lg">
                    <PersonIcon sx={{ color: teal[500], width:'100%' }}/>
                </Grid> 
                <Grid justifyContent="center" item xs={8} sm={10} md={12}>
                    <Typography variant="h6" noWrap component="div" fontSize={'3.5vh'}>
                        Usuário
                    </Typography>
                    <TextField
                    required
                    id="outlined-user-input"
                    label="Digite o usuário"
                    type="user"
                    autoComplete="current-user"
                    sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid justifyContent="center" item xs={8} sm={10} md={12} >
                    <Typography variant="h6" noWrap component="div" fontSize={'3.5vh'}>
                        Senha
                    </Typography>
                    <TextField
                    required
                    id="outlined-password-input"
                    label="Digite a senha"
                    type="password"
                    autoComplete="current-password"
                    sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid justifyContent="center" item xs={8} sm={10} md={12} >
                    <ColorButton variant="contained" sx={{ width:'100%'}}>Enviar</ColorButton>
                </Grid>

            </Stack>
        </Grid>
    );
}

export default LoginPage