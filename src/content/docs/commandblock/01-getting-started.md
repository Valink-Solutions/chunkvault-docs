---
title: Getting Started
description: A step-by-step guide on how to get started with CommandBlock.
---

## What is CommandBlock?

CommandBlock is a Rust-based library designed to handle various Minecraft-related data formats, including NBT (Named Binary Tag) data, Anvil data, and region files. This library is a work in progress and is currently not recommended for production use. It is made public for the purpose of contribution and collaboration.

The library is currently available on [crates.io](https://crates.io/crates/commandblock), be advised the library is currently in the process of being documented, and will be made available on [docs.rs](https://docs.rs/commandblock) once it is ready.

## Installation

To install CommandBlock, add the following to your `Cargo.toml` file:

```toml
[dependencies]
commandblock = "0.4.1"
```

Alternatively, you can use the `cargo add` command to add the dependency to your `Cargo.toml` file:

```shell
cargo add commandblock
```

## Examples

This library is currently in the process of being documented. For now, you can refer to the following examples to get started:

### Reading and Manipulating NBT data from a file

```rust
use commandblock::nbt::{
    read_from_file, write_to_file,
    NbtValue,
    Compression,
    Endian
};
use std::collections::HashMap;
use std::path::PathBuf;

// Read NBT data from a file
let path = PathBuf::from("./tests/data/bedrock_level.dat");
let (name, mut value) = read_from_file(path, Compression::Uncompressed, Endian::Little).unwrap();

// Manipulate the NBT data which automatically converts to NbtValue's
value.insert("test".to_string(), "Hello, world!");

let mut inner_compound = HashMap::new();
inner_compound.insert("isTest".to_string(), NbtValue::Byte(1));
inner_compound.insert("numberTests".to_string(), NbtValue::Int(123));
value.insert("test2".to_string(), inner_compound);

// Write the manipulated NBT data to a new file
let path = PathBuf::from("./tests/data/test.dat");
write_to_file(Some(&name), value, path, Compression::Uncompressed, Endian::Little).unwrap();
```
