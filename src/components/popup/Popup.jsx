import React from 'react';
import { UserForm } from '../form/UserForm';
import './popup.css';

export default function Popup({ visible, setVisible, id, operation }) {
  return (
    <>
      {visible ? (
        <div id="popup" className="modal" key={id}>
          <div className="modal-content">
            <div className="popup__header">
              <h4>{operation} User</h4>
              <span className="close" onClick={() => setVisible(false)}>
                X
              </span>
            </div>
            <div className="popup__content"><UserForm /></div>
            <div className="popup__footer">
              <button type="button" className="btn btn-success" id='save__user'>
                Save
              </button>
              <button type="button" className="btn btn-warning" onClick={() => setVisible(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
