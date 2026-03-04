import React from "react";

export const SidebarStore = () => {
  return (
    <div className="bg-primary h-screen">
      <h1>Filter</h1>

      <div>
        <h1>Category Selected</h1>
        <select name="category" className="bg-black">
          Category
          <option value="all">All</option>
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
        <div>
          <h1>Price (Gil)</h1>
          <div>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="from..."
                className="w-32 border-2 border-secondary"
              />
              <input
                type="text"
                placeholder="to..."
                className="w-32 border-2 border-secondary"
              />
            </div>
            <button className="border-2 border-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
