import Image from "next/image";

const ProductCard = ({ type }: { type: number }) => {
  return (
    <div>
      {type == 1 ? (
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
          </div>
        </div>
      ) : type == 2 ? (
        <div className="text-5xl border-2 border-primary">
          <div>
            <Image
              src="/product-image2.jpg"
              width={292}
              height={292}
              alt="product-image"
            />
          </div>
          <h1>Final Fantasy VII Remake</h1>
          <p>JRPG/Action</p>
          <p>
            2400 <span>Gil</span>
          </p>
          <div>
            <button className="bg-primary p-2">Buy Now</button>
            <button className="bg-secondary p-2">Add to Cart</button>
          </div>
        </div>
      ) : (
        <div>type else</div>
      )}
    </div>
  );
};

export default ProductCard;
