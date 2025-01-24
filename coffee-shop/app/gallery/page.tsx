"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = ["All", "Coffee", "Cafe", "Events"];

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=60",
    category: "Coffee",
    title: "Perfect Brew"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
    category: "Cafe",
    title: "Our Space"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&auto=format&fit=crop&q=60",
    category: "Events",
    title: "Coffee Workshop"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=60",
    category: "Coffee",
    title: "Morning Ritual"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&auto=format&fit=crop&q=60",
    category: "Cafe",
    title: "Cozy Corner"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&auto=format&fit=crop&q=60",
    category: "Coffee",
    title: "Iced Perfection"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60",
    category: "Coffee",
    title: "Latte Art"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=800&auto=format&fit=crop&q=60",
    category: "Events",
    title: "Coffee Tasting"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?w=800&auto=format&fit=crop&q=60",
    category: "Cafe",
    title: "Outdoor Seating"
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-8">Our Gallery</h1>
          
          <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="relative h-72">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold">{image.title}</h3>
                      <p className="text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}