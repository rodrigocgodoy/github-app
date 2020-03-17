const INITIAL_STATE = {
  dataUser: [],
  dataRepos: [],
  error: false,
  loading: false
};

const character = async (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_SEARCH_GITHUB':
      return { ...state, loading: true };
    case 'SUCCESS_SEARCH_GITHUB':
      return {
        ...state,
        loading: false,
        error: false,
        dataUser: action.payload.dataUser,
        DataRepos: action.payload.DataRepos
      };
    case 'FAILURE_SEARCH_GITHUB':
      return {
        ...state,
        dataUser: [],
        dataRepos: [],
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default character;
