/**
 * Action Types
 */
export const Types = {
  LOAD_REQUEST: 'LOAD_BOOKS_REQUEST',
  LOAD_SUCCESS: 'LOAD_BOOKS_SUCCESS',
  LOAD_FAILURE: 'LOAD_BOOKS_FAILURE',
  PAGINATE_REQUEST: 'PAGINATE_BOOKS_REQUEST',
  PAGINATE_SUCCESS: 'PAGINATE_BOOKS_SUCCESS',
  PAGINATE_FAILURE: 'PAGINATE_BOOKS_FAILURE',
  SEARCH_REQUEST: 'SEARCH_BOOKS_REQUEST',
  SEARCH_SUCCESS: 'SEARCH_BOOKS_SUCCESS',
  SEARCH_FAILURE: 'SEARCH_BOOKS_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
  loading: false,
  loadingPaginate: false,
  error: false,
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload.data.items,
        loading: false,
        error: false,
      };
    case Types.LOAD_FAILURE:
      return { ...state, error: true, loading: false };
    case Types.PAGINATE_REQUEST:
      return { ...state, loadingPaginate: true };
    case Types.PAGINATE_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.data.items],
        loadingPaginate: false,
        error: false,
      };
    case Types.PAGINATE_FAILURE:
      return { ...state, error: true, loadingPaginate: false };
    case Types.SEARCH_REQUEST:
      return { ...state, loading: false };
    case Types.SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload.data.items,
        loading: false,
        error: false,
      };
    case Types.SEARCH_FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  loadBooksRequest: () => ({
    type: Types.LOAD_REQUEST,
  }),

  loadBooksSuccess: data => ({
    type: Types.LOAD_SUCCESS,
    payload: { data },
  }),

  loadBooksFailure: () => ({
    type: Types.LOAD_FAILURE,
  }),

  paginateBooksRequest: startIndex => ({
    type: Types.PAGINATE_REQUEST,
    payload: { startIndex },
  }),

  paginateBooksSuccess: data => ({
    type: Types.PAGINATE_SUCCESS,
    payload: { data },
  }),

  paginateBooksFailure: () => ({
    type: Types.PAGINATE_FAILURE,
  }),

  searchBooksRequest: search => ({
    type: Types.SEARCH_REQUEST,
    payload: { search },
  }),

  searchBooksSuccess: data => ({
    type: Types.SEARCH_SUCCESS,
    payload: { data },
  }),

  searchBooksFailure: () => ({
    type: Types.SEARCH_FAILURE,
  }),
};
