"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

// Parallax Background Component
const ParallaxBackground = ({ children, imageSrc, alt }) => {
  return (
    <div 
  className="parallax"
  style={{ backgroundImage: `url(${imageSrc})` }}
>
  <div className="relative z-10 h-full flex items-center justify-center">
    {children}
  </div>
</div>
  );
};

export default function Home() {
  // Villa showcase images
  const villaImages = [
    {
      src: "/images/baaxal_aerial_view.webp",
      alt: "Baaxal Villa Aerial View",
      title: "Baaxal Villa",
      description: "Stunning aerial perspective of our premier villa complex"
    },
    {
      src: "/images/Chanpaal_birdseye.webp", 
      alt: "Chanpaal Villa Bird's Eye View",
      title: "Chanpaal Villa",
      description: "Bird's eye view showcasing the architectural beauty"
    },
    {
      src: "/images/Baaxal_pool.webp",
      alt: "Baaxal Pool Area",
      title: "Pool & Wellness",
      description: "Relaxing pool area with wellness facilities"
    },
    {
      src: "/images/Baaxal_yoga.webp",
      alt: "Baaxal Yoga Studio",
      title: "Yoga & Fitness",
      description: "Dedicated spaces for health and wellness"
    },
    {
      src: "/images/Baaxal_plaza.webp",
      alt: "Baaxal Plaza",
      title: "Community Plaza",
      description: "Central gathering space for community events"
    },
    {
      src: "/images/Comercial_lounge.webp",
      alt: "Commercial Lounge",
      title: "Commercial Lounge",
      description: "Sophisticated lounge area for residents and guests"
    }
  ];

  // Amenities data for accordion
  const amenities = [
    {
      title: "Family Amenities",
      content: "Our family-focused amenities include dedicated children's play areas, family pools with shallow sections, outdoor movie nights, and community gardens where families can grow together. We also offer family-friendly events and workshops throughout the year."
    },
    {
      title: "Villa Pools & Wellness",
      content: "Each villa complex features private pools with temperature control, hot tubs, and wellness areas. Our Baaxal complex includes a dedicated yoga studio, meditation gardens, and spa facilities. All pools are designed with both relaxation and social interaction in mind."
    },
    {
      title: "Fitness Centers",
      content: "State-of-the-art fitness centers are available in each villa complex, featuring modern equipment, personal training services, group fitness classes, and wellness programs. Our facilities are designed to support both individual workouts and community fitness activities."
    },
    {
      title: "Transit & Connectivity",
      content: "Villa Armonia offers convenient transit options including shuttle services to nearby attractions, bike-sharing programs, and easy access to public transportation. We also provide electric vehicle charging stations and car-sharing services for sustainable transportation."
    },
    {
      title: "Community Spaces",
      content: "Our community spaces include the central plaza for events, commercial lounges for socializing, outdoor dining areas, and multipurpose rooms for workshops and gatherings. These spaces are designed to foster community connections and cultural exchange."
    },
    {
      title: "Cultural Exchange Programs",
      content: "We facilitate cultural exchange through language exchange programs, cooking classes featuring local and international cuisine, art workshops, and cultural celebration events. Our community is designed to bring together people from diverse backgrounds."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm via-accent-sand/5 to-accent-gold/5">
      {/* Hero Section with Parallax Background */}
      <ParallaxBackground 
  imageSrc="/images/mexico-sunset-background-wide.webp"
  alt="Villa Armonia Sunset"
>
  {/* Hero Content with Glassmorphism */}
  <div className="absolute bottom-8 md:left-8 px-6 max-w-4xl w-[calc(100%-2rem)] md:w-auto">
    <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:pt-4 shadow-2xl">
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <img 
            src="/images/villas-armonia-logo-green.jpg" 
            alt="Villa Armonia" 
            className="h-45 md:h-32 w-auto rounded-lg"
            onError={(e) => {
              console.error('Failed to load logo:', e.target.src);
              // Fallback to text if image fails
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="h-20 md:h-32 flex items-center justify-center text-lg md:text-xl font-bold text-primary-color rounded-lg" style={{display: 'none'}}>
            Villa Armonia
          </div>
        </div>

        {/* Content on the right */}
        <div className="flex flex-col gap-4">
          {/* Headline */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md font-medium leading-relaxed text-center md:text-left">
              An upcoming village in the heart of 
              <span className="font-bold text-white"> Yucatán</span>
            </p>
          </div>

          {/* Button below description */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/lot-map"
              className="px-6 py-3 gradient-warm rounded-lg shadow-lg hover-lift transition-all duration-300 hover:scale-[1.02] text-white font-semibold text-center"
            >
              Explore Lots
            </Link>
            <Link 
              href="/about"
              className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg shadow-lg hover-lift transition-all duration-300 hover:scale-[1.02] text-white font-semibold text-center hover:bg-white/30"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</ParallaxBackground>

      {/* Villa Showcase Carousel Section */}
      <section className="py-24 bg-gradient-to-br from-accent-sand/10 via-warm to-accent-gold/5 relative">
        {/* Sandy texture background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(217,179,130,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(198,161,91,0.08)_0%,transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-color mb-6 text-shadow-soft">
              Villas Armonia
            </h2>
            <p className="text-xl text-secondary-color max-w-3xl mx-auto leading-relaxed">
              Discover the beauty and luxury of our villa complexes, each designed with 
              community, comfort, and cultural exchange in mind.
            </p>
          </div>
          
          <div className="glass-card rounded-3xl p-8 border border-accent-sand/20 shadow-2xl">
            <Carousel className="w-full">
              <CarouselContent>
                {villaImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="overflow-hidden hover-lift border border-accent-sand/30 transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <h3 className="text-xl font-bold mb-2 text-shadow-strong">{image.title}</h3>
                              <p className="text-sm text-shadow-soft opacity-90">{image.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-accent-sand/30 text-primary-color" />
              <CarouselNext className="right-4 bg-white/80 hover:bg-white border-accent-sand/30 text-primary-color" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-24 bg-gradient-to-br from-warm via-accent-sand/15 to-accent-gold/10 relative">
        {/* Sandy texture background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,179,130,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(198,161,91,0.08)_0%,transparent_50%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-color mb-8 text-shadow-soft">
              Our Vision
            </h2>
            <p className="text-xl text-secondary-color max-w-4xl mx-auto leading-relaxed">
              Villa Armonia represents more than just a residential development – 
              it's a living, breathing community where people from around the world 
              come together to create something extraordinary.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="glass-card rounded-2xl p-8 text-center hover-lift border border-accent-sand/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-color mb-4">Community First</h3>
                <p className="text-secondary-color leading-relaxed">
                  Building meaningful connections through shared spaces, events, and 
                  collaborative activities that bring neighbors together.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center hover-lift border border-accent-sunset/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sunset/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 gradient-sunset rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-color mb-4">Cultural Exchange</h3>
                <p className="text-secondary-color leading-relaxed">
                  Celebrating diversity and fostering understanding through cultural 
                  events, language exchange, and shared traditions.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center hover-lift border border-accent-gold/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-color mb-4">Cozy Luxury</h3>
                <p className="text-secondary-color leading-relaxed">
                  Thoughtfully designed spaces that combine comfort with elegance, 
                  creating homes that feel both luxurious and welcoming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section with Accordion */}
      <section className="py-24 bg-gradient-to-br from-accent-sand/8 via-warm to-accent-gold/8 relative">
        {/* Enhanced sandy texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(217,179,130,0.06)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(198,161,91,0.06)_0%,transparent_50%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-color mb-8 text-shadow-soft">
              World-Class Amenities
            </h2>
            <p className="text-xl text-secondary-color max-w-4xl mx-auto leading-relaxed">
              Every detail has been carefully planned to enhance your lifestyle and 
              create opportunities for connection and wellness.
            </p>
          </div>
          
          <div className="glass-card rounded-3xl p-8 border border-accent-sand/20 shadow-2xl">
            <Accordion type="single" collapsible className="w-full">
              {amenities.map((amenity, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-accent-sand/30">
                  <AccordionTrigger className="text-xl font-semibold text-primary-color hover:text-accent-clay transition-colors px-4 py-6">
                    {amenity.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-6">
                    <p className="text-secondary-color leading-relaxed text-lg">
                      {amenity.content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Location & Culture Section */}
      <section className="py-24 bg-gradient-to-br from-warm via-accent-sand/15 to-accent-gold/10 relative">
        {/* Enhanced sandy texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(217,179,130,0.08)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(198,161,91,0.08)_0%,transparent_50%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary-color mb-8 text-shadow-soft">
                Heart of Yucatán
              </h2>
              <p className="text-xl text-secondary-color mb-8 leading-relaxed">
                Nestled in one of Mexico's most culturally rich regions, Villa Armonia 
                offers the perfect blend of natural beauty, historical significance, 
                and modern convenience.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 gradient-warm rounded-full flex items-center justify-center mt-1 shadow-md">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-color text-lg">Rich Cultural Heritage</h4>
                    <p className="text-secondary-color">Ancient Mayan ruins, traditional markets, and vibrant local traditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 gradient-sunset rounded-full flex items-center justify-center mt-1 shadow-md">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-color text-lg">Natural Beauty</h4>
                    <p className="text-secondary-color">Cenotes, pristine beaches, and lush tropical landscapes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 gradient-warm rounded-full flex items-center justify-center mt-1 shadow-md">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-color text-lg">Modern Infrastructure</h4>
                    <p className="text-secondary-color">International airport, healthcare facilities, and shopping centers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card rounded-2xl p-4 border border-accent-sand/20 shadow-xl">
                <Image
                  src="/images/baaxal_aerial_view.webp"
                  alt="Aerial View of Villa Armonia"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Life Section */}
      <section className="py-24 bg-gradient-to-br from-accent-sand/8 via-warm to-accent-gold/8 relative">
        {/* Enhanced sandy texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(217,179,130,0.06)_0%,transparent_50%),radial-gradient(circle_at_60%_40%,rgba(198,161,91,0.06)_0%,transparent_50%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-color mb-8 text-shadow-soft">
              Life in Villa Armonia
            </h2>
            <p className="text-xl text-secondary-color max-w-4xl mx-auto leading-relaxed">
              Experience a lifestyle that balances privacy with community, 
              luxury with authenticity, and modern convenience with cultural richness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-2xl p-8 text-center hover-lift border border-accent-sand/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-color mb-3">Daily Activities</h3>
                <p className="text-secondary-color text-sm leading-relaxed">
                  Morning yoga, afternoon workshops, evening social gatherings
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center hover-lift border border-accent-sunset/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sunset/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 gradient-sunset rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-color mb-3">Cultural Events</h3>
                <p className="text-secondary-color text-sm leading-relaxed">
                  Traditional celebrations, art exhibitions, music performances
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center hover-lift border border-accent-gold/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-color mb-3">Local Exploration</h3>
                <p className="text-secondary-color text-sm leading-relaxed">
                  Guided tours, local partnerships, authentic experiences
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center hover-lift border border-accent-sunset/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sunset/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 gradient-sunset rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-color mb-3">Wellness Focus</h3>
                <p className="text-secondary-color text-sm leading-relaxed">
                  Health programs, nutrition guidance, mindfulness practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
