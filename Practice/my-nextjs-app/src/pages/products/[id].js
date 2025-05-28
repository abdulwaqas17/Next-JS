import { useRouter } from "next/router"

const ProductDetail = () => {

    const router = useRouter();
    console.log(router);
    console.log(router.query);
    
    const {id} = router.query;
  return (
    <div>

        <h1>Product Detail for ID: {id}</h1>
      
    </div>
  )
}

export default ProductDetail
