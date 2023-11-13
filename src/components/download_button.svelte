<script lang="ts">
    import { onMount } from 'svelte';

    let platforms = ['windows', 'darwin', 'linux'];
    let archs = ['x86', 'x64'];
    let selectedPlatform: string;
    let selectedArch: string;
    let totalDownloads = 0;

    function detectEnvironment(nAgt: string) {
        if (nAgt.includes("Android")) {
            return 'android';
        } else if (nAgt.includes("iPhone") || nAgt.includes("iPad")) {
            return 'ios';
        } else if (nAgt.includes("Win")) {
            return 'windows';
        } else if (nAgt.includes("Mac")) {
            return 'darwin';
        } else if (nAgt.includes("Linux")) {
            return 'linux';
        }

        return 'windows'; // default to windows if platform detection fails
    }

    onMount(async () => {
        
        var nAgt = navigator.userAgent;
    
        console.log("OS:", nAgt);
        selectedPlatform = detectEnvironment(nAgt);
        // selectedArch = env.arch || archs[0];
    });

    $: downloadUrl = selectedPlatform === 'android' || selectedPlatform === 'ios' 
        ? 'https://github.com/Valink-Solutions/teller/releases/latest' 
        : `https://releases.chunkvault.com/download/${selectedPlatform}/${selectedArch}`;


    function getPlatformDisplayName(platform: string) {
        return platform === 'darwin' ? 'macos' : platform;
    }
</script>
  
<div class="flex flex-row justify-center items-center relative text-sm font-semibold h-fit">
    <a href={downloadUrl} style="color: black !important;" class="btn cursor-point btn-primary">
        {selectedPlatform === 'android' || selectedPlatform === 'ios' ? 'Download Desktop App' : 'Download'}
    </a>
    {#if selectedPlatform !== 'android' && selectedPlatform !== 'ios'}
        <div class="flex items-center relative transition-colors">
            <select bind:value={selectedPlatform} class="select appearance-none text-base-content cursor-pointer">
                {#each platforms as platform}
                    <option value={platform}>{getPlatformDisplayName(platform)}</option>
                {/each}
            </select>
        </div>
    {/if}
</div>