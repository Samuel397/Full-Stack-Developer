import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import api from '../../../services/api';

const mdTheme = createTheme();

export default function ProdutosDetails() {

  const [produtos, setProdutos] = useState([]);
  useEffect(()=>{
    async function loadProdutos(){
      const response = await api.get('/api/produtos');
      setProdutos(response.data)
    }
    loadProdutos();
  },[])


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
         <MenuAdmin title={'PRODUTOS'}/>
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
                  <h2>Listagem de Produtos</h2>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>                  
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="center">Descrição</TableCell>
                            <TableCell align="center">Quantidade</TableCell>
                            <TableCell align="center">Preço</TableCell>
                            <TableCell align="center">Data</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {produtos.map((row) => (
                            <TableRow
                              key={row._id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.nome_produto}
                              </TableCell>
                              <TableCell align="center">{row.descricao_produto}</TableCell>
                              <TableCell align="center">{row.qtd_produto}</TableCell>
                              <TableCell align="center">{row.preco_produto}</TableCell>                              
                              <TableCell align="center">{new Date(row.createdAt).toLocaleString('pt-br')}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>                 
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
