# Software

[English](./README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md)

This directory will hold host-side tools and non-firmware support code for PulseAxis.

Expected public responsibilities may include:

- serial or CAN debug utilities
- log capture helpers
- simple visualization tools
- parameter export or import helpers
- bring-up scripts that reduce setup friction

## Current State

This is not a first-phase priority compared with repository structure, public docs, and the embedded control workstream.
The directory exists now so future tooling has a clear public home.

## Public Direction

If tooling is added during early phases, prefer:

- narrow command-line tools
- clear text or file outputs
- scripts that help explain or validate a workflow

before building anything heavier.
