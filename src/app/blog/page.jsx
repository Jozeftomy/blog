'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Card from "../compoments/Card"; 
import Subscription from "../compoments/Subscription";
import posts from '../data/Post'; 

export default function BlogPage() {
  const router = useRouter();

  const handlePostClick = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="w-full min-h-screen px-4 py-8 flex flex-col gap-8 md:px-8 lg:px-16 xl:px-24">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white">
          Posts Examples
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card
            key={post.id}
            {...post}
            onClick={() => handlePostClick(post.id)}
          />
        ))}
      </div>

      <Subscription />
    </div>
  );
}
