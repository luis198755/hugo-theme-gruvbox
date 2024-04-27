---
title: "Node.js Install"
date: "2024-04-27"
comments: false
socialShare: true
toc: true
cover:
  src: ./node.png
  alt:
  caption: By [Luis Alberto Rodríguez](https://luisalberto.vercel.app/)
---

Node.js® is a free, open-source, cross-platform JavaScript runtime
environment that lets developers create servers, web apps, command
line tools and scripts.

Node.js is similar in design to, and influenced by, systems like
Ruby's Event Machine and Python's Twisted. Node.js takes the
event model a bit further. It presents an event loop
as a runtime construct instead of as a library. In other
systems, there is always a blocking call to start the event-loop.
Typically, behavior is defined through callbacks
at the beginning of a script, and at the end a server
is started through a blocking call like EventMachine::run().
In Node.js, there is no such start-the-event-loop call. Node.js
simply enters the event loop after executing the input script.
Node.js exits the event loop when there are no more callbacks
to perform. This behavior is like browser
JavaScript — the event loop is hidden from the user.

## Install

Download Node.js as Package [Manager](https://nodejs.org/en/download/package-manager)

1. Installs NVM (Node Version Manager):

   <!-- markdownlint-disable MD033 -->
   <pre class="command-line language-bash" data-user="luis" data-host="machine">
      <code>
         curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
      </code>
   </pre>

2. Download and install Node.js:

   <!-- markdownlint-disable MD033 -->
   <pre class="command-line language-bash" data-user="luis" data-host="machine">
      <code>
         nvm install 20
      </code>
   </pre>

3. Verifies the right Node.js version is in the environment:

   <!-- markdownlint-disable MD033 -->
   <pre class="command-line language-bash" data-user="luis" data-host="machine">
      <code>
         node -v # should print `v20.12.2`
      </code>
   </pre>

4. Verifies the right NPM version is in the environment:

   <!-- markdownlint-disable MD033 -->
   <pre class="command-line language-bash" data-user="luis" data-host="machine">
      <code>
         npm -v # should print `10.5.0`
      </code>
   </pre>

Node.js installation web: <https://nodejs.org/en/download/package-manager>
