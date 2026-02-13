// // src/components/InteractiveMap.jsx
// // Install: npm install react-globe.gl three

import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import { MapPin, Award, X, ZoomIn, ZoomOut, Info, RotateCcw } from 'lucide-react';

const talentedGujaratis = [
  { 
    id: 1, 
    name: 'Mahatma Gandhi', 
    country: 'India', 
    city: 'Porbandar, Gujarat', 
    lat: 21.6417, 
    lng: 69.6293, 
    title: 'Father of the Nation',
    image: 'https://res.cloudinary.com/dkplc2mbj/image/upload/v1612161358/mahatma_gandhi_9a7bf75be9.jpg',
    description: 'Mohandas Karamchand Gandhi, born in Porbandar, Gujarat, led India to independence through non-violent civil disobedience.',
    achievements: ['Led Indian Independence Movement', 'Pioneer of Non-Violence', 'Time Person of the Century'],
    field: 'Freedom Fighter',
    born: '1869',
    contribution: 'Freedom & Peace',
    color: '#ef4444'
  },
  { 
    id: 2, 
    name: 'Sardar Vallabhbhai Patel', 
    country: 'India', 
    city: 'Nadiad, Gujarat', 
    lat: 22.6929, 
    lng: 72.8642, 
    title: 'Iron Man of India',
    image: 'https://assets.thehansindia.com/h-upload/2025/10/31/1597700-vallabhbhai.webp',
    description: 'First Deputy Prime Minister and Home Minister of India. United 562 princely states to form the Republic of India.',
    achievements: ['Unified India', 'First Home Minister', 'Statue of Unity'],
    field: 'Statesman',
    born: '1875',
    contribution: 'Nation Building',
    color: '#f59e0b'
  },
  { 
    id: 3, 
    name: 'Dhirubhai Ambani', 
    country: 'India', 
    city: 'Chorwad, Gujarat', 
    lat: 21.0833, 
    lng: 70.2333, 
    title: 'Business Tycoon',
    image: 'https://cf-img-a-in.tosshub.com/sites/visualstory/stories/2022_12/story_16378/assets/4.jpeg?time=1672218739',
    description: 'Founded Reliance Industries, transforming it into India\'s largest private sector company.',
    achievements: ['Built Reliance Empire', 'Revolutionized Indian Business', 'Inspired entrepreneurship'],
    field: 'Business',
    born: '1932',
    contribution: 'Industrial Revolution',
    color: '#10b981'
  },
  { 
    id: 4, 
    name: 'Narendra Modi', 
    country: 'India', 
    city: 'Vadnagar, Gujarat', 
    lat: 23.7861, 
    lng: 72.6394, 
    title: 'Prime Minister of India',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrKlBcAbAJZKueIujU8OZCyoII0Rzpwx_RuLPHHKwRM9hdnW2QkcEUh38nD3oXaSZUUic9hi83dOfGEUM4G79nKIJTWUtAWrYodldDZ4&s=10',
    description: 'Current Prime Minister of India since 2014. Leading India\'s digital transformation.',
    achievements: ['14th PM of India', 'Digital India Initiative', 'Global Leadership'],
    field: 'Politics',
    born: '1950',
    contribution: 'National Development',
    color: '#3b82f6'
  },
  { 
    id: 5, 
    name: 'Vikram Sarabhai', 
    country: 'India', 
    city: 'Ahmedabad, Gujarat', 
    lat: 23.0225, 
    lng: 72.5714, 
    title: 'Father of Indian Space Program',
    image: 'https://www.nrsc.gov.in/nrscnew/assets/img/leaders/VikramSarabhai_PNG.png',
    description: 'Scientist and innovator who initiated space research in India. Founded ISRO.',
    achievements: ['Founded ISRO', 'Padma Bhushan & Vibhushan', 'Scientific Pioneer'],
    field: 'Science',
    born: '1919',
    contribution: 'Space Research',
    color: '#8b5cf6'
  },
  { 
    id: 6, 
    name: 'Karsanbhai Patel', 
    country: 'India', 
    city: 'Ahmedabad, Gujarat', 
    lat: 23.0225, 
    lng: 72.5714, 
    title: 'Nirma Founder',
    image: 'https://nirmawebsite.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/03/President-Karsan-Patel.jpg',
    description: 'Founded Nirma, one of India\'s largest detergent brands. Built a massive FMCG empire.',
    achievements: ['Built Nirma Brand', 'FMCG Pioneer', 'Philanthropist'],
    field: 'Business',
    born: '1945',
    contribution: 'Business Empire',
    color: '#06b6d4'
  },
  { 
    id: 7, 
    name: 'Pritam Lakhani', 
    country: 'USA', 
    city: 'New Jersey, USA', 
    lat: 40.0583, 
    lng: -74.4057, 
    title: 'Tech Entrepreneur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    description: 'Technology entrepreneur based in New Jersey. Leading innovations in software development.',
    achievements: ['Tech Startup Success', 'Innovation Leader', 'Mentorship Programs'],
    field: 'Technology',
    born: '1988',
    contribution: 'Tech Innovation',
    color: '#ec4899'
  },
  { 
    id: 8, 
    name: 'Jay Gajjar', 
    country: 'Canada', 
    city: 'Toronto, Canada', 
    lat: 43.6532, 
    lng: -79.3832, 
    title: 'Cultural Ambassador',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    description: 'Gujarati cultural ambassador in Canada, organizing events and festivals.',
    achievements: ['Cultural Events Organizer', 'Community Leader', 'Bridge between cultures'],
    field: 'Culture',
    born: '1985',
    contribution: 'Cultural Preservation',
    color: '#f97316'
  },
];

