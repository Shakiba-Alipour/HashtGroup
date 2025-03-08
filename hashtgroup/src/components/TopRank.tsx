import Platform from "../assets/Platform";
import GoldCoin from "../assets/coins/GoldCoin";
import SilverCoin from "../assets/coins/SilverCoin";
import BronzeCoin from "../assets/coins/BronzeCoin";
import GoldTrophy from "../assets/trophies/GoldTrophy";
import SilverTrophy from "../assets/trophies/SilverTrophy";
import BronzeTrophy from "../assets/trophies/BronzeTrophy";

const TopRank = ({rank, name, points}: { rank: number, name: string, points: number }) => {
    let coin, label, trophy, mt; //mt: margin top
    switch (rank) {
        case 1:
            coin = <GoldCoin/>
            label = "اول"
            trophy = <GoldTrophy/>
            mt = 15
            break;
        case 2:
            coin = <SilverCoin/>
            label = "دوم"
            trophy = <SilverTrophy/>
            mt = 20
            break;
        case 3:
            coin = <BronzeCoin/>
            label = "سوم"
            trophy = <BronzeTrophy/>
            mt = 25
            break
    }
    return <div className={`flex flex-col items-center gap-y-4 mt-[${mt}]`}>
        {trophy}
        <p className="font-xl">{name}</p>
        <p className="flex flex-row-reverse">{coin} {points}</p>
        <Platform/>
    </div>
}

export default TopRank