---
title: "Pull Request #48"
description: "Fix preview mesh picker for 5.2 by setting FPersonaToolkitArgs::bPreviewMeshCanUseDifferentSkeleton"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_48
  title: "1.3.5 - PR #48"
  excerpt: "Fix preview mesh picker for 5.2 by setting FPersonaToolkitArgs::bPreviewMeshCanUseDifferentSkeleton"
layout: layouts/markdown
---

*[on June 16th, 2023](https://github.com/combo-graph/combo-graph/pull/48)*

## Fix preview mesh picker for 5.2 by setting FPersonaToolkitArgs::bPreviewMeshCanUseDifferentSkeleton

Addition of `bPreviewMeshCanUseDifferentSkeleton` with `FPersonaToolkitArgs`, that was introduced in 5.2.

Without setting it to true, the asset editor wasn't listing any mesh to pick with the preview mesh dropdown picker.

