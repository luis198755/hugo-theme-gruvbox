---
title: "Go Install"
date: "2024-04-23"
comments: false
socialShare: true
toc: true
cover:
  src: ./golang.png
  alt:
  caption: By [Luis Alberto Rodríguez](https://luisalberto.vercel.app/)
---

The Go programming language is an open source project to make programmers more
productive.

Go is expressive, concise, clean, and efficient. Its concurrency mechanisms make
it easy to write programs that get the most out of multicore and networked
machines, while its novel type system enables flexible and modular program
construction. Go compiles quickly to machine code yet has the convenience of
garbage collection and the power of run-time reflection. It's a fast, statically
typed, compiled language that feels like a dynamically typed, interpreted
language.

## Prerequisites

To install Go (Golang) on a Linux system, you can follow these steps. These
steps are generally applicable to most Linux distributions, such as Ubuntu,
Fedora, and CentOS. Make sure to download the latest version of Go from the
official website.

1. Download the Go binary: Visit the official Go downloads page at
   <https://golang.org/dl/> to find the binary distribution for Linux. You can
   download it using wget or curl. For example:

   <!-- markdownlint-disable MD033 -->
   <pre class="command-line language-bash" data-user="luis" data-host="machine">
     <code>
        wget https://go.dev/dl/go1.22.2.linux-amd64.tar.gz
     </code>
   </pre>

## Install

1. Remove any previous Go installation by deleting the /usr/local/go folder (if
   it exists), then extract the archive you just downloaded into /usr/local,
   creating a fresh Go tree in /usr/local/go:

   <!-- markdownlint-disable MD033 -->
   <pre class="command-line language-bash" data-user="luis" data-host="machine">
     <code>
        sudo rm -rf /usr/local/go
        sudo tar -C /usr/local -xzf go1.22.2.linux-amd64.tar.gz
     </code>
   </pre>

2. Set up your environment variables: Add /usr/local/go/bin to the PATH
   environment variable. You can do this by adding the following lines to your
   $HOME/.profile, $HOME/.bashrc, or $HOME/.zshrc depending on the shell you
   use.

    <!-- markdownlint-disable MD033 -->
    <pre class="command-line language-bash" data-user="luis" data-host="machine">
      <code>
          export PATH=$PATH:/usr/local/go/bin
          export GOPATH=$HOME/go
          export GOBIN=$GOPATH/bin
      </code>
    </pre>

3. After adding these lines, apply the changes by sourcing the profile file:

   <!-- markdownlint-disable MD033 -->
   <pre class="command-line language-bash" data-user="luis" data-host="machine">
     <code>
      source $HOME/.profile
     </code>
   </pre>

4. Verify the installation: To check that Go is installed correctly and see the
   installed version, you can use:

   <!-- markdownlint-disable MD033 -->
   <pre class="command-line language-bash" data-user="luis" data-host="machine">
     <code>
      go version
     </code>
   </pre>

Go installation web: <https://go.dev/doc/install>
