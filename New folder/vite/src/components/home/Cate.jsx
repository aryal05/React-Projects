import React from 'react';

const categories = [
  { id: 1, name: "Hair Gel", imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
  { id: 2, name: "Shampoo", imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
  { id: 3, name: "Conditioner", imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
  { id: 4, name: "Hair Spray", imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
  { id: 5, name: "Comb", imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
  { id: 6, name: "Hair Brush", imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" },
];

const Cate = () => {
  return (
    <>
      <h1 className='mt-5 font-extralight text-xl flex ml-4 underline'>Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-7">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md p-4">
            <img className="h-auto max-w-full rounded-lg" src={category.imageUrl} alt={category.name} />
            <h1 className='flex items-center justify-center font-extralight text-xl mt-4'>{category.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cate;
