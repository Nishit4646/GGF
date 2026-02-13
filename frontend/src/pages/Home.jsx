// src/pages/HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Users, Calendar, Award, TrendingUp, BookOpen, Heart, Sparkles, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveMap from '../components/InteractiveMap';

const HomePage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Global Gujarati Federation - Connecting Gujaratis Worldwide | GGF</title>
        <meta name="description" content="Join the Global Gujarati Federation (GGF) - Unite with 10,000+ Gujaratis across 50+ countries. Celebrating culture, heritage, and achievements since 2013." />
        <meta name="keywords" content="Gujarat, Gujarati, NRI, Global Gujarati, Gujarati Community, Indian Diaspora, Cultural Preservation, NRG Awards, Gujarati Heritage" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globalgujaratifederation.org/" />
        <meta property="og:title" content="Global Gujarati Federation - Connecting Gujaratis Worldwide" />
        <meta property="og:description" content="Unite with 10,000+ Gujaratis across 50+ countries. Celebrating culture, heritage, and achievements since 2013." />
        <meta property="og:image" content="https://globalgujaratifederation.org/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://globalgujaratifederation.org/" />
        <meta property="twitter:title" content="Global Gujarati Federation - Connecting Gujaratis Worldwide" />
        <meta property="twitter:description" content="Unite with 10,000+ Gujaratis across 50+ countries. Celebrating culture, heritage, and achievements." />
        <meta property="twitter:image" content="https://globalgujaratifederation.org/twitter-image.jpg" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://globalgujaratifederation.org/" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English, Gujarati" />
        <meta name="author" content="Global Gujarati Federation" />
      </Helmet>

      {/* Hero Section with Enhanced Design */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-200">
              <Sparkles className="w-4 h-4" />
              <span>Connecting Gujaratis Since 2013</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              ગર્વા <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">ગુજરાતી</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium">
              Preserving Gujaratiness Across the Seas
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
              Unite with a global family of <strong>10,000+ Gujaratis</strong> across <strong>50+ countries</strong>. 
              We celebrate our rich heritage, preserve our language and traditions, and create lasting connections 
              that span continents and generations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center"
              >
                Join Our Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about"
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: 'Countries', value: '50+', icon: Globe, color: 'from-blue-500 to-blue-600', desc: 'Global Reach' },
              { label: 'Members', value: '10K+', icon: Users, color: 'from-green-500 to-green-600', desc: 'Strong Community' },
              { label: 'Events', value: '200+', icon: Calendar, color: 'from-purple-500 to-purple-600', desc: 'Cultural Programs' },
              { label: 'Awards', value: '100+', icon: Award, color: 'from-orange-500 to-orange-600', desc: 'Excellence Recognized' },
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 duration-300 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <stat.icon className="w-10 h-10 mb-3 mx-auto opacity-90" />
                  <div className="text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-90 font-medium">{stat.label}</div>
                  <div className="text-xs opacity-75 mt-1">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <InteractiveMap />

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Purpose & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building bridges across continents while preserving our cultural roots
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Mission',
                icon: Heart,
                color: 'text-red-500',
                bgColor: 'bg-red-50',
                description: 'To preserve and promote Gujarati language, literature, and culture among Gujaratis worldwide. We create platforms for connection, celebration, and cultural exchange.'
              },
              {
                title: 'Our Vision',
                icon: Star,
                color: 'text-orange-500',
                bgColor: 'bg-orange-50',
                description: 'A united global Gujarati community that celebrates rich cultural heritage while contributing meaningfully to societies worldwide as proud cultural ambassadors.'
              },
              {
                title: 'Our Values',
                icon: CheckCircle,
                color: 'text-green-500',
                bgColor: 'bg-green-50',
                description: 'Unity, cultural preservation, excellence, integrity, and selfless service. We believe in honoring our past while building a vibrant future together.'
              }
            ].map((item, idx) => (
              <div key={idx} className={`${item.bgColor} p-8 rounded-2xl border-2 border-transparent hover:border-orange-500 transition-all duration-300 hover:shadow-xl`}>
                <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mb-6 border-2 ${item.color.replace('text', 'border')}`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs and initiatives connecting Gujaratis worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Global Network', 
                description: 'Connect with Gujaratis across 50+ countries. Build lasting relationships, collaborate on projects, and create business opportunities that span continents.',
                icon: '🌍',
                stats: '50+ Countries'
              },
              { 
                title: 'Cultural Preservation', 
                description: 'Dedicated programs to protect and promote Gujarati heritage, language, and traditions for future generations through education and awareness.',
                icon: '🎭',
                stats: 'Heritage Programs'
              },
              { 
                title: 'Community Events', 
                description: 'Regular gatherings, cultural celebrations, and networking opportunities throughout the year to strengthen our global Gujarati family.',
                icon: '🎉',
                stats: '200+ Events Annually'
              },
              { 
                title: 'Recognition Programs', 
                description: 'Prestigious NRG Awards honoring outstanding Gujaratis who excel in their fields while maintaining strong cultural ties and contributing to society.',
                icon: '🏆',
                stats: '100+ Awardees'
              },
              { 
                title: 'Youth Engagement', 
                description: 'Empowering the next generation through mentorship, leadership workshops, and cultural exchange programs that bridge tradition and modernity.',
                icon: '👥',
                stats: 'Next Gen Leaders'
              },
              { 
                title: 'Digital Platform', 
                description: 'Modern tools and resources including online forums, virtual events, and digital archives to stay connected and share stories globally.',
                icon: '💻',
                stats: 'Always Connected'
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 border border-gray-100 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <div className="flex items-center text-orange-600 font-semibold">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Members Say
            </h2>
            <p className="text-xl text-gray-600">
              Stories from our global Gujarati family
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Patel',
                location: 'London, UK',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
                text: 'GGF helped me reconnect with my roots while living abroad. The community events and cultural programs have been invaluable.'
              },
              {
                name: 'Raj Desai',
                location: 'New York, USA',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
                text: 'Being part of GGF means being part of a global family. The networking opportunities have been phenomenal for my business.'
              },
              {
                name: 'Anita Shah',
                location: 'Toronto, Canada',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
                text: 'Through GGF, my children are learning about their heritage and connecting with Gujarati youth worldwide. It\'s beautiful!'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-100 hover:border-orange-500 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-3 border-orange-500 mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center mt-4 text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <BookOpen className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join Our Global Family Today
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Be part of a movement that celebrates Gujarati culture, connects hearts across the world, 
            and creates opportunities for the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact"
              className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 shadow-2xl hover:scale-105 flex items-center"
            >
              Become a Member
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/awards"
              className="bg-transparent text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              View Awards
            </Link>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Free to join • No membership fees • Instant access to global community
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Stay Connected With Us
              </h3>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for updates on events, awards, and community news
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                />
                <button 
                  type="submit"
                  className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;