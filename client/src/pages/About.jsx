import MissionVision from '../components/MissionVision'
import TeamSection from '../components/TeamSection'

const About = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Only added animation classes */}
      <section className="bg-blue-50 py-20 animate-fade-in">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">About AASTECH</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Learn more about our mission, vision, and the team behind AASTECH Energy Solutions.
          </p>
        </div>
      </section>
      
      {/* Added subtle spacing between components */}
      <div className="py-8">
        <MissionVision />
      </div>

      <div className="py-8">
        <TeamSection />
      </div>
    </main>
  )
}

export default About