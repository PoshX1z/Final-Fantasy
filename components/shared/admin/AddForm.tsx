"use client";

import { toSlug } from "@/lib/utils";
import { useState } from "react";

export const AddForm = () => {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    price: 1,
    image: "/product-image.jpg",
    category: "action",
    tag: "",
    platform: "ea",
    platformImageIcon: "/images/ea-icons.png",
    edition: "normal",
    developer: "",
    publisher: "",
    releaseDate: "01-01-2025",
    review: 1,
    countInStock: 1,
    numSales: 1,
    delivery: "key",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      action="/api/product"
      method="POST"
    >
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
        name="name"
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
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="rpg">RPG</option>
          <option value="jrpg">JRPG</option>
          <option value="strategy">Strategy</option>
          <option value="simulation">Simulation</option>
          <option value="sports">Sports</option>
          <option value="racing">Racing</option>
          <option value="fighting">Fighting</option>
          <option value="shooter">Shooter</option>
          <option value="puzzle">Puzzle</option>
          <option value="platformer">Platformer</option>
          <option value="survival">Survival</option>
          <option value="horror">Horror</option>
          <option value="stealth">Stealth</option>
          <option value="openWorld">OpenWorld</option>
          <option value="mmo">MMO</option>
          <option value="battleRoyald">BattleRoyald</option>
          <option value="storyTelling">StoryTelling</option>
          <option value="rhythm">Rhythm</option>
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

      <div>
        <label htmlFor="edition-select">Select Edition</label>
        <select
          value={form.edition}
          id="edition-select"
          onChange={(e) => {
            const edition = e.target.value;
            setForm({
              ...form,
              edition,
            });
          }}
          className="border-2 bg-black"
        >
          <option value="normal">Normal Edition</option>
          <option value="deluxe">Deluxe Edition</option>
          <option value="ultimate">Ultimate Edition</option>
          <option value="premium">Premium Edition</option>
          <option value="gold">Gold Edition</option>
          <option value="silver">Silver Edition</option>
          <option value="platinum">Platinum Edition</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Developer..."
        value={form.developer}
        onChange={(e) => {
          const developer = e.target.value;
          setForm({
            ...form,
            developer,
          });
        }}
        className="border-2 p-2 text-5xl"
      />
      <input
        type="text"
        placeholder="Publisher..."
        value={form.publisher}
        onChange={(e) => {
          const publisher = e.target.value;
          setForm({
            ...form,
            publisher,
          });
        }}
        className="border-2 p-2 text-5xl"
      />
      <input
        type="number"
        placeholder="Review..."
        value={form.review}
        onChange={(e) => {
          const review = parseFloat(e.target.value);
          setForm({
            ...form,
            review,
          });
        }}
        className="border-2 p-2 text-5xl"
      />
      <input
        type="number"
        placeholder="Count in Stock..."
        value={form.countInStock}
        onChange={(e) => {
          const countInStock = parseFloat(e.target.value);
          setForm({
            ...form,
            countInStock,
          });
        }}
        className="border-2 p-2 text-5xl"
      />
      <input
        type="number"
        placeholder="Number of Sales..."
        value={form.numSales}
        onChange={(e) => {
          const numSales = parseFloat(e.target.value);
          setForm({
            ...form,
            numSales,
          });
        }}
        className="border-2 p-2 text-5xl"
      />

      <div>
        <label htmlFor="delivery-select">Select Delivery Type</label>
        <select
          value={form.delivery}
          id="delivery-select"
          onChange={(e) => {
            const delivery = e.target.value;
            setForm({
              ...form,
              delivery,
            });
          }}
          className="border-2 bg-black"
        >
          <option value="key">Key</option>
          <option value="account">Account</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-primary hover:brightness-50 active:brightness-100"
      >
        Add Product
      </button>
      {/* TODO: ReleaseDate, Images */}
      {/* Improve: implement react hook form */}
    </form>
  );
};
