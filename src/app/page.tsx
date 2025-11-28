import { Hero } from '../components/Home/Hero';
import { FeaturedProducts } from '../components/Home/FeaturedProducts';
import { Solutions } from '../components/Home/Solutions';
export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProducts />
      <Solutions />
    </div>
  );
}
