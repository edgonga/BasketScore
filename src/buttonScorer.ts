import { ScoreKeeper } from "./ScoreKeeper";

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

const selectedPuntuation = process.argv[2];
const selectedTeam = process.argv[3]

if (selectedPuntuation === "1" && selectedTeam === "A") {
	scoreKeeper.scoreTeamA1()
}

if (selectedPuntuation === "2" && selectedTeam === "A") {
	scoreKeeper.scoreTeamA2()
}

if (selectedPuntuation === "3" && selectedTeam === "A") {
	scoreKeeper.scoreTeamA3()
}

if (selectedPuntuation === "1" && selectedTeam === "B") {
	scoreKeeper.scoreTeamB1()
}

if (selectedPuntuation === "2" && selectedTeam === "B") {
	scoreKeeper.scoreTeamB2()
}

if (selectedPuntuation === "3" && selectedTeam === "B") {    
    scoreKeeper.scoreTeamB3()
}

scoreKeeper.getScore()