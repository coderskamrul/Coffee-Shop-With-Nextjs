"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Coffee, MilkOff, Leaf, IceCream as Ice } from "lucide-react";

const categories = [
  { id: "all", name: "All", icon: <Coffee className="w-4 h-4" /> },
  { id: "hot", name: "Hot Coffee", icon: <Coffee className="w-4 h-4" /> },
  { id: "cold", name: "Cold Coffee", icon: <Ice className="w-4 h-4" /> },
  { id: "non-dairy", name: "Non-Dairy", icon: <MilkOff className="w-4 h-4" /> },
  { id: "vegan", name: "Vegan", icon: <Leaf className="w-4 h-4" /> },
];
const products = [
  {
    id: 1,
    name: "Espresso",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&auto=format&fit=crop&q=60",
    description: "Rich and bold single shot espresso",
    category: "hot",
    details: "Our signature espresso is crafted from premium Arabica beans, roasted to perfection to bring out deep, complex flavors with a smooth finish.",
    ingredients: ["Premium Arabica Beans", "Filtered Water"],
    size: ["Single Shot", "Double Shot"],
    calories: 1,
    caffeine: "63mg"
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60",
    description: "Classic Italian coffee with steamed milk foam",
    category: "hot",
    details: "A perfect balance of espresso, steamed milk, and velvety foam creates this Italian classic.",
    ingredients: ["Espresso", "Steamed Milk", "Milk Foam"],
    size: ["Small", "Medium", "Large"],
    calories: 120,
    caffeine: "63mg"
  },
  {
    id: 3,
    name: "Iced Latte",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&auto=format&fit=crop&q=60",
    description: "Smooth espresso with cold milk over ice",
    category: "cold",
    details: "Our refreshing iced latte combines shots of rich espresso with cold milk and ice.",
    ingredients: ["Espresso", "Cold Milk", "Ice"],
    size: ["Small", "Medium", "Large"],
    calories: 100,
    caffeine: "63mg"
  },
  {
    id: 4,
    name: "Cold Brew",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&auto=format&fit=crop&q=60",
    description: "Smooth, cold-steeped coffee served over ice",
    category: "cold",
    details: "Steeped for 12 hours, our cold brew offers a smooth, less acidic taste with subtle chocolate notes.",
    ingredients: ["Cold Brew Coffee", "Filtered Water", "Ice"],
    size: ["Small", "Medium", "Large"],
    calories: 5,
    caffeine: "155mg"
  },
  {
    id: 5,
    name: "Mocha",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=60",
    description: "Decadent espresso with chocolate and steamed milk",
    category: "hot",
    details: "A luxurious blend of espresso, chocolate, and steamed milk, topped with whipped cream for a rich indulgence.",
    ingredients: ["Espresso", "Steamed Milk", "Chocolate Syrup", "Whipped Cream"],
    size: ["Small", "Medium", "Large"],
    calories: 250,
    caffeine: "105mg"
  },
  {
    id: 6,
    name: "Americano",
    price: 3.49,
    image: "https://plus.unsplash.com/premium_photo-1722859269665-2c4c040d9031",
    description: "Smooth espresso diluted with hot water",
    category: "non-dairy",
    details: "A light yet robust espresso drink with a smooth and clean finish.",
    ingredients: ["Espresso", "Hot Water"],
    size: ["Small", "Medium", "Large"],
    calories: 2,
    caffeine: "95mg"
  },
  {
    id: 7,
    name: "Flat White",
    price: 4.59,
    image: "https://plus.unsplash.com/premium_photo-1722168025552-39039cc1afea",
    description: "Silky smooth espresso with microfoam",
    category: "hot",
    details: "A harmonious blend of espresso and velvety microfoam for a creamy texture.",
    ingredients: ["Espresso", "Microfoam"],
    size: ["Small", "Medium", "Large"],
    calories: 120,
    caffeine: "63mg"
  },
  {
    id: 8,
    name: "Iced Americano",
    price: 3.99,
    image: "https://plus.unsplash.com/premium_photo-1669374537636-518629de3b85",
    description: "Refreshing espresso with cold water and ice",
    category: "cold",
    details: "A light and crisp coffee made with espresso, cold water, and ice for a refreshing experience.",
    ingredients: ["Espresso", "Cold Water", "Ice"],
    size: ["Small", "Medium", "Large"],
    calories: 5,
    caffeine: "95mg"
  },
  {
    id: 9,
    name: "Caramel Macchiato",
    price: 5.29,
    image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff",
    description: "Espresso with vanilla, steamed milk, and caramel drizzle",
    category: "hot",
    details: "A delightful drink of espresso layered with steamed milk, vanilla syrup, and topped with caramel drizzle.",
    ingredients: ["Espresso", "Steamed Milk", "Vanilla Syrup", "Caramel Drizzle"],
    size: ["Small", "Medium", "Large"],
    calories: 200,
    caffeine: "75mg"
  },
  {
    id: 10,
    name: "Iced Mocha",
    price: 5.49,
    image: "https://plus.unsplash.com/premium_photo-1669374537810-f88d8ad82818",
    description: "Chilled espresso with chocolate, milk, and whipped cream",
    category: "non-dairy",
    details: "A chilled twist on the classic mocha, combining espresso, chocolate, milk, and ice for a refreshing treat.",
    ingredients: ["Espresso", "Cold Milk", "Chocolate Syrup", "Whipped Cream"],
    size: ["Small", "Medium", "Large"],
    calories: 290,
    caffeine: "105mg"
  }
];


export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addItem } = useCart();

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Our Menu
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 mb-8 overflow-x-auto pb-4"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <Link href={`/menu/${product.id}`}>
                  <div className="relative h-48 cursor-pointer transition-transform hover:scale-105">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/menu/${product.id}`}>
                    <h3 className="text-xl font-semibold hover:text-primary cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold">${product.price}</span>
                    <Button onClick={() => addItem(product)}>Add to Cart</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}