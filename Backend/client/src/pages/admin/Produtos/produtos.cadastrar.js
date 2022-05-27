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


export default function ProdutoCadastrar() {
  
  const mdTheme = createTheme();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  async function handleSubmit(){

      const data = {
      nome_produto:nome, 
      descricao_produto:descricao,
      preco_produto:preco,
      qtd_produto:quantidade}
      console.log(data);
      
      if(nome !== '' && descricao !=='' && preco !== '' && quantidade !==''){
      const response = await api.post('/api/produtos', data);
         if(response.status === 200){
            window.location.href='/admin/produtos'
          }else{
            alert('Erro ao cadastrar o produto!');
         }
         }else{
            alert('Preencha todos os campos! ');
         }
         console.log("oi");
  }  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
         <MenuAdmin title={'PRODUTOS'} />
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
                  <h2>Cadastro de Produtos</h2>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="nome"
                    name="nome"
                    label="Nome do Produto"
                    fullWidth
                    autoComplete="nome"                   
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
            </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="descricao"
                    name="descricao"
                    label="Descrição"
                    fullWidth
                    autoComplete="descricao"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                  />
               </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                      <InputLabel id="LabelQuantidade">Quantidade</InputLabel>
                           <Select
                              labelId="LabelQuantidade"
                              id="quantidade"
                              value={quantidade}
                              label="Quantidade"
                              onChange={e => setQuantidade(e.target.value)}
                             >                          
                              <MenuItem value={1}>10</MenuItem>
                              <MenuItem value={2}>50</MenuItem>
                              <MenuItem value={3}>100</MenuItem> 
                              <MenuItem value={4}>200</MenuItem> 
                              <MenuItem value={5}>400</MenuItem> 
                              <MenuItem value={6}>800</MenuItem>                                
                             </Select>
                  </FormControl>
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                    type="preco"
                    required
                    id="preco"
                    name="preco"
                    label="Preço"
                    fullWidth
                    autoComplete="preco"
                    value={preco}
                    onChange={e => setPreco(e.target.value)}
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