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

2. Install Oh My Zsh: You can install Oh My Zsh via the curl or wget command.
   Here are the commands for both methods:

   Using curl:

      <!-- markdownlint-disable MD033 -->
      <pre class="command-line language-bash" data-user="luis" data-host="machine">
        <code>
          sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
        </code>
      </pre>
