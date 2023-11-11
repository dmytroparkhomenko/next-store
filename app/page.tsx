import OurProductsSection from '@/components/sections/our-products-preview'
import AboutUsSection from '@/components/sections/about-us'

import { getPopularProducts } from '@/api/store-fetching'

export default async function Home() {
  const products = await getPopularProducts();
  const reversed = products.reverse(); // to change somehow the view

  return (
    <>
      <OurProductsSection products={reversed}/>
      <AboutUsSection />
    </>
  )
}