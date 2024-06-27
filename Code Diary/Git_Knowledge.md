# Git Useful Knowledge

## gitignore
You can exclude a file from being tracked by Git. Create a file called ".gitignore" and add the file name of the file you want to be untracked. The file has to be empty.

## Git CLI
Command Line Interface

## Repository
A Git repository is the .git/ folder inside a project. This repository tracks all changes made to files in your project, building a history over time. Meaning, if you delete the .git/ folder, then you delete your project’s history.

## Stage and Commit
Commits are snapshots of your entire repository at specific times. They are the building blocks of "save points" within Git's version control.

Commits have two phases to help you craft commits properly. Once you're ready to craft your commits, you'll use *git add <FILENAME>* to specify the files that you'd like to "stage" for commit. Without adding any files, the command *git commit* won't work. Git only looks to the staging area to find out what to commit.

*git commit -m "descriptive commit message"*

## Fetch
The *git fetch* command downloads commits, files, and refs from a remote repository into your local repo. Git isolates fetched content from existing local content; it has absolutely no effect on your local development work. Fetched content has to be explicitly checked out using the *git checkout* command. This makes fetching a safe way to review commits before integrating them with your local repository.

## Pull
*git pull* is the more aggressive alternative; it will download the remote content for the active local branch and immediately execute *git merge* to create a merge commit for the new remote content.

## Push
The *git push* command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo.

## Merge
Merging is Git's way of putting a forked history back together again.

### Merge Squash
*git merge --squash* allows you to take all the changes from one branch and squash them into a single commit on top of the branch you're currently on.

### Rebase
*git rebase* moves the entire feature branch to the tip of the master branch, preserving individual commits.

