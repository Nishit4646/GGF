// src/pages/MeetPage.jsx
import React from 'react';
import { Users, Calendar, MapPin, ChevronRight } from 'lucide-react';

const MeetPage = () => {
  const eventHighlights = [
    'Over 500+ attendees from 30+ countries',
    'Cultural performances showcasing Gujarati heritage',
    'Business networking sessions and opportunities',
    'Youth leadership workshops and mentorship',
    'Award ceremonies honoring community leaders',
    'Traditional Gujarati cuisine and hospitality',
    'Panel discussions on diaspora challenges',
    'Cultural exhibitions and art displays'
  ];

  return (
    <div className="pt-36 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Users className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">NRG Meet 2023</h1>
          <p className="text-xl text-gray-600">A Grand Gathering of Global Gujaratis</p>
          <div className="mt-4 flex items-center justify-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>December 12-14, 2023</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Ahmedabad, Gujarat</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800" alt="NRG Meet" className="rounded-xl shadow-lg w-full h-64 object-cover" />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Event</h2>
            <p className="text-gray-700 mb-4">
              The NRG Meet 2023 was a historic gathering that brought together Gujaratis from across the globe. 
              This three-day extravaganza celebrated our rich cultural heritage while fostering connections and collaborations 
              that span continents.
            </p>
            <p className="text-gray-700">
              From inspiring keynote speeches to vibrant cultural performances, the event showcased the best of Gujarati 
              talent and entrepreneurship, creating lasting memories and meaningful relationships.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Highlights</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {eventHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                <ChevronRight className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Event Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <img 
                key={i}
                src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000000}?w=400`} 
                alt={`Event ${i}`}
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow w-full h-48 object-cover"
              />
            ))}
          </div>
        </div>

        <div className="bg-orange-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">NRG Meet 2024 Coming Soon!</h2>
          <p className="text-lg mb-6">Join us for the next edition of our global gathering</p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
            Register Interest
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetPage;