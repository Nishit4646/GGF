// src/pages/AboutPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Users, Award, ChevronRight, Heart, Target, Zap, BookOpen, Calendar, TrendingUp, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us - Global Gujarati Federation | Our Mission & History</title>
        <meta name="description" content="Learn about Global Gujarati Federation (GGF) - Founded in 2013 by Ramesh Tanna. Connecting 10,000+ Gujaratis worldwide through culture, heritage, and community." />
        <meta name="keywords" content="About GGF, Ramesh Tanna, Gujarati Federation History, NRI Community, Gujarati Heritage, Cultural Organization" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Global Gujarati Federation - Our Story & Mission" />
        <meta property="og:description" content="Founded in 2013, GGF unites 10,000+ Gujaratis across 50+ countries. Learn about our mission to preserve Gujarati culture worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globalgujaratifederation.org/about" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="About Global Gujarati Federation - Our Story" />
        <meta name="twitter:description" content="Founded in 2013, connecting Gujaratis worldwide through culture, heritage, and community." />
        
        <link rel="canonical" href="https://globalgujaratifederation.org/about" />
      </Helmet>

      <div className="pt-36 pb-16 bg-white min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-200">
              <Sparkles className="w-4 h-4" />
              <span>Established 2013</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">Global Gujarati Federation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Connecting hearts, preserving heritage, and celebrating Gujarati excellence across the globe
            </p>
          </div>

          {/* Main Story */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  The <strong>Global Gujarati Federation (GGF)</strong>, also known as the Gujarati Global Federation, 
                  is a prestigious association that unites patriotic Gujaratis from around the world. Since our 
                  founding in <strong>2013</strong>, we have grown into a vibrant community of over <strong>10,000 members</strong> across 
                  <strong>50+ countries</strong>.
                </p>
                <p>
                  Founded and led by visionary <strong>Ramesh Tanna</strong>, a renowned writer, journalist, and cultural activist, 
                  GGF aims to preserve and promote Gujarati language, literature, and culture among overseas Gujaratis. 
                  We foster unity and camaraderie among millions of Gujaratis living abroad, creating a bridge between 
                  the diaspora and their homeland.
                </p>
                <p>
                  Through programs like the prestigious <strong>Salute India NRI Award</strong>, we recognize outstanding 
                  achievements and humanitarian work of Gujaratis overseas. Our organization actively supports initiatives 
                  of Gujarati societies abroad, publishes books, and facilitates communication between overseas Gujaratis 
                  and their homeland.
                </p>
                <p>
                  We document the lives and contributions of Gujaratis living outside of India, creating a legacy for 
                  future generations to understand and appreciate the global impact of Gujarati culture. Our work ensures 
                  that the next generation remains connected to their roots while thriving in their adopted countries.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-1">2013</div>
                  <div className="text-sm text-gray-700">Year Founded</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-sm text-gray-700">Countries</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-1">10K+</div>
                  <div className="text-sm text-gray-700">Members</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-1">200+</div>
                  <div className="text-sm text-gray-700">Events</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400" 
                alt="Gujarati Community Gathering" 
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400" 
                alt="Cultural Event" 
                className="rounded-2xl shadow-xl mt-8 hover:shadow-2xl transition-shadow duration-300" 
              />
              <img 
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400" 
                alt="Award Ceremony" 
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300" 
              />
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400" 
                alt="Unity and Celebration" 
                className="rounded-2xl shadow-xl mt-8 hover:shadow-2xl transition-shadow duration-300" 
              />
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="bg-gradient-to-br from-gray-50 to-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Foundation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Our Mission', 
                  description: 'To preserve and promote Gujarati language, literature, and culture among Gujaratis worldwide. We strive to create a strong network that celebrates our heritage while embracing progress and innovation. Through education, events, and community building, we ensure that Gujarati culture thrives for generations to come.',
                  icon: Target,
                  color: 'from-orange-500 to-orange-600',
                  bgColor: 'from-orange-50 to-orange-100'
                },
                { 
                  title: 'Our Vision', 
                  description: 'A united global Gujarati community that celebrates rich cultural heritage while contributing meaningfully to the societies they live in, serving as cultural ambassadors worldwide. We envision a world where Gujarati values of entrepreneurship, resilience, and compassion inspire and benefit all of humanity.',
                  icon: Zap,
                  color: 'from-blue-500 to-blue-600',
                  bgColor: 'from-blue-50 to-blue-100'
                },
                { 
                  title: 'Our Values', 
                  description: 'Unity, cultural preservation, excellence, integrity, and selfless service to the Gujarati community worldwide. We believe in honoring our past while building our future. Respect, inclusivity, and innovation drive our every action as we work to strengthen our global family.',
                  icon: Heart,
                  color: 'from-red-500 to-red-600',
                  bgColor: 'from-red-50 to-red-100'
                },
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${item.bgColor} p-8 rounded-2xl border-2 border-transparent hover:border-orange-500 transition-all duration-300 hover:shadow-2xl group`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs and initiatives serving our global community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: 'Cultural Events & Conferences',
                description: 'Organize year-round events celebrating Gujarati festivals, arts, and traditions across continents.'
              },
              {
                icon: BookOpen,
                title: 'Literature & Publishing',
                description: 'Publish and promote Gujarati literature, preserving our linguistic heritage for future generations.'
              },
              {
                icon: Award,
                title: 'Recognition Programs',
                description: 'Honor excellence through prestigious awards like the Salute India NRI Award.'
              },
              {
                icon: Users,
                title: 'Community Building',
                description: 'Connect diaspora with homeland through networking events and digital platforms.'
              },
              {
                icon: Globe,
                title: 'Global Support',
                description: 'Support Gujarati societies worldwide with resources, guidance, and collaboration.'
              },
              {
                icon: TrendingUp,
                title: 'Youth Programs',
                description: 'Mentor and empower the next generation through leadership and cultural exchange programs.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <item.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Leadership
              </h2>
              <p className="text-xl text-gray-600">
                Visionary leaders driving our global mission
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-200">
                <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                  <div className="md:col-span-2 text-center md:text-left">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" 
                      alt="Ramesh Tanna - Founder & President"
                      className="w-48 h-48 rounded-2xl mx-auto md:mx-0 mb-6 object-cover border-4 border-orange-500 shadow-xl"
                    />
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Ramesh Tanna</h3>
                    <p className="text-orange-600 font-semibold text-lg mb-3">Founder & President</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                      <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">Writer</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Journalist</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Cultural Activist</span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <strong>Ramesh Tanna</strong> is a renowned writer, journalist, and cultural activist who founded 
                      the Global Gujarati Federation in 2013. With decades of experience in promoting Gujarati literature 
                      and culture, he has dedicated his life to connecting the Gujarati diaspora worldwide.
                    </p>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-orange-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3 text-gray-700">
                        {[
                          'Founded GGF and connected 10,000+ Gujaratis globally',
                          'Established the prestigious NRG Awards program',
                          'Published numerous books on Gujarati culture and heritage',
                          'Organized 200+ international cultural events',
                          'Mentored thousands of young Gujaratis worldwide'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Global Family?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Become part of a vibrant community that celebrates Gujarati culture and creates 
              opportunities for connection and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors shadow-xl inline-flex items-center justify-center"
              >
                Join Us Today
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/awards"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all inline-flex items-center justify-center"
              >
                View Awards
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;