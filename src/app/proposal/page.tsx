'use client';

import Header from '../components/Header';
import FloatingHearts from '../components/FloatingHearts';
import Link from 'next/link';
import { useState } from 'react';
import './proposal.css';

export default function Proposal() {
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showRing, setShowRing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNoHover = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoPosition({ x, y });
  };

  const handleYesClick = () => {
    setIsYesClicked(true);
    setShowRing(true);
    setShowConfetti(true);
    
    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 relative overflow-hidden">
      <Header />
      <FloatingHearts />
      
      {/* Confetti Effect */}
      {showConfetti && <Confetti />}
      
      <main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Romantic Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-rose-700 mb-6 proposal-title">
              Will You Marry Me?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Zoya, from the moment I met you, I knew my search was over. 
              Though we&apos;ve had little time together, my heart knows what it wants.
            </p>
          </div>

          {/* Love Story Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Romantic Image */}
              <div className="relative">
                <div className="love-story-card rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                  <img
                    src="https://nelson-jewelers.b-cdn.net/wp-content/uploads/2023/11/10-Unforgettable-Marriage-Proposal-Ideas-for-the-Hopeless-Romantic.jpg.webp"
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-lg font-light italic">
                        &quot;In your eyes, I found my home. In your heart, I found my love.&quot;
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-rose-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
              </div>

              {/* Love Letter */}
              <div className="love-letter bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-rose-100">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">💌</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-rose-700">My Dearest Zoya</h2>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I know we haven&apos;t spent much time together, but sometimes the heart knows what it wants 
                    without needing countless days and nights. Our brief moments have been more meaningful 
                    than years with anyone else.
                  </p>
                  
                  <p>
                    Your smile, your voice, your presence - everything about you feels like home to me. 
                    I find myself thinking about you constantly, imagining a future where we wake up 
                    next to each other every morning.
                  </p>
                  
                  <p>
                    I don&apos;t want to wait for the &quot;right time&quot; because with you, every moment is right. 
                    I want to build a lifetime of memories with you, to grow old with you, to love you 
                    more with each passing day.
                  </p>
                  
                  <p className="text-rose-600 font-semibold italic">
                    So I ask you with all my heart...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Proposal Section */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Ring Animation */}
            {showRing && (
              <div className="ring-reveal mb-8">
                <div className="flex justify-center">
                  <div className="diamond-ring transform scale-150">
                    💍
                  </div>
                </div>
                <p className="text-2xl text-rose-600 font-bold mt-4 animate-pulse">
                  Forever Starts Now!
                </p>
              </div>
            )}

            {/* Proposal Question */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200 mb-8 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl md:text-4xl font-bold text-rose-700 mb-8">
                Zoya, will you make me the happiest man in the world?
              </h2>
              
              {!isYesClicked ? (
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  {/* Yes Button */}
                  <button
                    onClick={handleYesClick}
                    className="yes-button bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10">YES! 💖</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>

                  {/* No Button */}
                  <button
                    onMouseEnter={handleNoHover}
                    onTouchStart={handleNoHover}
                    className="no-button bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 relative overflow-hidden group"
                    style={{
                      transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <span className="relative z-10">No 😢</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                </div>
              ) : (
                /* Success Message */
                <div className="success-message animate-heartbeat">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
                    She Said YES! 💕
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    This is the beginning of our forever! I can&apos;t wait to spend the rest of my life with you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/message" 
                      className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110"
                    >
                      Read My Final Message
                    </Link>
                    <Link 
                      href="/memories" 
                      className="border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110"
                    >
                      Relive Our Memories
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Romantic Promise */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">My Promise to You</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="promise-item p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl mb-2">💕</div>
                  <p className="font-semibold">Unconditional Love</p>
                </div>
                <div className="promise-item p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl mb-2">🤝</div>
                  <p className="font-semibold">Loyal Partnership</p>
                </div>
                <div className="promise-item p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl mb-2">🌟</div>
                  <p className="font-semibold">Beautiful Future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Background Decorations */}
      <div className="absolute top-10 left-5 w-12 h-12 bg-rose-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-300 rounded-full opacity-40 animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-8 h-8 bg-red-300 rounded-full opacity-50 animate-ping"></div>
    </div>
  );
}

// Confetti Component
const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            background: ['#ec4899', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][i % 5],
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
};