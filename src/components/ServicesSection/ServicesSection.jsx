import InfoCard from "./InfoCard"

const ServicesSection = () => {
    return(
        <div className="flex flex-col space-y-4 px-4 lg:px-24 h-[40vh] pt-16 shadow-2xl bg-dark-gray">
            <div className="text-2xl w-full text-center">Services</div>
            <div className="flex flex-col lg:flex-row w-full space-y-4 lg:space-x-10 lg:space-y-0 justify-between">
                {/* <InfoCard title={"400 Projects"} img={"/stock1.jpg"} subtitle={"We have completed 400 different projects around Toronto"}/>
                <InfoCard title={"100% Online"} img={"/stock2.jpg"} subtitle={"You book through our website, Pay a deposit through our website, Receive your files through our website, and pay full price through our wesbite."}/>
                <InfoCard title={"0 Crashes"} img={"/stock3.jpg"} subtitle={"We have literally like never ever crashed a friggen drone"}/> */}
            </div>

        </div>
    )
}

export default ServicesSection