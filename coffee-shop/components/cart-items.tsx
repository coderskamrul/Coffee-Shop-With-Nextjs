"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export function CartItems() {
  const { items, removeItem, updateQuantity } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6">
        <ShoppingBag className="w-12 h-12 text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-4">Add some delicious coffee to get started!</p>
        <Link href="/menu">
          <Button>View Menu</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div className="flex-1 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 py-4 border-b">
            <div className="relative h-16 w-16">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>
        <div className="flex gap-4">
          <Link href="/cart" className="flex-1">
            <Button className="w-full" variant="outline">View Cart</Button>
          </Link>
          <Link href="/checkout" className="flex-1">
            <Button className="w-full">Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}