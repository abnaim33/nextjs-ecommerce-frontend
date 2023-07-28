import getBillBoards from "@/actions/GetBillboards";
import getProducts from "@/actions/GetProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export const revalidate=0

export default async function Home() {

  const products=await getProducts({isFeatured:true})


  const billboards=await getBillBoards('19f1ad45-1f1d-4738-8e28-ed9776188fba')

  return ( 
  <Container>
    <div className="space-y-10 pb-10">
<Billboard data={billboards}/>


<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
  <ProductList title="Featured Products" items={products}/>
  
</div>
    </div>
  </Container>
  )
}
