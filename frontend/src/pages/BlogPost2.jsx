// src/pages/BlogPost2.jsx
import React from 'react';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost2 = ({ setCurrentPage }) => {
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
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1200" 
          alt="Sutarfeni" 
          className="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg" 
        />
        
        <div className="flex items-center space-x-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-orange-600" />
            <span>14 Apr 2022</span>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-orange-600" />
            <span>By Ramesh Tanna</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          ખંભાતની ઓળખ એટલે હલવાસન અને સૂતરફેણી
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-xl font-semibold text-gray-900 leading-relaxed">
            સુખડિયા પરિવારે આ ઓળખ ઊભી કરી. દરિયાપાર વસતો કોઈ પણ ગુજરાતી વતનમાં આવે એટલે પાછા જતી વખતે સૂતરફેણી કે હલવાસન ચોક્કસ લઈ જાય.
          </p>

          <p className="text-gray-700 leading-relaxed">
            આ મીઠાઈમાં સ્વાદ પણ ખરો અને સુગંધ પણ ખરી. ખંભાતના સુખડિયા પરિવારે અમેરિકામાં પણ આ મીઠાઈને લોકપ્રિય કરવામાં સફળતા મેળવી છે.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">ગુણવત્તાનું રહસ્ય</h2>
          
          <p className="text-gray-700 leading-relaxed">
            મીઠાઈમાં ઈલાયચી અને કેસર યોગ્ય ગુણવત્તા સાથે વાપરવામાં આવે. તેની લોકપ્રિયતાના પાયામાં ગુણવત્તા છે. 
            સંસ્કૃતિ-સેવા અને સ્વાદના સમન્વય સમા જયંતભાઈ સુખડિયાએ શિકાગોમાં અઢી દાયકા પહેલાં સુખડિયા સ્વીટ અને ફરસાણનો પ્રારંભ કર્યો હતો.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">અમેરિકામાં સફરનું આરંભ</h2>
          
          <p className="text-gray-700 leading-relaxed">
            પારકા પ્રદેશમાં સૂતરફેણી, હલવાસન તથા અન્ય ફરસાણો તૈયાર કરવામાં ધીરજ અને મહેનત જોઈએ. 
            અલાસ્કામાં રબ્બરના વૃક્ષ કે ચા ઉગાડવા જેવું કામ જયંતભાઈ અને તેમનાં જીવનસાથી દીનાબહેને કરી બતાવ્યું હતું.
          </p>

          <p className="text-gray-700 leading-relaxed">
            દીનાબહેન અને જયંતભાઈ 1997માં શિકાગો ગયાં હતાં. તેમણે ડેવોન વિસ્તારમાં સુખડિયા સ્વીટ અને સ્નેક્સનો પ્રારંભ કર્યો હતો.
          </p>

          <blockquote className="border-l-4 border-orange-600 pl-6 py-4 my-8 bg-orange-50 rounded-r-lg">
            <p className="text-lg italic text-gray-800">
              "ગુજરાતની પરંપરાગત મીઠાઈઓ વિશ્વભરમાં પ્રસિદ્ધ કરવી એ અમારું સ્વપ્ન હતું."
            </p>
            <footer className="text-sm text-gray-600 mt-3 font-semibold">— જયંતભાઈ સુખડિયા</footer>
          </blockquote>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">પરિવારનું યોગદાન</h2>
          
          <p className="text-gray-700 leading-relaxed">
            તેમના ભાઈ પીયૂષભાઈએ ન્યૂજર્સીમાં સૂતરફેણી, હલવાસન, ઘેબર, ઘારી અને બીજી મીઠાઈઓ બનાવી. 
            આ બંને ભાઈઓએ અમેરિકામાં વસતા ભારતીયો તથા અન્ય લોકોને સાચો સ્વાદ સુલભ કરાવી આપ્યો.
          </p>

          <p className="text-gray-700 leading-relaxed">
            મીઠાઈ અને ફરસાણમાં મધ્ય ગુજરાતના સુખડિયા પરિવારોનું મોટું પ્રદાન છે. ડાકોરમાં ગોમતી તળાવના ઘાટ પર બાપાલાલના ગોટા મળે છે. 
            વિનોદભાઈ સુખડિયા, મનનભાઈ સુખડિયા, રાહુલભાઈ સુખડિયા, મેહુલભાઈ સુખડિયાએ બાપાલાલના ગોટા આખા વિશ્વમાં જાણીતા કરી દીધા છે.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl mt-8">
            <p className="text-lg font-semibold text-gray-900 text-center">
              ગુજરાતની ખાણીપીણીના વૈશ્વિક પ્રસારમાં સુખડિયા પરિવારોનું પ્રદાન એ એક લેખનો નહીં, પરંતુ એક પુસ્તકનો વિષય છે.
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

export default BlogPost2;