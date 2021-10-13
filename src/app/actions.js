import Axios from "axios"
export const FETCH_POSTS_REQUESTS = 'FETCH_POSTS_REQUESTS'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'
export const SET_NAME = 'SET_NAME'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const SET_IS_OPEN_MODAL = 'SET_IS_OPEN_MODAL'
export const SET_MODAL_CONTENT = 'SET_MODAL_CONTENT'
const apiURL = "https://rickandmortyapi.com/api/character?count=20"
export const fetchCharacters = () => async (dispatch, getState) => {
  const { charactersData } = getState()
  dispatch({ type: FETCH_POSTS_REQUESTS })
  try {
    const response = await Axios.get(apiURL + `&name=${charactersData?.filterByName || ""}&count=20&page=${charactersData?.pagination?.page || ""}`);
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, error })
  }
}
export const setName = (name) => (dispatch) => {
  dispatch({ type: SET_NAME, payload: name })
  dispatch(fetchCharacters())
}
export const nextPage = () => (dispatch, getState) => {
  const { charactersData } = getState()
  dispatch({ type: NEXT_PAGE, payload: charactersData?.pagination?.page + 1 })
  dispatch(fetchCharacters())
}
export const prevPage = () => (dispatch, getState) => {
  const { charactersData } = getState()
  dispatch({ type: PREV_PAGE, payload: charactersData?.pagination?.page - 1 })
  dispatch(fetchCharacters())
}
export const setIsOpenModal = () => (dispatch, getState) => {
  const { charactersData } = getState()
  dispatch({ type: SET_IS_OPEN_MODAL, payload: !charactersData?.modal?.isOpenModal })
}
export const setModalContent = (content) => (dispatch) => {
  dispatch({ type: SET_MODAL_CONTENT, payload: content })
}
