import { atom, selector } from "recoil";
import { Player, Positions } from "../types";

export const myTeamList = atom({
    key: "MyTeamList",
    default: [] as Player[],
})

export const myFormationState = atom({
    key: "MyFormation",
    default: {
        FWD: 3,
        MID: 3,
        DEF: 4,
        GCK: 1,
    }
})

const positions = ["FWD", "MID","DEF", "GCK"] as Positions[];

export const myPlayerByPosition = selector({
    key: "MyPlayerByPosition",
    get: ({ get }) => {
        const players = get(myTeamList)
        const formation = get(myFormationState)
        const groupedPlayers = {}

        positions.forEach(position => {
            groupedPlayers[position] = players.filter(p => p.position === position)
            // fill formation with empty null when no players picked
            for(i = groupedPlayers[position].length; i <  formation[position]; i++) {
                groupedPlayers[position].push(null)
            }
        })

        return groupedPlayers;
    }
})

export const numberOfPlayers = selector({
    key: "numberOfPlayers",
    get: ({ get }) => {
      return get(myTeamList).length;
    },
  });
  
  export const valueOfPlayers = selector({
    key: "valueOfPlayers",
    get: ({ get }) => {
      return get(myTeamList).reduce((acc, player) => acc + player.price, 0);
    },
  });