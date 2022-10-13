import React, { useState } from 'react';
import Popup from '../../components/popup/Popup';
import './userList.css';
import { userData } from '../../data/userData';

export const UserList = () => {
  const [visible, setVisible] = useState(false);
  const [btnState, setBtnState] = useState('Add New');
  const [arrIndex, setArrIndex] = useState(userData.length);

  function handleClick(stateValue) {
    setVisible((prev) => !prev);
    setBtnState(stateValue);
  }
  return (
    <>
      <div className="userList__Container" key={arrIndex}>
        <h2>User List</h2>
        <div className="user__data" key={arrIndex + 1}>
          <button
            type="button"
            className="btn btn-primary User__add"
            onClick={() => {
              handleClick('Add New');
              setArrIndex(userData.length - 1);
            }}
          >
            Add New User
          </button>
          {/******************************************
           * Data Grid
           *******************************************/}
          <table className="user__data-table">
            <thead>
              <tr className="user__table-header">
                <th>User ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Gender</th>
                <th>Action{'(s)'}</th>
              </tr>
            </thead>
            <tbody id="user__list">
              {userData.map(({ uid, email, name, gender }, index) => {
                return (
                  <>
                    <Popup
                      visible={visible}
                      setVisible={setVisible}
                      operation={btnState}
                      arrIndex={arrIndex}
                    />
                    <tr className="user__list-row">
                      <td>{uid}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{gender}</td>
                      <td className="user__table_btns">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => {
                            handleClick('Update');
                            setArrIndex(index);
                          }}
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => {
                            handleClick('Delete');
                            setArrIndex(index);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
