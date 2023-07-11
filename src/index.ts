// Basket Score

import { Player } from "./Player";
import { ScoreKeeper } from "./ScoreKeeper";
import { Team } from "./Team";

console.log("------------------------------------------------");

const scoreKeeper = ScoreKeeper.getInstance()

scoreKeeper.addNewTeam("Team A")
scoreKeeper.addNewTeam("Team B")
const teamA = scoreKeeper.getTeam("Team A")
const teamB = scoreKeeper.getTeam("Team B")
teamA?.addPlayer("Pau Gasol", teamA)
teamB?.addPlayer("Marc Gasol", teamB)
teamA?.addPlayer("Michael Jordan", teamA)
teamB?.addPlayer("Kobe Bryant", teamB)
teamA?.addPlayer("LeBron James", teamA)
teamB?.addPlayer("Steph Curry", teamB)
teamA?.addPlayer("Yao Ming", teamA)
teamB?.addPlayer("Larry Bird", teamB)
console.log(teamA?.getPlayers());
console.log(teamB?.getPlayers());

scoreKeeper.play()