import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Select } from '@mui/material';
import { FormControl } from '@mui/material';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';
import api from '../../../services/api'


export default function UsuarioCadastrar() {
  
  const mdTheme = createTheme();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');

  async function handleSubmit(){

      const data = {
      nome_usuario:nome, 
      email_usuario:email,
      senha_usuario:senha,
      tipo_usuario:tipo}
      
      
      if(nome !== '' && email !=='' && senha !== '' && tipo !==''){
      const response = await api.post('/api/usuarios', data);
      if(response.status === 200){
        window.location.href='/admin/usuarios'
      }else{
        alert('Erro ao cadastrar o usuário!');
      }
    }else{
      alert('Preencha todos os campos! ');
    }
  }  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
         <MenuAdmin title={'USUÁRIOS'} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <Paper className="classes.paper">
                  <h2>Cadastro de Usuários</h2>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    fullWidth
                    autoComplete="nome"                   
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
            </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
               </Grid>
                <Grid item xs={12} sm={3}>
                <FormControl fullWidth>
                      <InputLabel id="LabelTipo">Tipo</InputLabel>
                           <Select
                              labelId="LabelTipo"
                              id="Tipo"
                              value={tipo}
                              label="Tipo"
                              onChange={e => setTipo(e.target.value)}
                             >
                              <MenuItem value={1}>Administrador</MenuItem>
                              <MenuItem value={2}>Usuários</MenuItem>
                              
                             </Select>
                  </FormControl>
               </Grid>
               <Grid item xs={12} sm={3}>
                  <TextField
                    type="password"
                    required
                    id="senha"
                    name="senha"
                    label="Senha"
                    fullWidth
                    autoComplete="senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                  />
               </Grid>
               <Grid item xs={12} sm={12}>
               <Button variant="contained" onClick={handleSubmit} color="primary">Salvar</Button>
               </Grid>
               </Grid>
              </Paper>
              </Grid>
               
              </Grid>
            <Footer sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}