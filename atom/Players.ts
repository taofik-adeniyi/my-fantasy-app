import { atom, selector } from "recoil";
import { players } from "../assets/data/players";
import response from "../assets/data/response.json";

// export const allPlayersState = atom({
//     key: "allPlayersState",
//     default: players,
// })
const pos2pos = {
  Attacker: "FWD",
  Defender: "DEF",
  Midfielder: "MID",
  Goalkeeper: "GCK",
};
export const allPlayersState = selector({
  key: "allPlayersState",
  get: async () => {
    return response.response.map((entry) => ({
      id: entry.player.id,
      name: entry.player.name,
      match: "SWE vs DEN",
      price: 11_300_000,
      position: pos2pos[entry.statistics[0].games.position],
      totalPoints: 29,
    }));
  },
});

export const positionFilterState = atom({
  key: "positionFilterState",
  default: [] as string[],
});

export const filteredPlayers = selector({
  key: "filteredPlayers",
  get: ({ get }) => {
    const players = get(allPlayersState);
    const filters = get(positionFilterState);
    return players.filter(
      (player) => filters.length === 0 || filters.includes(player.position)
    );
  },
});


