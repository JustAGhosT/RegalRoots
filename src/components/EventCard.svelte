<script lang="ts">
  import type { EventCardVariant } from '../types/event-card';
  
  export let variant: EventCardVariant = 'default';
  export let title: string;
  export let description: string | undefined = undefined;
  export let date: string | undefined = undefined;
  export let time: string | undefined = undefined;
  export let location: string | undefined = undefined;
  export let category: string | undefined = undefined;
  export let author: string | undefined = undefined;
  export let imageUrl: string | undefined = undefined;
</script>

{#if variant === 'compact'}
  <div class="card w-64 shadow-sm hover:shadow-lg transition-shadow">
    <div class="p-4 space-y-1">
      <h3 class="text-lg font-semibold">{title}</h3>
      {#if category}
        <span class="inline-flex items-center px-2 py-1 text-sm bg-slate-100 rounded-full">
          <span class="mr-1">🏷️</span>
          {category}
        </span>
      {/if}
    </div>
    {#if date}
      <div class="px-4 pb-4 flex items-center text-sm text-slate-600">
        <span class="mr-1">📅</span>
        {date}
      </div>
    {/if}
  </div>

{:else if variant === 'detailed'}
  <div class="card w-full max-w-2xl shadow-sm hover:shadow-lg transition-shadow">
    {#if imageUrl}
      <div class="w-full h-48 overflow-hidden">
        <img src={imageUrl} alt={title} class="w-full h-full object-cover" />
      </div>
    {/if}
    <div class="p-6">
      <div class="flex justify-between items-start mb-4">
        <div>
          <h2 class="text-2xl font-semibold">{title}</h2>
          {#if category}
            <span class="inline-flex items-center px-2 py-1 mt-2 text-sm bg-slate-100 rounded-full">
              <span class="mr-1">🏷️</span>
              {category}
            </span>
          {/if}
        </div>
        {#if author}
          <div class="text-sm text-slate-600 flex items-center">
            <span class="mr-1">👤</span>
            {author}
          </div>
        {/if}
      </div>

      {#if description}
        <p class="text-slate-600 mb-4">{description}</p>
      {/if}

      <div class="flex flex-wrap gap-4 text-sm text-slate-600">
        {#if date}
          <div class="flex items-center">
            <span class="mr-1">📅</span>
            {date}
          </div>
        {/if}
        {#if time}
          <div class="flex items-center">
            <span class="mr-1">⏰</span>
            {time}
          </div>
        {/if}
        {#if location}
          <div class="flex items-center">
            <span class="mr-1">📍</span>
            {location}
          </div>
        {/if}
      </div>

      <div class="mt-4">
        <button class="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  </div>

{:else if variant === 'minimal'}
  <div class="card w-64 shadow-sm hover:shadow-lg transition-shadow">
    <div class="p-4">
      <h3 class="text-lg font-semibold">{title}</h3>
      {#if description}
        <p class="mt-2 text-sm text-slate-600 line-clamp-2">{description}</p>
      {/if}
    </div>
  </div>

{:else}
  <!-- default variant -->
  <div class="card w-80 shadow-sm hover:shadow-lg transition-shadow">
    {#if imageUrl}
      <div class="w-full h-40 overflow-hidden">
        <img src={imageUrl} alt={title} class="w-full h-full object-cover" />
      </div>
    {/if}
    <div class="p-4">
      <h3 class="font-semibold">{title}</h3>
      {#if description}
        <p class="mt-1 text-sm text-slate-600">{description}</p>
      {/if}

      <div class="mt-4 space-y-2">
        {#if date}
          <div class="flex items-center text-sm text-slate-600">
            <span class="mr-1">📅</span>
            {date}
          </div>
        {/if}
        {#if location}
          <div class="flex items-center text-sm text-slate-600">
            <span class="mr-1">📍</span>
            {location}
          </div>
        {/if}
      </div>

      {#if category || $$slots.default}
        <div class="mt-4 flex justify-between items-center">
          {#if category}
            <span class="inline-flex items-center px-2 py-1 text-sm bg-slate-100 rounded-full">
              <span class="mr-1">🏷️</span>
              {category}
            </span>
          {/if}
          <slot></slot>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .card {
    background: white;
    border-radius: 0.5rem;
    border: 1px solid rgb(226, 232, 240);
  }
</style>