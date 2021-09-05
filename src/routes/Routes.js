import { Route, Redirect} from 'react-router-dom'
import {AuthContext} from '../context/auth'
import { useContext } from 'react';

import React from 'react'

//Aqui eu recebo o componente e vejo se ele é privado ou não e passo a props para ele
export default function RouteWrapper({
    componet: Component,
    isPrivate,
    ...rest 
}) {

    const { signed, laoding } = useContext(AuthContext);

   
     

    if(laoding){
        return(
            <div></div>
        )
    }

    if(!signed && isPrivate){ // s eo usuario esta NÃO esta logado e a rota é privada ele é redirecionado para a pagina principal que é o login
       return <Redirect to='/' />
    }

    if(!signed && isPrivate){ // s eo usuario  esta logado e a rota não é privada ele é redirecionado para a pagina de Dashboard
        return <Redirect to='/dashboard' />
     }

    return (
        <Route 
        {...rest}
        render={props => (
            <Component {...props}/>
        )}
        />
            
        
    )
}
