
import { Search } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Connect with fellow travelers, share experiences, and plan your perfect journey
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full md:w-96 px-10 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8">
              Explore
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
