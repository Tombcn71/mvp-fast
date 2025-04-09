import Hero from "@/components/hero"
import Services from "@/components/services"
import Benefits from "@/components/benefits"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
