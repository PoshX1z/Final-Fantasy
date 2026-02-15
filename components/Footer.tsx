import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="text-5xl flex gap-10 absolute bottom-0">
      <div className="flex flex-col gap-5">
        <div className="flex items-center">
          <Image src="/logo.svg" width={70} height={70} alt="logo" />
          <h1>{APP_NAME}</h1>
        </div>
        <p>
          Buy games with Gil. Earn daily rewards and unlock your next adventure.
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
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
