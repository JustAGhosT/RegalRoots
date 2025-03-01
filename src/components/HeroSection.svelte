<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  // Import icons from lucide-svelte (install with `npm install lucide-svelte`)
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';

  // Props for text and links
  export let heading: string;
  export let subtitle: string;
  export let primaryCtaLabel: string;
  export let primaryCtaHref: string;
  export let secondaryCtaLabel: string;
  export let secondaryCtaHref: string;

  // Array of image URLs to rotate through
  let heroImages = [
    '/RegalRoots/images/farm-herov1.png',
    '/RegalRoots/images/farm-herov2.png',
    '/RegalRoots/images/farm-herov3.png',
    '/RegalRoots/images/farm-herov4.png',
    '/RegalRoots/images/farm-herov5.png',
    '/RegalRoots/images/farm-herov6.png',
    '/RegalRoots/images/farm-herov7.png',
    '/RegalRoots/images/farm-herov8.png',
    '/RegalRoots/images/farm-herov9.png'
  ];

  let currentIndex = 0;
  let interval: number;

  // Automatically rotate images every X seconds
  onMount(() => {
    interval = window.setInterval(() => {
      console.log('auto-rotate triggered');
      nextImage();
    }, 5000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  function nextImage() {
    console.log('nextImage() called before:', currentIndex);
    currentIndex = (currentIndex + 1) % heroImages.length;
    console.log('nextImage() called after:', currentIndex);
  }
  function prevImage() {
    console.log('prevImage() called before:', currentIndex);
    currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
    console.log('prevImage() called after:', currentIndex);
  }

</script>

<!-- Hero Container -->
<div
  class="hero-parallax"
  style="
    background-image:
      linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url({heroImages[currentIndex]})
  "
>
  <!-- Hero Text -->
  <h1>{heading}</h1>
  <p class="hero-subtitle">{subtitle}</p>

  <!-- CTA Buttons -->
  <div class="button-group">
    {#if primaryCtaLabel && primaryCtaHref}
      <a href={primaryCtaHref} class="button primary">{primaryCtaLabel}</a>
    {/if}
    {#if secondaryCtaLabel && secondaryCtaHref}
      <a href={secondaryCtaHref} class="button secondary">{secondaryCtaLabel}</a>
    {/if}
  </div>

  <!-- Left Rotator Button -->
  <button on:click={prevImage} class="hero-rotator-left">
    <ChevronLeft size={20} />
  </button>

  <!-- Right Rotator Button -->
  <button on:click={nextImage} class="hero-rotator-right">
    <ChevronRight size={20} />
  </button>
</div>

<style>
  .hero-parallax {
    position: relative;
    height: 80vh;
    min-height: 600px;
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* Parallax effect on desktop */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding: 2rem;
    transition: background-image 0.8s ease-in-out; /* Smooth transition */
  }

  .hero-parallax h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .hero-subtitle {
    font-size: 1.2rem;
    max-width: 800px;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .button-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .button {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .button.primary {
    background-color: var(--primary-color);
    color: white;
  }

  .button.primary:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
  }

  .button.secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }

  .button.secondary:hover {
    background-color: white;
    color: var(--primary-color);
    transform: translateY(-2px);
  }

  /* Rotator Buttons (Icons) */
  .hero-rotator-left,
  .hero-rotator-right {
    position: absolute;
    bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    color: white;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    z-index: 10;
  }

  .hero-rotator-left {
    left: 1rem;
  }

  .hero-rotator-right {
    right: 1rem;
  }

  .hero-rotator-left:hover,
  .hero-rotator-right:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    .hero-parallax {
      min-height: 500px;
      background-attachment: scroll; /* Disable parallax on mobile */
    }
    .hero-parallax h1 {
      font-size: 2.5rem;
    }
  }
</style>
