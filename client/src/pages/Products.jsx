import ProductCategories from '../components/ProductCategories'
import RentalServices from '../components/RentalServices'

const Products = () => {
  return (
    <main className="py-12">
      <section className="bg-blue-50 py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            High-quality energy solutions from reputed brands worldwide.
          </p>
        </div>
      </section>
      
      <ProductCategories />
      <RentalServices />
    </main>
  )
}

export default Products