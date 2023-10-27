---
title: How to use YamAPI
description: A guide to using YamAPI.
---

YamAPI is a robust Minecraft API designed to retrieve images of blocks and items. To use YamAPI, follow these steps:

1. Identify the Minecraft ID of the block or item you want to retrieve an image for. For example, let's say you want to retrieve an image for a compass, which has the Minecraft ID "compass".

2. Construct the URL for the image using the following format:

   ```
   https://yamapi.chunkvault.com/images/items/{minecraftId}
   ```

   Replace `{minecraftId}` with the actual Minecraft ID of the block or item. For our example, the URL would be:

   ```
   https://yamapi.chunkvault.com/images/items/compass
   ```

3. Use the constructed URL to retrieve the image of the block or item. You can use this URL in your code or application to display the image.

Here's an example code snippet in JavaScript that demonstrates how to construct the URL for a compass and log it to the console:

```javascript
const minecraftId = "compass";
const imageUrl = `https://yamapi.chunkvault.com/images/items/${minecraftId}`;
console.log(imageUrl);
```

## Project Status

YamAPI probably shouldn't be used in production yet. We are actively working on improving the API and adding new features. We are working on a plan to build a better platform for supporting vanilla and modded textures by creating a tool to allow modders to upload their own textures to YamAPI.
