import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const { userDetails } = this.props;
    return (
      <div
        className="modal fade bd-example-modal-lg"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Details Of -{' '}
                <b>
                  {userDetails.name.firstName} {userDetails.name.lastName}
                </b>
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                <b>Name:</b>
              </p>
              <div className="row">
                <div className="col" style={{ lineHeight: '14px' }}>
                  <p>First Name: {userDetails.name.firstName}</p>
                  <p>Last NAme: {userDetails.name.lastName}</p>
                  <p>Gender: {userDetails.name.gender}</p>
                </div>
                <div className="col" style={{ lineHeight: '14px' }}>
                  <p>Email: {userDetails.name.email}</p>
                  <p>Phone: {userDetails.name.phone}</p>
                </div>
              </div>
              <p>
                <b>Address: </b>
              </p>
              <div className="row">
                <div className="col" style={{ lineHeight: '14px' }}>
                  <p>Street Name: {userDetails.address.streetName}</p>
                  <p>City: {userDetails.address.city}</p>
                  <p>Zip: {userDetails.address.zip}</p>
                </div>
                <div className="col" style={{ lineHeight: '14px' }}>
                  <p>State: {userDetails.address.state}</p>
                  <p>Country: {userDetails.address.country}</p>
                  <p>Timezone: {userDetails.address.timeZone}</p>
                </div>
              </div>
              <p>
                <b>Company: </b>
              </p>
              <div className="row">
                <div className="col" style={{ lineHeight: '14px' }}>
                  <p>Name: {userDetails.company.name}</p>
                  <p>Job Title: {userDetails.company.jobTitle}</p>
                  <p>Job Area: {userDetails.company.jobArea}</p>
                </div>
              </div>
              <p>
                <b>Finance: </b>
              </p>
              <div className="row">
                <div className="col" style={{ lineHeight: '14px' }}>
                  <p>Account Name: {userDetails.finance.accountName}</p>
                  <p>Account Number: {userDetails.finance.accountNumber}</p>
                  <p>
                    Amount: {userDetails.finance.currencySymbol}{' '}
                    {userDetails.finance.amount}
                  </p>
                </div>
                <div className="col" style={{ lineHeight: '14px' }}>
                  <p>Currency Symbol: {userDetails.finance.currencySymbol}</p>
                  <p>
                    Credit Card Number: {userDetails.finance.creditCardNumber}
                  </p>
                  <p>Credit Card CVV: {userDetails.finance.creditCardCVV}</p>
                </div>
              </div>
              <p>
                <b>Vehicle: </b>
              </p>
              <div className="row">
                <div className="col" style={{ lineHeight: '14px' }}>
                  <p>Model: {userDetails.vehicle.model}</p>
                  <p>Color: {userDetails.vehicle.color}</p>
                  <p>Manufacturer: {userDetails.vehicle.manufacturer}</p>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
