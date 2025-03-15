import Platform from "../../assets/Platform";
import GoldCoin from "../../assets/coins/GoldCoin";
import SilverCoin from "../../assets/coins/SilverCoin";
import BronzeCoin from "../../assets/coins/BronzeCoin";
import GoldTrophy from "../../assets/trophies/GoldTrophy";
import SilverTrophy from "../../assets/trophies/SilverTrophy";
import BronzeTrophy from "../../assets/trophies/BronzeTrophy";

const TopRank = ({rank, name, points}: { rank: number, name: string, points: number }) => {
    // To add , to the points
    const formattedPoints = points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "٬");

    let coin, label, trophy, mt, bgColor; //mt: margin top
    switch (rank) {
        case 1:
            coin = <GoldCoin/>
            label = "اول"
            trophy = <GoldTrophy/>
            mt = 50
            bgColor = "bg-Gold"
            break;
        case 2:
            coin = <SilverCoin/>
            label = "دوم"
            trophy = <SilverTrophy/>
            mt = 100
            bgColor = "bg-Silver"
            break;
        case 3:
            coin = <BronzeCoin/>
            label = "سوم"
            trophy = <BronzeTrophy/>
            mt = 150
            bgColor = "bg-Bronze"
            break
    }
    return <div className={`flex flex-col items-center w-fit gap-y-4`} style={{marginTop: mt}}>
        {trophy}
        <p className="font-xl">{name}</p>
        <p className={`flex flex-row-reverse align-middle self-center gap-x-2 ${bgColor} bg-opacity-30 rounded-[20px] pt-1 pb-1 pl-4 pr-4`}>{coin} {formattedPoints}</p>
        <div className="relative">
            <Platform className="!w-5/6 justify-self-center"/>
            <label
                className="absolute inset-0 flex items-center justify-center text-Secondary-Text font-extrabold text-5xl text-opacity-25">{label}</label>
        </div>
    </div>
}

export default TopRank