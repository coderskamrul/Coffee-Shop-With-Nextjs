import { Metadata } from "next";
import { ProductClient } from "./product-client";

// Products data
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
    details: "A perfect balance of espresso, steamed milk, and velvety foam creates this Italian classic. Each cup is crafted with care by our expert baristas.",
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
    details: "Our refreshing iced latte combines shots of rich espresso with cold milk and ice for a perfectly balanced and refreshing drink.",
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
    details: "Steeped for 12 hours, our cold brew offers a smooth, less acidic taste with subtle chocolate notes and a clean finish.",
    ingredients: ["Cold Brew Coffee", "Filtered Water", "Ice"],
    size: ["Small", "Medium", "Large"],
    calories: 5,
    caffeine: "155mg"
  },
  {
    id: 5,
    name: "Oat Milk Latte",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?w=800&auto=format&fit=crop&q=60",
    description: "Espresso with creamy oat milk",
    category: "non-dairy",
    details: "A dairy-free alternative that doesn't compromise on taste or texture. Made with premium oat milk for a creamy, satisfying experience.",
    ingredients: ["Espresso", "Oat Milk"],
    size: ["Small", "Medium", "Large"],
    calories: 120,
    caffeine: "63mg"
  },
  {
    id: 6,
    name: "Almond Cappuccino",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=800&auto=format&fit=crop&q=60",
    description: "Dairy-free cappuccino with almond milk",
    category: "non-dairy",
    details: "Our almond milk cappuccino offers a light, nutty flavor profile that complements our espresso perfectly.",
    ingredients: ["Espresso", "Almond Milk", "Almond Milk Foam"],
    size: ["Small", "Medium", "Large"],
    calories: 80,
    caffeine: "63mg"
  }
];

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = products.find(p => p.id === Number(params.id));
  return {
    title: product ? `${product.name} | Artisan Coffee Shop` : 'Product Not Found',
    description: product?.description || 'Product details',
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === Number(params.id));
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return <ProductClient product={product} relatedProducts={relatedProducts} />;
}