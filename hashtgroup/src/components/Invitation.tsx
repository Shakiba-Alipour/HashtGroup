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

    return <div className="flex !w-full bg-Background flex-row text-Light-Surface content-center sm:flex-col sm:items-center sm:flex-wrap" id="invitation">
        <div
            className="bg-gradient-to-tl from-Background to-Light-Surface/30 sm:items-center rounded-lg border-Secondary-Text h-5/6 w-10/12 sm:3/4 flex lg:flex-row md:flex-row sm:flex-col-reverse !justify-evenly !justify-self-center">
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
                    className="bg-Button border-Light-Surface lg:w-1/2 md:w-1/2 rounded-md flex flex-row justify-between items-center pr-3 pl-3 pt-1 pb-1 sm:w-full"
                    // onClick={CopyHandler}
                >
                    {code}
                    <ShareIcon/>
                </button>
                {/*</>*/}
            </div>
            <Celebration className="w-2/3 self-end left-0"/>
        </div>
    </div>
}

export default Invitation