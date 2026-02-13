// src/pages/BlogPost1.jsx
import React from 'react';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost1 = ({ setCurrentPage }) => {
  return (
    <div className="pt-36 pb-16 bg-white min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => setCurrentPage('blog')}
          className="flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </button>

        <img 
          src="https://images.unsplash.com/photo-1540914124281-342587941389?w=1200" 
          alt="H.K. Shah" 
          className="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg" 
        />
        
        <div className="flex items-center space-x-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-orange-600" />
            <span>24 Feb 2022</span>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-orange-600" />
            <span>By Ramesh Tanna</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          દરિયાપાર શાકાહાર-વિગનનો વર્ષોથી પ્રસાર કરતા એચ.કે. શાહ
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-xl font-semibold text-gray-900 leading-relaxed">
            અમેરિકાના ન્યૂ યોર્ક-ન્યુ જર્સીમાં વસતા હર્ષદભાઈ ખુમચંદભાઈ શાહ એચ.કે.શાહના ટૂંકા નામે જાણીતા છે. 
            તેઓ દરિયાપાર વર્ષોથી શાકાહારનો અને હવે વિગન (દૂધાહાર પર નિષેધ)નો પ્રસાર કરી રહ્યા છે.
          </p>

          <p className="text-gray-700 leading-relaxed">
            તેમની સામાજિક નિસબત પ્રેરક છે તો જિંદગી રસપ્રદ છે. તેમનાં માતાનું નામ પાર્વતીબહેન. પિતાનું નામ ખુમચંદભાઈ. 
            મૂળ વતન વાલોડ. દક્ષિણ ગુજરાતમાં આવેલી વાલોડ રચનાત્મક ભૂમિ છે, તપની ભૂમિ છે.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">વ્યવસાય અને સફરતા</h2>
          
          <p className="text-gray-700 leading-relaxed">
            ધંધાર્થે ખુમચંદભાઈ મુંબઈ ગયા હતા. તેમના પુત્ર હર્ષદભાઈનું શિક્ષણ મુંબઈમાં થયું. તેમણે ઈલેક્ટ્રોનિક્સ વિષય સાથે બી.એ. કર્યું. 
            એ પછી તેઓ પિતા સાથે ધંધામાં જોડાઈ ગયા. તેમનો આયાત-નિકાસનો મોટો ધંધો. વિવિધ ચીજવસ્તુઓનો દુનિયાના મોટાભાગના દેશો સાથે કારોબાર ચાલે.
          </p>

          <p className="text-gray-700 leading-relaxed">
            હર્ષદભાઈએ પોતાના ધંધામાં ૧૫૦૦થી વધુ વ્યક્તિને સીધી રોજગારી આપેલી. ધંધા માટે જ તેઓ લંડનમાં ગયા. 
            એ પછી અમેરિકા ગયા. તેઓ ભારતમાં સ્થાયી થવા માગતા હતા પરંતુ ૧૯૭૬માં ભારત છોડ્યું અને અમેરિકા સ્થાયી થયા.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">શાકાહારનો પ્રસાર</h2>
          
          <p className="text-gray-700 leading-relaxed">
            અમેરિકામાં તેમણે શાકાહારનો ખૂબ પ્રસાર કર્યો. હૃદયથી અને નિસબતથી કામ કરે એટલે તેનું પરિણામ આવે જ. 
            કહેવાય છે ને કે શુદ્ધ ભાવનાથી કરેલું નિસ્વાર્થ કર્મ હંમેશાં ફળ આપતું જ હોય છે.
          </p>

          <p className="text-gray-700 leading-relaxed">
            ૧૯૯૨માં તેમણે ન્યૂ યોર્કમાં 'વેજિટેરિયન વિઝન' નામની સંસ્થા શરૂ કરી. સને ૨૦૧૭માં વેજિટેરિયન વિઝન સંસ્થાને ૨૫ વર્ષ પૂરાં થયાં ત્યારે તેની ભવ્ય ઉજવણી પણ કરી. 
            હજારો લોકો તેમાં જોડાયા હતા.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">વિગન પ્રવૃત્તિ</h2>
          
          <p className="text-gray-700 leading-relaxed">
            વેજિટેરિયનનો પ્રસાર કરતાં કરતાં તેઓ વધારે જાગૃત થયા. તેમને લાગ્યું કે દૂધાહાર પણ સંપૂર્ણ શાકાહાર ન ગણાય. 
            એ પછી તેમણે 'વિગન'ના પ્રસારની પ્રવૃત્તિ શરૂ કરી. તેઓ પોતે 'વિગન' બન્યા.
          </p>

          <p className="text-gray-700 leading-relaxed">
            તેઓ માને છે કે દરેક પ્રાણીને આ પૃથ્વી પર જીવવાનો અબાધિત અધિકાર છે. એક પણ પ્રાણીનું કોઈપણ રીતે શોષણ ન થવું જોઈએ. 
            મનુષ્યે પ્રાણીઓ પર અત્યાચાર ન કરવા જોઈએ, તેમનું શોષણ ન કરવું જોઈએ.
          </p>

          <blockquote className="border-l-4 border-orange-600 pl-6 py-4 my-8 bg-orange-50 rounded-r-lg">
            <p className="text-lg italic text-gray-800">
              "જો વ્યક્તિ વિગન થાય તો પ્રાણીઓને ફાયદો થાય અને વ્યક્તિને પોતાને પણ ઘણો ફાયદો થાય છે. 
              થોડા દિવસ તકલીફ જેવું લાગે, પરંતુ પછી ખૂબ જ સ્ફૂર્તિનો અનુભવ થાય છે."
            </p>
            <footer className="text-sm text-gray-600 mt-3 font-semibold">— એચ.કે. શાહ</footer>
          </blockquote>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">સામાજિક યોગદાન</h2>
          
          <p className="text-gray-700 leading-relaxed">
            ૨૯મી માર્ચ, ૧૯૩૧ના રોજ જન્મેલા હર્ષદભાઈ આજે 92 વર્ષે પણ કડેધડે છે. તેમનું સ્વાસ્થ્ય નિરામય છે. 
            તેઓ સક્રિય છે. સમાજસેવા કરી રહ્યા છે. શાકાહાર અને વિગનના પ્રસાર ઉપરાંત તેમણે અનેક સામાજિક પ્રવૃત્તિઓ કરી છે.
          </p>

          <p className="text-gray-700 leading-relaxed">
            તેમણે 'વર્લ્ડ વિગન વિઝન' સંસ્થાના મુંબઈ અને ગુજરાત ચેપ્ટરનો પ્રારંભ કર્યો છે. આગામી દિવસોમાં તેઓ બેંગ્લોર ચેપ્ટર પણ શરૂ કરશે. 
            તેઓ ભારતમાં વેજિટેરિયન અને વિગનનો પ્રસાર કરવા માગે છે.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl mt-8">
            <p className="text-lg font-semibold text-gray-900 text-center">
              હર્ષદભાઈ શાહ અને તેમના પરિવારને અને સમાજ માટેની તેમની ભલી લાગણીને શત્‌ શત્‌ વંદન.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <button 
            onClick={() => setCurrentPage('blog')}
            className="flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Posts
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost1;