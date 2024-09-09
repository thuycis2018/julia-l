import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/components/Avatar';
import { Button } from '@/app/ui/components/Button';
import { auth } from '../../../../../auth.config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/app/ui/components/DropdownMenu';
import { SignIn, SignOut } from './AuthComponent';

export default async function UserButton() {
  const session = await auth();

  if (!session?.user) return <SignIn />
  return (
    <div className="flex gap-2 items-center p-4 bg-green-900 border-green-700 text-white rounded">
      <span className="hidden text-sm sm:inline-flex ml-auto">
        <a className="pr-4" href="/"> Home </a> <a className="pr-4" href="/posts"> Notes </a> {session.user.email}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative w-8 h-8 rounded-full">
            <Avatar className="w-8 h-8">
              {session.user.image && (
                <AvatarImage
                  src={
                    session.user.image ??
                    "https://source.boringavatars.com/beam/120"
                  }
                  alt={session.user.name ?? ""}
                />
              )}
              <AvatarFallback>{session.user.email}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-gray-100" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user.name} | {session.user.email}
              </p>
              <SignOut />
            </div>
          </DropdownMenuLabel>          
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}