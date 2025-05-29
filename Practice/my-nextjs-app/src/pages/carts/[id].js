// [id].js: Dynamic route file. Har product ke liye ye page chalega.

// kon kon se pages bny hn
export async function getStaticPaths() {
  // 🔹 1: Sab products fetch karo (sirf id chahiye)
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

//   console.log('data =====>',data);
  
  // 🔹 2: Un products ke ids se paths banao
  const paths = data.products.map(product => ({
    params: { id: product.id.toString() }, // id string honi chahiye
  }));

  console.log('paths ===>',paths);
  

  // 🔹 3: Return all paths & fallback strategy
  return {
    paths, // e.g., [{ params: { id: '1' } }, { params: { id: '2' } }]
    fallback: false // agar id exist na kare to 404 dikhao
  };
}



// pages ka data props k through pass kia
export async function getStaticProps(paths) {

    // console.log('{params} ===>',{params});
    // console.log(' params ====>', params);
    console.log('paths >',paths);
    

  // 🔹 1: params.id se specific product fetch karo
  const res = await fetch(`https://dummyjson.com/products/${paths.params.id}`);
  const product = await res.json();

  // 🔹 2: product ko props ke through component ko do
  return {
    props: {
      product
    }
  };
}

export default function ProductDetail({ product }) {
  // 🔹 Ye component UI render karega with props.product
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h1>{product.title}</h1>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <img src={product.thumbnail} alt={product.title} width={200} />
    </div>
  );
}
