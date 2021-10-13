import React from "react";
import { Characters, ModalComponent } from './components'
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css'
import { setIsOpenModal } from './app/actions';
const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state)

  return (
    <div className={styles.App}>

      <Characters />
      {state.charactersData.modal.isOpenModal && <ModalComponent
        className={styles.generalContainerModal}
        isOpenModal={state.charactersData.modal.isOpenModal}
        setShowModal={() => {
          dispatch(setIsOpenModal());
        }}
      >
        <div className={styles.modalContainer}>
          <button onClick={() => { dispatch(setIsOpenModal()); }}>X</button>
          <main>
            {state.charactersData.modal.modalContent}
          </main>
        </div>


      </ModalComponent>}
    </div>
  );
};

export default App;
