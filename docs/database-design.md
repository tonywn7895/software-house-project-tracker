# DB Design
1.Users :
- id
- name
- email
- password
- created_at

2.Projects :
- id
- name
- description
- user_id
- created_at

3.Tasks :
- id
- project_id
- title
- description
- status
- created_at

4.Status :
- TODO
- IN_PROGRESS
- TESTING
- DONE


      user
        |
        |1:N
    Project
        |
        |1:N
      Task


Users

id (PK)

name

email

password

created_at

----------------

Projects

id (PK)

name

description

user_id (FK)

created_at

----------------

Tasks

id (PK)

project_id (FK)

title

description

status
(TODO | IN_PROGRESS | TESTING | DONE)

created_at