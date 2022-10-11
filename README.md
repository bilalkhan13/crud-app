# CRUD APP
[
	{
	_id: 1,
	name: "Khurram"
	email: "khurram@nayyartech.com"
	gender: "male"
	}
]

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
