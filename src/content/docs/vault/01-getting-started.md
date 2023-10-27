---
    title: Getting Started
    description: A step-by-step guide on how to get started with the Vault Server.
---

## What is the Vault Server?

The ChunkVault Backend, or "Vault" is a Rust-based backend service for the ChunkVault Minecraft backup system. The Vault is built using Actix, SQLx, Tera (a Rust template engine), and HTMX. It handles file uploading, authentication, and authorization, as well as some admin UI operations. ChunkVault enables users to backup their Minecraft worlds and version them.

## Project Status

This server needs to be rewritten as the current implementation predates the teller application and is not compatible with it. The new implementation will be written using the same stack as before, but will be more inline with the teller application.