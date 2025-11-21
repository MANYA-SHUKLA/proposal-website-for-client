import Header from '../components/Header';
import FloatingHearts from '../components/FloatingHearts';
import Link from 'next/link';
import { Memory } from '../types';
import './memories.css';

const memories: Memory[] = [
  {
    id: 1,
    title: "First Meeting",
    description: "The day our eyes met for the first time, and my world changed forever. That moment is etched in my memory like a beautiful dream.",
    image: "https://images.summitmedia-digital.com/cosmo/images/2017/01/30/how-we-met.jpg",
    date: "That Special Day"
  },
  {
    id: 2,
    title: "Our First Conversation",
    description: "When we first spoke, your voice felt like music to my ears. Every word you said made my heart beat faster.",
    image: "https://www.brides.com/thmb/pHoP9OnCFYOATAYXLuevo3KT7jk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/01-First-Date-Conversation-Getty-Images-83859192651144a5934416fd7af389a9.jpg",
    date: "Unforgettable Moment"
  },
  {
    id: 3,
    title: "The Smile That Stole My Heart",
    description: "Your smile lights up my world even in your absence. I find myself thinking about it every single day.",
    image: "https://i.pinimg.com/736x/f4/4b/2c/f44b2c1a4e586f095e5e21bb62275f59.jpg",
    date: "Heart Melting"
  },
  {
    id: 4,
    title: "Dreaming of You",
    description: "Though we've met less, you're in my thoughts constantly. Every dream feels incomplete without you.",
    image: "https://www.authorlove.com/wp-content/uploads/2015/10/girl-boy-couple-smile-love-photo-wallpaper-53d072b570b56.jpg",
    date: "Always Thinking"
  },
  {
    id: 5,
    title: "Future Dreams",
    description: "I imagine a future where we create countless memories together, where every day is as special as our first meeting.",
image: "https://plus.unsplash.com/premium_photo-1674438115703-b1067c6da9f8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlJTIwc21pbGV8ZW58MHx8MHx8fDA%3D",    date: "Our Future"
  },
  {
    id: 6,
    title: "You Complete Me",
    description: "In the brief moments we've shared, I've found what I've been searching for my entire life. You make everything better.",
    image: "https://w0.peakpx.com/wallpaper/871/1/HD-wallpaper-clannad-pretty-furukawa-tomoya-okazaki-adorable-furukawa-nagisa-sweet-okazaki-nice-anime-tomoya-anime-girl-couple-female-male-lovely-nagisa-furukawa-smile-anime-couple-smiling-okazaki-thumbnail.jpg",
    date: "My Missing Piece"
  }
];

export default function Memories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 relative overflow-hidden">
      <Header />
      <FloatingHearts />
      
<main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-purple-700 mb-6 gradient-text">
              Our Memories
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Though few, every moment with you has been precious. These memories keep me going until we meet again.
            </p>
          </div>

          {/* Memories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {memories.map((memory, index) => (
              <div
                key={memory.id}
                className="memory-card group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-memory-appear"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="image-shimmer relative h-64 overflow-hidden">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300 shadow-lg">
                    {memory.date}
                  </div>

                  {/* Heart Icon */}
                  <div className="absolute top-4 left-4 text-2xl opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    ❤️
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                    {memory.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {memory.description}
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-500" />
                </div>

                {/* Floating Heart on Hover */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 pointer-events-none">
                  ❤️
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold text-purple-700 mb-4">
                More Memories to Create
              </h2>
              <p className="text-gray-600 mb-6">
                This is just the beginning of our beautiful journey. I hope we can create countless more memories together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/proposal" 
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl shadow-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Continue to Proposal</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
                <Link 
                  href="/" 
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 relative overflow-hidden group"
                >
                  <span className="relative z-10">Back to Home</span>
                  <div className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Background Decorations */}
      <div className="absolute top-20 left-5 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 right-8 w-24 h-24 bg-purple-300 rounded-full opacity-30 animate-bounce delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-red-300 rounded-full opacity-25 animate-ping"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-200 rounded-full opacity-40 animate-pulse delay-500"></div>
    </div>
  );
}