import React, { useEffect } from 'react'
import { Character, Pagination } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters, setName } from './../../app/actions';
import styles from './index.module.css'
export const Index = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  const { charactersData } = state
  useEffect(() => {
    dispatch(fetchCharacters())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderCards() {
    if (charactersData.loading) {
      return <div className="loader">Loading...</div>
    }
    return charactersData?.characters?.map(character => {
      return (
        <Character
          key={`${character.name}-${character.id}`}
          character={character} />
      )
    })

  }
  return <>
    <div className={styles.filterContainer}>
      <input
        className={styles.inputName}
        placeholder="Escribe un nombre para filtrar"
        type="text" onChange={e => {
          dispatch(setName(e.target.value))
        }} />
      <Pagination />
    </div>

    <div
      className={styles.cardContainer}>
      {renderCards()}

    </div>

  </>


};

export default Index
