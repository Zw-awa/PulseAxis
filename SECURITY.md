# Security Policy

[English](./SECURITY.md) | [简体中文](./SECURITY.zh-CN.md) | [繁體中文](./SECURITY.zh-TW.md)

## Reporting A Vulnerability

Please do not open a public issue for issues that could realistically be abused as a security vulnerability.
If a report involves unauthorized control, credential exposure, insecure automation behavior, or another issue that others could reuse directly, report it privately first.

If you discover a vulnerability, report it privately through the repository owner's available contact channel and include:

- a clear summary
- affected files or subsystem
- reproduction steps if known
- possible impact
- suggested mitigation if available

## What Counts As A Security Issue Here

Examples include:

- vulnerabilities in repository automation or workflow configuration
- secret, token, or credential exposure
- supply-chain issues in dependencies or automation
- unsafe documented behavior that could enable dangerous unauthorized control
- exploit paths that could plausibly lead to harmful unintended motion once hardware control exists

## What Does Not Belong In The Private Security Process

The following are generally **not** security reports and should not be sent through the private vulnerability path:

- generic documentation bugs with no security impact
- expected instability from unfinished tuning or incomplete implementation
- third-party board defects, assembly mistakes, or damaged parts
- unsupported local experiments outside the documented public scope
- "it does not work" reports with no plausible security angle

Those issues should usually be handled as:

- a normal public bug report
- a support/question issue
- or a local hardware debugging task outside repository maintenance scope

## Scope Boundaries

This repository is an early open engineering project, not a guarantee of correctness for every third-party board, module, power setup, or assembly outcome.

The project security process is intended for vulnerabilities in the repository's own code, documented workflows, supported automation, or publicly described behavior.

## Supported Scope

At this stage, the repository is in active planning and bootstrap.
Support is best-effort, and response time may vary.

## Disclosure Guidance

Please allow time for review and mitigation before publishing detailed exploit steps.
Coordinated disclosure is preferred.
