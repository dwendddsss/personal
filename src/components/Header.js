'use client';

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Github, Linkedin, Phone, Sun, Moon } from "lucide-react"; // ✅ Tambahkan Sun & Moon di sini
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Avatar */}
      <div className="fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-md p-2 rounded-full shadow-md">
        <Avatar className="w-16 h-16 p-1 shadow-lg overflow-hidden aspect-square">
          <AvatarImage
            src="/dewiava.jpeg"
            alt="Dewi Endang"
            className="object-cover w-full h-full rounded-full"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <AvatarFallback>DE</AvatarFallback>
        </Avatar>
      </div>

      {/* Right Section */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
        <a
          href="mailto:dewiendng13@gmail.com"
          className="hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
        <a
          href="https://wa.me/6281358787484"
          target="_blank"
          className="hover:text-primary transition-colors"
          aria-label="Phone"
        >
          <Phone size={18} />
        </a>
        <a
          href="https://linkedin.com/in/dewiendangsn"
          target="_blank"
          className="hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://github.com/dwendddsss"
          target="_blank"
          className="hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>

        {/* Switch Dark Mode */}
        <div className="flex items-center gap-2">
          <Sun className="h-3.5 w-3.5 text-foreground/60" />
          <Switch
            checked={theme === "dark"}
            onCheckedChange={toggleDarkMode}
            aria-label="Toggle dark mode"
          />
          <Moon className="h-3.5 w-3.5 text-foreground/60" />
        </div>
      </div>
    </>
  );
}