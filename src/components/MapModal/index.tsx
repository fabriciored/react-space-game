import { useState } from 'react';
import Modal from 'react-modal';

import './style.scss'

import { RiTreasureMapFill } from 'react-icons/ri';

export default function MapModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return(
    <>
      <button onClick={openModal}>
      <RiTreasureMapFill size={60}/>
      </button>
      <Modal
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0)'
        },
        content: {
          position: 'absolute',
          top: '60px',
          left: '10vw',
          right: '10vw',
          bottom: '200px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
      }}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Map Modal"
      >
        <h1>Map</h1>
        <button onClick={closeModal}>close</button>
      </Modal>
      </>
  )
}