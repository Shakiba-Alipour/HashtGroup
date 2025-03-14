import React from "react";
import CorrectAnswerPopup from "./CorrectAnswerPopup";

const InfoSubmission = ({correctAnswer, selectedAnswer}: {
    correctAnswer: number,
    selectedAnswer: string | undefined
}) => {
    // input style
    const inputStyle = "rounded-md h-9 pr-2 w-5/6"

    // to check the selected answer
    const handleSelectedAnswer = () => {
        // to handle correct selection
        if (selectedAnswer === correctAnswer.toString()) {
            return <CorrectAnswerPopup/>
        }
        // to handle wrong selection
        else {

        }
    };

    return <div
        className="backdrop-blur-md justify-center align-middle w-1/4 sm:w-1/2 h-fit flex flex-col z-40 bg-Light-Surface bg-opacity-10 border-Secondary-Text justify-items-center items-center justify-self-center text-right rounded-xl pt-4 pb-6 pr-4 pl-4 gap-y-4">
        <h1 className="w-fit text-Secondary-Text font-bold text-xl self-start">اطلاعات شما</h1>
        <input placeholder="نام و نام‌خانوادگی" type="text" className={inputStyle} required/>
        <input placeholder="نام مدرسه" type="text" className={inputStyle} required/>
        <input placeholder="شماره تماس" type="number" className={inputStyle} required/>
        <input placeholder="کد معرف" type="text" className={inputStyle}/>
        <button className="w-5/6 bg-PrizeButton rounded-md h-9 text-Light-Surface" onClick={handleSelectedAnswer}>دریافت
            جایزه
        </button>
    </div>
}

export default InfoSubmission