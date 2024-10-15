import React from 'react'

const Service = () => {
  return (
   <>
     <section class="bg-white py-20">
  <div class="container mx-auto p-4">
    <h2 class="text-3xl font-bold mb-4">Our Services</h2>
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 xl:w-1/3 p-4">
        <div class="bg-white shadow-md p-4 rounded">
          <i class="fas fa-truck text-4xl text-blue-500 mb-4"></i>
          <h3 class="text-2xl font-bold mb-2">Fast Shipping</h3>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 p-4">
        <div class="bg-white shadow-md p-4 rounded">
          <i class="fas fa-lock text-4xl text-blue-500 mb-4"></i>
          <h3 class="text-2xl font-bold mb-2">Secure Payment</h3>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </div>
      </div>
      {/* <div class="w-full md:w-1/2 xl:w-1/3 p-4">
        <div class="bg-white shadow-md p-4 rounded">
          <i class="fas fa-headphones text-4xl text-blue-500 mb-4"></i>
          <h3 class="text-2xl font-bold mb-2">24/7 Support</h3>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </div>
      </div> */}
    </div>
  </div>
</section>
   </>
  )
}

export default Service
