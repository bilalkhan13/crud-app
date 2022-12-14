# CRUD APP Requirments
```
[
	{
	_id: 1,
	name: "Khurram"
	email: "khurram@test.com"
	gender: "Male"
	}
]
```

Final output: You need to develop a CRUD app of users. CRUD app mean where we can create, read/list, update and delete any data.

## Requirements:
1. This is purely JS based and React, no API need. Just array & object operations.
2. Create a component / view where you are showing list of user in tabular format along with update and delete button in last column.
3. There must be a button before start of table. on click of that button a popup will appear where user can add name, email and gender (from dropdown)
4. on click on add user button in popup create a user object and store it in array and hide component on success.
5. render this list (array of user object) in tabular format (Step 2 of this requirement)
6. _id should auto generate/increment based on array size. and email should be unique for each user.
7. if email already in used by other user show a gentle message in creation/update popup.
8. upon click on update button in table record. pass selected user data to update popup where user can change and save data same like creation.
9. upon click on delete button in table. show a confirm dialog and on confirmation remove that item/user from array of users.
10. user schema is mentioned on top of this assignment.
11. A sample application (Product CRUD) is running here https://spiralyze-crud.herokuapp.com this sample app storing data in db but in your case no need to persist data.

## Components Hierarchy
Level 1 : APP.jsx <br />
Level 2 : Components/pages/userList/UserList.jsx <br />
Level 3 : Components/popup/Popup.jsx <br />
Level 4 : Compnents/userForm/UserForm.jsx <br />
Compnents/lib/Utility.js is form global functions. <br />

- App
 - src
	- pages
	  - page based components
  - components
	 - components folders
	   - components with css files

## Technical Function Document of this assignemnt
1- Render FormList.jsx in App.jsx <br />
2- FormList.jsx is render by App.jsx with all list of users & complete page view. <br />
3- FormList have 3 button "Add New User"/"Update"/"Delete". After clicking on these buttons popup.jsx will be rendered. <br />
4- pop.jsx.jsx will render userForm.jsx according to the mentioned conditions in UserForm.jsx. <br />
5- The popup header is the same in all conditions, but the form and action buttons are different and rendered by UserForm.jsx. <br />
6- We have a Utility.js file. We have defined crud functions in it. <br />
7- Popup title, action buttons, and crud operation is based on passed props when we click on the main page button. <br />
8- We have CSS files in every component folder for styling. <br />

## Some points need to be noted:
1- Fields validations are implemented. <br />
2- Id is auto generated based on last assigned user id insted of array size. <br />
3- Crud operations is performing in "crudOperation" function based on props which is trigger from actions button. <br />

## App Screens

__Front Page__

![Front Page](./src/assets/appScreens/appMain.png)

__Add User (Clicked on "Add New User" button)__

![Add New User](./src/assets/appScreens/appAddNew.png)

__Add User (Clicked on "Update User" button)__

![Update User](./src/assets/appScreens/appUpdate.png)

__Delete User (Clicked on "Delete User" button)__

![Delete User](./src/assets/appScreens/appDelete.png)

__Form Validation__

![Form Validation](./src/assets/appScreens/appValidation.png)
