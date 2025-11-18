import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Avatar di kiri atas */}
      <div className="fixed top-4 left-4 z-50 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md">
        <Avatar className="w-14 h-14">
          <AvatarFallback>DE</AvatarFallback>
        </Avatar>
      </div>

      {/* Ikon kontak di kanan atas */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
        <a
          href="mailto:dewiendng13@gmail.com"
          className="hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://wa.me/6281358787484"
          target="_blank"
          className="hover:text-primary transition-colors"
          aria-label="Phone"
        >
          <Phone size={20} />
        </a>
        <a
          href="https://linkedin.com/in/dewiendangsn"
          target="_blank"
          className="hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/dewiendangsn"
          target="_blank"
          className="hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
      </div>
    </>
  );
}
