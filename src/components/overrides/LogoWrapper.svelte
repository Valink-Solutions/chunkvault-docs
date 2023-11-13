<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  import { writable, derived } from 'svelte/store';

  // Create a writable store for the theme
  const themeStore = writable('light');

  // Function to get the preferred system color scheme
  const getPreferredColorScheme = () => {
    return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  // Function to parse theme
  const parseTheme = (theme: string) => {
    if (theme === 'auto' || theme === 'dark' || theme === 'light') {
      return theme;
    } else {
      return 'auto';
    }
  };

  // Function to load theme
  const loadTheme = () => {
    const theme: string = typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme') || 'auto';
    const parsedTheme = parseTheme(theme);
    themeStore.set(parsedTheme);

    return parsedTheme;
  };

  onMount(() => {
    loadTheme();
    // Update the theme initially
    updateTheme();
  })

  // Listen for changes in the data-theme attribute
  const updateTheme = () => {
    const themeAttr = document.documentElement.getAttribute('data-theme');
    if (themeAttr) {
      themeStore.set(themeAttr);
    }
    loadTheme(); // Add this line
  };

  // Observe changes in the theme
  $: {
    if ($themeStore === 'light' || ($themeStore === 'auto' && getPreferredColorScheme() === 'light')) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else if ($themeStore === 'dark' || ($themeStore === 'auto' && getPreferredColorScheme() === 'dark')) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };

  let theme: string;
  themeStore.subscribe(value => {
    theme = value;
  });

  afterUpdate(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });

  // Listen for changes in the localStorage
  window.addEventListener('storage', updateTheme);
</script>

<style>
  .theme-slot {
    display: none;
  }

  .theme-slot.dark-theme {
    display: block;
  }

  .theme-slot.light-theme {
    display: block;
  }
</style>

<div class="theme-slot {theme === 'dark' ? 'dark-theme' : ''}" data-theme="dark">
  <slot name="dark"></slot>
</div>
<div class="theme-slot {theme === 'light' ? 'light-theme' : ''}" data-theme="light">
  <slot name="light"></slot>
</div>