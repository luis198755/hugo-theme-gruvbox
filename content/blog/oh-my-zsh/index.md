---
title: "Oh my Zsh Install"
date: "2024-04-21"
comments: false
socialShare: true
toc: true
cover:
  src: ./ohmyzsh.png
  alt:
  caption: By [Luis Alberto Rodríguez](https://luisalberto.vercel.app/)
---

## Install

Installing Oh My Zsh on a Linux system is a straightforward process that
enhances the default shell with additional features and themes. Here’s a
step-by-step guide to install Oh My Zsh:

1. Prerequisites: Make sure you have zsh installed on your system. You can
   install it using your package manager. For example, on Ubuntu, you can
   install it with:

    <!-- markdownlint-disable MD033 -->
    <pre class="command-line language-bash" data-user="luis" data-host="machine">
      <code>
        sudo apt update
        sudo apt install zsh
      </code>
    </pre>

2. Install Oh My Zsh: You can install Oh My Zsh via the curl. Here are the
   commands:

   Using curl:

      <!-- markdownlint-disable MD033 -->
      <pre class="command-line language-bash" data-user="luis" data-host="machine">
        <code>
          sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
        </code>
      </pre>

3. Change your default shell: After installing Oh My Zsh, you might want to
   change your default shell to zsh if it isn't already. You can do this by
   running:

    <!-- markdownlint-disable MD033 -->
    <pre class="command-line language-bash" data-user="luis" data-host="machine">
      <code>
        chsh -s $(which zsh)
      </code>
    </pre>

   You will need to log out and log back in to see this change.

4. Customize your environment: Oh My Zsh comes with lots of themes and plugins.
   You can change themes by modifying the ZSH_THEME variable in the ~/.zshrc
   file. Plugins can be added by editing the plugins array in the same file.

This will set up a robust, feature-rich shell environment using Oh My Zsh,
making your terminal more user-friendly and visually appealing.

Oh my Zsh web: <https://ohmyz.sh/>
