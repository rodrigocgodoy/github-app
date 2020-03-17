import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import allActions from '../../store/actions';
import { Container } from './styles';

export default function Main() {
  const [userSearch, setUserSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    // const getDataMarvel = () => {
    //   dispatch(allActions.characterActions.requestGetMarvel());
    // };
    // getDataMarvel();
  }, [userSearch]);

  return (
    <>
      <Header showSearch />
      <Container>
        <div className="container-search">
          <input type="text" onChange={e => setUserSearch(e.target.value)} />
        </div>
      </Container>
      <Footer />
    </>
  );
}
