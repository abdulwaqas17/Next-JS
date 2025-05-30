import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

export async function getStaticPaths() {

    console.log('data ==>', data);
    

  const paths = data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  console.log("paths ==>", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const product = data.find((product) => product.id.toString() === params.id);

  console.log("product ==>", product);

  return {
    props: {
      product,
    },
  };
}

export default function ProductDetail({product}) {
  return (
    <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full h-96 md:h-auto">
            <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" className="rounded-lg shadow-md" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.longDisc || product.shortDisc}</p>
            <p className="text-xl text-blue-500 font-semibold mb-4">${product.price}</p>
            <div className="flex items-center space-x-4 mb-4">
              {/* Add quantity selector or other interactive elements here */}
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
                Add to Cart
              </button>
            </div>
            <Link href="/" className="text-blue-500 hover:underline">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
  );
}
