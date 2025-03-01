declare module 'lucide-svelte' {
    import { SvelteComponentTyped } from 'svelte';
    
    export class ShoppingBasket extends SvelteComponentTyped<{
      class?: string;
      size?: string | number;
      strokeWidth?: string | number;
    }> {}
    
    export class Milk extends SvelteComponentTyped<{
      class?: string;
      size?: string | number;
      strokeWidth?: string | number;
    }> {}
    
    export class UtensilsCrossed extends SvelteComponentTyped<{
      class?: string;
      size?: string | number;
      strokeWidth?: string | number;
    }> {}
  }