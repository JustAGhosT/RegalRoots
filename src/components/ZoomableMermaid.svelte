<script lang="ts">
  import { onMount } from 'svelte';
  import mermaid from 'mermaid/dist/mermaid.esm.mjs';

  export let chartCode: string;
  let container: HTMLDivElement | null = null;
  let currentZoom = 1.2; // Start slightly zoomed in

  async function renderChart() {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',  // 'dark', 'neutral', etc.
      gantt: {
        barHeight: 35,
        barGap: 5,
        topPadding: 50,
        leftPadding: 50,
        rightPadding: 50,
        axisFormat: '%Y-%m'
      }
    });

    const { svg } = await mermaid.render('mermaidChart', chartCode);
    if (container) {
      container.innerHTML = svg;
      container.style.transform = `scale(${currentZoom})`;
    }
  }

  onMount(() => {
    renderChart();
  });

  function handleZoom(e: Event) {
    if (!container) return;
    const val = parseFloat((e.target as HTMLInputElement).value);
    currentZoom = val;
    container.style.transform = `scale(${currentZoom})`;
  }
</script>

<style>
  .zoomable-container {
    border: 1px solid #ccc;
    overflow: auto;
    width: 100%;
    height: 800px; /* bigger container */
    position: relative;
  }

  .mermaid-container {
    transform-origin: top left;
    transition: transform 0.2s ease;
  }
</style>

<div class="zoom-controls">
  <label for="zoomRange">Zoom: </label>
  <input
    id="zoomRange"
    type="range"
    min="0.5"
    max="2"
    step="0.1"
    value={currentZoom}
    on:input={handleZoom}
  />
</div>

<div class="zoomable-container">
  <div class="mermaid-container" bind:this={container}></div>
</div>
