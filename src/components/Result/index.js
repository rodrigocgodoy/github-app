import React, { Component } from "react";
import {
  FaEnvelope,
  GoRepoClone,
  FaStar,
  FaRegStar,
  MdDescription,
  FaLocationArrow,
  MdWeb,
  FaIndustry
} from "react-icons/all";
import {
  ContainerFilho,
  User,
  Repos,
  Img,
  Texto,
  HeaderInfo,
  InfoUser,
  InfoRepos,
  InfoRepo,
  ButtonVisit
} from "./styles";

class Result extends Component {
  state = {
    user: this.props.user
  };

  render() {
    const { user, repos } = this.props;

    return (
      <ContainerFilho>
        <User>
          <HeaderInfo />
          <InfoUser>
            {user.avatar_url !== null ? (
              <a href={user.html_url} target="blank">
                <Img src={user.avatar_url} className={`Avatar ${user.login}`} />
              </a>
            ) : (
              ""
            )}
            <a href={user.html_url} target="blank">
              <ButtonVisit>
                <span>Visitar perfil</span>
              </ButtonVisit>
            </a>
            {user.name !== null ? (
              <Texto
                fontSize="30px"
                // borderBottom="border-bottom: 2px solid #663399;"
              >
                {user.name}
              </Texto>
            ) : (
              <Texto fontSize="30px">Sem nome</Texto>
            )}

            {user.login !== null ? (
              <Texto fontSize="20px">{user.login}</Texto>
            ) : (
              ""
            )}
            {user.location !== null ? (
              <Texto>
                <FaLocationArrow />
                &ensp;{user.location}
              </Texto>
            ) : (
              ""
            )}
            {user.company !== null ? (
              <Texto>
                <FaIndustry />
                &ensp;{user.company}
              </Texto>
            ) : (
              ""
            )}
            {user.blog !== null ? (
              <Texto>
                <MdWeb />
                &ensp;{user.blog}
              </Texto>
            ) : (
              ""
            )}
            {user.email !== null ? (
              <Texto>
                <FaEnvelope />
                &ensp;{user.email}
              </Texto>
            ) : (
              ""
            )}
            {user.bio !== null ? (
              <Texto>
                <GoRepoClone />
                &ensp; {user.bio}
              </Texto>
            ) : (
              ""
            )}
            {user.followers !== null ? (
              <Texto>
                <FaStar />
                &ensp;{user.followers}
              </Texto>
            ) : (
              ""
            )}
            {user.following !== null ? (
              <Texto>
                <FaRegStar />
                &ensp;{user.following}
              </Texto>
            ) : (
              ""
            )}
          </InfoUser>
        </User>
        <Repos>
          <HeaderInfo />
          <InfoRepos>
            {repos.map(e => (
              <InfoRepo key={e.node_id}>
                <Texto fontSize="20px">
                  <a href={e.html_url} target="blank">
                    {user.login} / {e.name}
                  </a>
                </Texto>
                <Texto>Linguagem: {e.language}</Texto>
                {e.description !== null ? (
                  <Texto>
                    <MdDescription /> {e.description}{" "}
                  </Texto>
                ) : (
                  ""
                )}
                <Texto>
                  <FaRegStar />
                  {e.stargazers_count}
                </Texto>

                <a href={e.html_url} target="blank">
                  <ButtonVisit hide="true">
                    <span>Visitar repositório</span>
                  </ButtonVisit>
                </a>
              </InfoRepo>
            ))}
          </InfoRepos>
        </Repos>
      </ContainerFilho>
    );
  }
}

export default Result;
