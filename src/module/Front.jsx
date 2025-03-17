import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bike from '../assets/motor bg.png';

const Front = () => {
  const navigate = useNavigate(); // Navigation hook

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-pink-200">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center p-6 text-white">
        <div className="text-xl font-semibold">RRJ MOTORSHOP</div>
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-gray-300">HOME</li>
          <li className="hover:text-gray-300">PRODUCTS</li>
          <li className="hover:text-gray-300">ABOUT</li>
          <li className="hover:text-gray-300">CONTACT</li>
        </ul>
        {/* Updated LOGIN button to navigate to AdminPage */}
        <button onClick={() => navigate('/admin')} className="text-red-500 font-semibold">
          LOGIN
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row justify-center items-center p-10 h-[80vh]">
        <div className="absolute inset-0 md:w-3/5 bg-gradient-to-r from-red-600 to-transparent rounded-tr-full"></div>
        <img 
          src={bike}
          alt="Motorbike" 
          className="relative z-10 w-full md:w-2/3 drop-shadow-xl md:ml-80" 
        />
        <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 text-white text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">RRJ MOTORSHOP</h1>
          <div className="flex justify-center md:justify-start items-center space-x-1 mt-3">
            {[...Array(4)].map((_, index) => (
              <Star key={index} className="text-yellow-400" fill="yellow" />
            ))}
            <Star className="text-yellow-400" />
            <span className="ml-2 text-sm">4.6/5</span>
            <span className="ml-2 text-sm">19 votes</span>
          </div>
          <p className="mt-4">The best to start and renew</p>
          <button
            onClick={() => navigate('/book')} // Navigate to BookingPage
            className="bg-red-400 text-white font-semibold my-4 py-3 px-6 rounded-full shadow-xl hover:bg-red-500 hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Front;
