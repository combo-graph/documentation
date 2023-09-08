---
title: "Pull Request #40"
description: "Add OSx / Linux support and Setup CI"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_40
  title: "1.3.0 - PR #40"
  excerpt: "Add OSx / Linux support and Setup CI"
layout: layouts/markdown
---

*[on July 20th, 2022](https://github.com/combo-graph/combo-graph/pull/40)*

## Add OSx / Linux support and Setup CI

## Description

*   Includes fix for OSX support
*   Includes fix for Linux support and handle `-Wrange-loop-construct` compile issues for linux builds
*   Add back support for 4.27
    *   Adding ENGINE\_MAJOR\_VERSION if / else macro to account for API changes between the two major versions
    *   Change .uplugin to use WhitelistPlatforms for 4.27 backward compatibility (and be able to package plugin with same codebase for both 4.27 / 5.0)

### CI

Includes 3 CI workflow for windows / osx / linux:

*   Windows: Build on 4.27 / 5.0 and runs tests
*   OSx: Build on 5.0 and runs tests
*   Linux: Build on 4.27 / 5.0 (no tests)

