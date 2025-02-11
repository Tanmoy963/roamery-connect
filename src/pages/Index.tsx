
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#222222]">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        {/* Featured Destinations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Popular Destinations</h2>
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
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Community Highlights</h2>
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
      </main>
    </div>
  );
};

const featuredDestinations = [
  {
    title: "Bali Paradise",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
  },
  {
    title: "Swiss Alps",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
  },
  {
    title: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
];

const communityPosts = [
  {
    author: "Sarah Thompson",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "Just completed an amazing trek through the Himalayas! The views were absolutely breathtaking. Would love to connect with fellow trekkers!",
    likes: 234,
    date: "2h ago",
  },
  {
    author: "Michael Chen",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "Found this hidden gem in Tokyo! A small ramen shop that will blow your mind. Drop me a message if you want the location!",
    likes: 187,
    date: "5h ago",
  },
];

export default Index;
