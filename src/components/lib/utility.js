import { userData } from '../../data/userData';

export default class Utility {
  // static getData(url= '') {
  //   return fetch(url).then((res) => res.json());
  // }

  static crudOperation(operation, arrIndex, setVisible, updateData) {
    console.log('test'+arrIndex)
    if (operation === 'Delete') {
      Utility.deleteItem(arrIndex);
      setVisible(false);
    } else if (operation === 'Update') {
      Utility.updateItem(updateData, arrIndex);
      setVisible(false);
    } else {
      Utility.addItem(updateData);
      setVisible(false);
    }
  }

  static deleteItem(index) {
    userData.splice(index, 1);
  }

  static addItem(updateData) {
    userData.push(updateData);

  }

  static updateItem(updateData, arrIndex) {
    userData.splice(arrIndex, 1, updateData);
  }
}
