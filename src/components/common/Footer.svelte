<footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>Regal Roots Farm</h3>
        <p>Sustainable farming for a better tomorrow</p>
      </div>
      
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/RegalRoots/business/">Business Plan</a></li>
          <li><a href="/products">Our Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Contact Us</h4>
        <p>Email: info@regalroots.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Regal Roots Farm. All rights reserved.</p>
    </div>
  </footer>
  
  <style>
    footer {
      background: #2c3e50;
      color: white;
      padding: 3rem 0 1rem;
      margin-top: 4rem;
    }
  
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 0 2rem;
    }
  
    .footer-section h3 {
      margin: 0 0 1rem;
      font-size: 1.5rem;
    }
  
    .footer-section h4 {
      margin: 0 0 1rem;
      font-size: 1.2rem;
    }
  
    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    .footer-section ul li {
      margin-bottom: 0.5rem;
    }
  
    .footer-section a {
      color: white;
      text-decoration: none;
      transition: opacity 0.3s ease;
    }
  
    .footer-section a:hover {
      opacity: 0.8;
    }
  
    .footer-bottom {
      text-align: center;
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
  </style>
