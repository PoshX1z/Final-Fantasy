import Image from "next/image";
import React from "react";

export const Promotion = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="border-primary border-2 max-w-73">
          <Image
            src="/product-image2.jpg"
            width={292}
            height={292}
            alt="product-image"
          />
          <div className="flex justify-between px-2">
            <p>
              <span>30</span> %
            </p>
            <p>
              <span>2400</span> Gil
            </p>
          </div>
        </div>
        <div className="border-primary border-2 max-w-73">
          <Image
            src="/product-image2.jpg"
            width={292}
            height={292}
            alt="product-image"
          />
          <div className="flex justify-between px-2">
            <p>
              <span>30</span> %
            </p>
            <p>
              <span>2400</span> Gil
            </p>
          </div>
        </div>
        <div className="border-primary border-2 max-w-73">
          <Image
            src="/product-image2.jpg"
            width={292}
            height={292}
            alt="product-image"
          />
          <div className="flex justify-between px-2">
            <p>
              <span>30</span> %
            </p>
            <p>
              <span>2400</span> Gil
            </p>
          </div>
        </div>
        <div className="border-primary border-2 max-w-73">
          <Image
            src="/product-image2.jpg"
            width={292}
            height={292}
            alt="product-image"
          />
          <div className="flex justify-between px-2">
            <p>
              <span>30</span> %
            </p>
            <p>
              <span>2400</span> Gil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
