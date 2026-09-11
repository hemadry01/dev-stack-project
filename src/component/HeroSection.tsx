import Banner from "../assets/banner-stack.png";
export function HeroSection() {
    
    return (
      <div className="flex justify-between mx-auto items-center container mt-4">
        <div className="w-3/4">
          <h1 className="text-[32px] font-bold mb-4">
            Build Your Ideal <br/> <span className="text-blue-600">Development Stack</span>
          </h1>
          <p className="w-2/4">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="rounded-2xl bg-red-600 py-2 px-2 text-[14px] font-bold text-white">Explore Technologies</button>
            <button className="rounded-2xl border-[1px] border-gray-300 py-2 px-2">Learn More</button>
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