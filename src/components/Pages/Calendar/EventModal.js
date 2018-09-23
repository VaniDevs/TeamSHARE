import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)'
  }
};


export default (props) => {
  let { isOpen, closeModal, rowData } = props;

  return (
    <Modal isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Event Modal"
      overlayClassName="b-modal-overlay"
      className="b-modal"
      // className="b-modal o-modal o-modal--visible"
    >

      <div className="c-card">
        <header className="c-card__header">
          <button type="button" onClick={closeModal} className="c-button c-button--close">&times;</button>
          <h2 className="c-heading">Appointment Details</h2>
        </header>

        <div className="c-card__body o-panel">
          {JSON.stringify(rowData)}
        </div>

        <footer className="c-card__footer">
          <button type="button" onClick={closeModal} className="c-button c-button--brand">Close</button>
        </footer>
      </div>
    </Modal>
  );
}
