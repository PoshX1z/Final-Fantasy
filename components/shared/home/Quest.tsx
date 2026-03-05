import { finalFantasyFont } from "@/lib/utils";
import Image from "next/image";

export const Quest = () => {
  return (
    <div>
      <h1 className={`${finalFantasyFont.className} title`}>
        Daily Quest Board
      </h1>
      <div className="flex gap-10 items-center">
        <div className="flex gap-10 border-2 border-theme">
          <div className="flex">
            <Image src="/gil.png" width={50} height={50} alt="gil icon" />
            <p>Login Today</p>
          </div>
          <div className="flex button-theme-primary">
            <Image src="/gil.png" width={50} height={50} alt="gil icon" />
            <p>
              <span>200</span> Gil
            </p>
          </div>
        </div>
        <div className="flex gap-10 border-2 border-theme">
          <div className="flex">
            <Image src="/gil.png" width={50} height={50} alt="gil icon" />
            <p>Login Today</p>
          </div>
          <div className="flex button-theme-primary">
            <Image src="/gil.png" width={50} height={50} alt="gil icon" />
            <p>
              <span>200</span> Gil
            </p>
          </div>
        </div>
        <div>
          <h1>Complete All Quests</h1>
          <button className="border-2 border-theme">Explore Quests -</button>
        </div>
      </div>
    </div>
  );
};
