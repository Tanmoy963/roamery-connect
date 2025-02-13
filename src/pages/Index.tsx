
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Globe2, Mountain, Camera } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [statCount, setStatCount] = useState({
    travelers: 15482,
    destinations: 234,
    trips: 45921
  });

  return (
    <div className="min-h-screen bg-[#222222]">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4">
        {/* Stats Section */}
        <section className="py-20 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCard
              icon={Users}
              count={statCount.travelers}
              label="Active Travelers"
            />
            <StatsCard
              icon={Globe2}
              count={statCount.destinations}
              label="Indian Destinations"
            />
            <StatsCard
              icon={Mountain}
              count={statCount.trips}
              label="Trips Planned"
            />
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-white">Popular Indian Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDestinations.map((destination, index) => (
              <Card key={index} className="glass-card hover-scale overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">{destination.title}</h3>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{destination.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Highlights */}
        <section className="py-20 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-8 text-white">Indian Travel Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityPosts.map((post, index) => (
              <Card key={index} className="glass-card p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{post.author}</h3>
                    <p className="text-gray-300 mt-2">{post.content}</p>
                    <div className="flex items-center mt-4 text-gray-400 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{post.likes} likes</span>
                      <Calendar className="h-4 w-4 ml-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To connect Indian travelers with authentic experiences, fostering a community
                that celebrates the diverse cultural heritage and natural beauty of India.
                We aim to make travel planning seamless while promoting responsible tourism.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become India's leading platform for travel enthusiasts, where every journey
                tells a story and every traveler finds their perfect destination. We envision
                a connected community of explorers sharing their unique perspectives of India.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const StatsCard = ({ icon: Icon, count, label }: { icon: any; count: number; label: string }) => (
  <Card className="glass-card p-6 text-center">
    <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
    <h3 className="text-3xl font-bold text-white mb-2">{count.toLocaleString()}</h3>
    <p className="text-gray-400">{label}</p>
  </Card>
);

const featuredDestinations = [
  {
    title: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
  },
  {
    title: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
  },
  {
    title: "Jaipur Palace",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
  },
];

const communityPosts = [
  {
    author: "Priya Sharma",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "Just returned from an incredible spiritual journey in Rishikesh! The Ganges at sunset is a sight I'll never forget. Would love to connect with fellow yoga enthusiasts! 🧘‍♀️✨",
    likes: 234,
    date: "2h ago",
  },
  {
    author: "Rahul Kumar",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "Exploring the spice markets of Old Delhi! The colors, aromas, and flavors are absolutely mesmerizing. DM me if you want my food trail map! 🌶️🇮🇳",
    likes: 187,
    date: "5h ago",
  },
];

export default Index;
