import Celebration from "../assets/Celebration";

const Invitation = () => {
    return <div className="w-full bg-Background text-Light-Surface flex flex-row align-middle">
        <div className="flex flex-col justify-items-start justify-between align-middle">
            <h2 className="font-bold text-xl">هر دعوت 1000 سکه برای شما!!</h2>
            <p className="font-light text-sm">متن ساختگی</p>
        </div>
        <Celebration className="w-2/3"/>
    </div>
}

export default Invitation