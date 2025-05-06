import Intro from "./compoments/Intro";
import Projects from "./compoments/Projects";
import PostCard from "./compoments/Card";
import Subscription from "./compoments/Subscription"; // <-- Import Subscription

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
];

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col p-4 gap-5 2xl:w-[1386px]">
      <Intro />
      
      <h1 className="text-[24px] font-bold w-full md:px-10 lg:px-14">
        React <span className="text-[#22D3EE]">Projects</span>
      </h1>
      <Projects />

      <div className="w-full flex justify-between items-center mt-8 md:px-10 lg:px-14">
        <h1 className="text-[24px] font-bold">
          Latest <span className="text-[#22D3EE]">Posts</span>
        </h1>
        <div className="flex gap-1 items-center text-white cursor-pointer ">
          <p>View All Posts</p>
          <i className="material-icons">arrow_circle_right</i>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid gap-6 mt-4 md:px-10 lg:px-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>

      {/* Subscription Section */}
      <Subscription />
    </div>
  );
}