const InteractiveMap = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const globeEl = useRef();

  // Configure globe markers
  const markerData = talentedGujaratis.map(person => ({
    ...person,
    size: 30,
    altitude: 0.01
  }));

  useEffect(() => {
    if (globeEl.current) {
      // Auto-rotate
      globeEl.current.controls().autoRotate = false;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      
      // Set initial view to India
      globeEl.current.pointOfView({ lat: 20, lng: 78, altitude: 2 }, 1000);
    }
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedPerson(marker);
    // Focus on the selected location
    if (globeEl.current) {
      globeEl.current.pointOfView(
        { lat: marker.lat, lng: marker.lng, altitude: 1.5 },
        1000
      );
    }
  };

  const handleReset = () => {
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 20, lng: 78, altitude: 2 }, 1000);
      setSelectedPerson(null);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Legendary Gujaratis Around the World
          </h2>
          <p className="text-lg text-gray-300">
            Interactive 3D Globe - Drag to rotate, scroll to zoom, click markers for details
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 3D Globe */}
          <div className="lg:col-span-2 bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Info className="w-5 h-5 mr-2 text-orange-500" />
                Interactive 3D Globe
              </h3>
              <button
                onClick={handleReset}
                className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset View
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-700">
              <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                backgroundImageUrl={null}
                
                // Use HTML elements with images
                htmlElementsData={markerData}
                htmlElement={d => {
                  const el = document.createElement('div');
                  el.innerHTML = `
                    <div style="
                      width: 50px;
                      height: 50px;
                      border-radius: 50%;
                      border: 3px solid ${d.color};
                      box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 0 20px ${d.color}50;
                      cursor: pointer;
                      overflow: hidden;
                      background: white;
                      transition: all 0.3s ease;
                      position: relative;
                    ">
                      <img 
                        src="${d.image}" 
                        style="
                          width: 100%;
                          height: 100%;
                          object-fit: cover;
                        "
                        alt="${d.name}"
                      />
                      <div style="
                        position: absolute;
                        bottom: -25px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: rgba(0,0,0,0.9);
                        color: white;
                        padding: 4px 10px;
                        border-radius: 4px;
                        white-space: nowrap;
                        font-size: 12px;
                        font-weight: 600;
                        pointer-events: none;
                        border: 1px solid ${d.color};
                      ">
                        ${d.name.split(' ')[0]}
                      </div>
                    </div>
                  `;
                  
                  el.style.cursor = 'pointer';
                  el.style.pointerEvents = 'auto';
                  
                  // Add hover effect
                  el.onmouseenter = () => {
                    el.firstChild.style.transform = 'scale(1.2)';
                    el.firstChild.style.borderWidth = '4px';
                  };
                  el.onmouseleave = () => {
                    el.firstChild.style.transform = 'scale(1)';
                    el.firstChild.style.borderWidth = '3px';
                  };
                  
                  el.onclick = () => handleMarkerClick(d);
                  
                  return el;
                }}
                htmlAltitude={0.01}
                
                // Atmosphere
                atmosphereColor="lightskyblue"
                atmosphereAltitude={0.15}
                
                width={800}
                height={500}
                
                // Enable pointer events
                enablePointerInteraction={true}
              />

              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-lg text-center border border-white/20">
                <p className="text-sm text-white">
                  🌍 Drag to rotate • Scroll to zoom • Click colored markers to view profiles
                </p>
              </div>
            </div>

            {/* Controls Info */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <div className="bg-slate-700/50 p-3 rounded-lg text-center">
                <div className="text-orange-400 font-semibold mb-1">Drag</div>
                <div className="text-gray-300">Rotate Globe</div>
              </div>
              <div className="bg-slate-700/50 p-3 rounded-lg text-center">
                <div className="text-orange-400 font-semibold mb-1">Scroll</div>
                <div className="text-gray-300">Zoom In/Out</div>
              </div>
              <div className="bg-slate-700/50 p-3 rounded-lg text-center">
                <div className="text-orange-400 font-semibold mb-1">Click</div>
                <div className="text-gray-300">View Details</div>
              </div>
            </div>
          </div>

          {/* Person Details Panel */}
          <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700 max-h-[600px] overflow-y-auto">
            {selectedPerson ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white">Profile Details</h3>
                  <button 
                    onClick={() => setSelectedPerson(null)}
                    className="p-1 hover:bg-slate-700 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="relative">
                  <img 
                    src={selectedPerson.image} 
                    alt={selectedPerson.name}
                    className="w-full h-56 object-cover rounded-xl border-2"
                    style={{ borderColor: selectedPerson.color }}
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm p-3 rounded-lg">
                    <h3 className="text-xl font-bold text-white">{selectedPerson.name}</h3>
                    <p className="text-orange-400 font-medium text-sm">{selectedPerson.title}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-slate-700/50 p-3 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Location</div>
                    <div className="font-semibold text-white">{selectedPerson.city}</div>
                  </div>
                  <div className="bg-slate-700/50 p-3 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Field</div>
                    <div className="font-semibold text-white">{selectedPerson.field}</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-3 rounded-lg border border-orange-500/30">
                  <div className="text-xs text-gray-400 mb-1">Contribution</div>
                  <div className="font-semibold text-orange-400">{selectedPerson.contribution}</div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{selectedPerson.description}</p>

                <div className="pt-4 border-t border-slate-700">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-orange-500" />
                    Major Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedPerson.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start bg-slate-700/30 p-3 rounded-lg border border-slate-600">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 text-white text-xs font-bold"
                          style={{ background: selectedPerson.color }}
                        >
                          {idx + 1}
                        </div>
                        <span className="text-sm text-gray-300 pt-0.5">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                  <MapPin className="w-10 h-10 text-orange-500" />
                </div>
                <p className="text-white text-lg font-medium mb-2">Select a Legend</p>
                <p className="text-gray-400 text-sm">Click on any marker on the globe to view their inspiring story</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Access List */}
        <div className="mt-12 bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Access - All Legends</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {talentedGujaratis.map((person) => (
              <button
                key={person.id}
                onClick={() => handleMarkerClick(person)}
                className="flex items-center space-x-3 p-4 rounded-lg border border-slate-700 hover:border-orange-500 bg-slate-700/30 hover:bg-slate-700/50 transition-all text-left group"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white group-hover:scale-110 transition-transform"
                  style={{ background: person.color }}
                >
                  <span className="text-white font-bold text-sm">{person.name.split(' ')[0][0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white text-sm truncate">{person.name}</div>
                  <div className="text-xs text-gray-400 truncate">{person.city}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;


// src/components/InteractiveMap.jsx
// Install: npm install react-globe.gl three

// import React, { useState, useEffect, useRef } from 'react';
// import Globe from 'react-globe.gl';
// import { MapPin, Award, X, ZoomIn, ZoomOut, Info, RotateCcw } from 'lucide-react';

// const talentedGujaratis = [
//   { 
//     id: 1, 
//     name: 'Mahatma Gandhi', 
//     country: 'India', 
//     city: 'Porbandar, Gujarat', 
//     lat: 21.6417, 
//     lng: 69.6293, 
//     title: 'Father of the Nation',
//     image: 'https://res.cloudinary.com/dkplc2mbj/image/upload/v1612161358/mahatma_gandhi_9a7bf75be9.jpg',
//     description: 'Mohandas Karamchand Gandhi, born in Porbandar, Gujarat, led India to independence through non-violent civil disobedience.',
//     achievements: ['Led Indian Independence Movement', 'Pioneer of Non-Violence', 'Time Person of the Century'],
//     field: 'Freedom Fighter',
//     born: '1869',
//     contribution: 'Freedom & Peace',
//     color: '#ef4444'
//   },
//   { 
//     id: 2, 
//     name: 'Sardar Vallabhbhai Patel', 
//     country: 'India', 
//     city: 'Nadiad, Gujarat', 
//     lat: 22.6929, 
//     lng: 72.8642, 
//     title: 'Iron Man of India',
//     image: 'https://assets.thehansindia.com/h-upload/2025/10/31/1597700-vallabhbhai.webp',
//     description: 'First Deputy Prime Minister and Home Minister of India. United 562 princely states to form the Republic of India.',
//     achievements: ['Unified India', 'First Home Minister', 'Statue of Unity'],
//     field: 'Statesman',
//     born: '1875',
//     contribution: 'Nation Building',
//     color: '#f59e0b'
//   },
//   { 
//     id: 3, 
//     name: 'Dhirubhai Ambani', 
//     country: 'India', 
//     city: 'Chorwad, Gujarat', 
//     lat: 21.0833, 
//     lng: 70.2333, 
//     title: 'Business Tycoon',
//     image: 'https://cf-img-a-in.tosshub.com/sites/visualstory/stories/2022_12/story_16378/assets/4.jpeg?time=1672218739',
//     description: 'Founded Reliance Industries, transforming it into India\'s largest private sector company.',
//     achievements: ['Built Reliance Empire', 'Revolutionized Indian Business', 'Inspired entrepreneurship'],
//     field: 'Business',
//     born: '1932',
//     contribution: 'Industrial Revolution',
//     color: '#10b981'
//   },
//   { 
//     id: 4, 
//     name: 'Narendra Modi', 
//     country: 'India', 
//     city: 'Vadnagar, Gujarat', 
//     lat: 23.7861, 
//     lng: 72.6394, 
//     title: 'Prime Minister of India',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrKlBcAbAJZKueIujU8OZCyoII0Rzpwx_RuLPHHKwRM9hdnW2QkcEUh38nD3oXaSZUUic9hi83dOfGEUM4G79nKIJTWUtAWrYodldDZ4&s=10',
//     description: 'Current Prime Minister of India since 2014. Leading India\'s digital transformation.',
//     achievements: ['14th PM of India', 'Digital India Initiative', 'Global Leadership'],
//     field: 'Politics',
//     born: '1950',
//     contribution: 'National Development',
//     color: '#3b82f6'
//   },
//   { 
//     id: 5, 
//     name: 'Vikram Sarabhai', 
//     country: 'India', 
//     city: 'Ahmedabad, Gujarat', 
//     lat: 23.0225, 
//     lng: 72.5714, 
//     title: 'Father of Indian Space Program',
//     image: 'https://www.nrsc.gov.in/nrscnew/assets/img/leaders/VikramSarabhai_PNG.png',
//     description: 'Scientist and innovator who initiated space research in India. Founded ISRO.',
//     achievements: ['Founded ISRO', 'Padma Bhushan & Vibhushan', 'Scientific Pioneer'],
//     field: 'Science',
//     born: '1919',
//     contribution: 'Space Research',
//     color: '#8b5cf6'
//   },
//   { 
//     id: 6, 
//     name: 'Karsanbhai Patel', 
//     country: 'India', 
//     city: 'Ahmedabad, Gujarat', 
//     lat: 23.0225, 
//     lng: 72.5714, 
//     title: 'Nirma Founder',
//     image: 'https://nirmawebsite.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/03/President-Karsan-Patel.jpg',
//     description: 'Founded Nirma, one of India\'s largest detergent brands. Built a massive FMCG empire.',
//     achievements: ['Built Nirma Brand', 'FMCG Pioneer', 'Philanthropist'],
//     field: 'Business',
//     born: '1945',
//     contribution: 'Business Empire',
//     color: '#06b6d4'
//   },
//   { 
//     id: 7, 
//     name: 'Pritam Lakhani', 
//     country: 'USA', 
//     city: 'New Jersey, USA', 
//     lat: 40.0583, 
//     lng: -74.4057, 
//     title: 'Tech Entrepreneur',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
//     description: 'Technology entrepreneur based in New Jersey. Leading innovations in software development.',
//     achievements: ['Tech Startup Success', 'Innovation Leader', 'Mentorship Programs'],
//     field: 'Technology',
//     born: '1988',
//     contribution: 'Tech Innovation',
//     color: '#ec4899'
//   },
//   { 
//     id: 8, 
//     name: 'Jay Gajjar', 
//     country: 'Canada', 
//     city: 'Toronto, Canada', 
//     lat: 43.6532, 
//     lng: -79.3832, 
//     title: 'Cultural Ambassador',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
//     description: 'Gujarati cultural ambassador in Canada, organizing events and festivals.',
//     achievements: ['Cultural Events Organizer', 'Community Leader', 'Bridge between cultures'],
//     field: 'Culture',
//     born: '1985',
//     contribution: 'Cultural Preservation',
//     color: '#f97316'
//   },
// ];

// const InteractiveMap = () => {
//   const [selectedPerson, setSelectedPerson] = useState(null);
//   const globeEl = useRef();

//   // Configure globe markers
//   const markerData = talentedGujaratis.map(person => ({
//     ...person,
//     size: 30,
//     altitude: 0.01
//   }));

//   useEffect(() => {
//     if (globeEl.current) {
//       // Auto-rotate
//       globeEl.current.controls().autoRotate = false;
//       globeEl.current.controls().autoRotateSpeed = 0.5;
      
//       // Set initial view to India
//       globeEl.current.pointOfView({ lat: 20, lng: 78, altitude: 2 }, 1000);
//     }
//   }, []);

//   const handleMarkerClick = (marker) => {
//     setSelectedPerson(marker);
//     // Focus on the selected location
//     if (globeEl.current) {
//       globeEl.current.pointOfView(
//         { lat: marker.lat, lng: marker.lng, altitude: 1.5 },
//         1000
//       );
//     }
//   };

//   const handleReset = () => {
//     if (globeEl.current) {
//       globeEl.current.pointOfView({ lat: 20, lng: 78, altitude: 2 }, 1000);
//       setSelectedPerson(null);
//     }
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Legendary Gujaratis Around the World
//           </h2>
//           <p className="text-lg text-gray-300">
//             Interactive 3D Globe - Drag to rotate, scroll to zoom, click markers for details
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* 3D Globe */}
//           <div className="lg:col-span-2 bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-white flex items-center">
//                 <Info className="w-5 h-5 mr-2 text-orange-500" />
//                 Interactive 3D Globe
//               </h3>
//               <button
//                 onClick={handleReset}
//                 className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
//               >
//                 <RotateCcw className="w-4 h-4 mr-2" />
//                 Reset View
//               </button>
//             </div>

//             <div className="relative rounded-xl overflow-hidden border border-slate-700">
//               <Globe
//                 ref={globeEl}
//                 globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
//                 bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
//                 // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
//                 backgroundImageUrl={null}
                
//                 // Use HTML elements with images
//                 htmlElementsData={markerData}
//                 htmlElement={d => {
//                   const el = document.createElement('div');
//                   el.innerHTML = `
//                     <div style="
//                       width: 50px;
//                       height: 50px;
//                       border-radius: 50%;
//                       border: 3px solid ${d.color};
//                       box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 0 20px ${d.color}50;
//                       cursor: pointer;
//                       overflow: hidden;
//                       background: white;
//                       transition: all 0.3s ease;
//                       position: relative;
//                     ">
//                       <img 
//                         src="${d.image}" 
//                         style="
//                           width: 100%;
//                           height: 100%;
//                           object-fit: cover;
//                         "
//                         alt="${d.name}"
//                       />
//                       <div style="
//                         position: absolute;
//                         bottom: -25px;
//                         left: 50%;
//                         transform: translateX(-50%);
//                         background: rgba(0,0,0,0.9);
//                         color: white;
//                         padding: 4px 10px;
//                         border-radius: 4px;
//                         white-space: nowrap;
//                         font-size: 12px;
//                         font-weight: 600;
//                         pointer-events: none;
//                         border: 1px solid ${d.color};
//                       ">
//                         ${d.name.split(' ')[0]}
//                       </div>
//                     </div>
//                   `;
                  
//                   el.style.cursor = 'pointer';
//                   el.style.pointerEvents = 'auto';
                  
//                   // Add hover effect
//                   el.onmouseenter = () => {
//                     el.firstChild.style.transform = 'scale(1.2)';
//                     el.firstChild.style.borderWidth = '4px';
//                   };
//                   el.onmouseleave = () => {
//                     el.firstChild.style.transform = 'scale(1)';
//                     el.firstChild.style.borderWidth = '3px';
//                   };
                  
//                   el.onclick = () => handleMarkerClick(d);
                  
//                   return el;
//                 }}
//                 htmlAltitude={0.01}
                
//                 // Atmosphere
//                 atmosphereColor="lightskyblue"
//                 atmosphereAltitude={0.15}
                
//                 width={800}
//                 height={500}
                
//                 // Enable pointer events
//                 enablePointerInteraction={true}
//               />

//               <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-lg text-center border border-white/20">
//                 <p className="text-sm text-white">
//                   🌍 Drag to rotate • Scroll to zoom • Click colored markers to view profiles
//                 </p>
//               </div>
//             </div>

//             {/* Controls Info */}
//             <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
//               <div className="bg-slate-700/50 p-3 rounded-lg text-center">
//                 <div className="text-orange-400 font-semibold mb-1">Drag</div>
//                 <div className="text-gray-300">Rotate Globe</div>
//               </div>
//               <div className="bg-slate-700/50 p-3 rounded-lg text-center">
//                 <div className="text-orange-400 font-semibold mb-1">Scroll</div>
//                 <div className="text-gray-300">Zoom In/Out</div>
//               </div>
//               <div className="bg-slate-700/50 p-3 rounded-lg text-center">
//                 <div className="text-orange-400 font-semibold mb-1">Click</div>
//                 <div className="text-gray-300">View Details</div>
//               </div>
//             </div>
//           </div>

//           {/* Person Details Panel */}
//           <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700 max-h-[600px] overflow-y-auto">
//             {selectedPerson ? (
//               <div className="space-y-4">
//                 <div className="flex items-start justify-between">
//                   <h3 className="text-xl font-bold text-white">Profile Details</h3>
//                   <button 
//                     onClick={() => setSelectedPerson(null)}
//                     className="p-1 hover:bg-slate-700 rounded-full transition-colors"
//                   >
//                     <X className="w-5 h-5 text-gray-400" />
//                   </button>
//                 </div>

//                 <div className="relative">
//                   <img 
//                     src={selectedPerson.image} 
//                     alt={selectedPerson.name}
//                     className="w-full h-56 object-cover rounded-xl border-2"
//                     style={{ borderColor: selectedPerson.color }}
//                   />
//                   <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm p-3 rounded-lg">
//                     <h3 className="text-xl font-bold text-white">{selectedPerson.name}</h3>
//                     <p className="text-orange-400 font-medium text-sm">{selectedPerson.title}</p>
//                   </div>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-3 text-sm">
//                   <div className="bg-slate-700/50 p-3 rounded-lg">
//                     <div className="text-xs text-gray-400 mb-1">Location</div>
//                     <div className="font-semibold text-white">{selectedPerson.city}</div>
//                   </div>
//                   <div className="bg-slate-700/50 p-3 rounded-lg">
//                     <div className="text-xs text-gray-400 mb-1">Field</div>
//                     <div className="font-semibold text-white">{selectedPerson.field}</div>
//                   </div>
//                 </div>

//                 <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-3 rounded-lg border border-orange-500/30">
//                   <div className="text-xs text-gray-400 mb-1">Contribution</div>
//                   <div className="font-semibold text-orange-400">{selectedPerson.contribution}</div>
//                 </div>

//                 <p className="text-gray-300 text-sm leading-relaxed">{selectedPerson.description}</p>

//                 <div className="pt-4 border-t border-slate-700">
//                   <h4 className="font-semibold text-white mb-3 flex items-center">
//                     <Award className="w-4 h-4 mr-2 text-orange-500" />
//                     Major Achievements
//                   </h4>
//                   <ul className="space-y-2">
//                     {selectedPerson.achievements.map((achievement, idx) => (
//                       <li key={idx} className="flex items-start bg-slate-700/30 p-3 rounded-lg border border-slate-600">
//                         <div 
//                           className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 text-white text-xs font-bold"
//                           style={{ background: selectedPerson.color }}
//                         >
//                           {idx + 1}
//                         </div>
//                         <span className="text-sm text-gray-300 pt-0.5">{achievement}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ) : (
//               <div className="text-center py-20">
//                 <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
//                   <MapPin className="w-10 h-10 text-orange-500" />
//                 </div>
//                 <p className="text-white text-lg font-medium mb-2">Select a Legend</p>
//                 <p className="text-gray-400 text-sm">Click on any marker on the globe to view their inspiring story</p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Quick Access List */}
//         <div className="mt-12 bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
//           <h3 className="text-2xl font-bold text-white mb-6">Quick Access - All Legends</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {talentedGujaratis.map((person) => (
//               <button
//                 key={person.id}
//                 onClick={() => handleMarkerClick(person)}
//                 className="flex items-center space-x-3 p-4 rounded-lg border border-slate-700 hover:border-orange-500 bg-slate-700/30 hover:bg-slate-700/50 transition-all text-left group"
//               >
//                 <div 
//                   className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white group-hover:scale-110 transition-transform"
//                   style={{ background: person.color }}
//                 >
//                   <span className="text-white font-bold text-sm">{person.name.split(' ')[0][0]}</span>
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="font-semibold text-white text-sm truncate">{person.name}</div>
//                   <div className="text-xs text-gray-400 truncate">{person.city}</div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InteractiveMap;