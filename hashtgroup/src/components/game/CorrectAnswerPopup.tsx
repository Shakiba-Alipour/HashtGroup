import CorrectAnswerPrize from "../../assets/CorrectAnswerPrize";
import React from "react";

const CorrectAnswerPopup = () => {
    return <div
        className="w-1/2 rounded-xl pt-4 pb-4 pr-4 pl-4 gap-y-4 flex flex-col z-50 bg-Light-Surface bg-opacity-20 border-Secondary-Text justify-items-center">
        <h1 className="text-Secondary-Text font-extrabold text-5xl">برنده شدید!!</h1>
        <p className="text-Secondary-Text ">با شما تماس گرفته می‌شود.</p>
        <CorrectAnswerPrize/>
        <button className="w-11/12 bg-PrizeButton rounded-md h-9 text-Light-Surface" onClick={}>بازگشت</button>
    </div>
}

export default CorrectAnswerPopup