import TopRank from "./TopRank";

const Leaderboard = () => {
    return <div className="bg-Background w-full pt-10 text-Light-Surface" id="leaderboard">
        {/* Top three */}
        <div className="mt-20">
            <h1 className="font-bold text-2xl mb-4">برترین‌های ALL IN</h1>
            <p className="text-sm font-light">متن ساختگی</p>
            <div className="flex justify-around items-center w-5/6 justify-self-center justify-items-center sm:flex-col md:flex-col lg:flex-row">
                <TopRank rank={2} name="محمد افشاریان" points={800000}/>
                <TopRank rank={1} name="وحید کریمی" points={1000000}/>
                <TopRank rank={3} name="رضا برات زاده" points={720000}/>
            </div>
        </div>

        {/* The table */}
    </div>
}

export default Leaderboard