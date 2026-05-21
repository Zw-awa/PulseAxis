# PulseAxis

[English](./README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md)

[![狀態](https://img.shields.io/badge/status-planning%20%2F%20bootstrap-4c8bf5)](#目前狀態)
[![授權](https://img.shields.io/badge/license-Apache--2.0-1976d2)](./LICENSE)
![電機](https://img.shields.io/badge/motor-BLDC-1f7a8c)
![控制](https://img.shields.io/badge/control-FOC%20%2B%20position%20loop-b24c63)
![運動](https://img.shields.io/badge/motion-reciprocating%20axis-c77d1f)
![MCU](https://img.shields.io/badge/MCU-STM32%20%2F%20GD32-4f772d)

一個面向單個往復執行機構軸的開源無刷電機控制專案。

## 目錄

- [PulseAxis](#pulseaxis)
  - [目錄](#目錄)
  - [這個倉庫是什麼](#這個倉庫是什麼)
  - [目前狀態](#目前狀態)
  - [倉庫結構](#倉庫結構)
  - [快速開始](#快速開始)
    - [1. 複製倉庫](#1-複製倉庫)
    - [2. 閱讀公開入口文件](#2-閱讀公開入口文件)
    - [3. 如有需要再打開開發者手冊](#3-如有需要再打開開發者手冊)
    - [4. 追蹤專案更新](#4-追蹤專案更新)
  - [支援](#支援)
  - [作者](#作者)
  - [授權](#授權)

## 這個倉庫是什麼

這個倉庫是 `PulseAxis` 專案的公開首頁。
它的目標是逐步成長為一個開源的無刷往復執行機構專案，未來會包含文件、韌體與配套支援材料。

如果你是想快速判斷這個專案現在是否已經適合重現：

- 倉庫已經公開，結構已經建立
- 公開文件入口已經具備
- 實際實作仍處於早期階段
- 具體重現路徑和硬體細節後續還會繼續演進

## 目前狀態

`規劃 / 初始化 / 公開文件優先`

目前倉庫主要提供：

- 公開專案結構
- 多語言公開文件
- 開發者手冊站點
- 貢獻流程
- issue 與 pull request 範本

實際韌體、可重現硬體路徑與 Bring-up 細節仍在逐步建設中。

## 倉庫結構

```text
.
|-- .github/                  # Issue 範本、PR 範本、CI、Pages 工作流
|-- docs/                     # 公開文件說明與文件策略
|-- firmware/                 # 嵌入式控制側
|-- hardware/                 # 面向公開的硬體範圍與發布策略
|-- site/                     # 開發者手冊站點
|-- software/                 # 主機側工具與支援程式碼
|-- README.md                 # 英文專案概覽
|-- README.zh-CN.md           # 簡體中文專案概覽
|-- README.zh-TW.md           # 繁體中文專案概覽
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

## 快速開始

### 1. 複製倉庫

```bash
git clone https://github.com/Zw-awa/PulseAxis.git
cd PulseAxis
```

### 2. 閱讀公開入口文件

建議先看：

- [`README.md`](./README.md)
- [`firmware/README.md`](./firmware/README.md)
- [`hardware/README.md`](./hardware/README.md)
- [`software/README.md`](./software/README.md)

### 3. 如有需要再打開開發者手冊

如果你想看更深入的架構、工作流或開發者視角內容，請打開：

- [`site/index.html`](./site/index.html)

### 4. 追蹤專案更新

這個倉庫仍處於早期階段。
在嘗試完整重現路徑之前，建議先關注倉庫更新、閱讀新文件並查看 issue。

## 支援

如果你想了解公開使用方式、文件問題或參與入口，請先看 [`SUPPORT.md`](./SUPPORT.md)。

如果你需要更深入的開發者內容，請使用 [`site/`](./site/index.html) 中的手冊。

## 作者

維護者是 `Zw-awa`。

倉庫位址：

- `https://github.com/Zw-awa/PulseAxis`

## 授權

本專案基於 [Apache License 2.0](./LICENSE) 發布。
Copyright `2026` `Zw-awa`。
補充歸屬資訊記錄在 [`NOTICE`](./NOTICE) 中。
