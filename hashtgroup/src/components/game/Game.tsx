import Award from "./Award";
import BronzePrize from "../../assets/boxes/BronzePrize";
import SilverPrize from "../../assets/boxes/SilverPrize";
import GoldPrize from "../../assets/boxes/GoldPrize";
import Test from "./Test";
import BottomWallBackground from "../../assets/background/BottomWallBackground"
import InfoSubmission from "./InfoSubmission";
import CorrectAnswerPopup from "./CorrectAnswerPopup";
import Puzzle from "./Puzzle";

const Game = () => {
    return <div className="relative w-full flex flex-col items-center justify-center bg-Background">
        {/*<BottomWallBackground className="absolute inset-0 -z-10 w-screen"/>*/}
        <div className="mt-16 mb-16 sm:w-5/6 z-10" id="game">
            <Puzzle/>
            <h1 className="font-extrabold text-2xl text-Secondary-Text">جوایز خود را انتخاب کنید</h1>
            <p className="text-Secondary-Text">این یک بازیه مخصوص شما دانش‌آموزان سخت‌کوش که می‌تونید با باز کردن هر
                صندوق و پاسخ مرتبط امتیاز مورد نیاز خود
                را کسب کنید.</p>
            <div className="flex flex-col sm:flex-row-reverse sm:flex-wrap w-4/5 sm:w-2/3 justify-between justify-self-center gap-4">
                <Award prize={<GoldPrize/>} points={1000}/>
                <Award prize={<BronzePrize/>} points={100}/>
                <Award prize={<SilverPrize/>} points={400}/>
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