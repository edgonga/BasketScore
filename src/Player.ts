import { Team } from "./Team"

export class Player {
    name: string
    team: Team 

    constructor(name: string, team: Team) {
        this.name = name,
        this.team = team
    }

    public getName() {
        return {
            name: this.name
        }
    }
}