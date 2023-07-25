import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

const NavBar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl nh-full mx-auto flex items-center justify-between gap-2">
        {/* LOGO */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Breadit
          </p>
        </Link>
        {/* TODO: Search bar */}
        {session ? (
          <p>{`you're logged in`}</p>
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;