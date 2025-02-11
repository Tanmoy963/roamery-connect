
import { Menu, Search, User, MapPin, Book, Gift } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">Roamery</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink icon={MapPin} text="Explore" />
            <NavLink icon={Book} text="Articles" />
            <NavLink icon={Gift} text="Deals" />
            <Button className="bg-primary hover:bg-primary/90">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <a
    href="#"
    className="flex items-center text-gray-300 hover:text-white transition-colors"
  >
    <Icon className="h-4 w-4 mr-2" />
    <span>{text}</span>
  </a>
);
