---
title: "Pull Request #57"
description: "Collision Component - Added option to register hits client side"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_57
  title: "1.5.0 - PR #57"
  excerpt: "Collision Component - Added option to register hits client side"
layout: layouts/markdown
---

*[on November 1st, 2024](https://github.com/combo-graph/combo-graph/pull/57)*

## Collision Component - Added option to register hits client side

Removed the Authority check from ANS
Added a debug on client checkbox that shows the debugs line on clients even tho the hit are registered only on the server Added a RegisterHitsOnClients checkbox which allows registration of hits client side (client debugs are forced in this case) Added to the log who is emmiting them (server, client 1, client 2 etc)

