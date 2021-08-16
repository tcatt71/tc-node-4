# How to start a project

1. Create a folder for a new project inside of your `repos` folder

`mkdir <REPO_NAME>`

2. Change directories to the newly created folder

`cd <REPO_NAME>`

3. Initialize git in the new project folder

`git init`

4. Add files/folders to get started coding

`touch <FILE_NAME>` or `echo "<CONTENTS>" > <FILE_NAME>`

5. Make edits

6. Add your changes to the staging area

`git add <FILE_NAME>` or `git add .`

7. Add a commit for your changes

`git commit -m "a brief message describing what you changed"`

8. Push your changes

   - First Time
     1. Create a new repository on GitHub
     2. Copy SSH link for repo
     3. Add github as the remote repository
        `git remote add origin <SSH>`
     4. Push your changes
        `git push -u origin <DEFAULT_BRANCH>`
   - Any other time
     1. Push your changes
        `git push`
