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

Hugo is a static site generator written in Go, optimized for speed and designed
for flexibility. With its advanced templating system and fast asset pipelines,
Hugo renders a complete site in seconds, often less.

Due to its flexible framework, multilingual support, and powerful taxonomy
system, Hugo is widely used to create:

- Corporate, government, nonprofit, education, news, event, and project sites
- Documentation sites
- Image portfolios
- Landing pages
- Business, professional, and personal blogs
- Resumes and CVs

Use Hugo’s embedded web server during development to instantly see changes to
content, structure, behavior, and presentation. Then deploy the site to your
host, or push changes to your Git provider for automated builds and deployment.

And with Hugo Modules, you can share content, assets, data, translations,
themes, templates, and configuration with other projects via public or private
Git repositories.

## Prerequisites

To install HUGO on a Linux system, you can follow these steps. These steps are
generally applicable to most Linux distributions, such as Ubuntu, Fedora, and
CentOS. Make sure to download the latest version of Go and Node.js.

1. Install Go
2. Install Install Node.js

## Install

- Option 1: Derivatives of the Debian distribution of Linux include elementary
  OS, KDE neon, Linux Lite, Linux Mint, MX Linux, Pop!\_OS, Ubuntu, Zorin OS,
  and others. To install the extended edition of Hugo:

     <!-- markdownlint-disable MD033 -->
     <pre class="command-line language-bash" data-user="luis" data-host="machine">
       <code>
          sudo apt install hugo
       </code>
     </pre>

- OPtion 2: Prebuilt binaries are available for a variety of operating systems
  and architectures. Visit the latest release page, and scroll down to the
  Assets section.

  1.  Download the [archive](https://github.com/gohugoio/hugo/releases/latest)
      for the desired edition, operating system, and architecture
  2.  Extract the archive
  3.  Move the executable to the desired directory
  4.  Add this directory to the PATH environment variable
  5.  Verify that you have execute permission on the file

## Verify installation

Open a new terminal window or type source ~/.bashrc to update your shell
configuration. To verify that HUGO is installed correctly, run:

<!-- markdownlint-disable MD033 -->
<pre class="command-line language-bash" data-user="luis" data-host="machine">
   <code>
      hugo version
   </code>
</pre>

## Quick Start

Run these commands to create a Hugo site with the Ananke theme. The next section
provides an explanation of each command.

<!-- markdownlint-disable-line MD013 -->
<pre class="command-line language-bash" data-user="luis" data-host="machine">
   <code>
      hugo new site quickstart
      cd quickstart
      git init
      git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
      echo "theme = 'ananke'" >> hugo.toml
      hugo server
   </code>
</pre>

View your site at the URL displayed in your terminal. Press Ctrl + C to stop
Hugo’s development server.

Hugo installation web: <https://gohugo.io/installation/linux/>
