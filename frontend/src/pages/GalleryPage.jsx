import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Award, Users, Heart, Sparkles, Upload, ZoomIn, Calendar, MapPin, X } from 'lucide-react';

const GalleryPage = () => {
  const galleryCategories = ['All', 'Cultural', 'Awards', 'Meet', 'Community'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800', title: 'Navratri Celebration 2024', category: 'Cultural', date: 'Oct 2024', location: 'New York' },
    { id: 2, url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', title: 'NRI Excellence Awards', category: 'Awards', date: 'Sep 2024', location: 'London' },
    { id: 3, url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800', title: 'Community Gathering', category: 'Meet', date: 'Aug 2024', location: 'Dubai' },
    { id: 4, url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800', title: 'Youth Leadership Program', category: 'Community', date: 'Jul 2024', location: 'Mumbai' },
    { id: 5, url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800', title: 'Garba Night 2024', category: 'Cultural', date: 'Oct 2024', location: 'Toronto' },
    { id: 6, url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800', title: 'Business Excellence Award', category: 'Awards', date: 'Sep 2024', location: 'Singapore' },
    { id: 7, url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800', title: 'Global Meet 2024', category: 'Meet', date: 'Jun 2024', location: 'Ahmedabad' },
    { id: 8, url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800', title: 'Community Service Day', category: 'Community', date: 'May 2024', location: 'Sydney' },
    { id: 9, url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800', title: 'Uttarayan Celebration', category: 'Cultural', date: 'Jan 2024', location: 'New Jersey' },
    { id: 10, url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800', title: 'Humanitarian Award Ceremony', category: 'Awards', date: 'Dec 2023', location: 'Paris' },
    { id: 11, url: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800', title: 'Annual Convention', category: 'Meet', date: 'Nov 2023', location: 'Surat' },
    { id: 12, url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800', title: 'Food Festival', category: 'Community', date: 'Oct 2023', location: 'Melbourne' },
    { id: 13, url: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800', title: 'Diwali Lights', category: 'Cultural', date: 'Nov 2023', location: 'Chicago' },
    { id: 14, url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800', title: 'Literary Award', category: 'Awards', date: 'Sep 2023', location: 'Vadodara' },
    { id: 15, url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800', title: 'Cultural Exchange', category: 'Meet', date: 'Aug 2023', location: 'Bangkok' },
    { id: 16, url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800', title: 'Charity Gala', category: 'Community', date: 'Jul 2023', location: 'Los Angeles' }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const categoryIcons = {
    'Cultural': Heart,
    'Awards': Award,
    'Meet': Users,
    'Community': ImageIcon
  };

  const categoryColors = {
    'Cultural': 'from-pink-500 to-rose-500',
    'Awards': 'from-yellow-500 to-orange-500',
    'Meet': 'from-blue-500 to-indigo-500',
    'Community': 'from-green-500 to-emerald-500'
  };

  const categoryStats = galleryCategories.slice(1).map(cat => ({
    name: cat,
    count: galleryImages.filter(img => img.category === cat).length,
    icon: categoryIcons[cat],
    color: categoryColors[cat]
  }));

  return (
    <div className="pt-36 pb-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-200">
            <Camera className="w-4 h-4" />
            <span>Visual Stories</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            તસવીર <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">ઝરૂખો</span>
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Photo Gallery</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Capturing moments of celebration, achievement, and community from around the world
          </p>
        </div>

        {/* Category Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categoryStats.map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-2xl border border-orange-200 text-center hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setSelectedCategory(stat.name)}>
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.count}</div>
              <div className="text-sm text-gray-600">{stat.name}</div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all shadow-md ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white scale-105 shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-2 border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Photos' : selectedCategory}
            </h3>
            <p className="text-gray-600">{filteredImages.length} photos</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Click to view full size</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => {
            const Icon = categoryIcons[image.category];
            return (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-orange-500"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 right-4">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-orange-400" />
                      <span className="text-xs font-semibold text-orange-400 uppercase">{image.category}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{image.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {image.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {image.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryColors[image.category]} shadow-lg`}>
                    <Icon className="w-3 h-3" />
                    {image.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <h3 className="text-3xl font-bold mb-2">{selectedImage.title}</h3>
              <div className="flex items-center justify-center gap-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {selectedImage.date}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {selectedImage.location}
                </span>
                <span className="flex items-center gap-2 px-3 py-1 bg-orange-600 rounded-full text-white text-sm font-semibold">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-12 text-center shadow-2xl">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Upload className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Share Your Memories
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Have photos from our events? We'd love to feature them in our gallery!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors shadow-xl inline-flex items-center justify-center gap-2 group">
              <Upload className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Submit Photos
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all inline-flex items-center justify-center gap-2">
              <Camera className="w-5 h-5" />
              View Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;