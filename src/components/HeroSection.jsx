import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className="relative h-[100vh] overflow-hidden shadow-2xl">
            <video
                src="/drone-core-hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="relative z-10 bg-dark-gray/70 flex items-center mt-20 lg:justify-center lg:mt-0 space-y-8 h-full flex-col px-10 md:px-24 ">
                <div className="flex flex-col space-y-8 items-center rounded-md px-8 py-4 ">
                    <div className="flex flex-row space-x-8 items-center text-6xl">
                        <div>Request</div> <FaChevronRight className="text-xl"/><div>Receive</div><FaChevronRight className="text-xl"/><div>Download</div>
                    </div>
                    <div>All Through our App.</div>
                </div>
                {/* <div className="flex flex-col lg:flex-row justify-between items-center w-full relative">
                    
                    <div className="flex flex-col items-center text-center bg-dark-gray/80 backdrop-blur-md rounded-md p-6 w-1/5 min-w-[180px]">
                        <div className="text-sm lg:text-2xl font-semibold mb-2">Submit Request</div>
                        <p className="text-xs lg:text-sm text-gray-300">
                            Make your account and request drone footage anytime you need it.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center w-[300px]">
                        <div className="w-1 lg:w-full h-[20px] lg:h-1 bg-dark-gray/80 backdrop-blur-md rounded-full" />
                        <div className="mx-2 bg-dark-gray/80 backdrop-blur-md rounded-full p-2 text-white">
                            <FaChevronRight className="rotate-90 lg:rotate-0"/>
                        </div>
                        <div className="w-1 lg:w-full h-[20px] lg:h-1 bg-dark-gray/80 backdrop-blur-md rounded-full" />
                    </div>

                    <div className="flex flex-col items-center text-center bg-dark-gray/80 backdrop-blur-md rounded-md p-6 w-1/5 min-w-[180px]">
                        <div className="text-sm lg:text-2xl font-semibold mb-2">Organize Logistics</div>
                        <p className="text-xs lg:text-sm text-gray-300">
                            We'll coordinate what we need to get you exactly what you want.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center w-[300px]">
                        <div className="w-1 lg:w-full h-[20px] lg:h-1 bg-dark-gray/80 backdrop-blur-md rounded-full" />
                        <div className="mx-2 bg-dark-gray/80 backdrop-blur-md rounded-full p-2 text-white">
                            <FaChevronRight className="rotate-90 lg:rotate-0"/>
                        </div>
                        <div className="w-1 lg:w-full h-[20px] lg:h-1 bg-dark-gray/80 backdrop-blur-md rounded-full" />
                    </div>

                    <div className="flex flex-col items-center text-center bg-dark-gray/80 backdrop-blur-md rounded-md p-6 w-1/5 min-w-[180px]">
                        <div className="text-sm lg:text-2xl font-semibold mb-2">Download Footage</div>
                        <p className="text-xs lg:text-sm text-gray-300">
                            Once complete, your footage will appear in your files section.
                        </p>
                    </div>
                </div> */}

                {/* Subtext */}
                {/* <div className="bg-dark-gray/80 text-sm backdrop-blur-sm px-6 py-2 rounded-md text-white shadow">
                    We handle everything from request to delivery.
                </div> */}
            </div>

            {/* See More Button */}
            <a href="#services" className="absolute bottom-0 w-full flex justify-center z-20 cursor-pointer">
                <div className="flex flex-col w-24 h-14 backdrop-blur-xl rounded-t-full items-center justify-end text-white text-sm shadow-md hover:scale-[103%] transition-all duration-200">
                    <div>See More</div>
                    <FaChevronDown />
                </div>
            </a>
        </div>
    );
};

export default HeroSection;
