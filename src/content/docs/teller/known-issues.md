---
    title: Known Issues
    description: A list of known issues with ChunkVault Desktop.
---

## Rendering Issues

In ChunkVault, we use a custom solution, YamAPI, for rendering textures for in-game items and blocks. However, it's important to note that YamAPI is not yet fully functional as it's still under development. 

At present, YamAPI is in its basic implementation stage. We are continuously working on enhancing it to support all versions of Minecraft textures. Our future plans also include extending support to custom modded textures. This will allow modders to display their unique textures in ChunkVault. 

We appreciate your understanding and patience as we continue to improve and update the ChunkVault ecosystem.

## Backup & Restoration Issues

ChunkVault uses ZSTD for creating backups. However, when creating a backup, it uses the world's custom id. If the world gets restored with the "Replace world" option selected, it will use the default id of the world instead of creating a new one for the world that is getting restored. This means that it will create issues when backing up these worlds. 

For instance, if the same world exists in two instances and gets backed up, their snapshot gets uploaded into the same backup destination. This could create issues when the user wants to have version-controlled worlds. We are aware of this issue and are working on a solution. In the meantime, we recommend users to be mindful of this when restoring worlds.

## World Conversion & Corruption

Currently, there are no known instances of corruption in ChunkVault. As for converting worlds between Bedrock and Java, this feature does not exist as it is not the primary function of ChunkVault. However, if there is enough demand from the community in the future, our developers may consider adding this feature.

## Future Improvements

We are planning to implement a database system for managing Minecraft worlds. This will make the backup and restore system more robust and smooth, eliminating the risk of worlds being mishandled. 

The new system will also pave the way for automatic backups, a feature that is currently not available. We believe this improvement will greatly enhance the user experience and provide a more reliable and efficient way of managing Minecraft worlds in ChunkVault.