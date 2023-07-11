import { Team } from "./Team"

export class ScoreKeeper {
    
    private static instance: ScoreKeeper
    teams: Team []
    pointsA: Team["points"]
    pointsB: Team["points"]

    private constructor() {
        this.teams = []
        this.pointsA = 0
        this.pointsB = 0
    }

    public static getInstance(): ScoreKeeper {
        if(!ScoreKeeper.instance) {
            ScoreKeeper.instance = new ScoreKeeper
        }
        return ScoreKeeper.instance
    }

    public addNewTeam(teamName: string) {
        const newTeam = new Team(teamName)
        this.teams.push(newTeam)
    }

    public getTeam(teamName: string) {
        const teamSelected = this.teams.find((team) => team.teamName === teamName)
        return teamSelected
    }

    public getRandomItems(team: Team) {
        const randomTeam = Math.floor(Math.random() * 2)
        const randomPuntiation = Math.floor(Math.random() * 3) + 1

        const randomPlayerIndex = Math.floor(Math.random() * this.teams[randomTeam].players.length);
        const randomPlayer = this.teams[randomTeam].players[randomPlayerIndex];

        console.log(`${randomPlayer.name} scores a shot of ${randomPuntiation} points`);
        
    }

    scoreTeamA1() {
        this.pointsA += 1
    }

    scoreTeamA2() {
        this.pointsA += 2
    }

    scoreTeamA3() {
        this.pointsA += 3
    }

    scoreTeamB1() {
        this.pointsB += 1
    }

    scoreTeamB2() {
        this.pointsB += 2
    }

    scoreTeamB3() {
        this.pointsB += 3
    }

    getScore() {
        const padZeros = (num: number): string => {
            return num < 10 ? `00${num}` : num < 100 ? `0${num}` : `${num}`
        }
        
        const formattedPointsA = padZeros(this.pointsA)
        const formattedPointsB = padZeros(this.pointsB)
        const score =  `${formattedPointsA}:${formattedPointsB}`

        console.log(score)

        return score
    }

    getShot(): Promise<void> {
        return new Promise<void>(resolve => {
            setTimeout(async () => {
                const randomTeam = Math.floor(Math.random() * 2)
                const randomPuntiation = Math.floor(Math.random() * 3) + 1

                const randomPlayerIndex = Math.floor(Math.random() * this.teams[randomTeam].players.length);
                const randomPlayer = this.teams[randomTeam].players[randomPlayerIndex];

                console.log(`${randomPlayer.name} scores a shot of ${randomPuntiation} points`);
                

                if(randomTeam === 0) {
                    switch(randomPuntiation) {
                        case 1:
                            this.scoreTeamA1();
                            break;
                        case 2: 
                            this.scoreTeamA2();
                            break;
                        case 3:
                            this.scoreTeamA3();
                            break;
                    }
                } else {
                    switch(randomPuntiation) {
                        case 1:
                            this.scoreTeamB1();
                            break;
                        case 2: 
                            this.scoreTeamB2();
                            break;
                        case 3:
                            this.scoreTeamB3();
                            break;
                    }
                }

                resolve();
            }, 2000)
        })
    }

    async play(): Promise<string> {
        for (let i = 0; i < 10; i++) {
            await this.getShot();
        }

        return this.getScore()
    }
}