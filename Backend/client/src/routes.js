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
