# Firmware

[English](./README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md)

This directory will hold the embedded control side of PulseAxis.

Expected public responsibilities include:

- board bring-up notes
- motor-control runtime structure
- `FOC`-related control implementation
- position-loop and motion-execution interfaces
- diagnostics and safe-stop behavior
- test and tuning notes that are appropriate for public release

## Current State

At the current repository stage, this directory is still an early public module stub.
It exists to make the intended firmware workstream explicit before code is added.

## Planned Public Content

As the project grows, this directory may include:

- source code
- board support structure
- interface definitions
- public configuration examples
- bench-test notes
- tuning and troubleshooting guidance

## Notes

- Public firmware docs should stay stable and readable.
