import { notFound } from 'next/navigation'
import Post from '@/app/ui/components/posts/Post';
import UserButton from '@/app/ui/components/login/UserButton';
import {getPosts} from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const posts = await getPosts();
  const post = posts?.find((post) => post.id === params.id);
  if(!post) notFound();
  return (
    <>
      <UserButton />      
      <div className="flex flex-col items-center p-4">
        <h1 className="text-3xl">{post && post.title}</h1>
      </div>
      {post && <Post id={''} title={''} content={''} date={''} {...post} />}
    </>)
}