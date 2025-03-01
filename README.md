# Regal Roots: The Grove and Goatery Estate

Welcome to the repository for **Regal Roots: The Grove and Goatery Estate**—a website for our local farm dedicated to sustainable farming practices and community involvement. Our project has evolved, and we've transitioned from using Jekyll to embracing a modern, dynamic framework powered by Astro.

## Project Overview

Regal Roots is more than just a website; it’s a digital showcase for our farm’s history, mission, values, and products. The public site is generated as a static website and hosted from the `public` directory on an Azure static website, while business-related documents are kept in the `business` directory.

## Repository Structure

- **`public/index.md`**: Home page of the website.
- **`public/about.md`**: About page with information about the farm.
- **`public/products.md`**: Page highlighting our key products.
- **`public/contact.md`**: Contact page with various contact methods.
- **`business/`**: Directory containing business-related documents.
  - **`business-plan.md`**: Business plan for the farm.
  - **`expenses-breakdown.md`**: Breakdown of expenses for the farm.

## Why Not Jekyll?

While Jekyll served us well in the past as a static site generator, our evolving needs demanded a solution that could offer:
- **Enhanced Performance:** Optimized content delivery with minimal JavaScript.
- **Greater Flexibility:** Seamless integration of modern interactive components.
- **Better Integration:** Support for frameworks like React and Svelte to build dynamic, reusable components.

Astro meets these needs by enabling partial hydration and allowing us to mix and match components from multiple frameworks, making it the ideal choice for our modern website.

## Tech Stack Overview

This project leverages a blend of cutting-edge web technologies to achieve both performance and flexibility. Below is an explanation of each key technology and its role in Regal Roots.

### Astro

**What is Astro?**  
Astro is a modern meta-framework designed for building fast, content-centric websites. It allows developers to integrate components from different frameworks while ensuring that only the necessary JavaScript is delivered to the client.

**Key Features:**
- **Partial Hydration:** Loads JavaScript only for interactive components.
- **Component Islands:** Seamlessly integrates components from frameworks like React and Svelte.
- **Static Site Generation (SSG) & SSR:** Supports both static generation and server-side rendering.

**Best For:**  
- Content-heavy websites where performance and SEO are priorities.

### Svelte

**What is Svelte?**  
Svelte is a compiler that converts declarative components into efficient JavaScript during build time. It eliminates the need for a virtual DOM, resulting in faster load times and minimal runtime overhead.

**Key Features:**
- **True Reactivity:** Built-in reactivity with minimal boilerplate.
- **Concise Syntax:** Write less code while achieving more functionality.
- **Built-in Animations:** Supports smooth, native animations without extra libraries.

**Best For:**  
- Building interactive user interfaces where performance and simplicity are critical.

### React

**What is React?**  
React is a robust JavaScript library for building user interfaces, developed and maintained by Facebook/Meta. It uses a virtual DOM for efficient UI updates and has a vast ecosystem of libraries and tools.

**Key Features:**
- **Component-Based Architecture:** Enables the creation of reusable UI components.
- **Virtual DOM:** Optimizes updates and rendering.
- **Unidirectional Data Flow:** Simplifies state management in complex applications.

**Best For:**  
- Large-scale applications that require a rich ecosystem and strong community support.

## How They Work Together

By combining these technologies, Regal Roots achieves a balance between performance and modern interactivity:
- **Astro** serves as our meta-framework, optimizing content delivery and allowing us to integrate interactive components as needed.
- **Svelte** and **React** are used to build dynamic, reusable components that enhance the user experience without sacrificing performance.

This integrated approach ensures our website is both fast and scalable, providing a seamless experience for visitors while maintaining an efficient development workflow.

## How to Contribute

We welcome contributions to help improve our website. Please feel free to submit issues and pull requests. Your feedback and contributions are greatly appreciated.

## License

This project is licensed under the MIT License.

## Public Site URL

Visit the public site at: [https://justaghost.github.io/RegalRoots/](https://justaghost.github.io/RegalRoots/)

## Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Svelte Documentation](https://svelte.dev/docs)
- [React Documentation](https://react.dev)
