import React from 'react';
import './popup.css';
import { UserForm } from '../form/UserForm';
import Utility from '../../components/lib/utility';
import { userData } from '../../data/userData';
export default function Popup({
  visible,
  setVisible,
  id,
  operation,
  arrIndex,
}) {
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
            <div className="popup__content">
              <UserForm
                operation={operation}
                index={arrIndex}
                setVisible={setVisible}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
