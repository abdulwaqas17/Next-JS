export async function getStaticPaths() {

     const products = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];


  // path aur params hi likhna h (rule h) warna error
  const paths = products.map(product => ({
    params : {id : product.id}
  }))


  return {
    paths,
    fallback : false
  }
}


export async function getStaticProps({params}) {

    const products = [
    { id: '1', title: 'iPhone 13' },
    { id: '2', title: 'Samsung S22' },
    { id: '3', title: 'OnePlus 11' },
  ];

  const product = products.find(p => ( p.id === params.id));

  console.log(product);
  

  return {
    props : {
        product
    }
  }
}

export default function ProductDetail({ product }) {
  return (
    <div>
      <h1 className="text-5xl">{product.title}</h1>
      <p className="text-2xl">Product ID: {product.id}</p>
    </div>
  );
}