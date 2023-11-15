import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";
import autoprefixer from "autoprefixer";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "ChunkVault Docs",
      editLink: {
        baseurl:
          "https://github.com/Valink-Solutions/chunkvault-docs/tree/master",
      },
      components: {
        Badge: "./src/components/overrides/Badge.astro",
        ContentPanel: "./src/components/overrides/ContentPanel.astro",
        EditLink: "./src/components/overrides/EditLink.astro",
        Page: "./src/components/overrides/Page.astro",
        Pagination: "./src/components/overrides/Pagination.astro",
        PageTitle: "./src/components/overrides/PageTitle.astro",
        Header: "./src/components/overrides/Header.astro",
        PageFrame: "./src/components/overrides/PageFrame.astro",
        ThemeSelect: "./src/components/overrides/ThemeSelect.astro",
        Search: "./src/components/overrides/Search.astro",
        Sidebar: "./src/components/overrides/Sidebar.astro",
        SidebarSublist: "./src/components/overrides/SidebarSublist.astro",
        MobileMenuToggle: "./src/components/overrides/MobileMenuToggle.astro",
        // MobileTableOfContents: './src/components/overrides/MobileTableOfContents.astro',
        // ThemeProvider: './src/components/overrides/ThemeProvider.astro',
      },
      customCss: ["./src/tailwind.postcss"],
      logo: {
        light: "./src/assets/chunkvault-logo-dark.png",
        dark: "./src/assets/chunkvault-logo-light.png",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/valink-solutions",
        twitter: "https://twitter.com/ChunkVault",
        "x.com": "https://twitter.com/valink",
        discord: "https://discord.gg/k3yjVarAtA",
      },
      favicon: "/favicon.ico",
      sidebar: [
        {
          label: "ChunkVault Desktop",
          autogenerate: {
            directory: "teller",
          },
        },
        {
          label: "Vault Server",
          autogenerate: {
            directory: "vault",
          },
        },
        {
          label: "CommandBlock",
          autogenerate: {
            directory: "commandblock",
          },
        },
        {
          label: "YamAPI",
          autogenerate: {
            directory: "yamapi",
          },
        },
      ],
    }),
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    rollupOptions: {
      external: ["@pagefind/default-ui/css/ui.css"],
    },
  },
  vite: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
  },
});
