"use client";

import { supabase, uploadFile } from "@/lib/db/supabase";
import { toSlug } from "@/lib/utils";
import { IProductInput } from "@/types";
import { useState } from "react";

export const AddForm = () => {
  const platformImageIconLocation = (platform: string) =>
    supabase.storage
      .from("platform-image-icons")
      .getPublicUrl(`platform-image-icons/${platform}-icon`).data.publicUrl;

  const [categories, setCategories] = useState<string[]>([]);

  const handleCategory = (e: any) => {
    const value = e.target.value;
    const checked = e.target.checked;

    setCategories((category) =>
      checked ? [...category, value] : category.filter((cat) => cat !== value),
    );
  };
  const [form, setForm] = useState<IProductInput>({
    name: "",
    slug: "",
    description: "",
    price: 1,
    image: "",
    category: "action",
    tag: "normal",
    platform: "ea",
    edition: "standard",
    developer: "",
    publisher: "",
    releaseDate: "2025-01-12",
    review: 1,
    countInStock: 1,
    numSales: 1,
    delivery: "key",
  });

  console.log("normal form", form);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formUserInput = e.currentTarget;
    const formData = new FormData(formUserInput);
    const formImage = formData.get("image") as File;

    uploadFile(formImage);

    const fileName = `${formImage.size}-${formImage.name}`;
    const imageUrl = supabase.storage
      .from("products")
      .getPublicUrl(`/images/${fileName}`).data.publicUrl;
    formData.set("image", imageUrl);
    fetch("/api/product", {
      method: "POST",
      body: formData,
    });
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
        name="name"
        value={form.name}
        onChange={(e) => {
          const name = e.target.value;
          setForm({
            ...form,
            name,
            slug: toSlug(name),
          });
        }}
        className="border-2 p-2 "
      />
      <input
        type="text"
        placeholder="Slug..."
        name="slug"
        value={form.slug}
        readOnly
        onChange={(e) => {
          const slug = e.target.value;
          setForm({
            ...form,
            slug,
          });
        }}
        className="border-2 p-2 "
      />
      <input
        type="text"
        placeholder="Description..."
        name="description"
        value={form.description}
        onChange={(e) => {
          const description = e.target.value;
          setForm({
            ...form,
            description,
          });
        }}
        className="border-2 p-2 "
      />
      <input
        type="number"
        placeholder="Price..."
        name="price"
        value={form.price}
        onChange={(e) => {
          const price = parseFloat(e.target.value);
          setForm({
            ...form,
            price,
          });
        }}
        className="border-2 p-2 "
      />
      <div>
        <label htmlFor="action">
          <input
            type="checkbox"
            name="categories"
            id="action"
            value="action"
            onChange={handleCategory}
          />
          Action
        </label>
        <label htmlFor="adventure">
          <input
            type="checkbox"
            name="categories"
            id="adventure"
            value="adventure"
            onChange={handleCategory}
          />
          Adventure
        </label>
        <label htmlFor="rpg">
          <input
            type="checkbox"
            name="categories"
            id="rpg"
            value="rpg"
            onChange={handleCategory}
          />
          RPG
        </label>
        <label htmlFor="jrpg">
          <input
            type="checkbox"
            name="categories"
            id="jrpg"
            value="jrpg"
            onChange={handleCategory}
          />
          JRPG
        </label>
        <label htmlFor="strategy">
          <input
            type="checkbox"
            name="categories"
            id="strategy"
            value="strategy"
            onChange={handleCategory}
          />
          Strategy
        </label>
        <label htmlFor="simulation">
          <input
            type="checkbox"
            name="categories"
            id="simulation"
            value="simulation"
            onChange={handleCategory}
          />
          Simulation
        </label>
        <label htmlFor="sports">
          <input
            type="checkbox"
            name="categories"
            id="sports"
            value="sports"
            onChange={handleCategory}
          />
          Sports
        </label>
        <label htmlFor="racing">
          <input
            type="checkbox"
            name="categories"
            id="racing"
            value="racing"
            onChange={handleCategory}
          />
          Racing
        </label>
        <label htmlFor="fighting">
          <input
            type="checkbox"
            name="categories"
            id="fighting"
            value="fighting"
            onChange={handleCategory}
          />
          Fighting
        </label>
        <label htmlFor="shooter">
          <input
            type="checkbox"
            name="categories"
            id="shooter"
            value="shooter"
            onChange={handleCategory}
          />
          Shooter
        </label>
        <label htmlFor="puzzle">
          <input
            type="checkbox"
            name="categories"
            id="puzzle"
            value="puzzle"
            onChange={handleCategory}
          />
          Puzzle
        </label>
        <label htmlFor="platformer">
          <input
            type="checkbox"
            name="categories"
            id="platformer"
            value="platformer"
            onChange={handleCategory}
          />
          Platformer
        </label>
        <label htmlFor="survival">
          <input
            type="checkbox"
            name="categories"
            id="survival"
            value="survival"
            onChange={handleCategory}
          />
          Survival
        </label>
        <label htmlFor="horror">
          <input
            type="checkbox"
            name="categories"
            id="horror"
            value="horror"
            onChange={handleCategory}
          />
          Horror
        </label>
        <label htmlFor="stealth">
          <input
            type="checkbox"
            name="categories"
            id="stealth"
            value="stealth"
            onChange={handleCategory}
          />
          Stealth
        </label>
        <label htmlFor="openWorld">
          <input
            type="checkbox"
            name="categories"
            id="openWorld"
            value="openWorld"
            onChange={handleCategory}
          />
          Open World
        </label>
        <label htmlFor="mmo">
          <input
            type="checkbox"
            name="categories"
            id="mmo"
            value="mmo"
            onChange={handleCategory}
          />
          MMO
        </label>
        <label htmlFor="battleRoyald">
          <input
            type="checkbox"
            name="categories"
            id="battleRoyald"
            value="battleRoyald"
            onChange={handleCategory}
          />
          Battle Royald
        </label>
        <label htmlFor="storyTelling">
          <input
            type="checkbox"
            name="categories"
            id="storyTelling"
            value="storyTelling"
            onChange={handleCategory}
          />
          Story Telling
        </label>
        <label htmlFor="rhythm">
          <input
            type="checkbox"
            name="categories"
            id="rhythm"
            value="rhythm"
            onChange={handleCategory}
          />
          Rhythm
        </label>
      </div>
      <div>
        <label htmlFor="tag-select">Select Tag Of Product</label>
        <select
          name="tag"
          value={form.tag}
          id="category-select"
          onChange={(e) => {
            const tag = e.target.value;
            setForm({
              ...form,
              tag,
            });
          }}
          className="border-2 bg-black"
        >
          <option value="normal">Normal Game</option>
          <option value="hero">Hero Banner</option>
          <option value="promotion">Promotional Game</option>
          <option value="featured">Featured Game</option>
        </select>
      </div>
      <div>
        <label htmlFor="platform-select">Select Platform</label>
        <select
          name="platform"
          value={form.platform}
          id="platform-select"
          onChange={(e) => {
            const platform = e.target.value;
            setForm({
              ...form,
              platform,
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
          name="edition"
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
          <option value="standard">Standard Edition</option>
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
        name="developer"
        value={form.developer}
        onChange={(e) => {
          const developer = e.target.value;
          setForm({
            ...form,
            developer,
          });
        }}
        className="border-2 p-2 "
      />
      <input
        type="text"
        placeholder="Publisher..."
        name="publisher"
        value={form.publisher}
        onChange={(e) => {
          const publisher = e.target.value;
          setForm({
            ...form,
            publisher,
          });
        }}
        className="border-2 p-2 "
      />

      <input
        type="number"
        placeholder="Review..."
        name="review"
        value={form.review}
        onChange={(e) => {
          const review = parseFloat(e.target.value);
          setForm({
            ...form,
            review,
          });
        }}
        className="border-2 p-2 "
      />
      <input
        type="number"
        placeholder="Count in Stock..."
        name="countInStock"
        value={form.countInStock}
        onChange={(e) => {
          const countInStock = parseFloat(e.target.value);
          setForm({
            ...form,
            countInStock,
          });
        }}
        className="border-2 p-2 "
      />
      <input
        type="number"
        placeholder="Number of Sales..."
        name="numSales"
        value={form.numSales}
        onChange={(e) => {
          const numSales = parseFloat(e.target.value);
          setForm({
            ...form,
            numSales,
          });
        }}
        className="border-2 p-2 "
      />

      <div>
        <label htmlFor="delivery-select">Select Delivery Type</label>
        <select
          name="delivery"
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

      <input type="file" name="image" className="border-2 p-2 " />
      <input
        type="text"
        placeholder="Release Date..."
        name="releaseDate"
        value={form.releaseDate}
        onChange={(e) => {
          const releaseDate = e.target.value;
          setForm({
            ...form,
            releaseDate,
          });
        }}
        className="border-2 p-2 "
      />
      <button
        type="submit"
        className="bg-primary hover:brightness-50 active:brightness-100"
      >
        Add Product
      </button>
      {/* Improve: implement react hook form and add zod validation */}
    </form>
  );
};
//
