import Award from "./Award";
import BronzePrize from "../assets/BronzePrize";
import SilverPrize from "../assets/SilverPrize";
import GoldPrize from "../assets/GoldPrize";

const Game = () => {
  return <div className="mt-16 mb-16">
      <h1 className="font-extrabold text-2xl">جوایز خود را انتخاب کنید</h1>
      <p>این یک بازیه مخصوص شما دانش‌آموزان سخت‌کوش که می‌تونید با باز کردن هر صندوق و پاسخ مرتبط امتیاز مورد نیاز خود را کسب کنید.</p>
      <div className="flex flex-row w-4/5 justify-between justify-self-center">
          <Award prize={<BronzePrize/>} points={100}/>
          <Award prize={<SilverPrize/>} points={400}/>
          <Award prize={<GoldPrize/>} points={1000}/>
      </div>
  </div>
}

export default Game