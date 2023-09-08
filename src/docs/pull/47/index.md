---
title: "Pull Request #47"
description: "Fix Lyra Edge replication by not duplicating edges, and remove 4.26 / 4.27 / 5.0 workaround with Edge DuplicateObject"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_47
  title: "1.3.5 - PR #47"
  excerpt: "Fix Lyra Edge replication by not duplicating edges, and remove 4.26 / 4.27 / 5.0 workaround with Edge DuplicateObject"
layout: layouts/markdown
---

*[on May 29th, 2023](https://github.com/combo-graph/combo-graph/pull/47)*

## Fix Lyra Edge replication by not duplicating edges, and remove 4.26 / 4.27 / 5.0 workaround with Edge DuplicateObject

Fix Lyra Edge replication by not duplicating edges, and remove 4.26 / 4.27 / 5.0 workaround with Edge DuplicateObject

This PR drops support for engine version prior to 5.0 (so 4.26 / 4.27 / 5.0), which means going forward only the last two versions of the engines will receive further updates.

The workaround implying the use of DuplicateObject for edges was due to a missing API for Enhanced Input delegates and binding of additional parameters that is only possible from engine version 5.1

***

**Before**

`video: https://cdn.discordapp.com/attachments/1109458982705315881/1112763336073953360/lyra_cg_01.mp4`

**After**

`video: https://cdn.discordapp.com/attachments/1109458982705315881/1112821959227613184/lyra_cg_02.mp4`
