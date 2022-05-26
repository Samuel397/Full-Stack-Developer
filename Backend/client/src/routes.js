import React from "react";

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard  from "./pages/admin/dashboard";

import Produtos from './pages/admin/Produtos';
import ProdutosCadastrar from "./pages/admin/Produtos/produtos.cadastrar";
import ProdutosEditar from "./pages/admin/Produtos/produtos.editar"; 

import Usuarios from './pages/admin/Usuario';
import UsuarioCadastrar from "./pages/admin/Usuario/usuario.cadastrar";
import UsuarioEditar from "./pages/admin/Usuario/usuario.editar";

import Home from "./pages/client/home/index";
import ProdutosDetails from "./pages/client/produto/produtos.details";
import Login from './pages/admin/login';

import PrivateRoute from './services/wAuth';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component={Home} />
                <Route path = "/produtos/:idProduto" exact component={ProdutosDetails} />
                
                <Route path = "/admin/login" exact component={Login} />
                <PrivateRoute path = "/admin" exact component={Dashboard} />
                
               
                <PrivateRoute path = "/admin/produtos" exact component={Produtos} />
                <PrivateRoute path = "/admin/produtos/cadastrar" exact component={ProdutosCadastrar} />
                <PrivateRoute path = "/admin/produtos/editar/:idProduto" exact component={ProdutosEditar} />


                <PrivateRoute path = "/admin/usuarios" exact component={Usuarios} />
                <PrivateRoute path = "/admin/usuarios/cadastrar" exact component={UsuarioCadastrar} />
                <PrivateRoute path = "/admin/usuarios/editar/:idUsuario" exact component={UsuarioEditar} />

            </Switch>
        </BrowserRouter>
    )
}