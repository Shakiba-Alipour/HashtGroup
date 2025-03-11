// @ts-ignore
import OthersRank from "../../assets/leaderboardRanks/OthersRank";
// @ts-ignore
import YourRank from "../../assets/leaderboardRanks/YourRank";

const Table = () => {
    const data = [
        {rank: 76, name: "رضا برات زاده", points: "13000000", isYou: false},
        {rank: 77, name: "رضا برات زاده", points: "13000000", isYou: false},
        {rank: 78, name: "رضا برات زاده", points: "13000000", isYou: false},
        {rank: 79, name: "رضا برات زاده", points: "13000000", isYou: false},
        {rank: 80, name: "رضا برات زاده", points: "13000000", isYou: false},
        {rank: 81, name: "رضا برات زاده", points: "13000000", isYou: true},
        {rank: 82, name: "رضا برات زاده", points: "13000000", isYou: false},
        {rank: 83, name: "رضا برات زاده", points: "13000000", isYou: false},
        {rank: 84, name: "رضا برات زاده", points: "13000000", isYou: false},
    ];

    const formatPoints = (points: string) => {
        return new Intl.NumberFormat("fa-IR").format(Number(points)); // Ensures better readability
    };

    return (
        <div className="w-11/12 flex justify-center self-center mt-20">
            <div className="overflow-hidden w-full rounded-lg border border-Light-Surface/20">
                <table className="w-full rounded-lg text-right border-collapse border border-Light-Surface/20">
                    <thead>
                    <tr className="bg-Table-Header border-Light-Surface/20">
                        <th className="p-3">رتبه</th>
                        <th className="p-3">نام و نام خانوادگی</th>
                        <th className="p-3">تعداد امتیاز دریافتی</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row) => (
                        <tr
                            key={row.rank}
                            className={`border-b border-Light-Surface/20 ${
                                row.isYou
                                    ? "bg-Table-ActiveRow bg-opacity-20 text-Table-Text"
                                    : "bg-Background text-Light-Surface"
                            }`}
                        >
                            <td className="p-3 flex items-center gap-2">
                                {row.isYou ? <YourRank/> : <OthersRank/>}
                                {row.rank}
                            </td>
                            <td className="p-3">
                                {row.name} {row.isYou && <span
                                className="font-light pr-2 pl-2 pt-1 pb-1 bg-Table-ActiveRow rounded-2xl bg-opacity-30">شما</span>}
                            </td>
                            <td className="p-3">{formatPoints(row.points)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
