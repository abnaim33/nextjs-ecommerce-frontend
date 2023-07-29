"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

// import  Button  from "@/components/ui/Button"

export function ThemeToggle() {
  const { setTheme,theme } = useTheme()
console.log(theme,'theme')
  return (
    <div>


{
  theme==="light"?

     <button  onClick={() => setTheme("dark")} className="border rounded-full p-2">
          <Sun className=" h-[1.2rem] w-[1.2rem] " />
       
      {/* <p className="text-white">Light</p> */}
        </button>:


        <button onClick={() => setTheme("light")} className="border rounded-full p-2">
    {/* <p className="text-whit">Dark</p> */}
          <Moon className=" h-[1.2rem] w-[1.2rem]" />
      
        </button>
}





    {/* <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> */}
    </div>
  );
};
