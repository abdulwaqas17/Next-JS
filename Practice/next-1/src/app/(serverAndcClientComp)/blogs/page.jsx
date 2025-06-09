// app/products/page.jsx


export const metadata = {

  title : 'Blog Page',
  discription : 'This is a blog page where you can find various articles and posts.',
  keywords : 'blog, articles, posts, news, updates',


}
import ProductsList from '@/components/serverAndClientComp/ProductsList';


export default function ProductsPage() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
        <p className="text-gray-600">This is a list of products fetched from an API (Server Component). </p>
      <ProductsList /> {/* This will render the list of products Server Component */}
    </section>
  );
}
