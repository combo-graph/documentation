---
title: "Pull Request #42"
description: "Fix compilation errors / warnings for 5.1"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_42
  title: "1.3.2 - PR #42"
  excerpt: "Fix compilation errors / warnings for 5.1"
layout: layouts/markdown
---

*[on November 17th, 2022](https://github.com/combo-graph/combo-graph/pull/42)*

## Fix compilation errors / warnings for 5.1

Includes bunch of tiny changes to make it compile against 5.1

Wrapped with ENGINE\_VERSION macros so that it compiles fine against 5.0.3 too.

Automated tests OK, needs further testing in the demo.

TODO:

*   [ ] Cleanup leftover comments
*   [x] Check CI

