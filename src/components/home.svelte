<script>
  export let title = "Welcome to Regal Roots";

  const handleClick = () => {
    alert('Thank you for visiting Regal Roots!');
  };
</script>

<div class="home">
  <h1>{title}</h1>
  <p>
    Welcome to Regal Roots: The Grove and Goatery Estate, a local farm dedicated to sustainable farming practices and community involvement.
  </p>
  <button on:click={handleClick}>
    Learn More
  </button>
</div>

<style>
  .home {
    text-align: center;
    padding: 2rem;
  }

  h1 {
    color: #4CAF50;
    font-size: 2.5rem;
  }

  p {
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }

  button:hover {
    background-color: #45a049;
  }
</style>
