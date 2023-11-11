import Catalog from "@/components/store/catalog";

import getData, { getCategories } from '@/api/store-fetching/index'; 

export default async function Page() {
  const products = await getData();
  const categories = await getCategories();

  return (
      <>
        <h2 className="text-3xl mb-4">Our Catalog</h2>
        <Catalog data={products} categoriesData={categories}/>
      </>
  )
}