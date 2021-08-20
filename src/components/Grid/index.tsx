import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import useKey from '../../hooks/UseKey'

import './style.scss'

export default function Grid() {



  const [characterPosition, setCharacterPosition] = useState('c5')

  function moveCharacter(direction: string) {
    if(direction === 'up') {
      if(characterPosition.charAt(0) === 'a') {
        return null
      } 
      else if (characterPosition.charAt(0) === 'b') {
        setCharacterPosition(characterPosition.charAt(2) ? 'a' + characterPosition.charAt(1) + characterPosition.charAt(2) : 'a' + characterPosition.charAt(1) )
      }
       else if (characterPosition.charAt(0) === 'c') {
        setCharacterPosition(characterPosition.charAt(2) ? 'b' + characterPosition.charAt(1) + characterPosition.charAt(2) : 'b' + characterPosition.charAt(1) )
      }
      else if (characterPosition.charAt(0) === 'd') {
        setCharacterPosition(characterPosition.charAt(2) ? 'c' + characterPosition.charAt(1) + characterPosition.charAt(2) : 'c' + characterPosition.charAt(1) )
      }
      else if (characterPosition.charAt(0) === 'e') {
        setCharacterPosition(characterPosition.charAt(2) ? 'd' + characterPosition.charAt(1) + characterPosition.charAt(2) : 'd' + characterPosition.charAt(1) )
      }
      else if (characterPosition.charAt(0) === 'f') {
        setCharacterPosition(characterPosition.charAt(2) ? 'e' + characterPosition.charAt(1) + characterPosition.charAt(2) : 'e' + characterPosition.charAt(1) )
      }
    }

    if(direction === 'down') {
      if(characterPosition.charAt(0) === 'f') {
        return null
      } 
      else if (characterPosition.charAt(0) === 'a') {
        setCharacterPosition(characterPosition.charAt(2) ? 'b' + characterPosition.charAt(1) + characterPosition.charAt(2) : 'b' + characterPosition.charAt(1) )
      } 
      else if (characterPosition.charAt(0) === 'b') {
        setCharacterPosition(characterPosition.charAt(2) ? 'c' + characterPosition.charAt(1) + characterPosition.charAt(2) : 'c' + characterPosition.charAt(1) )
      } 
      else if (characterPosition.charAt(0) === 'c') {
        setCharacterPosition(characterPosition.charAt(2) ? 'd' + characterPosition.charAt(1) + characterPosition.charAt(2) : 'd' + characterPosition.charAt(1) )
      } 
      else if (characterPosition.charAt(0) === 'd') {
        setCharacterPosition(characterPosition.charAt(2) ? 'e' + characterPosition.charAt(1) + characterPosition.charAt(2) : 'e' + characterPosition.charAt(1) )
      } 
      else if (characterPosition.charAt(0) === 'e') {
        setCharacterPosition(characterPosition.charAt(2) ? 'f' + characterPosition.charAt(1) + characterPosition.charAt(2) : 'f' + characterPosition.charAt(1) )
      }
    }

    if(direction === 'left') {
      if(characterPosition.charAt(1) === '1' && characterPosition.charAt(2) !== '0') {
        return null
      } else if (characterPosition.charAt(1) !== '1' || characterPosition.charAt(2) === '0') {
        const index = parseInt(characterPosition.charAt(1) + parseInt(characterPosition.charAt(2)));
        setCharacterPosition(`${characterPosition.charAt(0) + (index - 1)}`)
      }
    }

    if(direction === 'right') {
      if(characterPosition.charAt(1) === '1' && characterPosition.charAt(2) === '0') {
        return null
      } else if (characterPosition.charAt(2) !== '0') {
        const index = parseInt(characterPosition.charAt(1));
        setCharacterPosition(`${characterPosition.charAt(0) + (index + 1)}`)
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

    
    
    <div className="grid">
      <table>
      <tr>
          <td className={`a1 ${characterPosition === 'a1' ? 'highlight' : ''}`}></td>
          <td className={`a2 ${characterPosition === 'a2' ? 'highlight' : ''}`}></td>
          <td className={`a3 ${characterPosition === 'a3' ? 'highlight' : ''}`}></td>
          <td className={`a4 ${characterPosition === 'a4' ? 'highlight' : ''}`}></td>
          <td className={`a5 ${characterPosition === 'a5' ? 'highlight' : ''}`}></td>
          <td className={`a6 ${characterPosition === 'a6' ? 'highlight' : ''}`}></td>
          <td className={`a7 ${characterPosition === 'a7' ? 'highlight' : ''}`}></td>
          <td className={`a8 ${characterPosition === 'a8' ? 'highlight' : ''}`}></td>
          <td className={`a9 ${characterPosition === 'a9' ? 'highlight' : ''}`}></td>
          <td className={`a10 ${characterPosition === 'a10' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>
          <td className={`b1 ${characterPosition === 'b1' ? 'highlight' : ''}`}></td>
          <td className={`b2 ${characterPosition === 'b2' ? 'highlight' : ''}`}></td>
          <td className={`b3 ${characterPosition === 'b3' ? 'highlight' : ''}`}></td>
          <td className={`b4 ${characterPosition === 'b4' ? 'highlight' : ''}`}></td>
          <td className={`b5 ${characterPosition === 'b5' ? 'highlight' : ''}`}></td>
          <td className={`b6 ${characterPosition === 'b6' ? 'highlight' : ''}`}></td>
          <td className={`b7 ${characterPosition === 'b7' ? 'highlight' : ''}`}></td>
          <td className={`b8 ${characterPosition === 'b8' ? 'highlight' : ''}`}></td>
          <td className={`b9 ${characterPosition === 'b9' ? 'highlight' : ''}`}></td>
          <td className={`b10 ${characterPosition === 'b10' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>
          <td className={`c1 ${characterPosition === 'c1' ? 'highlight' : ''}`}></td>
          <td className={`c2 ${characterPosition === 'c2' ? 'highlight' : ''}`}></td>
          <td className={`c3 ${characterPosition === 'c3' ? 'highlight' : ''}`}></td>
          <td className={`c4 ${characterPosition === 'c4' ? 'highlight' : ''}`}></td>
          <td className={`c5 ${characterPosition === 'c5' ? 'highlight' : ''}`}></td>
          <td className={`c6 ${characterPosition === 'c6' ? 'highlight' : ''}`}></td>
          <td className={`c7 ${characterPosition === 'c7' ? 'highlight' : ''}`}></td>
          <td className={`c8 ${characterPosition === 'c8' ? 'highlight' : ''}`}></td>
          <td className={`c9 ${characterPosition === 'c9' ? 'highlight' : ''}`}></td>
          <td className={`c10 ${characterPosition === 'c10' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>
          <td className={`d1 ${characterPosition === 'd1' ? 'highlight' : ''}`}></td>
          <td className={`d2 ${characterPosition === 'd2' ? 'highlight' : ''}`}></td>
          <td className={`d3 ${characterPosition === 'd3' ? 'highlight' : ''}`}></td>
          <td className={`d4 ${characterPosition === 'd4' ? 'highlight' : ''}`}></td>
          <td className={`d5 ${characterPosition === 'd5' ? 'highlight' : ''}`}></td>
          <td className={`d6 ${characterPosition === 'd6' ? 'highlight' : ''}`}></td>
          <td className={`d7 ${characterPosition === 'd7' ? 'highlight' : ''}`}></td>
          <td className={`d8 ${characterPosition === 'd8' ? 'highlight' : ''}`}></td>
          <td className={`d9 ${characterPosition === 'd9' ? 'highlight' : ''}`}></td>
          <td className={`d10 ${characterPosition === 'd10' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>
          <td className={`e1 ${characterPosition === 'e1' ? 'highlight' : ''}`}></td>
          <td className={`e2 ${characterPosition === 'e2' ? 'highlight' : ''}`}></td>
          <td className={`e3 ${characterPosition === 'e3' ? 'highlight' : ''}`}></td>
          <td className={`e4 ${characterPosition === 'e4' ? 'highlight' : ''}`}></td>
          <td className={`e5 ${characterPosition === 'e5' ? 'highlight' : ''}`}></td>
          <td className={`e6 ${characterPosition === 'e6' ? 'highlight' : ''}`}></td>
          <td className={`e7 ${characterPosition === 'e7' ? 'highlight' : ''}`}></td>
          <td className={`e8 ${characterPosition === 'e8' ? 'highlight' : ''}`}></td>
          <td className={`e9 ${characterPosition === 'e9' ? 'highlight' : ''}`}></td>
          <td className={`e10 ${characterPosition === 'e10' ? 'highlight' : ''}`}></td>
        </tr>
        <tr>
          <td className={`f1 ${characterPosition === 'f1' ? 'highlight' : ''}`}></td>
          <td className={`f2 ${characterPosition === 'f2' ? 'highlight' : ''}`}></td>
          <td className={`f3 ${characterPosition === 'f3' ? 'highlight' : ''}`}></td>
          <td className={`f4 ${characterPosition === 'f4' ? 'highlight' : ''}`}></td>
          <td className={`f5 ${characterPosition === 'f5' ? 'highlight' : ''}`}></td>
          <td className={`f6 ${characterPosition === 'f6' ? 'highlight' : ''}`}></td>
          <td className={`f7 ${characterPosition === 'f7' ? 'highlight' : ''}`}></td>
          <td className={`f8 ${characterPosition === 'f8' ? 'highlight' : ''}`}></td>
          <td className={`f9 ${characterPosition === 'f9' ? 'highlight' : ''}`}></td>
          <td className={`f10 ${characterPosition === 'f10' ? 'highlight' : ''}`}></td>
        </tr>
      </table>
    </div>
  )
}