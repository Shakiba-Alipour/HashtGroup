import Celebration from "../assets/Celebration";
import ShareIcon from "../assets/ShareIcon";

const Invitation = ({code}: { code: string }) => {

    // To copy the invitation code into the clipboard
    // const [messageApi, contextHolder] = message.useMessage();
    //
    // const CopyHandler =  () => {
    //     const response = navigator.clipboard.writeText(code)
    //     messageApi.open({
    //         type: 'success',
    //         content: 'کپی شد',
    //     });
    // };

    return <div className="flex flex-wrap !w-full mt-30 text-Light-Surface content-center justify-center align-middle sm:items-center" id="invitation">
        <div
            className="bg-gradient-to-tl flex flex-wrap flex-col-reverse md:!flex-row lg:!flex-row xl:!flex-row 2xl:!flex-row content-center from-Background to-Light-Surface/30 sm:items-center self-center rounded-lg border-Secondary-Text h-5/6 w-10/12 sm:3/4 !justify-evenly !justify-self-center">
            <div
                className="flex flex-col justify-items-start justify-between content-start text-right w-3/5 gap-y-5 self-center p-8">
                <h2 className="font-bold text-xl">هر دعوت 1000 سکه برای شما!!</h2>
                <p className="font-light text-sm text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                    و با استفاده از
                    طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                    فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                {/*<>*/}
                {/*    {contextHolder}*/}
                <button
                    className="bg-Button border-Light-Surface w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 rounded-md flex flex-row justify-between items-center pr-3 pl-3 pt-1 pb-1"
                    // onClick={CopyHandler}
                >
                    {code}
                    <ShareIcon/>
                </button>
                {/*</>*/}
            </div>
            <Celebration className="w-2/3 self-end left-0 sm:justify-self-center sm:align-middle sm:self-center"/>
        </div>
    </div>
}

export default Invitation