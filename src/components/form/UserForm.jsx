import React from 'react';
import './userForm.css';

export const UserForm = () => {
  return (
    <form className="user__form" id="user-form">
      <input type="1" id="user-name" placeholder="1" disabled required />
      <input type="text" id="user-name" placeholder="User Name" required />
      <input type="email" id="user-email" placeholder="User Email" required />
      <select name="gender" id="selectGender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </form>
  );
};
