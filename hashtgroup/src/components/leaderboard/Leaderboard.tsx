import TopRank from "./TopRank";
import Table from "./Table";

const Leaderboard = () => {
    // لیست نفرات برتر
    const topRanks = [
        {rank: 2, name: "محمد افشاریان", points: 800000},
        {rank: 1, name: "وحید کریمی", points: 1000000},
        {rank: 3, name: "رضا برات زاده", points: 720000},
    ];

    // sort based on ranks
    const sortedTopRanks = topRanks.sort((a, b) => a.rank - b.rank);

    // sort for flex-row
    const orderedRanks = [sortedTopRanks[1], sortedTopRanks[0], sortedTopRanks[2]];

    return (
        <div className="w-full pt-10 text-Light-Surface flex flex-col items-center" id="leaderboard">
            {/* Top three */}
            <div className="mt-20 text-center flex flex-col align-middle items-center flex-wrap">
                <h1 className="font-bold text-2xl mb-4">برترین‌های ALL IN</h1>
                <p className="text-sm font-light">متن ساختگی</p>


                <div className="flex flex-col lg:flex-row justify-around align-top items-end gap-8 w-fit h-fit lg:w-4/6">

                    <div className="lg:order-1 h-fit flex justify-center">
                        <TopRank rank={orderedRanks[1].rank} name={orderedRanks[1].name}
                                 points={orderedRanks[1].points}/>
                    </div>
                    <div className="lg:order-0 flex justify-center">
                        <TopRank rank={orderedRanks[0].rank} name={orderedRanks[0].name}
                                 points={orderedRanks[0].points}/>
                    </div>
                    <div className="lg:order-2 flex justify-center">
                        <TopRank rank={orderedRanks[2].rank} name={orderedRanks[2].name}
                                 points={orderedRanks[2].points}/>
                    </div>
                </div>
            </div>

            {/* The table */}
            <Table/>
        </div>
    );
};

export default Leaderboard;
