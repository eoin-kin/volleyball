import React from "react";
import { TopNav } from "../Components/TopNav";
import PlayerCard from "../Components/PlayerCard";

function Players() {
  return (
    <>
      <TopNav />
      <div style={{ justifySelf: "center" }}>
        <PlayerCard />
      </div>
    </>
  );
}
export default Players;
