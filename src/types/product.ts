
import type { JSX } from 'astro/jsx-runtime';

export type IconComponent = (props: {
    size?: number;
    class?: string;
    [key: string]: any;
}) => JSX.Element;;

/** Define a Product interface for type safety */
export interface Product {
    title: string;
    Icon: IconComponent;
    description: string;
}