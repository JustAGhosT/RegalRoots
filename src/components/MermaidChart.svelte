<script lang="ts">
    import { onMount } from 'svelte';
    import * as mermaid from 'mermaid';
  
    export let chartCode: string;
  
    let container: HTMLDivElement;
  
    onMount(() => {
      // Initialize Mermaid with your preferred configuration.
      mermaid.initialize({
        startOnLoad: false,
        theme: 'forest'
      });
  
      // Render the diagram and set the innerHTML of the container.
      mermaid.render('mermaidChart', chartCode, (svgCode: string) => {
        container.innerHTML = svgCode;
      });
    });
  </script>
  
  <style>
    .mermaid-container {
      overflow: auto;
      border: 1px solid #ccc;
      padding: 1rem;
    }
  </style>
  
  <div class="mermaid-container" bind:this={container}></div>
  