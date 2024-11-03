/* eslint-disable no-unused-vars */
import React from 'react'

function InfoSection() {

  const phoneNumber = "254798296390"; // WhatsApp number with country code
  const message = "Hello There. I Am [Your Name]"; // Message for WhatsApp

  return (
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2024/tacoma/gallery/TAC_MY24_0022_V001_7huwv0nUpr8HpRD_JFgjeMvGl9kLqm2slJN3Pl.jpg?wid=1440&fmt=jpg&fit=crop"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
            About Us.
          </h2>

          <p className="mt-4 text-gray-600">
              Y Automotive is your trusted partner in quality car sales, offering a range of vehicles to suit every lifestyle. We prioritize transparency, quality, and customer satisfaction—making car buying straightforward and enjoyable.
              <span className="font-bold block mt-2">Drive with confidence, Drive with Y Automotive!</span> 
          </p>


          <a
           href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`${message}`)}`} 
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default InfoSection