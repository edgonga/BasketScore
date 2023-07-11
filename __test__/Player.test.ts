import { Team } from "../src/Team"
import { Player } from "../src/Player"

test('creates players with name and team', () => {
    const team = new Team('Test Team')
    const player = new Player('Test Player', team)
    expect(player.name).toBe('Test Player')
    expect(player.team).toBe(team)
})