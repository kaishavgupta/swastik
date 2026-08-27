import React from 'react';
import { ProductPart1 } from './product_part1';
import { ProductPart2 } from './product_part2';
import { ProductPart3 } from './product_part3';
import { ProductPart4 } from './product_part4';
import { ProductPart5 } from './product_part5';

interface ProductsProps {
  onNavigate?: (path: string) => void;
}

export const ProductsPage: React.FC<ProductsProps> = ({ onNavigate }) => {
  return (
    <div className="products-page">
      <ProductPart1 onNavigate={onNavigate} />
      <ProductPart2 onNavigate={onNavigate} />
      <ProductPart3 onNavigate={onNavigate} />
      <ProductPart4 />
      <ProductPart5 onNavigate={onNavigate} />
    </div>
  );
};

export default ProductsPage;
