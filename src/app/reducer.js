const initialState = {
  characters: [],
  loading: false,
  error: null,
  filterByName: "",
  pagination: {
    page: 1
  },

  modal: {
    isOpenModal: false,
    modalContent: ""
  }
}
const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUESTS":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        characters: action.payload.results,
        pagination: { page: state.pagination.page, ...action.payload.info },
        loading: false,
      }
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case "SET_NAME":
      return {
        ...state,
        pagination: { ...state.pagination, page: 1 },
        filterByName: `${action.payload}`
      }
    case "NEXT_PAGE":
    case "PREV_PAGE":
      return {
        ...state,
        pagination: { ...state.pagination, page: action.payload },
      }
    case "SET_IS_OPEN_MODAL":
      return {
        ...state,
        modal: { ...state.modal, isOpenModal: action.payload, }
      }
    case "SET_MODAL_CONTENT":
      return {
        ...state,
        modal: { modalContent: action.payload, isOpenModal: true, }
      }

    default:
      return state;
  }
}

export default charactersReducer