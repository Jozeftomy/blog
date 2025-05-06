import React from "react";
import Card from "../compoments/Card";
import Subscription from "../compoments/Subscription";

const posts = [
  {
    image: "/images/laptop1.png",
    title: "Lorem ipsum dolor",
    date: "April 24, 2022",
    readTime: "5 min read",
    description:
      "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
  },
  {
    image: "/images/bulb2.png",
    title: "Lorem ipsum dolor",
    date: "April 03, 2022",
    readTime: "4 min read",
    description:
      "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
  },
  {
    image: "/images/book.png",
    title: "Lorem ipsum dolor",
    date: "March 12, 2022",
    readTime: "6 min read",
    description:
      "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
  },
  {
    image: "/images/laptop2.png",
    title: "Lorem ipsum dolor",
    date: "April 24, 2022",
    readTime: "5 min read",
    description:
      "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
  },
  {
    image: "/images/notebook.png",
    title: "Lorem ipsum dolor",
    date: "April 03, 2022",
    readTime: "4 min read",
    description:
      "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
  },
  {
    image: "/images/frame.png",
    title: "Lorem ipsum dolor",
    date: "March 12, 2022",
    readTime: "6 min read",
    description:
      "Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
  },
];

export default function PostsPage() {
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
  {posts.map((post, index) => (
    <Card key={index} {...post} />
  ))}
</div>


      <Subscription />
    </div>
  );
}
