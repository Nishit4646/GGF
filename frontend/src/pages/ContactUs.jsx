import React, { useState } from 'react';
import { Mail, Phone, MapPinned, Calendar, Facebook, Twitter, Instagram, Linkedin, Youtube, Send, Clock, Globe, MessageCircle, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-36 pb-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-200">
            <MessageCircle className="w-4 h-4" />
            <span>We're Here to Help</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Quick Contact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Response Time', value: '< 24hrs', icon: Clock, color: 'from-blue-500 to-blue-600' },
            { label: 'Countries', value: '50+', icon: Globe, color: 'from-green-500 to-green-600' },
            { label: 'Members', value: '10K+', icon: MessageCircle, color: 'from-purple-500 to-purple-600' },
            { label: 'Support', value: '24/7', icon: CheckCircle, color: 'from-orange-500 to-orange-600' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-2xl border border-orange-200 text-center hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-orange-100 p-8 md:p-12 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name <span className="text-orange-600">*</span>
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all hover:border-gray-300" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address <span className="text-orange-600">*</span>
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all hover:border-gray-300" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all hover:border-gray-300" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject <span className="text-orange-600">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all hover:border-gray-300 bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="events">Event Information</option>
                      <option value="awards">Awards Nomination</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message <span className="text-orange-600">*</span>
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all hover:border-gray-300 resize-none" 
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button 
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information Sidebar - Takes 1 column */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">Contact Details</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Email</h4>
                    <a href="mailto:ggfgujarati2023@gmail.com" className="text-orange-600 hover:text-orange-700 block text-xs break-all">
                      ggfgujarati2023@gmail.com
                    </a>
                    <a href="mailto:info@globalgujaratifederation.org" className="text-orange-600 hover:text-orange-700 block text-xs break-all">
                      info@globalgujaratifederation.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Phone</h4>
                    <a href="tel:+919824034475" className="text-blue-600 hover:text-blue-700 text-xs">
                      +91 98240 34475
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinned className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Address</h4>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      302, Yash Aqua, Nr. Vijay char rasta, Navrangpura, Ahmedabad, Gujarat 380009, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { day: 'Monday - Friday', time: '10:00 AM - 6:00 PM', active: true },
                  { day: 'Saturday', time: '10:00 AM - 2:00 PM', active: true },
                  { day: 'Sunday', time: 'Closed', active: false }
                ].map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="font-medium text-gray-700 text-sm">{schedule.day}</span>
                    <span className={`font-bold text-sm ${schedule.active ? 'text-green-600' : 'text-orange-600'}`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
              <p className="text-gray-300 mb-6 text-xs">Join our community on social media</p>
              
              <div className="flex gap-3 justify-between">
                {[
                  { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
                  { icon: Twitter, label: 'Twitter', color: 'hover:bg-sky-500' },
                  { icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
                  { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
                  { icon: Youtube, label: 'YouTube', color: 'hover:bg-red-600' }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href="#"
                    className={`w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center ${social.color} transition-all hover:scale-110`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Embedded Google Maps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Us Here</h2>
          <p className="text-gray-600">Visit our office in Navrangpura, Ahmedabad</p>
        </div>
        <div className="rounded-3xl overflow-hidden border-2 border-gray-300 shadow-2xl h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8277807269985!2d72.55326931496216!3d23.03554282155082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f2b4e4e4e5%3A0x1234567890abcdef!2sNavrangpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GGF Office Location"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become part of our global Gujarati family and stay connected with your heritage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors shadow-xl inline-flex items-center justify-center gap-2 group">
              Become a Member
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all inline-flex items-center justify-center">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;