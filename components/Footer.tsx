import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="text-5xl flex gap-28 items-baseline justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex items-center">
          <Image src="/logo.svg" width={70} height={70} alt="logo" />
          <h1>{APP_NAME}</h1>
        </div>
        <p>
          Buy games with Gil. Earn daily rewards <br /> and unlock your next
          adventure.
        </p>
        <form action="#" className="flex gap-5">
          <input
            type="text"
            placeholder="Enter your email..."
            className="border border-white"
          />
          <button>Subscribe</button>
        </form>
        <div className="flex gap-10">
          <Image
            src="/icon/mastercard.png"
            width={50}
            height={50}
            alt="mastercard"
          />
          <Image src="/icon/visa.png" width={50} height={50} alt="mastercard" />
          <Image
            src="/icon/paypal.png"
            width={50}
            height={50}
            alt="mastercard"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1>Store</h1>
        <p>Deals</p>
        <p>New Releases</p>
        <p>Top Sellers</p>
        <p>Coupons</p>
      </div>
      <div className="flex flex-col gap-5">
        <h1>Support</h1>
        <p>Help Center</p>
        <p>Daily Quest Guide</p>
        <p>Refund</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col gap-5">
        <h1>Gil System</h1>
        <p>What is Gil?</p>
        <p>Earn Gil Daily</p>
        <p>Convert to Gil</p>
        <p>Rules</p>
      </div>
      <div className="flex flex-col gap-5">
        <h1>Legal</h1>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Security</p>
        <p>Cookie Policy</p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10">
          <Image
            src="/icon/youtube.png"
            width={50}
            height={50}
            alt="youtube-icon"
          />
          <Image
            src="/icon/twitch.png"
            width={50}
            height={50}
            alt="twitch-icon"
          />
          <Image src="/icon/x.png" width={50} height={50} alt="x-icon" />
        </div>
      </div>
    </div>
  );
};
