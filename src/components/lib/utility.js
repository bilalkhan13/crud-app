import { userData } from '../../data/userData';

export default class Utility {
  /******************************************
   * CRUD Operations
   *******************************************/
  static crudOperation(operation, arrIndex, setVisible, updateData) {
    console.log('test' + arrIndex);
    if (operation === 'Delete') {
      userData.splice(arrIndex, 1);
      setVisible(false);
    } else if (operation === 'Update') {
      userData.splice(arrIndex, 1, updateData);
      setVisible(false);
    } else {
      const indexOf = userData.findIndex(function (item) {
        console.log('forEach:   ' + updateData.email + ':' + item.email);
        return item.email === updateData.email;
      });
      const validEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (
        indexOf >= 0 ||
        updateData.email === '' ||
        !updateData.email.match(validEmail) ||
        updateData.name === ''
      ) {
        return alert(
          'Email already exist or any input field is empty or email input field is not vaild.'
        );
      } else if (indexOf < 0) {
        console.log('Add Data:   ' + indexOf);
        userData.push(updateData);
      }
      setVisible(false);
    }
  }
  /******************************************
   * End ---------CRUD Operations
   *******************************************/
}
