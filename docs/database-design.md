1.Users :
-user_id
-name
-email
-password

2.Project :
-project_id
-project_name
-description
-user_id

3.Task :
-task_id
-project_id
-task_title
-status

      user
        |
        |1:N
    Project
        |
        |1:N
      Task
