"use client";

import { ShoppingCart, Star, Clock, MapPin, Award, Users, Coffee as CoffeeIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { useCart } from "@/hooks/use-cart";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Espresso",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&auto=format&fit=crop&q=60",
    description: "Rich and bold single shot espresso"
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60",
    description: "Classic Italian coffee with steamed milk foam"
  },
  {
    id: 3,
    name: "Latte",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&auto=format&fit=crop&q=60",
    description: "Smooth espresso with steamed milk"
  },
  {
    id: 4,
    name: "Cold Brew",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&auto=format&fit=crop&q=60",
    description: "Smooth, cold-steeped coffee served over ice"
  },
  {
    id: 5,
    name: "Hot Brew",
    price: 10.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5E7nTVlMN_WQNACjVxdHDq8Zqql5z46fCQ&s",
    description: "Smooth, cold-steeped coffee served over ice"
  },
  {
    id: 6,
    name: "Cold Nitro",
    price: 15.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZQEi6nwAqMwz3pN7H8NxKlqWYcMMmcaCVQ&s",
    description: "Smooth, cold-steeped coffee served over ice"
  },
  {
    id: 7,
    name: "Coffee Drink",
    price: 20.99,
    image: "https://img.freepik.com/premium-photo/close-up-coffee-cup-table_1048944-13036369.jpg?semt=ais_incoming",
    description: "Smooth, cold-steeped coffee served over ice"
  },
  {
    id: 8,
    name: "New Coffee Brew",
    price: 25.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-H-XNaD_ChB9AUWR2ca1kYz8wLjI0XcAkGA&s",
    description: "Coffee served over ice with a hint of vanilla"
  },
];

const testimonials = [
  {
    id: 1,
    name: "Aeysha Ahmed",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    text: "The best coffee I've ever had! The atmosphere is amazing and the staff is so friendly."
  },
  {
    id: 2,
    name: "Hmd Kamrul",
    image: "https://avatars.githubusercontent.com/u/60602764?v=4",
    text: "I love coming here for my morning coffee. It's become part of my daily routine."
  },
  {
    id: 3,
    name: "Ahmed Ali",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
    text: "Great selection of coffee and pastries. The cold brew is exceptional!"
  }
];

const locations = [
  {
    id: 1,
    name: "Downtown Cafe",
    address: "123 Main St, Downtown",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
    hours: "7AM - 8PM"
  },
  {
    id: 2,
    name: "Riverside Coffee",
    address: "456 River Rd, Riverside",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&auto=format&fit=crop&q=60",
    hours: "8AM - 7PM"
  },
  {
    id: 3,
    name: "Arts District",
    address: "789 Gallery Way, Arts District",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&auto=format&fit=crop&q=60",
    hours: "7AM - 9PM"
  }
];

const features = [
  {
    icon: <CoffeeIcon className="h-6 w-6" />,
    title: "Premium Beans",
    description: "Sourced from the finest coffee regions"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Award Winning",
    description: "Multiple barista championship winners"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community",
    description: "Building connections through coffee"
  }
];

export default function Home() {
  const { addItem } = useCart();
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [productsRef, productsInView] = useInView({ triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true });
  const [storyRef, storyInView] = useInView({ triggerOnce: true });
  const [processRef, processInView] = useInView({ triggerOnce: true });
  const [locationsRef, locationsInView] = useInView({ triggerOnce: true });
  const [newsletterRef, newsletterInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />

      {/* Hero Section */}
      <motion.header
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative h-screen bg-black mt-16"
      >
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&auto=format&fit=crop&q=60"
          alt="Coffee shop hero"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-7xl font-bold mb-4"
          >
            Alowishus Delicious
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl mb-8"
          >
            Experience the perfect brew
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4"
          >
            <Button size="lg" variant="default">Download App</Button>
            <Button className="text-black" size="lg" variant="outline">Shop Coffee</Button>
          </motion.div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Features Section */}
        <motion.section
          ref={storyRef}
          initial={{ y: 40, opacity: 0 }}
          animate={storyInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={storyInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Products Section */}
        <motion.section
          ref={productsRef}
          initial={{ y: 40, opacity: 0 }}
          animate={productsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <CoffeeIcon className="h-8 w-8" />
            Our Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 20, opacity: 0 }}
                animate={productsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
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
        </motion.section>

        {/* Our Story Section */}
        <motion.section
          ref={processRef}
          initial={{ y: 40, opacity: 0 }}
          animate={processInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=60"
                alt="Coffee brewing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Coffee Story</h2>
              <p className="text-gray-600 mb-6">
                Since 2012, we've been crafting the perfect cup of coffee for our community. Our journey began with a simple passion for quality coffee and has evolved into a commitment to sourcing the finest beans from sustainable farms around the world.
              </p>
              <p className="text-gray-600 mb-6">
                Every cup we serve is a result of careful selection, precise roasting, and expert brewing. Our baristas are trained in the art of coffee making, ensuring that each drink meets our high standards of quality and taste.
              </p>
              <Button size="lg">Learn More About Us</Button>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          ref={testimonialsRef}
          initial={{ y: 40, opacity: 0 }}
          animate={testimonialsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Client Testimonial</h2>
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600">4.9 out of 5 Overall Star Rating for All Local Business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ y: 20, opacity: 0 }}
                animate={testimonialsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600 text-center">{testimonial.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Locations Section */}
        <motion.section
          ref={locationsRef}
          initial={{ y: 40, opacity: 0 }}
          animate={locationsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Visit Our Cafes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ y: 20, opacity: 0 }}
                animate={locationsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-48">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                  <p className="text-gray-600 mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {location.address}
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {location.hours}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          ref={newsletterRef}
          initial={{ y: 40, opacity: 0 }}
          animate={newsletterInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24 bg-primary text-primary-foreground rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, brewing tips, and coffee stories.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <Button className="text-black hover:bg-red-600 hover:text-white" variant="outline">Subscribe</Button>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Visit Us</h3>
              <p>123 Coffee Street</p>
              <p>Brewville, CF 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p>Monday - Friday: 7am - 8pm</p>
              <p>Saturday - Sunday: 8am - 6pm</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Phone: (555) 123-4567</p>
              <p>Email: hello@coffeeshop.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Artisan Coffee Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}