import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import MapLocation from '../components/MapLocation'

const Contact = () => {
  return (
    <main className="py-12">
      <section className="bg-blue-50 py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team for inquiries or to discuss your energy solution needs.
          </p>
        </div>
      </section>
      
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 my-16">
          <ContactForm />
          <ContactInfo />
        </div>
        
        <MapLocation />
      </div>
    </main>
  )
}

export default Contact