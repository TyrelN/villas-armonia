import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
    <div className="min-h-screen bg-gradient-to-br from-warm via-accent-sand/5 to-accent-gold/5">
      {/* Hero Story Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with subtle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,179,130,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(198,161,91,0.08)_0%,transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-primary-color mb-8 text-shadow-soft">
              Our Story
            </h1>
            <p className="text-2xl text-secondary-color max-w-4xl mx-auto leading-relaxed">
              How a Latin dancer's dream became a village that celebrates the warmth, 
              connection, and passion that Latin culture fosters
            </p>
          </div>
          
          {/* The Discovery */}
          <div className="glass-card rounded-3xl p-12 mb-16 border border-accent-sand/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-sand/5 via-transparent to-accent-gold/5 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary-color mb-6 text-shadow-soft">
                    The Discovery
                  </h2>
                  <p className="text-xl text-secondary-color mb-6 leading-relaxed">
                    It was during a sunset performance in the heart of Yucatán that everything changed. 
                    As the music swelled and the rhythm took over, our founder looked out across the 
                    landscape and saw something extraordinary – not just land, but possibility.
                  </p>
                  <p className="text-xl text-secondary-color leading-relaxed">
                    This wasn't just another plot of land; it was a canvas waiting to be transformed 
                    into something that would capture the essence of what makes Latin culture so 
                    special – the warmth, the connection, the passion for life.
                  </p>
                </div>
                <div className="relative">
                  <div className="glass-card rounded-2xl p-4 border border-accent-gold/20 shadow-xl">
                    <Image
                      src="/images/lotmap_birdseye.webp"
                      alt="Sunset in Yucatán"
                      width={500}
                      height={350}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-24 bg-gradient-to-br from-accent-sand/8 via-warm to-accent-gold/8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(217,179,130,0.06)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(198,161,91,0.06)_0%,transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-color mb-8 text-shadow-soft">
              The Vision
            </h2>
            <p className="text-xl text-secondary-color max-w-4xl mx-auto leading-relaxed">
              To create a village where the rhythm of Latin culture meets the rhythm of life, 
              where every corner invites connection and every space celebrates passion
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="glass-card rounded-2xl p-8 text-center hover-lift border border-accent-sand/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-color mb-4">Passion for Life</h3>
                <p className="text-secondary-color leading-relaxed">
                  Every space is designed to ignite the same passion that Latin dance brings – 
                  whether it's cooking, art, music, or simply living life to the fullest.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center hover-lift border border-accent-sunset/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sunset/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 gradient-sunset rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-color mb-4">Natural Connection</h3>
                <p className="text-secondary-color leading-relaxed">
                  Just as Latin dance brings people together, our village creates natural 
                  gathering spaces where friendships form and community thrives.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center hover-lift border border-accent-gold/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-color mb-4">Cultural Celebration</h3>
                <p className="text-secondary-color leading-relaxed">
                  Every day is a celebration of the rich tapestry of Latin culture, 
                  from traditional festivals to modern expressions of creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-24 bg-gradient-to-br from-warm via-accent-sand/15 to-accent-gold/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(217,179,130,0.08)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(198,161,91,0.08)_0%,transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary-color mb-8 text-shadow-soft">
                The Journey
              </h2>
              <p className="text-xl text-secondary-color mb-8 leading-relaxed">
                From that first moment of inspiration, the journey to create Villa Armonia 
                has been guided by one simple truth: "It takes a village."
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 gradient-warm rounded-full flex items-center justify-center mt-1 shadow-md">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-color text-lg">The Dream</h4>
                    <p className="text-secondary-color">A Latin dancer's vision of a place where culture and community dance together</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 gradient-sunset rounded-full flex items-center justify-center mt-1 shadow-md">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-color text-lg">The Land</h4>
                    <p className="text-secondary-color">A perfect plot in Yucatán that spoke to the soul and inspired transformation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 gradient-warm rounded-full flex items-center justify-center mt-1 shadow-md">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-color text-lg">The Village</h4>
                    <p className="text-secondary-color">A community where friends and family can explore culture and their passions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card rounded-2xl p-4 border border-accent-sand/20 shadow-xl">
                <Image
                  src="/images/baaxal_pool.webp"
                  alt="Villa Armonia Aerial View"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy Section */}
      <section className="py-24 bg-gradient-to-br from-accent-sand/8 via-warm to-accent-gold/8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(217,179,130,0.06)_0%,transparent_50%),radial-gradient(circle_at_60%_40%,rgba(198,161,91,0.06)_0%,transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-color mb-8 text-shadow-soft">
              Our Philosophy
            </h2>
            <p className="text-xl text-secondary-color max-w-4xl mx-auto leading-relaxed">
              "It takes a village" isn't just a saying – it's the foundation of everything we do
            </p>
          </div>
          
          <div className="glass-card rounded-3xl p-12 border border-accent-gold/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 via-transparent to-accent-sand/5 rounded-3xl"></div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 gradient-warm rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary-color mb-6">The Village Spirit</h3>
              <p className="text-xl text-secondary-color mb-8 leading-relaxed max-w-4xl mx-auto">
                In Latin culture, we understand that true happiness comes from the connections we make 
                and the community we build. Villa Armonia is more than a place to live – it's a place 
                to belong, to grow, and to celebrate life together.
              </p>
              <p className="text-xl text-secondary-color leading-relaxed max-w-4xl mx-auto">
                Just as a Latin dance needs partners to come alive, our village needs its community 
                to thrive. Every resident brings their unique rhythm, their passion, and their story, 
                creating a beautiful symphony of life that celebrates the best of what Latin culture 
                has to offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Promise Section */}
      <section className="py-24 bg-gradient-to-br from-warm via-accent-sand/15 to-accent-gold/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(217,179,130,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_30%,rgba(198,161,91,0.08)_0%,transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-color mb-8 text-shadow-soft">
              Our Promise
            </h2>
            <p className="text-xl text-secondary-color max-w-4xl mx-auto leading-relaxed">
              To create a village where the warmth of Latin culture meets the comfort of home, 
              where every resident finds their rhythm and every family finds their village
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="glass-card rounded-2xl p-8 text-center hover-lift border border-accent-sand/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-color mb-4">Supportive Community</h3>
                <p className="text-secondary-color leading-relaxed">
                  A network of neighbors who support each other's dreams, celebrate each other's 
                  successes, and create a safety net of friendship and care.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center hover-lift border border-accent-sunset/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sunset/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 gradient-sunset rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-color mb-4">Passion Exploration</h3>
                <p className="text-secondary-color leading-relaxed">
                  Spaces and opportunities for residents to explore their passions, whether it's 
                  dance, cooking, art, music, or any other creative pursuit that brings joy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-footer relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,179,130,0.1)_0%,transparent_50%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-shadow-strong">
            Join Our Village
          </h2>
          <p className="text-xl text-accent-sand mb-10 max-w-3xl mx-auto leading-relaxed">
            Be part of a community that understands the true meaning of "It takes a village." 
            Villa Armonia is waiting for families who want to dance to the rhythm of life together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/lot-map" 
              className="glass-card hover-lift text-primary-color px-10 py-5 rounded-2xl text-lg font-semibold shadow-2xl border-2 border-accent-gold/50 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Find Your Perfect Lot</span>
            </Link>
            <Link 
              href="/" 
              className="glass hover-lift text-white px-10 py-5 rounded-2xl text-lg font-semibold border-2 border-accent-sand/50 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-sand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Return Home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
    );
  }