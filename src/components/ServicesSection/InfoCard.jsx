const InfoCard = ({ title, subtitle, img }) => {
    return (
        <div
            className="w-full h-[400px] rounded-md overflow-hidden flex flex-col items-center justify-end space-y-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="backdrop-blur-xl bg-dark-gray/50 w-full flex flex-col items-center lg:h-[30%] py-2">
                <div className="text-2xl font-semibold">{title}</div>
                <div className="text-center">{subtitle}</div>
            </div>
        </div>
    );
};

export default InfoCard;
