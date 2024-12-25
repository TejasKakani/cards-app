export default function Card({ name, price, rating, image }) {
    return (
<>
        <div className="bg-gradient-to-t from-gray-100 via-white to-gray-50
                        m-2
                        justify-items-center
                        rounded-lg shadow-lg
                        max-w-sm
                        transform transition-all duration-300 
                        hover:scale-105 hover:shadow-2xl hover:font-bold hover:bg-gradient-to-t hover:from-gray-50 hover:via-gray-from-gray-50 hover:to-gray-from-gray-50
                        w-1/6
                        ">
            <img src={image} className="" alt="..." />
            <div className="text-center">
                <h5 className="">{name}</h5>
                <p className="">Rating: {Math.round(rating.average)}</p>
                <p className="">Price: {price}</p>
            </div>
        </div>
</>
    );
}