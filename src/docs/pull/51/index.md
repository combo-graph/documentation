---
title: "Pull Request #51"
description: "Fix to prevent assertion crashes if ability is explicitly ended on EventReceived event"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_51
  title: "1.4.0 - PR #51"
  excerpt: "Fix to prevent assertion crashes if ability is explicitly ended on EventReceived event"
layout: layouts/markdown
---

*[on September 7th, 2023](https://github.com/combo-graph/combo-graph/pull/51)*

## Fix to prevent assertion crashes if ability is explicitly ended on EventReceived event

Makes sure Ability is still valid in `UComboGraphAbilityTask_StartGraph::HandleEventReceived`, both effect / damage and cue containers application rely on it.

Prevents the containers application in case ability is null, and prevent further assertions check (and crashes).

Reason this might happen is in the EventReceived event broadcasted just above, where users could manually invoke K2\_EndAbility()

