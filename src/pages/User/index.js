import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container } from './styles';

export default function User() {
  // const [dataUser, setDataUser] = useState({});
  // const [dataRepos, setDataRepos] = useState({});
  const [dataGithub, setDataGithub] = useState({});

  const { data } = useSelector(state => ({
    data: state.user
  }));

  data.then(response => {
    setDataGithub(response);
  });

  console.log(dataGithub);
  return (
    <>
      <Header />
      <Container>
        {dataGithub?.loading && <span>Loading ...</span>}
        <h1>{dataGithub?.dataUser?.login}</h1>
      </Container>
      <Footer />
    </>
  );
}
