import TopRank from "./TopRank";
import Table from "./Table";

const Leaderboard = () => {
    return <div className="bg-Background w-full pt-10 text-Light-Surface flex flex-col justify-items-center" id="leaderboard">
        {/* Top three */}
        <div className="mt-20">
            <h1 className="font-bold text-2xl mb-4">برترین‌های ALL IN</h1>
            <p className="text-sm font-light">متن ساختگی</p>
            <div
                className="flex sm:flex-col md:flex-col lg:flex-row lg:flex-nowrap sm:flex-wrap justify-around items-center w-5/6 justify-self-center justify-items-center">
                <TopRank rank={2} name="محمد افشاریان" points={800000}/>
                <TopRank rank={1} name="وحید کریمی" points={1000000}/>
                <TopRank rank={3} name="رضا برات زاده" points={720000}/>
            </div>
        </div>

        {/* The table */}
        <Table/>
    </div>
}

export default Leaderboard