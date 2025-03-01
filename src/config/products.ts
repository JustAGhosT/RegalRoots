import { ShoppingBasket, Milk, Utensils, Drumstick } from 'lucide-astro';
import type { Product } from '../types/product';

/** Export your products array */
export const products: Product[] = [
  {
    title: 'Organic Vegetables',
    Icon: ShoppingBasket,
    description:
      'Fresh, locally grown organic vegetables harvested at peak ripeness for maximum nutrition and flavor.',
  },
  {
    title: 'Meat Products',
    Icon: Drumstick,
    description:
      'Enjoy responsibly raised goat, pig, and chicken, available seasonally. We also occasionally offer specialty products upon request.',
  },
  {
    title: 'Goat Milk Products',
    Icon: Milk,
    description:
      'Premium goat milk products including fresh milk, artisanal cheese, and natural yogurt.',
  },
  {
    title: 'Farm-to-Table Restaurant',
    Icon: Utensils,
    description:
      'Experience farm-fresh cuisine prepared with ingredients harvested from our own fields.',
  },
];
