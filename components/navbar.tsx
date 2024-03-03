import { UserButton } from "@clerk/nextjs";

import { MobileSidebar } from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { useProModal } from "@/hooks/use-pro-modal";
import { checkSubscription } from "@/lib/subscription";

interface NavbarProps {
    apiLimitCount: number;
}

const Navbar = async () => {
    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription()

  return ( 
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
   );
}
 
export default Navbar;