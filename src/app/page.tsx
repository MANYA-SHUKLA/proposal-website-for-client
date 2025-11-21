import Header from './components/Header';
import FloatingHearts from './components/FloatingHearts';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 relative overflow-hidden">
      <Header />
      <FloatingHearts />
      
     <main className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          {/* Main Hero Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold text-pink-600 mb-6 animate-heartbeat">
                K ❤️ Z
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
                Every moment apart feels like eternity...
              </p>
              <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Though we&apos;ve met only a few times, each moment with you has been etched in my heart forever. 
                This is my way of saying what words cannot fully express.
              </p>
            </div>
          </div>

          {/* Journey Begins Section */}
          <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-pink-100 mb-12 transform hover:scale-105 transition-transform duration-500">
            <h2 className="text-3xl font-bold text-pink-700 mb-6">Our Brief But Beautiful Journey</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center p-4 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                <div className="text-4xl mb-3">👁️</div>
                <h3 className="font-semibold text-pink-600 mb-2">First Glance</h3>
                <p className="text-sm text-gray-600">That moment when our eyes first met</p>
              </div>
              <div className="text-center p-4 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-semibold text-pink-600 mb-2">First Words</h3>
                <p className="text-sm text-gray-600">Conversations that touched my soul</p>
              </div>
              <div className="text-center p-4 hover:bg-pink-50 rounded-lg transition-colors duration-300">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-semibold text-pink-600 mb-2">Last Meeting</h3>
                <p className="text-sm text-gray-600">A memory I cherish every day</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Will you continue this journey with me?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/memories" 
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg"
              >
                Relive Our Memories
              </Link>
              <Link 
                href="/proposal" 
                className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110"
              >
                See My Proposal
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-red-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-300 rounded-full opacity-25 animate-ping"></div>
    </div>
  );
}