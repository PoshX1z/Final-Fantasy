"use client";
import { toSlug } from "@/lib/utils";
import { useState } from "react";

export const AddForm = () => {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    price: 0,
    image: "/product-image.jpg",
    category: "",
    tag: "",
    platform: "",
    platformImageIcon: "",
    edition: "",
    developer: "",
    publisher: "",
    releaseDate: "01-01-2025",
    review: 0,
    countInStock: 0,
    numSales: 0,
    delivery: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  console.log(form);
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="Product Name..."
        value={form.name}
        onChange={(e) => {
          const name = e.target.value;
          setForm({
            ...form,
            name,
            slug: toSlug(name),
          });
        }}
        className="border-2 p-2 text-5xl"
      />
      <input
        type="text"
        placeholder="Description..."
        value={form.description}
        onChange={(e) => {
          const description = e.target.value;
          setForm({
            ...form,
            description,
          });
        }}
        className="border-2 p-2 text-5xl"
      />
      <input
        type="number"
        placeholder="Price..."
        value={form.price}
        onChange={(e) => {
          const price = parseFloat(e.target.value);
          setForm({
            ...form,
            price,
          });
        }}
        className="border-2 p-2 text-5xl"
      />
      <div>
        <label htmlFor="category-select">Select Category</label>
        <select
          value={form.category}
          id="category-select"
          onChange={(e) => {
            const category = e.target.value;
            setForm({
              ...form,
              category,
            });
          }}
          className="border-2 bg-black"
        >
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="JRPG">JRPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Simulation">Simulation</option>
          <option value="Sports">Sports</option>
          <option value="Racing">Racing</option>
          <option value="Fighting">Fighting</option>
          <option value="Shooter">Shooter</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Platformer">Platformer</option>
          <option value="Survival">Survival</option>
          <option value="Horror">Horror</option>
          <option value="Stealth">Stealth</option>
          <option value="OpenWorld">OpenWorld</option>
          <option value="MMO">MMO</option>
          <option value="BattleRoyald">BattleRoyald</option>
          <option value="StoryTelling">StoryTelling</option>
          <option value="Rhythm">Rhythm</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Tag..."
        value={form.tag}
        onChange={(e) => {
          const tag = e.target.value;
          setForm({
            ...form,
            tag,
          });
        }}
        className="border-2 p-2 text-5xl"
      />
      <div>
        <label htmlFor="platform-select">Select Platform</label>
        <select
          value={form.platform}
          id="platform-select"
          onChange={(e) => {
            const platform = e.target.value;
            setForm({
              ...form,
              platform,
              platformImageIcon: `/images/icons/${platform}-icon.png`,
            });
          }}
          className="border-2 bg-black"
        >
          <option value="ea">EA</option>
          <option value="epic">Epic Game</option>
          <option value="microsoft">Microsoft</option>
          <option value="nintendo">Nintendo</option>
          <option value="playstation">Playstation</option>
          <option value="steam">Steam</option>
          <option value="ubisoft">Ubisoft</option>
          <option value="xbox">Xbox</option>
        </select>
      </div>
    </form>
  );
};
