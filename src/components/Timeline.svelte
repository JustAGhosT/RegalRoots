<script lang="ts">
  import { inview } from 'svelte-inview';
  import type { TimelineItem } from '../types/timeline';

  export let items: TimelineItem[] = [];
  export let showConnectors: boolean = true;

  // Track visible items using a Set (to trigger animations)
  let visibleItems: Set<number> = new Set();

  function handleInviewChange(event: Event, index: number) {
    const customEvent = event as CustomEvent<{ inView: boolean }>;
    if (customEvent.detail.inView) {
      visibleItems.add(index);
      // Reassign to trigger reactivity in Svelte
      visibleItems = new Set(visibleItems);
    }
  }

  function getStatusColor(status?: TimelineItem['status']) {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500';
      case 'current':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-slate-300';
      default:
        return 'bg-slate-500';
    }
  }
</script>

<div class="timeline">
  {#each items as item, index}
    <div
      use:inview={{ unobserveOnEnter: true, rootMargin: '50px' }}
      on:change={(e) => handleInviewChange(e, index)}
      class="timeline-item"
      class:visible={visibleItems.has(index)}
    >
      {#if showConnectors && index !== items.length - 1}
        <div class="timeline-connector"></div>
      {/if}

      <div class="timeline-marker {getStatusColor(item.status)}">
        {#if item.icon}
          <span>{item.icon}</span>
        {:else}
          <span class="text-lg">{item.year}</span>
        {/if}
      </div>

      <div class="timeline-content">
        <h3 class="timeline-year">{item.year}</h3>
        <div class="timeline-event">{item.event}</div>
        {#if item.description}
          <p class="timeline-description">{item.description}</p>
        {/if}
      </div>
    </div>
  {/each}
</div>

<style>
  .timeline {
    position: relative;
    padding: 2rem 0;
    max-width: 800px;
    margin: 0 auto;
  }

  .timeline-item {
    position: relative;
    padding-left: 4rem;
    margin-bottom: 2.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  .timeline-item.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .timeline-connector {
    position: absolute;
    left: 1.4rem;
    top: 3rem;
    width: 2px;
    height: calc(100% + 1.5rem);
    background-color: var(--primary-color);
    opacity: 0.3;
  }

  .timeline-marker {
    position: absolute;
    left: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    background-color: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .timeline-content {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .timeline-content:hover {
    transform: translateY(-2px);
  }

  .timeline-year {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .timeline-event {
    font-size: 1.1rem;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }

  .timeline-description {
    color: #666;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .timeline {
      padding: 1rem;
    }

    .timeline-item {
      padding-left: 3rem;
    }

    .timeline-connector {
      left: 1rem;
    }

    .timeline-marker {
      width: 2rem;
      height: 2rem;
      font-size: 0.875rem;
    }
  }
</style>
