import Link from 'next/link';
import { Button } from '@/app/ui/components/Button';
import Post from '@/app/ui/components/posts/Post';
import { connectToDB, getPosts } from '@/app/lib/data';
import UserButton from '@/app/ui/components/login/UserButton';
import { auth } from '../../../auth.config';

export default async function Page() {
  const client = await connectToDB();
  const posts = await getPosts();
  const session = await auth();
  return (
    <>
      <UserButton />      
      <div className="flex flex-col items-center p-4">
        <h1 className="text-3xl">MY NOTES</h1>
        {session?.user && (
          <Link href="/post/insert">
            <Button className="bg-green-900 text-white outline outline-1 border-green-700 hover:bg-green-700 hover:text-white my-5 py-2 px-4 rounded">
              Add Notes
            </Button>
          </Link>
        )}
      </div>

     {posts?.map((post) => <Post id={''} title={''} content={''} date={''} key={post.id} {...post} />)}
    </>)
}