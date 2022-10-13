import React, { useState } from 'react';
import './userForm.css';
import { userData } from '../../data/userData';
import Utility from '../../components/lib/utility';

export const UserForm = ({ operation, index, setVisible }) => {
  const [userId, setUserId] = useState(userData[index].uid);
  const [userName, setUserName] = useState(userData[index].name);
  const [userEmail, setUserEmail] = useState(userData[index].email);
  const [userGender, setUserGender] = useState(userData[index].gender);
  const [assignId, setAssignId] = useState(userId + 1);

  return (
    <>
      {operation === 'Delete' ? (
        <form className="user__form" id="user-form">
          Are You Sure To Delete This Data
        </form>
      ) : operation === 'Update' ? (
        <form className="user__form" id="user-form">
          <input
            value={userId}
            type="1"
            id="user-id"
            placeholder="User Id"
            onChange={(e) => setUserName(e.target.value)}
            disabled
            required
          />
          <input
            value={userName}
            type="text"
            id="user-name"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            value={userEmail}
            type="email"
            id="user-email"
            placeholder="User Email"
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <select
            value={userGender}
            name="gender"
            id="user-gender"
            onChange={(e) => setUserGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </form>
      ) : (
        <form className="user__form" id="user-form">
          <input
            value={assignId}
            type="1"
            id="user-id"
            placeholder="User Id"
            disabled
            required
          />
          <input
            type="text"
            id="user-name"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="email"
            id="user-email"
            placeholder="User Email"
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <select
            name="gender"
            id="user-gender"
            onChange={(e) => setUserGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </form>
      )}
      <div className="popup__footer">
        <button
          type="button"
          className="btn btn-success"
          id="save__user"
          onClick={() =>
            Utility.crudOperation(operation, index, setVisible, {
              uid: operation === 'Add New' ? assignId : userId,
              name: userName,
              email: userEmail,
              gender: userGender,
            })
          }
        >
          {operation}
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => setVisible(false)}
        >
          Close
        </button>
      </div>
    </>
  );
};
