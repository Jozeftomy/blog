import React from 'react';
import Subscription from '../../compoments/Subscription';
import posts from '../../data/Post';

// If you're using static generation (recommended)
export async function generateStaticParams() {
  return posts.map(post => ({
    id: post.id.toString()
  }));
}

export default async function Blogpage({ params }) {
  const { id } = params;
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <main className="w-full min-h-screen flex items-center justify-center">
        <h1>Post not found</h1>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen p-3 flex items-center justify-center px-10 max-w-[1500px] ">
      <div className="w-full min-h-screen flex flex-col gap-8">
        <h1 className="text-[25px] text-center font-bold md:text-[37px]">
          {post.title}
        </h1>
        <p className="text-gray-300 text-[15px] text-center md:text-start md:text-[20px]">
          By Ixartz on {post.date}
        </p>
        <img
          src={post.image}
          alt="image"
          className="max-w-[900px] w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-center object-cover rounded-2xl mx-auto"
        />
        <div className="flex flex-col gap-8 md:px-4">
          <h2 className="text-[20px] font-bold">Lorem ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet. Ut laudantium adipisci et animi dolorum
            et neque error aut maxime nesciunt...
          </p>
          <p>
            Non magni quisquam ex possimus ducimus id fuga dicta et obcaecati...
          </p>

          <h2 className="text-[20px] font-bold">Lorem ipsum dolor sit amet</h2>
          <p>
            Eum aperiam facilis aut deleniti ipsa At aspernatur nisi quo corporis...
          </p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Non magni quisquam</li>
            <li>Eum aperiam facilis</li>
            <li>Id quibusdam corporis et voluptate minus</li>
            <li>Qui internos impedit vel unde</li>
          </ul>

          <h2 className="text-[20px] font-bold">Lorem ipsum dolor</h2>
          <p>
            Id quibusdam corporis et voluptate minus aut veniam quasi a magni...
          </p>
        </div>

        <section>
          <h2 className="text-[20px] font-bold mb-2">Further Readings</h2>
          <ul className="list-disc ml-6 space-y-1 underline">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </section>

        <Subscription />
      </div>
    </main>
  );
}
