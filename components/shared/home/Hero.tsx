import Image from "next/image";

const Hero = () => {
  return (
    <div className="text-big">
      <div className="relative">
        <Image
          src="/hero-image.jpg"
          width={1920}
          height={540}
          alt="hero-image"
          className="border-primary border-4"
        />
        <div className="absolute top-0 p-20">
          <h1 className="title">Final Fantasy VII Rebirth</h1>
          <p>An Epic Adventure Awaits</p>
          <p className="flex items-center">
            JRPG | PS5 | PC |
            <span className="text-big">
              &#11088; &#11088; &#11088; &#11088; &#11088;{" "}
            </span>
          </p>
          <div className="flex gap-5 mt-2">
            <button className="bg-secondary px-20 py-1 rounded-sm">
              Buy Now
            </button>
            <button className="bg-primary px-20 py-1 rounded-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
