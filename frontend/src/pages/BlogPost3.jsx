// src/pages/BlogPost3.jsx
import React from 'react';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost3 = ({ setCurrentPage }) => {
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
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200" 
          alt="Gujarati Culture" 
          className="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg" 
        />
        
        <div className="flex items-center space-x-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-orange-600" />
            <span>21 Jun 2017</span>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-orange-600" />
            <span>By Ramesh Tanna</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          ગુજરાતી પ્રજાઃ તસવીર અને એક્સ-રે
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-xl font-semibold text-gray-900 leading-relaxed">
            ગુજરાતી પ્રજા નથી, ગુજરાતી પ્રજાવિશેષ છે. રવીન્દ્રનાથ ટાગોર પાસેથી શબ્દ લઈને સાહિત્યકાર અને ઇતિહાસકાર 
            ચન્દ્રકાન્ત બક્ષીએ ગુજરાતીઓને 'મહાજાતિ' ગણાવીને એ નામનું અભ્યાસી પુસ્તક પણ લખ્યું હતું.
          </p>

          <p className="text-gray-700 leading-relaxed">
            ગુજરાતીઓને માત્ર 'મહાજાતિ' તરીકે ઓળખવા એ તેમની અધૂરી ઓળખ છે. ગુજરાતીઓ તો વિશ્વજાતિ છે. 
            સમગ્ર વિશ્વના ખૂણે ખૂણે પ્રસરેલી વિશ્વજાતિ એટલે ગુજરાતી પ્રજા.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">પાણી જેવા ગુજરાતીઓ</h2>
          
          <p className="text-gray-700 leading-relaxed">
            ગુજરાતીઓ પાણીદાર છે, કારણ કે તેઓ પાણી જેવા છે. સ્થિતિસ્થાપકતા, લચકીલાપણું એ ગુજરાતીઓની પ્રકૃતિ છે. 
            પાણીને ગ્લાસમાં ભરો તો તેનો આકાર ગ્લાસ જેવો, માટલામાં ભરો તો માટલા જેવો અને ખોબામાં લો તો ખોબા જેવો થઈ જાય.
          </p>

          <p className="text-gray-700 leading-relaxed">
            'જેવો દેશ તેવો વેશ' એ સૂત્રને જીવીને દરેક દેશમાં પોતાની જાતને સ્થાપિત કરનારા ગુજરાતીઓ મંગળ ગ્રહ ઉપર હોય તો પણ નવાઈ નહીં!
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">દરિયાએ આપેલી વિશાળતા</h2>
          
          <p className="text-gray-700 leading-relaxed">
            ગુજરાતીની પ્રકૃતિમાં સંકુચિતતા ઓછી અને વિશાળતા વધુ છે. ગુજરાતીઓને આ વિશાળતા દરિયાએ આપી છે. 
            ગુજરાતીની દોલત દરિયાની બદોલત છે. ગુજરાતને ૧૬૦૯ કિમિ લાંબો દરિયાકિનારો મળ્યો છે.
          </p>

          <p className="text-gray-700 leading-relaxed">
            દરિયાએ ગુજરાતીઓના ઘડતરમાં, તેમને વૈશ્વિક બનાવવામાં મોટું પ્રદાન આપ્યું છે. ગુજરાતીઓની આંગળી પકડીને 'દરિયાલાલ' 
            તેમને વિશ્વના એક-એક દેશમાં લઈ ગયા છે.
          </p>

          <blockquote className="border-l-4 border-orange-600 pl-6 py-4 my-8 bg-orange-50 rounded-r-lg">
            <p className="text-lg italic text-gray-800">
              "જ્યાં જ્યાં વસે એક ગુજરાતી ત્યાં સદાકાળ ગુજરાત"
            </p>
          </blockquote>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">બદલાવની કળા</h2>
          
          <p className="text-gray-700 leading-relaxed">
            બદલાવું. ઝડપથી બદલાવું. પરિવર્તન આવે એ પહેલાં જ પોતાનું વર્તન બદલી નાખવું એ ગુજરાતીઓની તાસીર છે. 
            તવારીખ તપાસો તમને પાને પાને આ તાસીર દેખાશે.
          </p>

          <p className="text-gray-700 leading-relaxed">
            ગુજરાતીઓ વિશ્વમાનવી છે. કવિવર ઉમાશંકર જોશીએ કહ્યું હતું કે, ગુજરાતીએ 'કેવળ ભારતીય' નથી બનવાનું, 
            તેણે તો 'વિશ્વમાનવી' બનવાનું છે.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">વિશેષતાઓ</h2>
          
          <p className="text-gray-700 leading-relaxed">
            ગુજરાતી રસ્તો કાઢનારી પ્રજા છે. કોઈ પણ ભોગે સાધ્ય સુધી પહોંચવા માટે જરૂરી બનતા 'રસ્તા' કાઢવામાં ગુજરાતીઓની તોલે કોઈ ના આવે!
          </p>

          <p className="text-gray-700 leading-relaxed">
            ગુજરાતીઓ માને છે કે ભાષા બિલકુલ મહત્ત્વની નથી, મેસેજ કન્વે થાય એટલે પત્યું. ભાષાને શું વળગે ભૂર, વેપારમાં રળ્યો તે શૂર.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl mt-8">
            <p className="text-2xl font-bold text-gray-900 text-center">
              જ્યાં જ્યાં જીવતો ગુજરાતી, તેની જિંદગી આનંદથી છલકાતી.
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

export default BlogPost3;