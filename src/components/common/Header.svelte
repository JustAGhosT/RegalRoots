<script>
    let isMenuOpen = false;
    const toggleMenu = () => isMenuOpen = !isMenuOpen;
  </script>
  
  <header>
    <nav class="navbar">
      <div class="logo">
        <a href="/RegalRoots/">Regal Roots</a>
      </div>
      
      <button class="menu-toggle" on:click={toggleMenu}>
        <span class="menu-icon"></span>
      </button>
  
      <ul class="nav-links" class:active={isMenuOpen}>
        <li><a href="/RegalRoots">Home</a></li>
        <li><a href="/RegalRoots/business">Business Plan</a></li>
        <li><a href="/RegalRoots/products">Products</a></li>
        <li><a href="/RegalRoots/about">About</a></li>
        <li><a href="/RegalRoots/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <style>
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
  
    .menu-toggle {
      display: none;
    }
  
    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
        background: none;
        border: none;
        cursor: pointer;
      }
  
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
      }
  
      .nav-links.active {
        display: flex;
      }
    }
  </style>