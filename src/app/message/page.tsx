'use client';

import Header from '../components/Header';
import FloatingHearts from '../components/FloatingHearts';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './message.css';

export default function Message() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullMessage = `My Dearest Zoya,

This website is a small token of my feelings for you. Though we've met only a few times, you've occupied my thoughts completely. 

Every moment without you feels incomplete, and every dream features you. I believe some connections are destined, and ours is one of them.

I promise to cherish you, respect you, and love you more with each passing day. You're the missing piece I've been searching for.

With all my love,
Kundan 💖`;

  useEffect(() => {
    if (currentPage === 4 && isTyping) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullMessage.length) {
          setTypedText(fullMessage.slice(0, i + 1));
          i++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          setTimeout(() => setShowFinalMessage(true), 1000);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [currentPage, isTyping, fullMessage]);

  const nextPage = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (currentPage === 4) {
        setShowFinalMessage(false);
        setIsTyping(true);
        setTypedText('');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <Header />
      <FloatingHearts />
      
      <main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-purple-700 mb-6 message-title">
              My Final Message
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A journey through my feelings for you
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4].map((page) => (
                <div key={page} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all duration-500 ${
                      currentPage >= page
                        ? 'bg-purple-600 scale-110'
                        : 'bg-gray-300'
                    }`}
                  >
                    {page}
                  </div>
                  <span className="text-sm mt-2 text-gray-600">
                    {['Beginning', 'Feelings', 'Promise', 'Forever'][page - 1]}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${(currentPage - 1) * 33.33}%` }}
              ></div>
            </div>
          </div>

          {/* Message Content */}
          <div className="max-w-4xl mx-auto">
            {/* Page 1: Beginning */}
            {currentPage === 1 && (
              <div className="message-page animate-page-in">
                <div className="love-story bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100">
                  <div className="text-center mb-8">
                    <div className="text-5xl mb-4">✨</div>
                    <h2 className="text-3xl font-bold text-purple-700 mb-4">The Beginning</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-2xl">👁️</div>
                        <div>
                          <h3 className="font-bold text-purple-600 mb-2">First Glance</h3>
                          <p className="text-gray-700 leading-relaxed">
                            The moment I first saw you, something inside me shifted. 
                            Your presence felt familiar, like we were meant to find each other.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="text-2xl">💬</div>
                        <div>
                          <h3 className="font-bold text-purple-600 mb-2">First Words</h3>
                          <p className="text-gray-700 leading-relaxed">
                            Our first conversation felt natural and easy. 
                            I knew then that you were someone special.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="text-2xl">🌟</div>
                        <div>
                          <h3 className="font-bold text-purple-600 mb-2">The Connection</h3>
                          <p className="text-gray-700 leading-relaxed">
                            Despite our limited time together, I felt a connection 
                            that goes beyond words or time spent.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="story-image rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-700">
                        <img
                          src="https://m.media-amazon.com/images/I/81OXEQrFPTL._AC_UF1000,1000_QL80_.jpg"
                          alt="Romantic beginning"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Page 2: Feelings */}
            {currentPage === 2 && (
              <div className="message-page animate-page-in">
                <div className="feelings-section bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-100">
                  <div className="text-center mb-8">
                    <div className="text-5xl mb-4">💖</div>
                    <h2 className="text-3xl font-bold text-pink-700 mb-4">My Feelings</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="feeling-card text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border border-pink-200 transform hover:scale-105 transition-all duration-300">
                      <div className="text-4xl mb-4">🤔</div>
                      <h3 className="font-bold text-pink-600 mb-2">Constant Thoughts</h3>
                      <p className="text-gray-700 text-sm">
                        You're always on my mind, in my thoughts, in my dreams.
                      </p>
                    </div>
                    
                    <div className="feeling-card text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-200 transform hover:scale-105 transition-all duration-300">
                      <div className="text-4xl mb-4">😊</div>
                      <h3 className="font-bold text-purple-600 mb-2">Pure Happiness</h3>
                      <p className="text-gray-700 text-sm">
                        Just thinking about you brings a smile to my face.
                      </p>
                    </div>
                    
                    <div className="feeling-card text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 transform hover:scale-105 transition-all duration-300">
                      <div className="text-4xl mb-4">💕</div>
                      <h3 className="font-bold text-blue-600 mb-2">Growing Love</h3>
                      <p className="text-gray-700 text-sm">
                        My feelings for you grow stronger with each passing day.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl p-6 text-center">
                    <p className="text-lg font-light italic">
                      &quot;You may not be perfect, but you're perfect for me. 
                      Every flaw, every quality - they all make you the person I want to spend my life with.&quot;
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Page 3: Promise */}
            {currentPage === 3 && (
              <div className="message-page animate-page-in">
                <div className="promise-section bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100">
                  <div className="text-center mb-8">
                    <div className="text-5xl mb-4">🤝</div>
                    <h2 className="text-3xl font-bold text-blue-700 mb-4">My Promise</h2>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="promise-item bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200 transform hover:scale-105 transition-all duration-300">
                        <h3 className="font-bold text-blue-600 mb-3 text-xl">💝 Unconditional Love</h3>
                        <p className="text-gray-700">
                          I promise to love you through good times and bad, to be your constant support, 
                          and to always see the amazing person you are.
                        </p>
                      </div>
                      
                      <div className="promise-item bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 transform hover:scale-105 transition-all duration-300">
                        <h3 className="font-bold text-green-600 mb-3 text-xl">🛡️ Protection & Care</h3>
                        <p className="text-gray-700">
                          I will always protect you, care for you, and ensure you feel safe and cherished in our relationship.
                        </p>
                      </div>
                      
                      <div className="promise-item bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200 transform hover:scale-105 transition-all duration-300">
                        <h3 className="font-bold text-purple-600 mb-3 text-xl">🌟 Growth Together</h3>
                        <p className="text-gray-700">
                          I promise to grow with you, to learn with you, and to build a beautiful future together.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="promise-image rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src="https://static-assets-prod.fnp.com/images/pr/m/v20250930165110/revival-colour-roses-in-glass-vase.jpg"
                          alt="Promise of love"
                          className="w-full h-96 object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Page 4: Forever */}
            {currentPage === 4 && (
              <div className="message-page animate-page-in">
                <div className="final-message bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-100">
                  <div className="text-center mb-8">
                    <div className="text-5xl mb-4">💌</div>
                    <h2 className="text-3xl font-bold text-rose-700 mb-4">My Final Words</h2>
                  </div>
                  
                  <div className="max-w-2xl mx-auto">
                    <div className="typing-container bg-rose-50 rounded-2xl p-8 border-2 border-rose-200 min-h-64">
                      <div className="typing-text font-mono text-gray-800 whitespace-pre-wrap leading-relaxed">
                        {typedText}
                        {isTyping && <span className="typing-cursor">|</span>}
                      </div>
                    </div>
                    
                    {showFinalMessage && (
                      <div className="final-surprise mt-8 text-center animate-heartbeat">
                        <div className="text-4xl mb-4">🎉💕🎊</div>
                        <p className="text-xl text-rose-600 font-bold mb-6">
                          Thank you for being you, Zoya. I can't wait to start our forever together!
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Link 
                            href="/" 
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                          >
                            Start Again 💖
                          </Link>
                          <Link 
                            href="/proposal" 
                            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-110"
                          >
                            Relive Proposal 💍
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  currentPage === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-600 hover:bg-gray-700 text-white transform hover:scale-105'
                }`}
              >
                ← Previous
              </button>
              
              {currentPage < 4 ? (
                <button
                  onClick={nextPage}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Continue →
                </button>
              ) : (
                !showFinalMessage && (
                  <div className="text-gray-500 italic">
                    Typing your special message...
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-12 h-12 bg-pink-300 rounded-full opacity-40 animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-blue-300 rounded-full opacity-50 animate-ping"></div>
    </div>
  );
}