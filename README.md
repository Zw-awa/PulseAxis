# PulseAxis

[English](./README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md)

[![Status](https://img.shields.io/badge/status-planning%20%2F%20bootstrap-4c8bf5)](#current-status)
[![License](https://img.shields.io/badge/license-Apache--2.0-1976d2)](./LICENSE)
![Motor](https://img.shields.io/badge/motor-BLDC-1f7a8c)
![Control](https://img.shields.io/badge/control-FOC%20%2B%20position%20loop-b24c63)
![Motion](https://img.shields.io/badge/motion-reciprocating%20axis-c77d1f)
![MCU](https://img.shields.io/badge/MCU-STM32%20%2F%20GD32-4f772d)

An open-source brushless motor control project for a single reciprocating actuator axis.

## Table Of Contents

- [PulseAxis](#pulseaxis)
  - [Table Of Contents](#table-of-contents)
  - [What This Repository Is](#what-this-repository-is)
  - [What It Tries To Do](#what-it-tries-to-do)
  - [What This First Version Focuses On](#what-this-first-version-focuses-on)
  - [Current Status](#current-status)
  - [Repository Structure](#repository-structure)
  - [Quick Start](#quick-start)
    - [1. Clone The Repository](#1-clone-the-repository)
    - [2. Read The Public Entry Docs](#2-read-the-public-entry-docs)
    - [3. Open The Developer Manual If Needed](#3-open-the-developer-manual-if-needed)
    - [4. Follow Project Updates](#4-follow-project-updates)
  - [Support](#support)
  - [Author](#author)
  - [License](#license)

## What This Repository Is

This repository is the public home of the `PulseAxis` project.
It is intended to grow into an open-source brushless reciprocating-axis project with documentation, firmware, and supporting materials.

If you are here to quickly understand whether the project is ready to reproduce:

- the repository is public and structured
- the documentation entry points are in place
- the implementation is still in an early stage
- you should expect the build path and hardware details to evolve

## What It Tries To Do

PulseAxis is centered on one practical target:

- a single reciprocating actuator axis
- driven by a `BLDC` motor
- with a control path that can grow toward `FOC`
- and motion behavior that can later benefit from trajectory planning

The project is meant to become useful in three ways:

- as a small real-world learning project for `BLDC`, `FOC`, and motion control
- as a reproducible bench platform for people who want to build a similar actuator experiment
- as a future base for more advanced control and mechanism exploration

## What This First Version Focuses On

The first public version is intentionally narrow.
It is mainly focused on:

- one real physical reciprocating mechanism
- one motor-driven axis
- one desk-scale experimental platform
- one public repository that documents the path from structure to implementation

That also means the first version is not trying to cover every possible actuator shape or full product scenario at once.

## Current Status

`Planning / bootstrap / public documentation first`

Right now the repository mainly provides:

- public project structure
- multilingual public documentation
- a developer manual site
- contribution workflow
- issue and pull-request templates

The actual firmware, reproducible hardware path, and bring-up details are still being built out.

## Repository Structure

```text
.
|-- .github/                  # Issue templates, PR template, CI, Pages workflows
|-- docs/                     # Public documentation notes and policy docs
|-- firmware/                 # Embedded control side
|-- hardware/                 # Public hardware-facing scope and release policy
|-- site/                     # Developer manual site
|-- software/                 # Host-side tools and support code
|-- README.md                 # English project overview
|-- README.zh-CN.md           # Simplified Chinese overview
|-- README.zh-TW.md           # Traditional Chinese overview
|-- CONTRIBUTING.md
|-- CONTRIBUTING.zh-CN.md
|-- CONTRIBUTING.zh-TW.md
|-- CODE_OF_CONDUCT.md
|-- CODE_OF_CONDUCT.zh-CN.md
|-- CODE_OF_CONDUCT.zh-TW.md
|-- SECURITY.md
|-- SECURITY.zh-CN.md
|-- SECURITY.zh-TW.md
|-- SUPPORT.md
|-- SUPPORT.zh-CN.md
|-- SUPPORT.zh-TW.md
|-- LICENSE
`-- NOTICE
```

## Quick Start

### 1. Clone The Repository

```bash
git clone https://github.com/Zw-awa/PulseAxis.git
cd PulseAxis
```

### 2. Read The Public Entry Docs

Start with:

- [`README.md`](./README.md)
- [`firmware/README.md`](./firmware/README.md)
- [`hardware/README.md`](./hardware/README.md)
- [`software/README.md`](./software/README.md)

### 3. Open The Developer Manual If Needed

If you want deeper architecture, workflow, or developer-facing context, open:

- [`site/index.html`](./site/index.html)

### 4. Follow Project Updates

This repository is still early.
Watch the repository, read new docs, and check issues before attempting a full reproduction path.

## Support

For public usage questions, documentation issues, or contribution entry points, start with [`SUPPORT.md`](./SUPPORT.md).

If you need deeper developer-facing material, use the manual in [`site/`](./site/index.html).

## Author

Maintained by `Zw-awa`.

Repository URL:

- `https://github.com/Zw-awa/PulseAxis`

## License

This project is licensed under the [Apache License 2.0](./LICENSE).
Copyright `2026` `Zw-awa`.
Additional attribution details are recorded in [`NOTICE`](./NOTICE).
