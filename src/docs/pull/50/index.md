---
title: "Pull Request #50"
description: "feat: Expose bStopWhenAbilityEnds bool to Combo Nodes making it possible to prevent montage being aborted if the ability ends normally"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_50
  title: "1.4.0 - PR #50"
  excerpt: "feat: Expose bStopWhenAbilityEnds bool to Combo Nodes making it possible to prevent montage being aborted if the ability ends normally"
layout: layouts/markdown
---

*[on September 7th, 2023](https://github.com/combo-graph/combo-graph/pull/50)*

## feat: Expose bStopWhenAbilityEnds bool to Combo Nodes making it possible to prevent montage being aborted if the ability ends normally

**New boolean value `bStopAnimationWhenAbilityEnds` available in the details panel for Combo nodes**

![image](./113832-2ef91b01-4e8e-4c2b-959f-5462b0c380d3.png)

It is always stopped when the ability is explicitly cancelled.

This value is passed down to the ability task playing the montage, and corresponds to bStopWhenAbilityEnds parameter value of the PlayMontageAndWait ability task.

