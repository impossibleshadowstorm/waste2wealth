import Image from "next/image";
import React from "react";

const Abc = () => {
  return (
    <section class="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0">
      <section class="grid lg:grid-cols-4 2xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-10 antialiased">
        {/* <article class="flex flex-col shadow-xl mx-auto max-w-sm bg-red-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
          <div class="min-h-62">
            <Image
              fill
              priority
              class="mx-auto"
              src="https://demo.happyaddons.com/wp-content/uploads/2019/05/card-image13a.png"
              alt=""
            />
          </div>
          <h1 class="font-extrabold text-6xl mt-28 mb-10 text-gray-800">01.</h1>
          <h2 class="font-bold mb-5 text-gray-800">Stylish Egg Chair</h2>
          <p class="text-sm leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae
            repellendus nam! Dolor dignissimos unde, dolore laboriosam atque
            numquam quam.
          </p>
        </article>

        <article class="flex flex-col shadow-xl mx-auto max-w-sm bg-yellow-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
          <div class="min-h-62">
            <Image
              fill
              priority
              class="mx-auto"
              src="https://www.dropbox.com/s/8wcoj21a4vxbk7s/tl.png?dl=1"
              alt=""
            />
          </div>
          <h1 class="font-extrabold text-6xl mt-28 mb-10 text-gray-800">02.</h1>
          <h2 class="font-bold mb-5 text-gray-800">Stylish Leather Bag</h2>
          <p class="text-sm leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae
            repellendus nam! Dolor dignissimos unde, dolore laboriosam atque
            numquam quam.
          </p>
        </article> */}

        <article class="flex flex-col shadow-xl mx-auto max-w-sm bg-blue-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
          <div class="min-h-62 h-[120px] relative">
            <Image
              fill
              priority
              style={{objectFit: "contain"}}
              src="https://www.dropbox.com/s/3e0m3ttp2tdi1ly/chair.png?dl=1"
              alt=""
            />
          </div>
          <h1 class="font-extrabold text-4xl mt-4 mb-4 text-gray-800">03.</h1>
          <h2 class="font-bold mb-5 text-gray-800">Modern Wooden Chair</h2>
          <p class="text-sm leading-relaxed text-gray-700">
            10 / KG
          </p>
        </article>

        <article class="flex flex-col shadow-xl mx-auto max-w-sm bg-purple-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
          <div class="min-h-62 h-[120px] relative">
            <Image
              fill
              priority
              style={{objectFit: "contain"}}
              src="https://www.dropbox.com/s/lllrkvwvfn97piz/toppng.com-furniture-1200x957.png?dl=1"
              alt=""
            />
          </div>
          <h1 class="font-extrabold text-4xl mt-4 mb-4 text-gray-800">04.</h1>
          <h2 class="font-bold mb-5 text-gray-800">Comfortable Chair</h2>
          <p class="text-sm leading-relaxed text-gray-700">
            10 / KG
          </p>
        </article>
        <article class="flex flex-col shadow-xl mx-auto max-w-sm bg-blue-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
          <div class="min-h-62 h-[120px] relative">
            <Image
              fill
              priority
              style={{objectFit: "contain"}}
              src="https://www.dropbox.com/s/3e0m3ttp2tdi1ly/chair.png?dl=1"
              alt=""
            />
          </div>
          <h1 class="font-extrabold text-4xl mt-4 mb-4 text-gray-800">03.</h1>
          <h2 class="font-bold mb-5 text-gray-800">Modern Wooden Chair</h2>
          <p class="text-sm leading-relaxed text-gray-700">
            10 / KG
          </p>
        </article>

        <article class="flex flex-col shadow-xl mx-auto max-w-sm bg-purple-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
          <div class="min-h-62 h-[120px] relative">
            <Image
              fill
              priority
              style={{objectFit: "contain"}}
              src="https://www.dropbox.com/s/lllrkvwvfn97piz/toppng.com-furniture-1200x957.png?dl=1"
              alt=""
            />
          </div>
          <h1 class="font-extrabold text-4xl mt-4 mb-4 text-gray-800">04.</h1>
          <h2 class="font-bold mb-5 text-gray-800">Comfortable Chair</h2>
          <p class="text-sm leading-relaxed text-gray-700">
            10 / KG
          </p>
        </article>
        <article class="flex flex-col shadow-xl mx-auto max-w-sm bg-blue-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
          <div class="min-h-62 h-[120px] relative">
            <Image
              fill
              priority
              style={{objectFit: "contain"}}
              src="https://www.dropbox.com/s/3e0m3ttp2tdi1ly/chair.png?dl=1"
              alt=""
            />
          </div>
          <h1 class="font-extrabold text-4xl mt-4 mb-4 text-gray-800">03.</h1>
          <h2 class="font-bold mb-5 text-gray-800">Modern Wooden Chair</h2>
          <p class="text-sm leading-relaxed text-gray-700">
            10 / KG
          </p>
        </article>

        <article class="flex flex-col shadow-xl mx-auto max-w-sm bg-purple-100 py-10 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
          <div class="min-h-62 h-[120px] relative">
            <Image
              fill
              priority
              style={{objectFit: "contain"}}
              src="https://www.dropbox.com/s/lllrkvwvfn97piz/toppng.com-furniture-1200x957.png?dl=1"
              alt=""
            />
          </div>
          <h1 class="font-extrabold text-4xl mt-4 mb-4 text-gray-800">04.</h1>
          <h2 class="font-bold mb-5 text-gray-800">Comfortable Chair</h2>
          <p class="text-sm leading-relaxed text-gray-700">
            10 / KG
          </p>
        </article>
      </section>
    </section>
  );
};

export default Abc;
