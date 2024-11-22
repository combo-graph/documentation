---
title: "Pull Request #59"
description: "Collision Component - Fix application of effect / cue containers on clients"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_59
  title: "1.5.0 - PR #59"
  excerpt: "Collision Component - Fix application of effect / cue containers on clients"
layout: layouts/markdown
---

*[on November 3rd, 2024](https://github.com/combo-graph/combo-graph/pull/59)*

## Collision Component - Fix application of effect / cue containers on clients

when gameplay event is originating from clients, as introduced in [#57](/changelog/pull/57) and possibility to register hits on client.

Effect containers were handled by ensuring the usage of a WaitNetSync only server wait task in the play montage task, before trying to trigger EventReceived delegate (where application of containers happen). This avoid a situation where gameplay effect ends up in a "Predicting and Waiting" state (as seen using `showdebug abilitysystem`)

For cue containers, we ensure we only apply them on authority like it was done before. This is to prevent an assertion / ensure error (which might be a PIE only thing) when a project is using ComboGraph custom effect context to pass down and replicate CueParamsObjects from combo node instances (e.g. additional params for SFX / VFX in cue containers).

The stack trace was pointing at NetSerialize of the HitResult.

