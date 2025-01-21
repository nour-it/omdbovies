import React, { useEffect } from 'react'

export default function Modal({ closeModal }) {

  /**
   * @param {KeyboardEvent} e 
   */
  function keyPressEvent(e) {
    if (e.key == "Escape") {
      closeModal(e);
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", keyPressEvent)
    return () => {
      window.removeEventListener("keyup", keyPressEvent)
    }
  }, [])

  return (
    <div className='modal' onClick={closeModal}>
      <div className='modal__body'></div>
    </div>
  )
}
