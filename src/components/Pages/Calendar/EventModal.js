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

  const gearRequested = (items) => {
    return items && Object.keys(items).map((item, key) => {
        return (
            <div key={key}>
                <p>{items[item].label}</p>
                <div>
                <input type="radio" name={`dispatchDetails-${key}`}></input>Given
                <input type="radio" name={`dispatchDetails-${key}`}></input>Not Available
                <input type="radio" name={`dispatchDetails-${key}`}></input>Not Required
                </div>

            </div>
        )
      })
  }
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
          <p>{rowData && rowData.firstName ? rowData.firstName : null}&nbsp;{rowData && rowData.lastName ? rowData.lastName : null}</p>
          <p>{rowData && rowData.phoneNumber ? rowData.phoneNumber : null}</p>
          <p>{rowData && rowData.email ? rowData.email : null}</p>
          <p>{rowData && rowData.volunteer ? rowData.volunteer : null}</p>

          <label><strong>Item Dispatch Status</strong></label>
          {rowData && rowData.gearRequested ? 
            gearRequested(rowData.gearRequested)
            : null}

        </div>

        <footer className="c-card__footer">
          <button type="button" onClick={closeModal} className="c-button c-button--brand">Close</button>
          <button type="button" onClick={closeModal} className="c-button c-button--brand">View Client Information</button>
        </footer>
      </div>
    </Modal>
  );
}
