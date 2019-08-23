import React, { Component } from 'react'
import { FaEnvelope, GoRepoClone, FaStar, FaRegStar, MdDescription } from "react-icons/all";
import { ContainerFilho, User, Repos, Img, Texto, HeaderInfo, InfoUser, InfoRepos, HeaderRepo, InfoRepo } from "./styles";

class Result extends Component {
    state = {
        user: this.props.user
    }

    render() {
        
        const { user, repos } = this.props

        return (
            <ContainerFilho>
                <User>
                    <HeaderInfo />
                    <InfoUser>
                        {
                            user.avatar_url !== null ? (
                                <Img src={user.avatar_url} className={`Avatar ${user.login}`}/>
                            ) : <Texto>Sem Foto</Texto>
                        }

                        {
                            user.name !== null ? (
                                <Texto fontSize='30px'>{user.name}</Texto>
                            ) : <Texto fontSize='30px'>Sem nome</Texto>
                        }
                        {
                            user.login !== null ? (
                                <Texto fontSize='20px'>{user.login}</Texto>
                            ) : <Texto fontSize='20px'>Sem user</Texto>
                        }
                        {
                            user.email !== null
                            ? <Texto><FaEnvelope/>&ensp;{user.email}</Texto>
                            : <Texto><FaEnvelope/>&ensp;Sem e-mail</Texto> 
                        }
                        <br/>
                        {
                            user.bio !== null 
                                ? <Texto><GoRepoClone/>&ensp; {user.bio}</Texto>
                                : <Texto><GoRepoClone/>&ensp; Sem biografia</Texto>
                        }
                        <br/>
                        {
                            user.followers !== null 
                                ? <Texto><FaStar/>&ensp;{user.followers}</Texto>
                                : <Texto><FaStar/>&ensp;</Texto>
                        }
                        <br/>
                        {
                            user.following !== null 
                                ? <Texto><FaRegStar/>&ensp;{user.following}</Texto>
                                : <Texto><FaRegStar/>&ensp;</Texto>
                        }
                    </InfoUser>
                </User>
                <Repos>
                    <HeaderInfo />
                    <InfoRepos>
                        {repos.map(e => (
                            <>
                                <HeaderRepo key={e.id}>
                                    <Texto><a href={e.html_url} target='blank'>{e.name}</a></Texto>
                                </HeaderRepo>

                                <InfoRepo>
                                    {
                                        e.description !== null
                                            ? <Texto> <MdDescription/> {e.description} </Texto>
                                            : <Texto> <MdDescription/> Sem descrição </Texto>
                                    }
                                    <Texto className='repo-star'>
                                        <i className='far fa-star'></i>
                                        {e.stargazers_count}
                                    </Texto>
                                </InfoRepo>
                            </>
                        ))}
                    </InfoRepos>
                </Repos>
            </ContainerFilho>
        )
    }
}

export default Result