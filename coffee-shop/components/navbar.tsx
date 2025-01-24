"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartItems } from "@/components/cart-items";

export function Navbar() {
  const { items } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="https://www.boscoffee.com/cdn/shop/files/Bo_s_Logo_HORIZONTAL_blck_2017_45804867-a740-450e-a550-e96bbddd5b31_1200x1200.png?v=1620380443" alt="Logo" width={80} height={80} />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-gray-900">
              Cafe Menu
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-gray-900">
              Gallery
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact Us
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About Us
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-6 w-6" />
                  {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {items.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <CartItems />
              </SheetContent>
            </Sheet>
            <Button>Buy Gift Vouchers</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}