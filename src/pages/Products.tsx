import React from 'react';
import { ProductsPage } from './products/Products';

interface ProductsProps {
  onNavigate?: (path: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  return <ProductsPage onNavigate={onNavigate} />;
};

export default Products;
