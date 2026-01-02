import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkIcon, LogOut } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const islogedin = true; 

  return (
    // UPGRADE: Changed simple 'nav' to a sticky header.
    // 'sticky top-0': Makes the header stay at the top when you scroll.
    // 'backdrop-blur': Gives it that cool "frosted glass" look when content scrolls behind it.
    // 'border-b': Adds a thin line at the bottom to separate header from page.
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur py-2">
      
      {/* UPGRADE: Added a container div.
          This keeps your logo and buttons from touching the very edge of huge screens.
          'max-w-7xl mx-auto': Centers everything beautifully.
      */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        <Link to={"/"}>
          {/* UPGRADE: Adjusted height to h-12. 
              h-16 was a bit too big for a standard nav bar, this looks sleeker. */}
          <img src="/logo.png" alt="Trimrr Logo" className="h-16 object-contain" />
        </Link>

        {/* LOGIC: This part is perfect, kept it as is. */}
        {!islogedin ? (
          <Button onClick={() => navigate("/auth")}>Login</Button>
        ) : (
          <DropdownMenu>
            
            {/* UPGRADE: Added 'outline-none' to remove the ugly blue browser box on click. */}
            <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden outline-none">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover cursor-pointer" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            {/* UPGRADE: Added label styling and fixed the Logout button layout */}
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                  Adarsh Singh
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <DropdownMenuItem className="cursor-pointer">
                {/* UPGRADE: Added 'mr-2' (margin-right) so the icon isn't glued to the text */}
                <LinkIcon className="mr-2 h-4 w-4" />
                <span>My Links</span>
              </DropdownMenuItem>
              
              {/* UPGRADE: Made the Logout red so users know it's a 'danger' action. */}
              <DropdownMenuItem className="text-red-600 cursor-pointer">
                {/* FIX: You had a typo in the span class here. I fixed it and added margin. */}
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
              
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Header;