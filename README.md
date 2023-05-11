# userman
Build a simple user manager - assignment worth 10 pts

- [ ] View: New user
  - [ ] create a form with the following inputs
      - [ ] username
      - [ ] name
      - [ ] email
      - [ ] age
  - When the form is submitted (use method POST):
      - [ ] assign a unique userId to the user
      - [ ] Save the users to a json file.
```
{
    "users":[
       {
          "uniqueId":"484e08f0-d031-11ea-b8b3-dd899bf3937c",
          "username":"ctdalton",
          "name":"Curtis Dalton",
          "email":"asdf@asdf.com",
          "age":"323323"
       }
    ]
 }
 ```
- [ ] View: List Users
  - [ ] contains a table which lists username, name, email, and age for each user.
  - [ ] edit button
  - [ ] delete button
  - [ ]
- [ ] View: Edit User
  - [ ] Form similar to the 'New user' but pre-populated with the user information, and allows for editing/correcting the user's information
