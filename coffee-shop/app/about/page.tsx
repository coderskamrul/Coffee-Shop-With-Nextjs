"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Award, Users, Leaf, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Quality First",
    description: "We source only the finest beans from sustainable farms worldwide."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Passion for Coffee",
    description: "Every cup is crafted with love and attention to detail."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Focus",
    description: "Creating a welcoming space for coffee lovers to connect."
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Sustainability",
    description: "Committed to environmentally responsible practices."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Impact",
    description: "Supporting coffee farming communities worldwide."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    description: "Continuously improving our craft and service."
  }
];

const team = [
  {
    name: "Kamrul Hasan",
    role: "Master Barista",
    image: "https://avatars.githubusercontent.com/u/60602764?v=4"
  },
  {
    name: "Hmd kamrul",
    role: "Coffee Roaster",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EvsAlFJXNQLG4HwCEeDglyEJJsB5DOHLCQ&s"
  },
  {
    name: "Emily Rodriguez",
    role: "Cafe Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0V4khZ9p_Y2ZSIjBJgJd9EVUITbxn5HYsZg&s"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2012, we've been passionate about crafting the perfect cup of coffee
            and creating a warm, welcoming space for our community.
          </p>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=60"
              alt="Coffee brewing"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe that great coffee has the power to bring people together and
              create meaningful connections. Our mission is to serve exceptional coffee
              while fostering a sense of community and sustainability.
            </p>
            <p className="text-gray-600 mb-6">
              Every bean we source, every drink we craft, and every customer we serve
              is part of our commitment to excellence in coffee culture.
            </p>
            <Button size="lg">Join Our Team</Button>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Join Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center bg-primary text-primary-foreground rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Coffee Journey</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Whether you're a coffee enthusiast or looking to start your career in
            specialty coffee, we'd love to hear from you.
          </p>
          <Button variant="outline" size="lg">
            View Career Opportunities
          </Button>
        </motion.section>
      </main>
    </div>
  );
}