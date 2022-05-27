import React from "react";

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard  from "./pages/admin/dashboard";
import ClientProdutosDetails from "./pages/client/produto/produtos.details"

import Produtos from './pages/admin/Produtos';
import ProdutosCadastrar from "./pages/admin/Produtos/produtos.cadastrar";
import ProdutosEditar from "./pages/admin/Produtos/produtos.editar"; 

import Usuarios from './pages/admin/Usuario';
import UsuarioCadastrar from "./pages/admin/Usuario/usuario.cadastrar";
import UsuarioEditar from "./pages/admin/Usuario/usuario.editar";

import Logon from "./pages/client/home";
import ProdutosDetails from "./pages/client/produto/produtos.details";
import Login from './pages/admin/login';

import PrivateRoute from './services/wAuth';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component={Logon} />
                <Route path = "/produtos/:idProduto" exact component={ProdutosDetails} />
                
                <Route path = "/admin/login" exact component={Login} />
                <Route path = "/client/produto" exact component={ClientProdutosDetails} />
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