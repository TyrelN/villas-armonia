import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm via-accent-sand/5 to-accent-gold/5">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Enhanced Warm Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mexico-sunset-background-wide.webp"
            alt="Villa Armonia Sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-color/70 via-accent-clay/50 to-accent-sand/40"></div>
          {/* Sandy beach texture overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,179,130,0.1)_0%,transparent_50%)]"></div>
        </div>
        
        {/* Hero Content with Enhanced Glassmorphism */}
        <div className="relative z-10 mt-20 text-center text-white px-6 max-w-6xl">
          <div className="glass-card rounded-2xl p-16 mx-auto max-w-6xl border border-accent-gold/20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-sand/5 via-transparent to-accent-gold/5"></div>
            <div className="relative z-10">
              
              {/* Main title with enhanced typography */}
              <h1 className="text-7xl md:text-8xl font-bold mb-8 text-shadow-strong text-[#121212] leading-tight">
                Villa Armonia
              </h1>
              
              {/* Enhanced headline with dark grey accents */}
              <div className="mb-10">
                <p className="text-2xl md:text-3xl mb-4 max-w-5xl mx-auto text-shadow-strong text-[#121212] leading-relaxed font-medium">
                  A comprehensive village in the heart of 
                  <span className="font-bold text-[#121212]"> Yucatán</span>
                </p>
                <p className="text-xl md:text-2xl max-w-4xl mx-auto text-shadow-strong text-[#121212] leading-relaxed font-semibold">
                  Prioritizing <span className="text-[#121212] font-bold">community</span>, 
                  <span className="text-[#121212] font-bold"> cultural exchange</span>, 
                  <span className="text-[#121212] font-bold"> cozy luxury</span>, and 
                  <span className="text-[#121212] font-bold"> acceptance</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link 
                  href="/lot-map" 
                  className="gradient-earth hover-lift text-white px-12 py-6 rounded-2xl text-xl font-semibold shadow-2xl relative group transition-all duration-300 hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">Explore Available Lots</span>
                </Link>
                <Link 
                  href="/about" 
                  className="glass hover-lift text-primary-color px-12 py-6 rounded-2xl text-xl font-semibold border-2 border-accent-gold/50 relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:border-accent-gold/70 shadow-lg"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">Learn More</span>
                </Link>
              </div>
            </div>
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

      {/* Amenities Section */}
      <section className="py-24 bg-gradient-to-br from-accent-sand/8 via-warm to-accent-gold/8 relative">
        {/* Enhanced sandy texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(217,179,130,0.06)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(198,161,91,0.06)_0%,transparent_50%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-color mb-8 text-shadow-soft">
              World-Class Amenities
            </h2>
            <p className="text-xl text-secondary-color max-w-4xl mx-auto leading-relaxed">
              Every detail has been carefully planned to enhance your lifestyle and 
              create opportunities for connection and wellness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pool & Wellness */}
            <div className="glass-card rounded-2xl overflow-hidden hover-lift border border-accent-sand/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="h-56 relative">
                  <Image
                    src="/images/Baaxal_pool.webp"
                    alt="Villa Pool"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-color/30 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-primary-color mb-4">Private Villa Pools</h3>
                  <p className="text-secondary-color mb-6 leading-relaxed">
                    Each villa features its own private pool, perfect for relaxation 
                    and entertaining in your personal oasis.
                  </p>
                  <div className="flex items-center text-accent-sand">
                    <span className="text-sm font-medium">Included with every villa</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fitness Center */}
            <div className="glass-card rounded-2xl overflow-hidden hover-lift border border-accent-sunset/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sunset/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="h-56 relative">
                  <Image
                    src="/images/Baaxal_yoga.webp"
                    alt="Fitness & Wellness"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-color/30 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-primary-color mb-4">Fitness & Wellness Center</h3>
                  <p className="text-secondary-color mb-6 leading-relaxed">
                    State-of-the-art gym, yoga studios, and wellness spaces to keep 
                    you healthy and energized.
                  </p>
                  <div className="flex items-center text-accent-sand">
                    <span className="text-sm font-medium">Community access</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Family Amenities */}
            <div className="glass-card rounded-2xl overflow-hidden hover-lift border border-accent-gold/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="h-56 relative">
                  <Image
                    src="/images/Baaxal_plaza.webp"
                    alt="Family Plaza"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-color/30 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-primary-color mb-4">Family-Focused Spaces</h3>
                  <p className="text-secondary-color mb-6 leading-relaxed">
                    Playgrounds, community gardens, and gathering areas designed 
                    specifically for families to connect and grow together.
                  </p>
                  <div className="flex items-center text-accent-sand">
                    <span className="text-sm font-medium">Family-friendly design</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Transit */}
            <div className="glass-card rounded-2xl overflow-hidden hover-lift border border-accent-sand/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="h-56 relative">
                  <Image
                    src="/images/Baaxal_bikes.webp"
                    alt="Sustainable Transit"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-color/30 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-primary-color mb-4">Sustainable Transit</h3>
                  <p className="text-secondary-color mb-6 leading-relaxed">
                    Electric vehicle charging, bike-sharing programs, and easy access 
                    to public transportation for eco-friendly mobility.
                  </p>
                  <div className="flex items-center text-accent-sand">
                    <span className="text-sm font-medium">Green transportation</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Commercial Lounge */}
            <div className="glass-card rounded-2xl overflow-hidden hover-lift border border-accent-sunset/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sunset/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="h-56 relative">
                  <Image
                    src="/images/Comercial_lounge.webp"
                    alt="Commercial Lounge"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-color/30 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-primary-color mb-4">Commercial Lounge</h3>
                  <p className="text-secondary-color mb-6 leading-relaxed">
                    Professional workspaces, meeting rooms, and networking areas for 
                    remote work and business collaboration.
                  </p>
                  <div className="flex items-center text-accent-sand">
                    <span className="text-sm font-medium">Work-friendly environment</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Community Spaces */}
            <div className="glass-card rounded-2xl overflow-hidden hover-lift border border-accent-gold/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="h-56 relative">
                  <Image
                    src="/images/Commercial_lot.webp"
                    alt="Community Spaces"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-color/30 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-primary-color mb-4">Community Spaces</h3>
                  <p className="text-secondary-color mb-6 leading-relaxed">
                    Outdoor amphitheaters, community kitchens, and event spaces for 
                    celebrations, workshops, and cultural activities.
                  </p>
                  <div className="flex items-center text-accent-sand">
                    <span className="text-sm font-medium">Shared community areas</span>
                  </div>
                </div>
              </div>
            </div>
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

      {/* CTA Section */}
      <section className="py-24 gradient-footer relative overflow-hidden">
        {/* Sandy beach texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,179,130,0.1)_0%,transparent_50%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-shadow-strong">
            Join Our Community
          </h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Be part of something extraordinary. Villa Armonia is more than a place to live – 
            it's a place to belong, grow, and create lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/lot-map" 
              className="glass-card hover-lift text-primary-color px-10 py-5 rounded-2xl text-lg font-semibold shadow-2xl border-2 border-accent-gold/50 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">View Available Lots</span>
            </Link>
            <Link 
              href="/about" 
              className="glass hover-lift text-white px-10 py-5 rounded-2xl text-lg font-semibold border-2 border-accent-sand/50 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-sand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Learn More About Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
