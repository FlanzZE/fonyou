import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, prevPage } from './../../app/actions';
import styles from './index.module.css'
const Index = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  const { charactersData } = state
  return charactersData?.pagination && (
    <div className={styles.paginationMainContainer}>
      <button
        className={styles.button}
        onClick={() => {
          dispatch(prevPage())
        }}
        disabled={!charactersData?.pagination?.prev}
      >Prev</button>
      {charactersData?.pagination?.page}
      <button
        className={styles.button}
        onClick={() => {
          dispatch(nextPage())
        }}
        disabled={!charactersData?.pagination?.next}
      >Next</button>
    </div>
  )
}

export default Index
