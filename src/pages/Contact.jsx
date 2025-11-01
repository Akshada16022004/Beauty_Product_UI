import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Heart, Sparkles, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Our beauty experts will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
  <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent mb-4">
    Contact Us
  </h1>
  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
    Get in touch with our beauty experts. We're here to help you with any questions!
  </p>
</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Our beauty consultants are ready to help you find your perfect glow
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-8793</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border border-pink-100">
                  <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Email Us</h3>
                    <p className="text-gray-600">hello@glowgoddess.com</p>
                    <p className="text-sm text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Visit Us</h3>
                    <p className="text-gray-600">123 Beauty Avenue</p>
                    <p className="text-sm text-gray-500">Glow City, GC 12345</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
                  <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Store Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 9AM-8PM</p>
                    <p className="text-sm text-gray-500">Weekends: 10AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Features */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl shadow-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-6 w-6 text-white" />
                <h3 className="text-xl font-bold">Why Choose Us?</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Expert beauty consultations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Personalized product recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Fast & friendly customer support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>100% satisfaction guaranteed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Updated Contact Form */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8">
            <div className="flex items-center space-x-3 mb-2">
              <MessageCircle className="h-6 w-6 text-purple-500" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
            </div>
            <p className="text-gray-600 mb-8">
              Have questions about our products or need beauty advice? We'd love to hear from you!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 appearance-none"
                >
                  <option value="">Choose a topic</option>
                  <option value="consultation">Beauty Consultation</option>
                  <option value="product">Product Recommendation</option>
                  <option value="order">Order Support</option>
                  <option value="shipping">Shipping Inquiry</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="skincare">Skincare Advice</option>
                  <option value="makeup">Makeup Tips</option>
                  <option value="other">Other Questions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 resize-none"
                  placeholder="Tell us how we can help you today..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-sm">
                We typically respond within 2-4 hours during business hours
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg border border-white/50 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Beauty Advice?</h3>
            <p className="text-gray-600 mb-6">
              Our team of beauty experts is here to help you create your perfect routine and find products that work for your unique skin.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Product Guidance</h4>
                <p className="text-gray-600">Find the perfect products for your skin type</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Routine Help</h4>
                <p className="text-gray-600">Build an effective skincare routine</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Expert Support</h4>
                <p className="text-gray-600">Get answers from beauty professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;