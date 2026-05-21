# Contributing To PulseAxis

[English](./CONTRIBUTING.md) | [简体中文](./CONTRIBUTING.zh-CN.md) | [繁體中文](./CONTRIBUTING.zh-TW.md)

Thanks for considering a contribution.
This project is an open embedded-control repository, so useful contributions are not limited to source code.

We welcome improvements in:

- documentation
- firmware architecture
- motion-planning interfaces
- bring-up and test procedures
- tooling and diagnostics
- reproducibility

## Before You Start

For large changes, please open an issue first.
This helps avoid drifting away from the current public scope, repository structure, or supported workflows.

Useful starting points:

- [`README.md`](./README.md)
- [`firmware/README.md`](./firmware/README.md)
- [`hardware/README.md`](./hardware/README.md)
- [`software/README.md`](./software/README.md)
- [`site/index.html`](./site/index.html)

## Contribution Principles

Contributions should try to improve at least one of these dimensions:

- clarity
- reproducibility
- safety
- maintainability
- usefulness to other contributors

Please avoid changes that only add complexity without making the repository easier to understand, validate, or extend.

## Expected Pull Request Quality

### Documentation Changes

For docs-focused changes, explain:

- what was unclear or missing
- what was changed
- whether links, screenshots, or navigation also need updates

### Firmware Or Tooling Changes

For code-related changes, include:

- what behavior changed
- how it was checked
- what assumptions were made
- whether docs, logs, or tests should also change

### Scope-Oriented Changes

For changes that affect project structure, public scope, or workflow:

- explain the reason clearly
- call out any repository-wide impact
- keep public docs and module docs consistent

## Safety And Scope

This project targets future motion-capable electromechanical hardware.
If your change affects motion assumptions, safety behavior, test guidance, or power/control boundaries, call that out explicitly in the pull request.

Do not silently change:

- public scope statements
- safety-related guidance
- repository ownership boundaries between directories
- links between public docs and private local notes

## Style Expectations

- Prefer clear, direct writing over marketing language.
- Keep public docs understandable to contributors from different backgrounds.
- Favor incremental changes over large speculative rewrites.
- Add rationale when a decision is not obvious from the diff itself.

## Questions And Support

If you are not sure where to start, open a `Question / Support` issue and describe:

- which part you want to help with
- what context you already have
- what is blocking you

## License

By contributing to this repository, you agree that your contributions will be licensed under the Apache License 2.0 included in this repository.
