const requestSearchGithub = user => {
  return {
    type: 'REQUEST_SEARCH_GITHUB',
    payload: { user }
  };
};

export default {
  requestSearchGithub
};
