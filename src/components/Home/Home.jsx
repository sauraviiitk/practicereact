import React from "react";

function Home() {
  return (
    <>
      <div className="hero flex flex-col lg:flex-row items-center w-full lg:w-3/4 text-center m-auto mt-20">
        <div className="left ml-4 lg:ml-20 m-10 flex flex-col items-start">
          <h1 className="text-3xl lg:text-6xl mb-4 text-left">
            Your feet deserve the best
          </h1>
          <p className="mb-6 text-left">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div className="flex space-x-4 lg:space-x-8">
            <button className="bg-red-600 text-white rounded-lg py-2 px-4 hover:bg-red-700 transition duration-300">
              Shop now
            </button>
            <button className="border border-black text-black rounded-lg py-2 px-4 hover:bg-black hover:text-white transition duration-300">
              Category
            </button>
          </div>
          <div>
            <p className="text-sm pt-6 text-left">Also available on</p>
            <div className="img flex items-center gap-2">
              <img src="/images/flipkart.png" alt="Flipkart" className="w-8" />
              <img src="/images/amazon.png" alt="Amazon" className="w-8" />
            </div>
          </div>
        </div>

        <div className="right mt-10 lg:mt-0 lg:ml-40">
          <img
            src="/images/shoe_image.png"
            alt="Shoe"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
