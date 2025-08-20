const HeroSection = () => {
  return (
    <div className="mt-14 sm:mt-16 md:mt-20 m-2 md:m-7 md:h-[700px] relative rounded-xl overflow-hidden">
      {/* Video Background */}
      <video
        src="/ShoesBgs.mp4"
        className="w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-8 md:p-12 text-white">
        <div className="space-y-1 sm:space-y-2">
          <p className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold">
            Step into
          </p>
          <p className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold">
            Your Perfect Pair
          </p>
        </div>

        <p className="mt-2 sm:mt-4 text-[10px] sm:text-sm md:text-lg lg:text-xl font-medium max-w-[90%] sm:max-w-[70%]">
          Discover the latest styles in footwear — from premium sneakers to
          classic casuals. Whether you're chasing performance or comfort, our
          curated collection ensures you always walk with confidence and style.
          Quality shoes, unbeatable prices.
        </p>

        <div className="mt-3 sm:mt-5 bg-white text-black font-medium rounded-md text-[10px] sm:text-sm md:text-lg px-3 py-1 w-fit shadow-md">
          Get 50% OFF on your first purchase!
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
