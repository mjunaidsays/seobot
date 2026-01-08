import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsShowcase from '@/components/StatsShowcase'
import WhyChoose from '@/components/WhyChoose'
import IntegrationsGrid from '@/components/IntegrationsGrid'
import LanguagePills from '@/components/LanguagePills'
import ArticleGrid from '@/components/ArticleGrid'
import Testimonials from '@/components/Testimonials'
import PricingSection from '@/components/PricingSection'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsShowcase />
      <WhyChoose />
      <IntegrationsGrid />
      <LanguagePills />
      <ArticleGrid />
      <Testimonials />
      <PricingSection />
      <FAQ />
      <Footer />
      <ChatWidget />
    </main>
  )
}

