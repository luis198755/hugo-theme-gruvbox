---
title: "Git Init Script for local Repo"
date: "2024-05-08"
comments: false
socialShare: true
toc: true
cover:
  src: ./git.png
  alt:
  caption: By [Luis Alberto Rodríguez](https://luisalberto.vercel.app/)
---

You can create a new file, for example, named setup_repo.sh,
and then add the following contents to it:

## Prerequisites

1. Install Git and configured
2. Create a GitHub account.
3. SSH access set up for GitHub.

## Script

  <!-- markdownlint-disable MD033 -->
  <pre class="command-line language-bash" data-user="luis" data-host="machine">
    <code>
      #!/bin/bash
      # Add a title to the README.md file
      echo "# prueba" >> README.md
      # Initialize a new Git repository
      git init
      # Add README.md to the staging area
      git add README.md
      # Commit the changes with a message
      git commit -m "first commit"
      # Rename the default branch to main
      git branch -M main
      # Add a remote repository
      git remote add origin git@github.com:UserName/prueba.git
      # Push changes to the main branch of the remote repository
      # And set it to track the upstream branch
      git push -u origin main
    </code>
  </pre>

1. Make sure to grant execute permissions to your script by running:

      <!-- markdownlint-disable MD033 -->
      <pre class="command-line language-bash" data-user="luis" data-host="machine">
        <code>
          chmod +x setup_repo.sh
        </code>
      </pre>

2. You can then run the script from your terminal with:

    <!-- markdownlint-disable MD033 -->
    <pre class="command-line language-bash" data-user="luis" data-host="machine">
      <code>
        ./setup_repo.sh
      </code>
    </pre>

This script assumes you have Git configured and SSH access set up for GitHub.
Adjust the GitHub repository URL if necessary.

GitHub web web: <https://docs.github.com/>
