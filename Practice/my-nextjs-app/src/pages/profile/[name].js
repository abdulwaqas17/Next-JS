export async function getServerSideProps(context) {

    const {name} = context.params;
    const res = await fetch (`https://dummyjson.com/products/${name}`);
    const data = await res.json();

    return {
        props : {
            data,
            name
        }
    }

}

export default function ProductDetail({ data,name }) {
    console.log(data);
    
  return (
    <div>
        
      <h1 className="text-4xl">{data.title}</h1>
      <p>{data.description}</p>
      <h3 className="text-2xl">Data fetch by id {name} (getting form params)</h3>
    </div>
  );
}