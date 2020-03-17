import React, { useState } from 'react';
import { FaSearch } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import allActions from '../../store/actions';
import { Container } from './styles';

export default function Main() {
  const history = useHistory();

  const [userSearch, setUserSearch] = useState('');

  const dispatch = useDispatch();

  function handleSearch() {
    dispatch(allActions.userActions.requestSearchGithub(userSearch));
    history.push('/user');
  }

  return (
    <>
      <Header />
      <Container>
        <span>Faça uma busca pelo user:</span>
        <div className="container-search">
          <input
            type="text"
            onChange={e => setUserSearch(e.target.value)}
            onKeyPress={e => e.charCode === 13 && handleSearch()}
          />
          <FaSearch onClick={() => handleSearch()} />
        </div>
      </Container>
      <Footer />
    </>
  );
}
