# PulseAxis

[English](./README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md)

[![状态](https://img.shields.io/badge/status-planning%20%2F%20bootstrap-4c8bf5)](#当前状态)
[![许可证](https://img.shields.io/badge/license-Apache--2.0-1976d2)](./LICENSE)
![电机](https://img.shields.io/badge/motor-BLDC-1f7a8c)
![控制](https://img.shields.io/badge/control-FOC%20%2B%20position%20loop-b24c63)
![运动](https://img.shields.io/badge/motion-reciprocating%20axis-c77d1f)
![MCU](https://img.shields.io/badge/MCU-STM32%20%2F%20GD32-4f772d)

一个面向单个往复执行机构轴的开源无刷电机控制项目。

## 目录

- [PulseAxis](#pulseaxis)
  - [目录](#目录)
  - [这个仓库是什么](#这个仓库是什么)
  - [当前状态](#当前状态)
  - [仓库结构](#仓库结构)
  - [快速开始](#快速开始)
    - [1. 克隆仓库](#1-克隆仓库)
    - [2. 阅读公开入口文档](#2-阅读公开入口文档)
    - [3. 如有需要再打开开发者手册](#3-如有需要再打开开发者手册)
    - [4. 跟踪项目更新](#4-跟踪项目更新)
  - [支持](#支持)
  - [作者](#作者)
  - [许可证](#许可证)

## 这个仓库是什么

这个仓库是 `PulseAxis` 项目的公开主页。
它的目标是逐步成长为一个开源的无刷往复执行机构项目，未来会包含文档、固件和配套支持材料。

如果你是想快速判断这个项目现在是否已经适合复现：

- 仓库已经公开，结构已经建立
- 公开文档入口已经具备
- 实际实现仍处于早期阶段
- 具体复现路径和硬件细节后续还会继续演进

## 当前状态

`规划 / 初始化 / 公开文档优先`

当前仓库主要提供：

- 公开项目结构
- 多语言公开文档
- 开发者手册站点
- 贡献流程
- issue 与 pull request 模板

实际固件、可复现硬件路径和 Bring-up 细节仍在逐步建设中。

## 仓库结构

```text
.
|-- .github/                  # Issue 模板、PR 模板、CI、Pages 工作流
|-- docs/                     # 公开文档说明与文档策略
|-- firmware/                 # 嵌入式控制侧
|-- hardware/                 # 面向公开的硬件范围与发布策略
|-- site/                     # 开发者手册站点
|-- software/                 # 主机侧工具与支持代码
|-- README.md                 # 英文项目概览
|-- README.zh-CN.md           # 简体中文项目概览
|-- README.zh-TW.md           # 繁体中文项目概览
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

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/Zw-awa/PulseAxis.git
cd PulseAxis
```

### 2. 阅读公开入口文档

建议先看：

- [`README.md`](./README.md)
- [`firmware/README.md`](./firmware/README.md)
- [`hardware/README.md`](./hardware/README.md)
- [`software/README.md`](./software/README.md)

### 3. 如有需要再打开开发者手册

如果你想看更深入的架构、工作流或开发者视角内容，请打开：

- [`site/index.html`](./site/index.html)

### 4. 跟踪项目更新

这个仓库仍处于早期阶段。
在尝试完整复现路径之前，建议先关注仓库更新、阅读新文档并查看 issue。

## 支持

如果你想了解公开使用方式、文档问题或参与入口，请先看 [`SUPPORT.md`](./SUPPORT.md)。

如果你需要更深入的开发者内容，请使用 [`site/`](./site/index.html) 中的手册。

## 作者

维护者是 `Zw-awa`。

仓库地址：

- `https://github.com/Zw-awa/PulseAxis`

## 许可证

本项目基于 [Apache License 2.0](./LICENSE) 发布。
Copyright `2026` `Zw-awa`。
补充归属信息记录在 [`NOTICE`](./NOTICE) 中。
