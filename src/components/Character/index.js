import React from 'react'
import styles from './index.module.css'
import { shape, string } from 'prop-types'
import { useDispatch } from 'react-redux';
import { setModalContent } from './../../app/actions';
const Index = ({ character }) => {
  const dispatch = useDispatch();
  const getCharacterData = () => {
    return (<div >
      <img src={character?.image} alt="" />
      <p>Name: {character?.name}</p>
      <p>Specie: {character?.species}</p>
      <p>Gender: {character?.gender}</p>
      <p>Location: {character?.location?.name}</p>
      <p>Status:{character.status}</p>
    </div>)
  }
  return (
    <div
      onClick={() => {
        dispatch(
          setModalContent(
            getCharacterData()
          ))
      }}
      className={styles.card}>
      <div>
        <img
          className={styles.imgCard}
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className={styles.descriptionContainer}>
        <p>{character.name}</p>
        <span>{character.species}</span>
      </div>

    </div>
  )
}
Index.propTypes = {
  character: shape(
    {
      image: string,
      name: string,
      species: string,
      gender: string,
      location: shape({
        name: string
      })
    }
  )
}
export default Index
