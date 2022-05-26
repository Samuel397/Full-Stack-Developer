import React from "react";

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard  from "./pages/admin/dashboard";

import Produtos from './pages/admin/Produtos';
import ProdutosCadastrar from "./pages/admin/Produtos/produtos.cadastrar";
import ProdutosEditar from "./pages/admin/Produtos/produtos.editar"; 

import Usuarios from './pages/admin/Usuario';
import UsuarioCadastrar from "./pages/admin/Usuario/usuario.cadastrar";
import UsuarioEditar from "./pages/admin/Usuario/usuario.editar";

import Home from "./pages/client/home";
import ProdutosDetails from "./pages/client/produto/produtos.details";
import Login from './pages/admin/login';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component={Home} />
                <Route path = "/produtos/:idProduto" exact component={ProdutosDetails} />
                
                
                <Route path = "/admin" exact component={Dashboard} />
                <Route path = "/admin/login" exact component={Login} />
               
                <Route path = "/admin/produtos" exact component={Produtos} />
                <Route path = "/admin/produtos/cadastrar" exact component={ProdutosCadastrar} />
                <Route path = "/admin/produtos/editar/:idProduto" exact component={ProdutosEditar} />


                <Route path = "/admin/usuarios" exact component={Usuarios} />
                <Route path = "/admin/usuarios/cadastrar" exact component={UsuarioCadastrar} />
                <Route path = "/admin/usuarios/editar/:idUsuario" exact component={UsuarioEditar} />

            </Switch>
        </BrowserRouter>
    )
}