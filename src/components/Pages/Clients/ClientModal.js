import React from 'react';
import Modal from 'react-modal';

import { inventoryByKeys } from "../../../data/staticTableData";
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
                  <p>Name: {items[item].label}</p>
                  <p>{inventoryByKeys && inventoryByKeys[items[item].value] && inventoryByKeys[items[item].value].available && inventoryByKeys[items[item].value].available > 0 ?inventoryByKeys[items[item].value].available + " available in stock": "Out of Stock"}</p>
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
          <h2 className="c-heading">{rowData && rowData.name ? rowData.name : null}</h2>
        </header>

        <div className="c-card__body o-panel" style={{height: "500px"}}>
            {/* {JSON.stringify(rowData)} */}
            <h4>Contact Information</h4>
            <p><strong>Mobile</strong>&nbsp;{rowData && rowData.phone ? rowData.phone : null}</p>
            <p><strong>Email</strong>&nbsp;{rowData && rowData.email ? rowData.email : null}</p>
            <p><strong>DOB</strong>&nbsp;{rowData && rowData.dob ? rowData.dob : null}</p>
            <p><strong>Gender</strong>&nbsp;{rowData && rowData.gender ? rowData.gender : null}</p>
            <p><strong>Nationality</strong>&nbsp;{rowData && rowData.nationality ? rowData.nationality : null}</p>
            <p><strong>Demographic</strong>&nbsp;{rowData && rowData.demographic && Object.keys(rowData.demographic) && Object.keys(rowData.demographic).map((item, index) => (
                    <span key={index}>{rowData.demographic[item].label}</span>
                ))}</p>
            <p><strong>Family Annual Income</strong>&nbsp;{rowData && rowData.familyAnnualIncome ? rowData.familyAnnualIncome : null}</p>
            
            <h4>Address</h4>
            <p>{rowData && rowData.clientAddress && rowData.clientAddress.suite ? rowData.clientAddress.suite : null} {rowData && rowData.clientAddress && rowData.clientAddress.street ? rowData.clientAddress.street : null}</p>
            <p>{rowData && rowData.clientAddress && rowData.clientAddress.city ? rowData.clientAddress.city : null}</p>
            <p>{rowData && rowData.clientAddress && rowData.clientAddress.province ? rowData.clientAddress.province : null}</p>
            <p>{rowData && rowData.clientAddress && rowData.clientAddress.postalCode ? rowData.clientAddress.postalCode : null}</p>

            <h4>Baby Information</h4>
            <p><strong>Baby DOB</strong>&nbsp;{rowData && rowData.clientBabyDOB ? rowData.clientBabyDOB : null}</p>
            
            <h4>Available On</h4>
            <p><strong>Potential Appointment Date</strong>&nbsp;{rowData && rowData.potentialApppointmentDate ? rowData.potentialApppointmentDate : null}</p>
            <p><strong>Potential Appointment Time</strong>&nbsp;{rowData && rowData.potentialAppointmentTimeDate ? rowData.potentialAppointmentTimeDate : null}</p>
            
            {rowData && rowData.gearRequested ? 
            gearRequested(rowData.gearRequested)
        : null}
        </div>

        <footer className="c-card__footer">
          <button type="button" onClick={closeModal} className="c-button c-button--brand">Close</button>
        </footer>
      </div>
    </Modal>
  );
}
