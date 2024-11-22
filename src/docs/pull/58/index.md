---
title: "Pull Request #58"
description: "Fix edge lookup with custom BP nodes"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_58
  title: "1.5.0 - PR #58"
  excerpt: "Fix edge lookup with custom BP nodes"
layout: layouts/markdown
---

*[on November 3rd, 2024](https://github.com/combo-graph/combo-graph/pull/58)*

## Fix edge lookup with custom BP nodes

Added fallback when edge map lookup is failing and hash gets stale due to custom BP nodes edited in editor.

Works by checking if edge can be found in current edge map and if it fails, fallback to a slower lookup comparing start and end node in the edges map. For most cases, we still use the map fast lookup but fallback to slower traversal in case the map find by hash failed.

The start and end node comparison is to handle cases where the same issue happens further in the graph after the conduit.

The issue with old / stale hash maps seems to happen with 4 or more outgoing edge connections. Important as well to test reproducing the issue without the CG asset being opened in editor, cause graph gets rebuild on PIE begin if it's opened (debugger related).

