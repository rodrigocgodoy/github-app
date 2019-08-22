import React, { Component } from 'react'
import { FaSearch } from "react-icons/all";
import { Container, Logo, InputSearch, Img, Input, Button } from "./styles";

class Result extends Component {
    state = {
        user: this.props.user
    }

    render() {
        
        const { user, repos } = this.props

        return (
            <>
                <h1>Teste</h1>
            </>
            // {
            //     user.avatar_url !== null ? (
            //         <img src={user.avatar_url} className='avatar' alt="Avatar"/>
            //     ) : <span className='name'>Sem Foto</span>
            // }
            // <br/>
            // {
            //     user.name !== null ? (
            //         <span className='name'>{user.name}</span>
            //     ) : <span className='name'>Sem nome</span>
            // }
            // <br/>
            // {
            //     user.login !== null ? (
            //         <span className='login'>{user.login}</span>
            //     ) : <span className='name'>Sem user</span>
            // }
            // <br/>
            // <div className='divInfo'>
            //     {
            //         user.email !== null
            //         ? <span className='info'><i className='far fa-envelope'></i>&ensp;{user.email}</span>
            //         : <span className='info'><i className='far fa-envelope'></i>&ensp;Sem e-mail</span> 
            //     }
            //     <br/>
            //     {
            //         user.bio !== null 
            //             ? <span className='info'><i className='far fa-bookmark'></i>&ensp; {user.bio}</span>
            //             : <span className='info'><i className='far fa-bookmark'></i>&ensp; Sem biografia</span>
            //     }
            //     <br/>
            //     {
            //         user.followers !== null 
            //             ? <span className='info'><i className='fas fa-star'></i>&ensp;{user.followers}</span>
            //             : <span className='info'><i className='fas fa-star'></i>&ensp;</span>
            //     }
            //     <br/>
            //     {
            //         user.following !== null 
            //             ? <span className='info'><i className='far fa-star'></i>&ensp;{user.following}</span>
            //             : <span className='info'><i className='far fa-star'></i>&ensp;</span>
            //     }

            // </div>
            // {repos.map(e => (
            //     <div key={e.id}>
            //         <span className='repo-name' >
            //             <a href={e.html_url} target='blank'>{e.name}</a>
            //         </span>
            //         <br/>
            //         {
            //             e.description !== null
            //                 ? <span className='repo-description'> {e.description} </span>
            //                 : <span className='repo-description'> Sem descrição </span>
            //         }
            //         <br/>
            //         <span className='repo-star'>
            //             <i className='far fa-star'></i>
            //             {e.stargazers_count}
            //         </span>
            //         <br/><br/><br/>
            //     </div>
            // ))}
        )
    }
}

export default Result