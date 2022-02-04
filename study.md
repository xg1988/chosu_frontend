프론트엔드 공부

<!--20220203-->

github
https://github.com/xg1988/chosu_frontend

#PS C:\Users\ajous\vscode_workspace\personal_admin> git --version
git version 2.35.1.windows.2

<!--현재 프로젝트에서 변경사항 추적(버전관리) 시작-->
#PS C:\Users\ajous\vscode_workspace\personal_admin> git init
Initialized empty Git repository in C:/Users/ajous/vscode_workspace/personal_admin/.git/

<!--초기설정-->
#PS C:\Users\ajous\vscode_workspace\personal_admin> git config --global core.autocrlf true
#PS C:\Users\ajous\vscode_workspace\personal_admin> git config --global user.name 'xg1988' 
#PS C:\Users\ajous\vscode_workspace\personal_admin> git config --global user.email 'hoho88@naver.com'
<!--구성확인-->
#PS C:\Users\ajous\vscode_workspace\personal_admin> git config --global --list
core.autocrlf=true <!--개행문자 설정-->
user.name=xg1988
user.email=hoho88@naver.com

#PS C:\Users\ajous\vscode_workspace\personal_admin> git status
On branch master

No commits yet

Untracked files:
(use "git add <file>..." to include in what will be committed)
    .gitignore
    index.html
    main.js
    package-lock.json
    package.json
    study.md


#PS C:\Users\ajous\vscode_workspace\personal_admin> git add .

#PS C:\Users\ajous\vscode_workspace\personal_admin> git commit -m 'Start project'
[master (root-commit) 7712063] Start project
 6 files changed, 7357 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 index.html
 create mode 100644 main.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 study.md


# PS C:\Users\ajous\vscode_workspace\personal_admin> git log
commit 77120638b6571792bd3e372312fe999ef04ebaf4 (HEAD -> master)
Author: xg1988 <hoho88@naver.com>
Date:   Thu Feb 3 22:40:53 2022 +0900

    Start project

PS C:\Users\ajous\vscode_workspace\personal_admin> git remote add origin https://github.com/xg1988/chosu_frontend.git
PS C:\Users\ajous\vscode_workspace\personal_admin> git push origin master
info: please complete authentication in your browser...
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 4 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (8/8), 71.85 KiB | 7.18 MiB/s, done.
Total 8 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/xg1988/chosu_frontend/pull/new/master
remote:
To https://github.com/xg1988/chosu_frontend.git
 * [new branch]      master -> master


