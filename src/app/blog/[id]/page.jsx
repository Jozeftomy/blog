import React from 'react';
import Subscription from '../../compoments/Subscription';
import posts from '../../data/Post';

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
      <main className="w-full min-h-screen p-3 flex items-center justify-center px-10 2xl:w-[1500px]">
        <div className="w-full min-h-screen flex flex-col gap-8">
          <h1 className="text-[25px] text-center font-bold md:text-[37px]">
            Lorem ipsum dolor
          </h1>
          <p className="text-gray-300 text-[15px] text-center md:text-start md:text-[20px]">
            By Ixartz on {post.date}
          </p>
          <img
            src={post.image}
            alt="image"
            className="md:w-full h-fit sm:h-80 md:h-120 lg:h-170 2xl:h-180 object-center object-cover rounded-2xl"
          />
          <div className="flex flex-col gap-8 md:px-4">
            <h1 className="text-[20px] font-bold">Lorem ipsum dolor </h1>
            <p>
              Lorem ipsum dolor sit amet. Ut laudantium adipisci et animi dolorum
              et neque error aut maxime nesciunt. Vel recusandae ducimus At
              dolorem iste id magni quam id corrupti officiis At minus minus et
              quidem rerum! 33 nihil quas aut consequatur asperiores est sunt illo
              et sunt commodi.
            </p>
  
            <p>
              Non magni quisquam ex possimus ducimus id fuga dicta et obcaecati
              blanditiis sed quidem sint est molestiae ea quam corrupti. Nam
              itaque quae et ratione error vel possimus sunt! Qui cupiditate quae
              ut magnam veritatis vel nemo dolores id aspernatur deleniti sed
              itaque aut odio placeat.
            </p>
  
            <h1 className="text-[20px] font-bold">Lorem ipsum dolor sit amet </h1>
            <p>
              Eum aperiam facilis aut deleniti ipsa At aspernatur nisi quo
              corporis assumenda non dolores rerum ad velit porro rem nulla
              reprehenderit. Non repudiandae harum ut harum laudantium et
              veritatis eaque et nesciunt voluptas ad aliquam aliquam non nemo
              voluptas. Sit molestiae doloribus At nemo repudiandae et reiciendis
              autem cum culpa optio ex ipsum eius et accusantium omnis At neque
              quaerat.
            </p>
  
            <ul className="ml-6">
              <li className="list-disc">Non magni quisquam</li>
              <li className="list-disc">Eum aperiam facilis</li>
              <li className="list-disc">
                Id quibusdam corporis et voluptate minus
              </li>
              <li className="list-disc">Qui internos impedit vel unde</li>
            </ul>
  
            <h1 className="text-[20px] font-bold">Lorem ipsum dolor</h1>
  
            <p>
              Id quibusdam corporis et voluptate minus aut veniam quasi a magni
              incidunt in fuga distinctio et sunt autem et dolore dolor. Quo
              explicabo quidem aut esse suscipit ea inventore quia non nulla
              laborum non quia nemo est pariatur qui temporibus molestiae! Aut
              corporis distinctio ut aliquam eveniet et perferendis voluptate qui
              repellat quia. Est architecto assumenda cum ipsam architecto aut
              mollitia perferendis aut illum ullam ab praesentium animi.
            </p>
          </div>
  
          <div className="">
            <ul>
              <h1 className="text-[20px] font-bold">Further Readings</h1>
              <li className="underline">Lorem ipsum dolor </li>
              <li className="underline">Lorem ipsum dolor </li>
              <li className="underline">Lorem ipsum dolor </li>
            </ul>
          </div>
  
          <Subscription />
        </div>
      </main>
    );
  };

