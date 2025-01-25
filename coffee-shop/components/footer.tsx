"use client";

import Image from "next/image";
import Link from "next/link";
import { Coffee, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="h-8 w-8" />
              <span className="text-2xl font-bold">CoffeeKing</span>
            </div>
            <p className="text-gray-400 mb-6">
              Experience the perfect brew at our artisan coffee shop. We source the finest beans
              and craft each cup with passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-white">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="text-white w-5 h-5 text-primary" />
                <span className="text-gray-400">44 Danwers, NY City, USA, 70-102</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-white w-5 h-5 text-primary" />
                <span className="text-gray-400">+880 1635499809</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-white w-5 h-5 text-primary" />
                <span className="text-gray-400">kamrul.wpxpo@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative h-20">
                  <Image
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1442512595331-e89e73853f31' : 
                          i === 2 ? '1554118811-1e0d58224f24' : 
                          i === 3 ? '1453614512568-c4024d13c247' :
                          i === 4 ? '1495474472287-4d71bcdd2085' :
                          i === 5 ? '1559925393-8be0ec4767c8' :
                          '1461023058943-07fcbe16d735'}?w=200&auto=format&fit=crop&q=60`}
                    alt={`Gallery image ${i}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2025 CoffeeKing. Developed By Hmd Kamrul</p>
        </div>
      </div>
    </footer>
  );
}