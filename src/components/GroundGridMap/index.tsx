import { useState } from 'react'
import React from 'react'
import useKey from '../../hooks/UseKey'

import Modal from 'react-modal';
import { GiSwapBag } from 'react-icons/gi';

import './style.scss'

export function SnowGroundGridMap() {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [characterPosition, setCharacterPosition] = useState('2 3')

  function moveCharacter(direction: string) {
    if(direction === 'up') {
      if(characterPosition.split(' ')[1] === '100') {
        return null
      } 
      else {
        setCharacterPosition(characterPosition.split(' ')[0] + ' ' + ( parseInt(characterPosition.split(' ')[1]) - 1 ))
      }
    }

    if(direction === 'down') {
      if(characterPosition.split(' ')[1] === '100') {
        return null
      } 
      else {
        setCharacterPosition(characterPosition.split(' ')[0] + ' ' + ( parseInt(characterPosition.split(' ')[1]) + 1 ))
      }
    }

    if(direction === 'left') {
      if(characterPosition.split(' ')[0] === '100') {
        return null
      } 
      else {
        setCharacterPosition(( parseInt(characterPosition.split(' ')[0]) - 1 ) + ' ' + characterPosition.split(' ')[1])
      }
    }

    if(direction === 'right') {
      if(characterPosition.split(' ')[0] === '100') {
        return null
      } 
      else {
        setCharacterPosition(( parseInt(characterPosition.split(' ')[0]) + 1 ) + ' ' + characterPosition.split(' ')[1])
      }
    }
    
  }

  function handleKeyW() {
    moveCharacter('up')
  }

  function handleKeyA() {
    moveCharacter('left')
  }

  function handleKeyS() {
    moveCharacter('down')
  }

  function handleKeyD() {
    moveCharacter('right')
  }

  useKey("KeyW", handleKeyW)
  useKey("KeyA", handleKeyA)
  useKey("KeyS", handleKeyS)
  useKey("KeyD", handleKeyD)

  return(

    
    
    <div className="ground-grid">
      <table>
      <tr>
          <td className={`1 1 ${characterPosition === '1 1' ? 'highlight' : ''}`}></td>
          <td className={`2 1 ${characterPosition === '2 1' ? 'highlight' : ''}`}></td>
          <td className={`3 1 ${characterPosition === '3 1' ? 'highlight' : ''}`}></td>
          <td className={`4 1 ${characterPosition === '4 1' ? 'highlight' : ''}`}></td>
          <td className={`5 1 ${characterPosition === '5 1' ? 'highlight' : ''}`}></td>
          <td className={`6 1 ${characterPosition === '6 1' ? 'highlight' : ''}`}></td>
          <td className={`7 1 ${characterPosition === '7 1' ? 'highlight' : ''}`}></td>
          <td className={`8 1 ${characterPosition === '8 1' ? 'highlight' : ''}`}></td>
          <td className={`9 1 ${characterPosition === '9 1' ? 'highlight' : ''}`}></td>
          <td className={`10 1 ${characterPosition === '10 1' ? 'highlight' : ''}`}></td>
          <td className={`11 1 ${characterPosition === '11 1' ? 'highlight' : ''}`}></td>
          <td className={`12 1 ${characterPosition === '12 1' ? 'highlight' : ''}`}></td>
          <td className={`13 1 ${characterPosition === '13 1' ? 'highlight' : ''}`}></td>
          <td className={`14 1 ${characterPosition === '14 1' ? 'highlight' : ''}`}></td>
          <td className={`15 1 ${characterPosition === '15 1' ? 'highlight' : ''}`}></td>
          <td className={`16 1 ${characterPosition === '16 1' ? 'highlight' : ''}`}></td>
          <td className={`17 1 ${characterPosition === '17 1' ? 'highlight' : ''}`}></td>
          <td className={`18 1 ${characterPosition === '18 1' ? 'highlight' : ''}`}></td>
          <td className={`19 1 ${characterPosition === '19 1' ? 'highlight' : ''}`}></td>
          <td className={`20 1 ${characterPosition === '20 1' ? 'highlight' : ''}`}></td>
          <td className={`21 1 ${characterPosition === '21 1' ? 'highlight' : ''}`}></td>
          <td className={`22 1 ${characterPosition === '22 1' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>
          <td className={`1 2 ${characterPosition === '1 2' ? 'highlight' : ''}`}></td>
          <td className={`2 2 ${characterPosition === '2 2' ? 'highlight' : ''}`}></td>
          <td className={`3 2 ${characterPosition === '3 2' ? 'highlight' : ''}`}></td>
          <td className={`4 2 ${characterPosition === '4 2' ? 'highlight' : ''}`}></td>
          <td className={`5 2 ${characterPosition === '5 2' ? 'highlight' : ''}`}></td>
          <td className={`6 2 ${characterPosition === '6 2' ? 'highlight' : ''}`}></td>
          <td className={`7 2 ${characterPosition === '7 2' ? 'highlight' : ''}`}></td>
          <td className={`8 2 ${characterPosition === '8 2' ? 'highlight' : ''}`}></td>
          <td className={`9 2 ${characterPosition === '9 2' ? 'highlight' : ''}`}></td>
          <td className={`10 2 ${characterPosition === '10 2' ? 'highlight' : ''}`}></td>
          <td className={`11 2 ${characterPosition === '11 2' ? 'highlight' : ''}`}></td>
          <td className={`12 2 ${characterPosition === '12 2' ? 'highlight' : ''}`}></td>
          <td className={`13 2 ${characterPosition === '13 2' ? 'highlight' : ''}`}></td>
          <td className={`14 2 ${characterPosition === '14 2' ? 'highlight' : ''}`}></td>
          <td className={`15 2 ${characterPosition === '15 2' ? 'highlight' : ''}`}></td>
          <td className={`16 2 ${characterPosition === '16 2' ? 'highlight' : ''}`}></td>
          <td className={`17 2 ${characterPosition === '17 2' ? 'highlight' : ''}`}></td>
          <td className={`18 2 ${characterPosition === '18 2' ? 'highlight' : ''}`}></td>
          <td className={`19 2 ${characterPosition === '19 2' ? 'highlight' : ''}`}></td>
          <td className={`20 2 ${characterPosition === '20 2' ? 'highlight' : ''}`}></td>
          <td className={`21 2 ${characterPosition === '21 2' ? 'highlight' : ''}`}></td>
          <td className={`22 2 ${characterPosition === '22 2' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>
          <td className={`1 3 ${characterPosition === '1 3' ? 'highlight' : ''}`}></td>
          <td className={`2 3 ${characterPosition === '2 3' ? 'highlight' : ''}`}></td>
          <td className={`3 3 ${characterPosition === '3 3' ? 'highlight' : ''}`}>
          <button className="planet water">

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
          left: '20vw',
          right: '20vw',
          bottom: '200px',
          border: '1px solid #ccc',
          background: 'transparent',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
        }
      }}
        isOpen={characterPosition === '3 3'}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Inventory Modal"
      >
        <h1 style={{
          color: '#fff'
        }}>Water Planet</h1>
        <button onClick={closeModal}>close</button>
      </Modal>
          </button>
          </td>
          <td className={`4 3 ${characterPosition === '4 3' ? 'highlight' : ''}`}></td>
          <td className={`5 3 ${characterPosition === '5 3' ? 'highlight' : ''}`}></td>
          <td className={`6 3 ${characterPosition === '6 3' ? 'highlight' : ''}`}></td>
          <td className={`7 3 ${characterPosition === '7 3' ? 'highlight' : ''}`}></td>
          <td className={`8 3 ${characterPosition === '8 3' ? 'highlight' : ''}`}></td>
          <td className={`9 3 ${characterPosition === '9 3' ? 'highlight' : ''}`}></td>
          <td className={`10 3 ${characterPosition === '10 3' ? 'highlight' : ''}`}></td>
          <td className={`11 3 ${characterPosition === '11 3' ? 'highlight' : ''}`}></td>
          <td className={`12 3 ${characterPosition === '12 3' ? 'highlight' : ''}`}></td>
          <td className={`13 3 ${characterPosition === '13 3' ? 'highlight' : ''}`}></td>
          <td className={`14 3 ${characterPosition === '14 3' ? 'highlight' : ''}`}></td>
          <td className={`15 3 ${characterPosition === '15 3' ? 'highlight' : ''}`}></td>
          <td className={`16 3 ${characterPosition === '16 3' ? 'highlight' : ''}`}></td>
          <td className={`17 3 ${characterPosition === '17 3' ? 'highlight' : ''}`}></td>
          <td className={`18 3 ${characterPosition === '18 3' ? 'highlight' : ''}`}></td>
          <td className={`19 3 ${characterPosition === '19 3' ? 'highlight' : ''}`}></td>
          <td className={`20 3 ${characterPosition === '20 3' ? 'highlight' : ''}`}></td>
          <td className={`21 3 ${characterPosition === '21 3' ? 'highlight' : ''}`}></td>
          <td className={`22 3 ${characterPosition === '22 3' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>      
          <td className={`1 4 ${characterPosition === '1 4' ? 'highlight' : ''}`}></td>
          <td className={`2 4 ${characterPosition === '2 4' ? 'highlight' : ''}`}></td>
          <td className={`3 4 ${characterPosition === '3 4' ? 'highlight' : ''}`}></td>
          <td className={`4 4 ${characterPosition === '4 4' ? 'highlight' : ''}`}></td>
          <td className={`5 4 ${characterPosition === '5 4' ? 'highlight' : ''}`}></td>
          <td className={`6 4 ${characterPosition === '6 4' ? 'highlight' : ''}`}></td>
          <td className={`7 4 ${characterPosition === '7 4' ? 'highlight' : ''}`}></td>
          <td className={`8 4 ${characterPosition === '8 4' ? 'highlight' : ''}`}></td>
          <td className={`9 4 ${characterPosition === '9 4' ? 'highlight' : ''}`}></td>
          <td className={`10 4 ${characterPosition === '10 4' ? 'highlight' : ''}`}></td>
          <td className={`11 4 ${characterPosition === '11 4' ? 'highlight' : ''}`}></td>
          <td className={`12 4 ${characterPosition === '12 4' ? 'highlight' : ''}`}></td>
          <td className={`13 4 ${characterPosition === '13 4' ? 'highlight' : ''}`}></td>
          <td className={`14 4 ${characterPosition === '14 4' ? 'highlight' : ''}`}></td>
          <td className={`15 4 ${characterPosition === '15 4' ? 'highlight' : ''}`}></td>
          <td className={`16 4 ${characterPosition === '16 4' ? 'highlight' : ''}`}></td>
          <td className={`17 4 ${characterPosition === '17 4' ? 'highlight' : ''}`}></td>
          <td className={`18 4 ${characterPosition === '18 4' ? 'highlight' : ''}`}></td>
          <td className={`19 4 ${characterPosition === '19 4' ? 'highlight' : ''}`}></td>
          <td className={`20 4 ${characterPosition === '20 4' ? 'highlight' : ''}`}></td>
          <td className={`21 4 ${characterPosition === '21 4' ? 'highlight' : ''}`}></td>
          <td className={`22 4 ${characterPosition === '22 4' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>
          <td className={`1 5 ${characterPosition === '1 5' ? 'highlight' : ''}`}></td>
          <td className={`2 5 ${characterPosition === '2 5' ? 'highlight' : ''}`}></td>
          <td className={`3 5 ${characterPosition === '3 5' ? 'highlight' : ''}`}></td>
          <td className={`4 5 ${characterPosition === '4 5' ? 'highlight' : ''}`}></td>
          <td className={`5 5 ${characterPosition === '5 5' ? 'highlight' : ''}`}></td>
          <td className={`6 5 ${characterPosition === '6 5' ? 'highlight' : ''}`}></td>
          <td className={`7 5 ${characterPosition === '7 5' ? 'highlight' : ''}`}></td>
          <td className={`8 5 ${characterPosition === '8 5' ? 'highlight' : ''}`}></td>
          <td className={`9 5 ${characterPosition === '9 5' ? 'highlight' : ''}`}></td>
          <td className={`10 5 ${characterPosition === '10 5' ? 'highlight' : ''}`}></td>
          <td className={`11 5 ${characterPosition === '11 5' ? 'highlight' : ''}`}></td>
          <td className={`12 5 ${characterPosition === '12 5' ? 'highlight' : ''}`}></td>
          <td className={`13 5 ${characterPosition === '13 5' ? 'highlight' : ''}`}></td>
          <td className={`14 5 ${characterPosition === '14 5' ? 'highlight' : ''}`}></td>
          <td className={`15 5 ${characterPosition === '15 5' ? 'highlight' : ''}`}></td>
          <td className={`16 5 ${characterPosition === '16 5' ? 'highlight' : ''}`}></td>
          <td className={`17 5 ${characterPosition === '17 5' ? 'highlight' : ''}`}>
          <button className="planet snow">

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
          left: '20vw',
          right: '20vw',
          bottom: '200px',
          border: '1px solid #ccc',
          background: 'transparent',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
        }
      }}
        isOpen={characterPosition === '17 5'}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Inventory Modal"
      >
        <h1 style={{
          color: '#fff'
        }}>Snow Planet</h1>
        <button onClick={closeModal}>close</button>
      </Modal>

          </button>
          </td>
          <td className={`18 5 ${characterPosition === '18 5' ? 'highlight' : ''}`}></td>
          <td className={`19 5 ${characterPosition === '19 5' ? 'highlight' : ''}`}></td>
          <td className={`20 5 ${characterPosition === '20 5' ? 'highlight' : ''}`}></td>
          <td className={`21 5 ${characterPosition === '21 5' ? 'highlight' : ''}`}></td>
          <td className={`22 5 ${characterPosition === '22 5' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>
          <td className={`1 6 ${characterPosition === '1 6' ? 'highlight' : ''}`}></td>
          <td className={`2 6 ${characterPosition === '2 6' ? 'highlight' : ''}`}></td>
          <td className={`3 6 ${characterPosition === '3 6' ? 'highlight' : ''}`}></td>
          <td className={`4 6 ${characterPosition === '4 6' ? 'highlight' : ''}`}></td>
          <td className={`5 6 ${characterPosition === '5 6' ? 'highlight' : ''}`}></td>
          <td className={`6 6 ${characterPosition === '6 6' ? 'highlight' : ''}`}></td>
          <td className={`7 6 ${characterPosition === '7 6' ? 'highlight' : ''}`}></td>
          <td className={`8 6 ${characterPosition === '8 6' ? 'highlight' : ''}`}></td>
          <td className={`9 6 ${characterPosition === '9 6' ? 'highlight' : ''}`}></td>
          <td className={`10 6 ${characterPosition === '10 6' ? 'highlight' : ''}`}></td>
          <td className={`11 6 ${characterPosition === '11 6' ? 'highlight' : ''}`}></td>
          <td className={`12 6 ${characterPosition === '12 6' ? 'highlight' : ''}`}></td>
          <td className={`13 6 ${characterPosition === '13 6' ? 'highlight' : ''}`}></td>
          <td className={`14 6 ${characterPosition === '14 6' ? 'highlight' : ''}`}></td>
          <td className={`15 6 ${characterPosition === '15 6' ? 'highlight' : ''}`}></td>
          <td className={`16 6 ${characterPosition === '16 6' ? 'highlight' : ''}`}></td>
          <td className={`17 6 ${characterPosition === '17 6' ? 'highlight' : ''}`}></td>
          <td className={`18 6 ${characterPosition === '18 6' ? 'highlight' : ''}`}></td>
          <td className={`19 6 ${characterPosition === '19 6' ? 'highlight' : ''}`}></td>
          <td className={`20 6 ${characterPosition === '20 6' ? 'highlight' : ''}`}></td>
          <td className={`21 6 ${characterPosition === '21 6' ? 'highlight' : ''}`}></td>
          <td className={`22 6 ${characterPosition === '22 6' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>
          <td className={`1 7 ${characterPosition === '1 7' ? 'highlight' : ''}`}></td>
          <td className={`2 7 ${characterPosition === '2 7' ? 'highlight' : ''}`}></td>
          <td className={`3 7 ${characterPosition === '3 7' ? 'highlight' : ''}`}></td>
          <td className={`4 7 ${characterPosition === '4 7' ? 'highlight' : ''}`}></td>
          <td className={`5 7 ${characterPosition === '5 7' ? 'highlight' : ''}`}></td>
          <td className={`6 7 ${characterPosition === '6 7' ? 'highlight' : ''}`}></td>
          <td className={`7 7 ${characterPosition === '7 7' ? 'highlight' : ''}`}></td>
          <td className={`8 7 ${characterPosition === '8 7' ? 'highlight' : ''}`}></td>
          <td className={`9 7 ${characterPosition === '9 7' ? 'highlight' : ''}`}></td>
          <td className={`10 7 ${characterPosition === '10 7' ? 'highlight' : ''}`}></td>
          <td className={`11 7 ${characterPosition === '11 7' ? 'highlight' : ''}`}></td>
          <td className={`12 7 ${characterPosition === '12 7' ? 'highlight' : ''}`}></td>
          <td className={`13 7 ${characterPosition === '13 7' ? 'highlight' : ''}`}></td>
          <td className={`14 7 ${characterPosition === '14 7' ? 'highlight' : ''}`}></td>
          <td className={`15 7 ${characterPosition === '15 7' ? 'highlight' : ''}`}></td>
          <td className={`16 7 ${characterPosition === '16 7' ? 'highlight' : ''}`}></td>
          <td className={`17 7 ${characterPosition === '17 7' ? 'highlight' : ''}`}></td>
          <td className={`18 7 ${characterPosition === '18 7' ? 'highlight' : ''}`}></td>
          <td className={`19 7 ${characterPosition === '19 7' ? 'highlight' : ''}`}></td>
          <td className={`20 7 ${characterPosition === '20 7' ? 'highlight' : ''}`}></td>
          <td className={`21 7 ${characterPosition === '21 7' ? 'highlight' : ''}`}></td>
          <td className={`22 7 ${characterPosition === '22 7' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>
          <td className={`1 8 ${characterPosition === '1 8' ? 'highlight' : ''}`}></td>
          <td className={`2 8 ${characterPosition === '2 8' ? 'highlight' : ''}`}></td>
          <td className={`3 8 ${characterPosition === '3 8' ? 'highlight' : ''}`}></td>
          <td className={`4 8 ${characterPosition === '4 8' ? 'highlight' : ''}`}></td>
          <td className={`5 8 ${characterPosition === '5 8' ? 'highlight' : ''}`}></td>
          <td className={`6 8 ${characterPosition === '6 8' ? 'highlight' : ''}`}></td>
          <td className={`7 8 ${characterPosition === '7 8' ? 'highlight' : ''}`}></td>
          <td className={`8 8 ${characterPosition === '8 8' ? 'highlight' : ''}`}></td>
          <td className={`9 8 ${characterPosition === '9 8' ? 'highlight' : ''}`}></td>
          <td className={`10 8 ${characterPosition === '10 8' ? 'highlight' : ''}`}></td>
          <td className={`11 8 ${characterPosition === '11 8' ? 'highlight' : ''}`}></td>
          <td className={`12 8 ${characterPosition === '12 8' ? 'highlight' : ''}`}></td>
          <td className={`13 8 ${characterPosition === '13 8' ? 'highlight' : ''}`}></td>
          <td className={`14 8 ${characterPosition === '14 8' ? 'highlight' : ''}`}></td>
          <td className={`15 8 ${characterPosition === '15 8' ? 'highlight' : ''}`}></td>
          <td className={`16 8 ${characterPosition === '16 8' ? 'highlight' : ''}`}></td>
          <td className={`17 8 ${characterPosition === '17 8' ? 'highlight' : ''}`}></td>
          <td className={`18 8 ${characterPosition === '18 8' ? 'highlight' : ''}`}></td>
          <td className={`19 8 ${characterPosition === '19 8' ? 'highlight' : ''}`}></td>
          <td className={`20 8 ${characterPosition === '20 8' ? 'highlight' : ''}`}></td>
          <td className={`21 8 ${characterPosition === '21 8' ? 'highlight' : ''}`}></td>
          <td className={`22 8 ${characterPosition === '22 8' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>
          <td className={`1 9 ${characterPosition === '1 9' ? 'highlight' : ''}`}></td>
          <td className={`2 9 ${characterPosition === '2 9' ? 'highlight' : ''}`}></td>
          <td className={`3 9 ${characterPosition === '3 9' ? 'highlight' : ''}`}></td>
          <td className={`4 9 ${characterPosition === '4 9' ? 'highlight' : ''}`}></td>
          <td className={`5 9 ${characterPosition === '5 9' ? 'highlight' : ''}`}></td>
          <td className={`6 9 ${characterPosition === '6 9' ? 'highlight' : ''}`}></td>
          <td className={`7 9 ${characterPosition === '7 9' ? 'highlight' : ''}`}></td>
          <td className={`8 9 ${characterPosition === '8 9' ? 'highlight' : ''}`}></td>
          <td className={`9 9 ${characterPosition === '9 9' ? 'highlight' : ''}`}></td>
          <td className={`10 9 ${characterPosition === '10 9' ? 'highlight' : ''}`}></td>
          <td className={`11 9 ${characterPosition === '11 9' ? 'highlight' : ''}`}></td>
          <td className={`12 9 ${characterPosition === '12 9' ? 'highlight' : ''}`}></td>
          <td className={`13 9 ${characterPosition === '13 9' ? 'highlight' : ''}`}></td>
          <td className={`14 9 ${characterPosition === '14 9' ? 'highlight' : ''}`}></td>
          <td className={`15 9 ${characterPosition === '15 9' ? 'highlight' : ''}`}></td>
          <td className={`16 9 ${characterPosition === '16 9' ? 'highlight' : ''}`}></td>
          <td className={`17 9 ${characterPosition === '17 9' ? 'highlight' : ''}`}></td>
          <td className={`18 9 ${characterPosition === '18 9' ? 'highlight' : ''}`}></td>
          <td className={`19 9 ${characterPosition === '19 9' ? 'highlight' : ''}`}></td>
          <td className={`20 9 ${characterPosition === '20 9' ? 'highlight' : ''}`}></td>
          <td className={`21 9 ${characterPosition === '21 9' ? 'highlight' : ''}`}></td>
          <td className={`22 9 ${characterPosition === '22 9' ? 'highlight' : ''}`}></td>

        </tr>
        <tr>
          <td className={`1 10 ${characterPosition === '1 10' ? 'highlight' : ''}`}></td>
          <td className={`2 10 ${characterPosition === '2 10' ? 'highlight' : ''}`}></td>
          <td className={`3 10 ${characterPosition === '3 10' ? 'highlight' : ''}`}></td>
          <td className={`4 10 ${characterPosition === '4 10' ? 'highlight' : ''}`}></td>
          <td className={`5 10 ${characterPosition === '5 10' ? 'highlight' : ''}`}></td>
          <td className={`6 10 ${characterPosition === '6 10' ? 'highlight' : ''}`}></td>
          <td className={`7 10 ${characterPosition === '7 10' ? 'highlight' : ''}`}></td>
          <td className={`8 10 ${characterPosition === '8 10' ? 'highlight' : ''}`}></td>
          <td className={`9 10 ${characterPosition === '9 10' ? 'highlight' : ''}`}></td>
          <td className={`10 10 ${characterPosition === '10 10' ? 'highlight' : ''}`}></td>
          <td className={`11 10 ${characterPosition === '11 10' ? 'highlight' : ''}`}></td>
          <td className={`12 10 ${characterPosition === '12 10' ? 'highlight' : ''}`}></td>
          <td className={`13 10 ${characterPosition === '13 10' ? 'highlight' : ''}`}></td>
          <td className={`14 10 ${characterPosition === '14 10' ? 'highlight' : ''}`}></td>
          <td className={`15 10 ${characterPosition === '15 10' ? 'highlight' : ''}`}></td>
          <td className={`16 10 ${characterPosition === '16 10' ? 'highlight' : ''}`}></td>
          <td className={`17 10 ${characterPosition === '17 10' ? 'highlight' : ''}`}></td>
          <td className={`18 10 ${characterPosition === '18 10' ? 'highlight' : ''}`}></td>
          <td className={`19 10 ${characterPosition === '19 10' ? 'highlight' : ''}`}></td>
          <td className={`20 10 ${characterPosition === '20 10' ? 'highlight' : ''}`}></td>
          <td className={`21 10 ${characterPosition === '21 10' ? 'highlight' : ''}`}></td>
          <td className={`22 10 ${characterPosition === '22 10' ? 'highlight' : ''}`}></td>
        </tr>
      </table>
    </div>
  )
}