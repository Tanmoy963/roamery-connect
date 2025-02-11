
import { Navbar } from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, User, Image as ImageIcon, MessageSquare, Heart, Share2 } from "lucide-react";
import { useState } from "react";

const Explore = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-[#222222]">
      <Navbar />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Navigation */}
          <div className="col-span-3 hidden lg:block">
            <Card className="glass-card p-4 sticky top-20">
              <nav className="space-y-2">
                <NavItem
                  icon={Home}
                  text="Home Feed"
                  active={activeTab === "home"}
                  onClick={() => setActiveTab("home")}
                />
                <NavItem
                  icon={User}
                  text="My Profile"
                  active={activeTab === "profile"}
                  onClick={() => setActiveTab("profile")}
                />
                <NavItem
                  icon={ImageIcon}
                  text="My Photos"
                  active={activeTab === "photos"}
                  onClick={() => setActiveTab("photos")}
                />
                <NavItem
                  icon={MessageSquare}
                  text="Travel Groups"
                  active={activeTab === "groups"}
                  onClick={() => setActiveTab("groups")}
                />
              </nav>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            {/* Create Post */}
            <Card className="glass-card p-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <input
                  type="text"
                  placeholder="Share your travel story..."
                  className="flex-1 bg-white/10 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Photo
                </Button>
              </div>
            </Card>

            {/* Feed Posts */}
            {posts.map((post, index) => (
              <Card key={index} className="glass-card p-4 animate-fade-up">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={post.authorAvatar} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-white">{post.author}</h3>
                    <p className="text-sm text-gray-400">{post.location}</p>
                  </div>
                </div>

                <p className="text-gray-200 mb-4">{post.content}</p>

                {post.image && (
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt="Travel moment"
                      className="w-full h-[300px] object-cover hover-scale"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between text-gray-400">
                  <Button variant="ghost" className="hover:text-primary">
                    <Heart className="h-4 w-4 mr-2" />
                    {post.likes} Likes
                  </Button>
                  <Button variant="ghost" className="hover:text-primary">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {post.comments} Comments
                  </Button>
                  <Button variant="ghost" className="hover:text-primary">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Right Sidebar - Trending */}
          <div className="col-span-3 hidden lg:block">
            <Card className="glass-card p-4 sticky top-20">
              <h3 className="text-lg font-semibold text-white mb-4">Trending Destinations</h3>
              {trendingDestinations.map((destination, index) => (
                <div key={index} className="flex items-center space-x-3 mb-4">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="text-white font-medium">{destination.name}</h4>
                    <p className="text-sm text-gray-400">{destination.posts} posts</p>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon: Icon, text, active, onClick }: { icon: any; text: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
      active ? "bg-primary text-white" : "text-gray-300 hover:bg-white/10"
    }`}
  >
    <Icon className="h-5 w-5" />
    <span>{text}</span>
  </button>
);

const posts = [
  {
    author: "Jessica Parker",
    authorAvatar: "https://i.pravatar.cc/150?img=5",
    location: "Machu Picchu, Peru",
    content: "Finally made it to this ancient wonder! The energy here is absolutely incredible. If anyone's planning a trip to Peru, I'd be happy to share some tips! 🏔️✨",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    likes: 324,
    comments: 56,
  },
  {
    author: "Alex Thompson",
    authorAvatar: "https://i.pravatar.cc/150?img=8",
    location: "Kyoto, Japan",
    content: "Cherry blossom season in Kyoto is pure magic! Every corner of this city tells a story. Would love to connect with other Japan enthusiasts! 🌸",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    likes: 445,
    comments: 78,
  },
];

const trendingDestinations = [
  {
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    posts: 2345,
  },
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    posts: 1890,
  },
  {
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    posts: 1654,
  },
];

export default Explore;
