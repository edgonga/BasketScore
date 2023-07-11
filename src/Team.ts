import { Player } from "./Player";

export class Team {
    players: Player[]
    points: number
    teamName: string

    constructor(teamName: string) {
        this.teamName = teamName
        this.players = []
        this.points = 0
    }

    public addPlayer(newPlayer: string, team: Team) {
        const player = new Player(newPlayer, team)
        this.players.push(player)
    }

    public getProperties() {
        return {
            team: this.teamName,
            players: this.players,
            points: this.points
        }
    }

    public getPlayers() {
        return {
            team: this.teamName,
            players: this.players.map((player: Player) => {
                return {
                    name: player.name
                }
            })
        }
    }
}