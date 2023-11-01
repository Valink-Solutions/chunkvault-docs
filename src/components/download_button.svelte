<script>
    import { onMount } from 'svelte';

    let platforms = ['windows', 'darwin', 'linux'];
    let archs = ['x86', 'x64'];
    let selectedPlatform;
    let selectedArch;

    function detectEnvironment() {
        const ua = window.navigator.userAgent;
        let platform, arch;
        
        if (ua.indexOf("Win") !== -1) {
            platform = 'windows';
            arch = window.navigator.userAgent.includes('WOW64') || window.navigator.userAgent.includes('Win64') ? 'x64' : 'x86';
        } else if (ua.indexOf("Mac") !== -1) {
            platform = 'darwin';
            arch = window.navigator.hardwareConcurrency > 4 ? 'x64' : 'x86';
        } else if (ua.indexOf("Linux") !== -1) {
            platform = 'linux';
            arch = window.navigator.hardwareConcurrency > 4 ? 'x64' : 'x86';
        }

        return { platform, arch };
    }

    onMount(() => {
        const env = detectEnvironment();
        selectedPlatform = env.platform || platforms[0];
        selectedArch = env.arch || archs[0];
    });

    $: downloadUrl = `http://releases.chunkvault.com/download/${selectedPlatform}/${selectedArch}`;

    function getPlatformDisplayName(platform) {
        return platform === 'darwin' ? 'macos' : platform;
    }
</script>
  
<div class="flex flex-row justify-center items-center relative text-sm font-semibold h-fit">
    <a href={downloadUrl} class="inline-block bg-indigo-500 px-4 py-3 rounded-l-lg no-underline cursor-pointer hover:bg-indigo-700 transition-colors">
        <span class="text-white no-underline">Download</span>
    </a>
    <div class="flex items-center relative bg-indigo-500 rounded-r-lg hover:bg-indigo-700 transition-colors">
        <select bind:value={selectedPlatform} class="bg-transparent text-white pl-3 pr-6 py-3 rounded-r-lg appearance-none cursor-pointer">
            {#each platforms as platform}
                <option value={platform}>{getPlatformDisplayName(platform)}</option>
            {/each}
        </select>
        <!-- Drop-down Arrow SVG -->
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-5 w-5 text-white right-1 -top-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
    </div>
</div>
