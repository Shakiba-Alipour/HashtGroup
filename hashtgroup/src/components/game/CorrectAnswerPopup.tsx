import CorrectAnswerPrize from "../../assets/CorrectAnswerPrize";
import React from "react";

const CorrectAnswerPopup = ({onReset}: { onReset: () => void }) => {
    return <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md justify-center align-middle justify-self-center self-center items-center h-fit sm:w-1/2  lg:w-1/4 md:w-1/2 rounded-xl pt-4 pb-4 pr-4 pl-4 gap-y-4 flex flex-col z-50 bg-Light-Surface bg-opacity-10 border-Secondary-Text justify-items-center">
        <h1 className="text-Secondary-Text font-extrabold text-5xl">برنده شدید!!</h1>
        <p className="text-Secondary-Text ">با شما تماس گرفته می‌شود.</p>
        <CorrectAnswerPrize/>
        <button className="w-11/12 bg-PrizeButton rounded-md h-9 text-Light-Surface" onClick={onReset}>بازگشت</button>
    </div>
}

export default CorrectAnswerPopup