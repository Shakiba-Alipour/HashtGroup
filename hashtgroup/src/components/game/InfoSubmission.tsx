import React, {useState} from "react";
import CorrectAnswerPopup from "./CorrectAnswerPopup";

const InfoSubmission = ({correctAnswer, selectedAnswer, onReset}: {
    correctAnswer: number,
    selectedAnswer: number,
    onReset: () => void
}) => {
    // input style
    const inputStyle = "rounded-md h-9 pr-2 w-5/6"

    const [showSubmissionPopup, setShowSubmissionPopup] = useState(true);
    const [showPrizePopup, setShowPrizePopup] = useState(false);

    // to check the selected answer
    const handleSelectedAnswer = (correctAnswer: number, electedAnswer: number) => {
        setShowSubmissionPopup(false);

        // to handle correct selection
        if (selectedAnswer === correctAnswer) {
            setShowPrizePopup(true);
        } else {
            setShowPrizePopup(false)
        }
    };

    return <>
        {showSubmissionPopup && (<div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md justify-center align-middle w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] h-fit flex flex-col z-40 bg-Light-Surface bg-opacity-10 border-Secondary-Text justify-items-center items-center justify-self-center text-right rounded-xl pt-4 pb-6 pr-4 pl-4 gap-y-4">
            <h1 className="w-fit text-Secondary-Text font-bold text-xl self-start">اطلاعات شما</h1>
            <input placeholder="نام و نام‌خانوادگی" type="text" className={inputStyle} required/>
            <input placeholder="نام مدرسه" type="text" className={inputStyle} required/>
            <input placeholder="شماره تماس" type="number" className={inputStyle} required/>
            <input placeholder="کد معرف" type="text" className={inputStyle}/>
            <button className="w-5/6 bg-PrizeButton rounded-md h-9 text-Light-Surface"
                    onClick={() => handleSelectedAnswer(selectedAnswer, correctAnswer)}>دریافت
                جایزه
            </button>

        </div>)}

        {showPrizePopup && <CorrectAnswerPopup onReset={onReset}/>}
    </>
}

export default InfoSubmission