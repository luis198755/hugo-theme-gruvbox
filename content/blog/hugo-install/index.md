---
title: "Hugo Install"
date: "2024-04-26"
comments: false
socialShare: true
toc: true
cover:
  src: ./hugo.png
  alt:
  caption: By [Luis Alberto Rodríguez](https://luisalberto.vercel.app/)
---

## Prerequisites

To install HUGO on a Linux system, you can follow these steps. These
steps are generally applicable to most Linux distributions, such as Ubuntu,
Fedora, and CentOS. Make sure to download the latest version of Go and Node.js.

1. Install Go
2. Install Install Node.js

## Install

- Option 1: Derivatives of the Debian distribution of Linux include elementary
OS, KDE neon, Linux Lite, Linux Mint, MX Linux, Pop!_OS, Ubuntu, Zorin OS,
and others. To install the extended edition of Hugo:

   <!-- markdownlint-disable MD033 -->
   <pre class="command-line language-bash" data-user="luis" data-host="machine">
     <code>
        sudo apt install hugo
     </code>
   </pre>

- OPtion 2: Prebuilt binaries are available for a variety of operating
systems and architectures. Visit the latest release page, and scroll
down to the Assets section.

   1. Download the [archive](https://github.com/gohugoio/hugo/releases/latest)
   for the desired edition, operating system, and architecture
   2. Extract the archive
   3. Move the executable to the desired directory
   4. Add this directory to the PATH environment variable
   5. Verify that you have execute permission on the file

## Verify installation

Open a new terminal window or type source ~/.bashrc to update your shell configuration.
To verify that HUGO is installed correctly, run:

<!-- markdownlint-disable MD033 -->
<pre class="command-line language-bash" data-user="luis" data-host="machine">
   <code>
      hugo version
   </code>
</pre>

Hugo installation web: <https://gohugo.io/installation/linux/>
