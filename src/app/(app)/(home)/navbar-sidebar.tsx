import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"

  import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";
import { Button } from "@/components/ui/button";


interface NavbarItem {   
    href : string;
    children : React.ReactNode;
}

interface Props {
    items : NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({
    items,
    open,
    onOpenChange,
} : Props
) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="p-0 tracking-none">
            <SheetHeader className="p-4 border-b ">
              
                    <SheetTitle>
                        Menu
                    </SheetTitle>
                
            </SheetHeader>
            <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                {
                  items.map((item)=> (
                    <Link key={item.href} href={item.href}
                    className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                    onClick={()=> onOpenChange(false)}
                    >
                    {item.children}
                    </Link>
                  ))  
                }
                <div className="border-t ">
                    
                        <Link href="/log-in" className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"  >Log in</Link>
                   
                    
                    <Link href="/sign-up" className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">Start Selling</Link>
                </div>
            </ScrollArea>
            </SheetContent>

        </Sheet>
    )
}