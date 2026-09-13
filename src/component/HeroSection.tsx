import Banner from "../assets/banner-stack.png";
export function HeroSection() {
    
    return (
      <div className="flex justify-between mx-auto items-center container mt-4">
        <div className="w-3/4">
          <h1 className="text-[32px] font-bold mb-4">
            Build Your Ideal <br />{" "}
            <span className="bg-gradient-to-br from-[#F6D242] to-[#FF52E5] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="w-2/4 text-gray-400">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="rounded-xl py-2 px-2 text-[14px] font-bold text-white bg-[linear-gradient(135deg,#F6D242_10%,#FF52E5_100%)]">
              Explore Technologies
            </button>
            <button type="submit" className="btn">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/4">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
} 