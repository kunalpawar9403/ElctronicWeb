import AmcHighlights from '../components/AmcHighlights'
import ExpertiseSection from '../components/ExpertiseSection'

const Services = () => {
  return (
    <main className="py-12">
      <section className="bg-blue-50 py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive electrical and energy solutions tailored to your needs.
          </p>
        </div>
      </section>
      
      <ExpertiseSection />
      <AmcHighlights />
    </main>
  )
}

export default Services