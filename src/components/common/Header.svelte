<script lang="ts">
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header>
  <nav class="navbar">
    <!-- Logo -->
    <div class="logo">
      <a href="/RegalRoots/">Regal Roots</a>
    </div>
    
    <!-- Hamburger Button (mobile only) -->
    <button
      class="menu-toggle"
      aria-label="Toggle navigation menu"
      aria-expanded={isMenuOpen}
      on:click={toggleMenu}
    >
      <!-- Simple hamburger icon with 3 bars -->
      <span class="menu-icon"></span>
      <span class="menu-icon"></span>
      <span class="menu-icon"></span>
    </button>

    <!-- Navigation Links -->
    <!-- If isMenuOpen is true, we add 'active' to display on mobile -->
    <ul class="nav-links {isMenuOpen ? 'active' : ''}">
      <li><a href="/RegalRoots">Home</a></li>
      <li><a href="/RegalRoots/business">Business Plan</a></li>
      <li><a href="/RegalRoots/products">Products</a></li>
      <li><a href="/RegalRoots/about">About</a></li>
      <li><a href="/RegalRoots/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  /* Basic Header Styling */
  header {
    background: #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo a {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;
  }

  /* Nav Links */
  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    text-decoration: none;
    color: #2c3e50;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: #27ae60;
  }

  /* Hamburger Button (hidden on desktop) */
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .menu-icon {
    display: block;
    width: 24px;
    height: 3px;
    background: #2c3e50;
    margin: 5px 0;
    transition: background 0.3s ease;
  }

  /* Mobile Styles */
  @media (max-width: 768px) {
    .menu-toggle {
      display: inline-block;
    }

    /* Hide the nav links by default on mobile */
    .nav-links {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      flex-direction: column;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    /* Show links if isMenuOpen is true (the 'active' class) */
    .nav-links.active {
      display: flex;
    }
  }
</style>
