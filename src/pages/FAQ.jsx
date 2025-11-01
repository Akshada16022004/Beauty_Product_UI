import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      title: "Ordering & Payment",
      questions: [
        {
          question: "How do I place an order?",
          answer: "Simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or checkout as a guest, enter your shipping information, and complete payment."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for secure and convenient checkout."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "You can modify or cancel your order within 1 hour of placement. After that, orders enter our processing system and cannot be changed. Contact us immediately if you need assistance."
        }
      ]
    },
    {
      title: "Shipping & Delivery",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 3-5 business days, express shipping takes 2 business days, and overnight shipping delivers the next business day. Processing time is 1-2 business days before shipment."
        },
        {
          question: "Do you offer international shipping?",
          answer: "Yes! We ship to select countries worldwide. International shipping costs and delivery times vary by location. Customs fees may apply depending on your country's regulations."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order by logging into your account and visiting the Order History section."
        }
      ]
    },
    {
      title: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for unused items in original packaging. Defective items can be returned within 60 days. Some items like opened skincare products are non-returnable for hygiene reasons."
        },
        {
          question: "How do I start a return?",
          answer: "Contact our customer service team to initiate a return. We'll provide you with a return label and instructions. Returns are typically processed within 5-7 business days after we receive your items."
        },
        {
          question: "Are return shipping costs covered?",
          answer: "We provide free return shipping for defective or incorrect items. For other returns, customers are responsible for return shipping costs unless otherwise specified."
        }
      ]
    },
    {
      title: "Products & Ingredients",
      questions: [
        {
          question: "Are your products cruelty-free?",
          answer: "Yes! All GlowGoddess products are cruelty-free and never tested on animals. We're committed to ethical beauty practices."
        },
        {
          question: "Do you use natural ingredients?",
          answer: "We prioritize natural, skin-loving ingredients in all our formulations. Our products are free from parabens, sulfates, and phthalates. Each product page lists full ingredients."
        },
        {
          question: "How do I choose the right products for my skin type?",
          answer: "Take our Skin Analysis Quiz on the homepage for personalized recommendations. You can also contact our beauty experts for free consultations to find your perfect routine."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 pb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Find quick answers to common questions about GlowGoddess
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-pink-200 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{category.title}</h2>
              
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const fullIndex = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems.has(fullIndex);

                  return (
                    <div key={itemIndex} className="border border-pink-100 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleItem(fullIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-pink-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-800">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-pink-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-pink-500" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 py-4 bg-pink-50 border-t border-pink-100">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
            <p className="mb-6 opacity-90">
              Can't find the answer you're looking for? Our beauty experts are here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
              >
                Contact Support
              </a>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;