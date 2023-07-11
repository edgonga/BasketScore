import { ScoreKeeper } from "../src/ScoreKeeper"

test('it creates an instance correctly', () => {
    const scoreKeeper = ScoreKeeper.getInstance()
    expect(scoreKeeper).toBeInstanceOf(ScoreKeeper)
})

test('we can get the name and is stored correctly', () => {
    const scoreKeeper = ScoreKeeper.getInstance()
    scoreKeeper.addNewTeam('Team A')
    const team = scoreKeeper.getTeam('Team A')
    expect(scoreKeeper.teams.length).toBe(1)
    expect(team).toBeDefined()
    expect(team?.teamName).toBe('Team A')
})
