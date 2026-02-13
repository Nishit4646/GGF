// src/pages/AwardsPage.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, MapPin, Globe, Calendar, Users, Trophy, Star, Filter, Search, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AwardsPage = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const awards = [
    { year: '2018', recipient: 'Thakarshibhai (TK) Patel', location: 'Africa', achievement: 'Outstanding Community Service & Business Leadership', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', category: 'Business', description: 'Built thriving businesses across Africa while establishing educational institutions and healthcare facilities for underserved communities.' },
    { year: '2018', recipient: 'Dr. Kalaben Shah', location: 'USA', achievement: 'Medical Excellence & Community Health', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300', category: 'Healthcare', description: 'Pioneered innovative medical treatments and established free health clinics serving immigrant communities across America.' },
    { year: '2018', recipient: 'Sunil Nayak', location: 'USA', achievement: 'Cultural Preservation & Arts', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300', category: 'Arts', description: 'Founded multiple cultural centers promoting Gujarati arts, music, and dance, inspiring thousands of youth to embrace their heritage.' },
    { year: '2016', recipient: 'Rizwan Adatiya', location: 'Porbandar-Africa', achievement: 'International Business Leadership', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300', category: 'Business', description: 'Established international trade networks connecting Africa, India, and the Middle East, creating thousands of jobs.' },
    { year: '2016', recipient: 'Dr. Pradip Kansagara', location: 'Rajkot-USA', achievement: 'Healthcare Innovation', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300', category: 'Healthcare', description: 'Developed groundbreaking surgical techniques and medical devices that have improved patient outcomes globally.' },
    { year: '2016', recipient: 'Bhikhubhai Patel', location: 'Anand-USA', achievement: 'Community Development', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300', category: 'Social Work', description: 'Established community centers, schools, and vocational training programs empowering diaspora communities.' },
    { year: '2014', recipient: 'Dr. Ashok Patel', location: 'USA', achievement: 'Academic Excellence & Research', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300', category: 'Education', description: 'Published over 100 research papers and mentored hundreds of students, advancing knowledge in engineering and technology.' },
    { year: '2014', recipient: 'Natvar Bhavsar', location: 'USA', achievement: 'Contemporary Arts & Culture', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', category: 'Arts', description: 'Internationally acclaimed abstract artist whose works are displayed in prestigious museums worldwide including MOMA.' },
    { year: '2014', recipient: 'Ramesh Virani Maldar', location: 'Hong Kong', achievement: 'Trade & Commerce Excellence', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300', category: 'Business', description: 'Built a multinational trading empire connecting Asian markets with global partners, promoting cultural exchange.' },
  ];

  const years = ['All', ...Array.from(new Set(awards.map(a => a.year)))].sort().reverse();
  const categories = Array.from(new Set(awards.map(a => a.category)));

  const filteredAwards = awards.filter(award => {
    const matchesYear = selectedYear === 'All' || award.year === selectedYear;
    const matchesSearch = award.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         award.achievement.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesYear && matchesSearch;
  });

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>NRG Awards - Salute India NRI Awards | Global Gujarati Federation</title>
        <meta name="description" content="NRG Awards by GGF - Honoring excellence in the global Gujarati community. Recognizing outstanding achievements in business, healthcare, arts, education, and social service since 2014." />
        <meta name="keywords" content="NRG Awards, Salute India NRI Award, Gujarati Awards, NRI Recognition, Indian Diaspora Awards, Gujarat Excellence Awards" />
        
        {/* Open Graph */}
        <meta property="og:title" content="NRG Awards - Recognizing Global Gujarati Excellence" />
        <meta property="og:description" content="Honoring outstanding Gujaratis worldwide. 100+ recipients across 30+ countries recognized for excellence in business, healthcare, arts, and community service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globalgujaratifederation.org/awards" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="NRG Awards - Global Gujarati Excellence" />
        <meta name="twitter:description" content="Celebrating outstanding achievements of Gujaratis worldwide through prestigious NRG Awards." />
        
        <link rel="canonical" href="https://globalgujaratifederation.org/awards" />
      </Helmet>

      <div className="pt-36 pb-16 bg-gradient-to-br from-white via-orange-50 to-white min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-200">
              <Sparkles className="w-4 h-4" />
              <span>Celebrating Excellence Since 2014</span>
            </div>
            
            <div className="inline-block mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 blur-3xl opacity-20 rounded-full"></div>
                <Trophy className="w-20 h-20 text-orange-600 mx-auto relative" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">NRG Awards</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">
              Salute India NRI Award
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Recognizing extraordinary achievements and humanitarian contributions of Gujaratis around the world
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, value: '100+', label: 'Award Recipients', color: 'from-blue-500 to-blue-600' },
              { icon: Globe, value: '30+', label: 'Countries', color: 'from-green-500 to-green-600' },
              { icon: Calendar, value: '10+', label: 'Years', color: 'from-purple-500 to-purple-600' },
              { icon: Star, value: '5', label: 'Categories', color: 'from-orange-500 to-orange-600' },
            ].map((stat, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl shadow-xl text-white text-center transform hover:scale-105 transition-all duration-300`}>
                <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About the Award */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-orange-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About the NRG Awards
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    The <strong>NRG Awards</strong>, featuring the prestigious <strong>Salute India NRI Award</strong>, 
                    celebrate outstanding achievements and humanitarian work of Gujaratis living overseas. 
                    This distinguished recognition honors individuals who have excelled in their fields while maintaining 
                    strong ties to their Gujarati roots.
                  </p>
                  <p>
                    Since its inception in <strong>2014</strong>, the award has recognized leaders across multiple domains including 
                    business, healthcare, arts, education, and community service. Our recipients have not only achieved 
                    personal excellence but have also contributed significantly to both their adopted countries and their homeland.
                  </p>
                  <p>
                    Each awardee serves as an inspiration to future generations, demonstrating that success and cultural 
                    preservation can go hand in hand. Their stories inspire thousands of young Gujaratis worldwide to 
                    pursue excellence while staying connected to their heritage.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="w-6 h-6 text-orange-600 mr-3" />
                    Award Categories
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat, idx) => (
                      <div key={idx} className="bg-white px-4 py-2 rounded-lg text-center font-medium text-gray-700 text-sm border border-orange-200">
                        {cat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                    Selection Criteria
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Outstanding professional achievements</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Significant community contributions</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Strong connection to Gujarati heritage</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Positive role model for future generations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative w-full md:w-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search recipients or achievements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-auto">
                <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="flex-1 md:flex-initial px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors bg-white font-medium"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'All' ? 'All Years' : `Year ${year}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              Showing <span className="font-semibold text-orange-600">{filteredAwards.length}</span> of {awards.length} recipients
            </div>
          </div>
        </section>

        {/* Awards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAwards.map((award, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-500 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={award.image} 
                    alt={award.recipient} 
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2 shadow-lg">
                    <Award className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-bold text-orange-600">{award.year}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {award.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {award.recipient}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-center">
                    <MapPin className="w-4 h-4 inline mr-2 text-orange-500" />
                    {award.location}
                  </p>
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Achievement</h4>
                    <p className="text-sm text-gray-700">{award.achievement}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600 via-orange-700 to-orange-600 rounded-3xl p-12 text-center shadow-2xl">
            <Trophy className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nominate Someone for NRG Awards
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Know someone making an extraordinary impact? Nominate them for recognition in our next awards ceremony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors shadow-xl inline-flex items-center justify-center"
              >
                Submit Nomination
              </Link>
              <Link 
                to="/meet"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all inline-flex items-center justify-center"
              >
                View Past Ceremonies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AwardsPage;