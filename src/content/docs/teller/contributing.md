---
title: Contributing
description: A guide to contributing to ChunkVault Desktop.
---

Thank you for your interest in contributing to the Teller project. By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

This document outlines the process for contributing to the project and the expectations we have for all contributors. Please read through this document before making a contribution.

## Table of Contents

- [Getting Started](#getting-started)
- [Pull Requests](#pull-requests)
- [Bug Reports and Feature Requests](#bug-reports-and-feature-requests)
- [Project Board](#project-board)
- [Coding Guidelines](#coding-guidelines)
- [Communication](#communication)

## Getting Started

Ensure you have [Rust, Cargo, and Tauri](https://tauri.studio/en/docs/getting-started/intro) installed before continuing.

1.  Fork the repository on GitHub.
2.  Clone your fork to your local machine: `git clone https://github.com/Your-Username/teller.git`
3.  Add the original repository as an upstream remote: `git remote add upstream https://github.com/Valink-Solutions/teller.git`
4.  Create a new branch for your feature or bugfix: `git checkout -b my-feature-branch`
5.  Make your changes and commit them with a descriptive commit message.
6.  Push your changes to your fork on GitHub.
7.  Open a pull request against the upstream `main` branch.

### Working with the Mono Repo

The Teller project is a mono-repo housing both the Teller library and the Teller Desktop app. Ensure your contributions are correctly placed within the respective projects within the mono-repo.

## Pull Requests

- Before submitting a pull request, ensure your changes compile and pass all tests.
- Keep your pull requests focused on small features or bugfixes. If you have multiple features or bugfixes, submit separate pull requests for each.
- Write a clear and concise description of the changes you made in the pull request.
- If your pull request resolves an existing issue, reference the issue number in the description.
- Update the documentation if necessary to reflect your changes.
- Be open to feedback from the maintainers and other contributors, and be prepared to make changes to your pull request if requested.

## Versioning

We use semantic versioning for our project. Here's a brief overview of what each type of version change signifies:

- _0.1.0_ - Minor versions: These introduce new features or enhancements that are backward-compatible.
- _0.1.1_ - Patch versions: These include bug fixes or patches that are also backward-compatible.
- _1.0.0_ - Major versions: These represent significant milestones and introduce major new features. They may not be backward-compatible. For example, a full release of ChunkVault with all its features would be a major version.

### Pre-release Versions

Pre-release versions are primarily intended for the releases page on GitHub and are not used for library versioning. They follow a specific naming convention to indicate their pre-release status.

- Alpha releases: These are early pre-release versions, indicated by tags like v0.1.1-alpha or 0.2.0-alpha.
- Beta releases: These are later pre-release versions, closer to the final release.
- Release candidates: These are versions that are potentially ready for final release, tagged with labels like 1.0.0-rc.

## Bug Reports and Feature Requests

- Before submitting a bug report or feature request, search the existing issues to see if it has already been reported or requested.
- When submitting a bug report, include as much information as possible to help us reproduce the issue. Include your system information, steps to reproduce, and any error messages.
- When submitting a feature request, provide a clear and detailed description of the feature, including the motivation for the feature and any use cases.
- Additionally, when running ChunkVault Desktop, the `ChunKVault App.log` file is created in different locations depending on the operating system:
  - On macOS, the log file is located in the `/Users/<username>/Library/Application Support/io.valink.teller` directory.
  - On Windows, the log file is located in the `%APPDATA%\valink\teller\config` directory.
  - On Linux, the log file is located in the `~/.config/teller` directory.
    If you are reporting a bug, please include this file in your report.

## Project Board

- Check the [project board](https://github.com/orgs/Valink-Solutions/projects/4) to see what features are being requested or bugs are known.
- If you want to work on a feature that's listed on the project board, comment on the issue to let others know you'll be working on it.

## Coding Guidelines

- Follow the [Rust coding guidelines](https://rust-lang.github.io/api-guidelines/) and [Tauri Guides](https://tauri.app/v1/guides/).
- Use clear and descriptive variable and function names.
- Write code that is easy to understand and maintain.
- Include comments for complex or non-obvious code.
- Ensure your code is efficient and optimized for performance.
- Write and update tests for your code.

## Communication

- Be respectful and considerate of other contributors.
- Keep discussions focused on the project and its goals.
- Be open to feedback and constructive criticism.

We appreciate your contributions and look forward to working together to make Teller the best it can be!
