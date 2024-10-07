import Image from 'next/image'

import { getDictionary } from './dictionaries';  // dictionaries folder

import { BentoCard } from '../../../src/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
// import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/nav-bar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

//Custom components
import { Gem } from '../../../src/components/bg-gem'; // Adjust path as needed
import  ViraProfile from "../../../src/components/vira-profile"
import Services from "../../../src/components/services"
// import TestimonialsRow from '@/components/testimonials-row'
import TestimonialsGrid from "../../../src/components/testimonials-grid"
import Blog from "../../../src/components/blog"
import Cta from "../../../src/components/cta"
import Contact from "../../../src/components/contact"

//images
import bg from "../../assets/images/bg_vb/bgbalance1.png"
import logo from '../../../public/img/logos/vbalance YouTube-11.png'; // Replace 'yourLogo.png' with your actual logo filename


export async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
        
  function Hero() {
        return (
            <div className="relative">
            <Gradient
                className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
            <Container className="relative">
                <Navbar />
            <div className="pb-32 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32 flex flex-col md:flex-row items-center justify-between">
                <div> {/* Wrapped the text content in a div */}
                <p className="pauline mb-8 max-w-lg text-xl/2 font-normal text-gray-950/75 sm:text-2xl/8 italic">
                    {dict.heroCTA}
                </p>
                <h1 className="pauline font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8] italic">
                    {dict.heroTitle}
                </h1>
                <p className="mt-8 max-w-lg text-2xl/7 font-medium text-gray-950/75 sm:text-2xl/8 italic">
                    {dict.heroSubtitle}
                </p>
                <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row italic">
                    <Button href="#about">{dict.getStarted}</Button>
                    <Button variant="secondary" href="#contact">
                    {dict.contactMe}
                    </Button>
                </div>
                </div>

                <div className="mt-8 md:mt-0 md:ml-8 w-80 md:w-96 hidden md:block"> {/* Added 'hidden md:block' */}
                <Image src={logo} alt="Your Logo" className="w-full h-auto" /> {/* Assuming you want the logo to fill its container */}
                </div>
            </div>
            </Container>
            </div>
        )
        }

        function FeatureSection() {
        return (
            <div className="overflow-hidden">
            <Container className="pb-24">
                <Heading as="h2" className="max-w-3xl pauline" id="about">
                {dict.featureTitle}
                </Heading>
                <p className="mt-6 text-lg leading-6 sm:text-lg text-justify text-gray-600">
                    {dict.featureDescription}
                </p>
                <ViraProfile/>
            </Container>
            </div>
        )
        }

       


        return (
            <div className="overflow-hidden">
            <Hero />
            <main>
                <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-20">
                <FeatureSection />
                <Services />
                <Testimonials/>
                <Blog />
                <Cta />
                <Contact />
                </div>
            </main>
            <Footer />
            </div>
        )
    }
export default Page;

