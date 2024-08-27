type BlogCardProps = {
    image: string;
    date?: string; // Optional prop
    CardTitle: string;
    category:string;
    discription?:string;
};

const MainCard: React.FC<BlogCardProps> = ({ image, date, CardTitle,  category, discription}) => {
    return (
        <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600 ">
            <div className="flex items-center mb-6">
                <img src="https://pagedone.io/asset/uploads/1696244553.png" alt="Harsh image" className="rounded-lg w-full" />
            </div>
            <div className="block">
                <h4 className={`text-gray-900 font-medium leading-8 ${discription ? 'mb-1' : 'mb-9'}`}>Fintech 101: Exploring the Basics of Electronic Payments</h4>
                { category === "product" && discription &&
                 <p className="text-gray-600 mb-9 text-sm line-clamp-3" >
                    {discription}
                 </p>
                }
                <div className="flex items-center justify-between  font-medium">
                    <h6 className="text-sm text-gray-500">{category}</h6>
                    <span className="text-sm text-indigo-600">2 year ago</span>
                </div>
            </div>
        </div>
    );
};


export default MainCard;