import Award from "./Award";
import BronzePrize from "../../assets/boxes/BronzePrize";
import SilverPrize from "../../assets/boxes/SilverPrize";
import GoldPrize from "../../assets/boxes/GoldPrize";
import Test from "./Test";
import BottomWallBackground from "../../assets/background/BottomWallBackground"
import InfoSubmission from "./InfoSubmission";
import CorrectAnswerPopup from "./CorrectAnswerPopup";

const Game = () => {
    return <div className="relative w-full h-[500px] flex items-center justify-center bg-Background">
        {/*<BottomWallBackground className="absolute inset-0 -z-50 w-screen fill-Background"/>*/}
        <div className="mt-16 mb-16" id="game">
            <h1 className="font-extrabold text-2xl text-Secondary-Text">جوایز خود را انتخاب کنید</h1>
            <p className="text-Secondary-Text">این یک بازیه مخصوص شما دانش‌آموزان سخت‌کوش که می‌تونید با باز کردن هر
                صندوق و پاسخ مرتبط امتیاز مورد نیاز خود
                را کسب کنید.</p>
            <div className="flex flex-row w-4/5 justify-between justify-self-center">
                <Award prize={<BronzePrize/>} points={100}/>
                <Award prize={<SilverPrize/>} points={400}/>
                <Award prize={<GoldPrize/>} points={1000}/>
            </div>

            {/*test*/}
            {/*<Test question="سوال" optionOne="گزینه یک" optionTwo="گزینه دو" optionThree="گزینه سه"*/}
            {/*      optionFour="گزینه چهار"*/}
            {/*      answer={1}/>*/}
            {/*<InfoSubmission correctAnswer={2} selectedAnswer="2"/>*/}
            {/*<CorrectAnswerPopup/>*/}
        </div>
    </div>
}

export default Game