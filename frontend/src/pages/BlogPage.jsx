// src/pages/BlogPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Calendar, User, Tag, Search, TrendingUp, Clock, BookOpen, Sparkles, Filter } from 'lucide-react';

const BlogPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Personality', 'Culture', 'Social', 'Heritage', 'Business', 'Community'];

  const blogPosts = [
    {
      id: 1,
      slug: 'post-1',
      title: 'દરિયાપાર શાકાહાર-વિગનનો વર્ષોથી પ્રસાર કરતા એચ.કે. શાહ',
      excerpt: 'અમેરિકાના ન્યૂ યોર્ક-ન્યુ જર્સીમાં વસતા હર્ષદભાઈ ખુમચંદભાઈ શાહ દરિયાપાર શાકાહાર અને વિગન જીવનશૈલીનો પ્રસાર કરવામાં અગ્રેસર છે. તેમની પ્રેરક યાત્રા અને યોગદાન વિશે વાંચો.',
      date: '24 Feb 2022',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1540914124281-342587941389?w=800',
      author: 'Ramesh Tanna',
      category: 'Personality',
      featured: true,
      views: '2.4k'
    },
    {
      id: 2,
      slug: 'post-2',
      title: 'ખંભાતની ઓળખ એટલે હલવાસન અને સૂતરફેણી',
      excerpt: 'સુખડિયા પરિવારે આ ઓળખ ઊભી કરી. ખંભાતની પરંપરાગત મીઠાઈઓની વિશિષ્ટતા અને તેના પાછળની કથા. સદીઓ જૂની વારસો અને તેની આધુનિક યાત્રા.',
      date: '14 Apr 2022',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800',
      author: 'Ramesh Tanna',
      category: 'Culture',
      featured: false,
      views: '1.8k'
    },
    {
      id: 3,
      slug: 'post-3',
      title: 'ગુજરાતી પ્રજાઃ તસવીર અને એક્સ-રે',
      excerpt: 'ગુજરાતી પ્રજા નથી, ગુજરાતી પ્રજાવિશેષ છે. આપણી અનોખી ઓળખ, સંસ્કૃતિ અને વૈશ્વિક યોગદાન પર એક ગહન વિશ્લેષણ.',
      date: '21 Jun 2017',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      author: 'Ramesh Tanna',
      category: 'Social',
      featured: true,
      views: '3.1k'
    },
    {
      id: 4,
      slug: 'post-4',
      title: 'વૈશ્વિક ગુજરાતી સમુદાયમાં ઉદ્યમશીલતાની ભાવના',
      excerpt: 'દરેક ખંડમાં ગુજરાતી ઉદ્યોગસાહસિકોએ કેવી રીતે નવીનતમ વ્યવસાયો સ્થાપ્યા અને સફળતાની નવી ઊંચાઈઓ સર કરી.',
      date: '10 Jan 2023',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800',
      author: 'Ramesh Tanna',
      category: 'Business',
      featured: false,
      views: '1.5k'
    },
    {
      id: 5,
      slug: 'post-5',
      title: 'નવી પેઢીને સંસ્કૃતિ સાથે જોડવાની પહેલ',
      excerpt: 'યુવાનોને ગુજરાતી ભાષા, સાહિત્ય અને સંસ્કૃતિ સાથે કેવી રીતે જોડી રાખવા તે અંગેની નવીન પહેલો અને કાર્યક્રમો.',
      date: '5 Mar 2023',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
      author: 'Ramesh Tanna',
      category: 'Community',
      featured: false,
      views: '2.0k'
    },
    {
      id: 6,
      slug: 'post-6',
      title: 'ગુજરાતી વારસો: પરંપરા અને આધુનિકતાનો સંગમ',
      excerpt: 'આપણી સમૃદ્ધ સાંસ્કૃતિક વારસાને જાળવતાં આધુનિક સમયની જરૂરિયાતો સાથે કેવી રીતે સંતુલન સાધવું.',
      date: '18 Apr 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=800',
      author: 'Ramesh Tanna',
      category: 'Heritage',
      featured: false,
      views: '1.2k'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <div className="pt-36 pb-16 bg-white min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-200">
              <BookOpen className="w-4 h-4" />
              <span>Stories & Insights</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              GGF <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Celebrating Gujarati culture, heritage, and community stories from around the world
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-2xl border border-orange-200">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white cursor-pointer"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500 hover:text-orange-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'All' && featuredPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-orange-600" />
              <h2 className="text-3xl font-bold text-gray-900">Featured Stories</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-500"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-medium text-gray-700">{post.views} views</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-1 rounded-full border border-orange-300">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-700">{post.author}</span>
                      </div>
                      <button
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors group"
                      >
                        Read More
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          {selectedCategory === 'All' && (
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Recent Articles</h2>
            </div>
          )}

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-orange-500"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                      <TrendingUp className="w-3 h-3 text-orange-600" />
                      <span className="font-medium text-gray-700">{post.views}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1 text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full border border-orange-200">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <button
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="flex items-center gap-1 text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm group"
                      >
                        Read
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-12 text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with Our Stories
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get the latest articles, cultural insights, and community updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors shadow-xl whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;