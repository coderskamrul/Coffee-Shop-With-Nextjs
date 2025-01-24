"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import { motion } from "framer-motion";
import { Coffee, Leaf, Scale, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  details: string;
  ingredients: string[];
  size: string[];
  calories: number;
  caffeine: string;
}

interface ProductClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductClient({ product, relatedProducts }: ProductClientProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-bold mb-6">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.details}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="flex gap-4">
                {product.size.map((size, index) => (
                  <Button
                    key={size}
                    variant={selectedSize === index ? "default" : "outline"}
                    onClick={() => setSelectedSize(index)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5" />
                <span>{product.calories} calories</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>{product.caffeine} caffeine</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              className="w-full"
              onClick={() => addItem(product)}
            >
              Add to Cart
            </Button>
          </div>
        </motion.div>

        {/* Related Products */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <Link href={`/menu/${relatedProduct.id}`}>
                    <div className="relative h-48 cursor-pointer transition-transform hover:scale-105">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link href={`/menu/${relatedProduct.id}`}>
                      <h3 className="text-xl font-semibold hover:text-primary cursor-pointer">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mt-2">{relatedProduct.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-lg font-bold">${relatedProduct.price}</span>
                      <Button onClick={() => addItem(relatedProduct)}>Add to Cart</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}