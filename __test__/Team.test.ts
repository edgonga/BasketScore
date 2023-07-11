import { Team } from "../src/Team"

test('the player is added correctly', () => {
    const team = new Team('Test Team');
    team.addPlayer('Lucas', team);
    expect(team.players.length).toBe(1);
    expect(team.players[0].name).toBe('Lucas');
});

test('it is initialised as expected', () => {
    const team = new Team('Test Team');
    expect(team.getProperties()).toEqual({
        team: 'Test Team',
        players: [],
        points: 0
    });
});

test('retrieves players correctly', () => {
    const team = new Team('Test Team');
    team.addPlayer('Javi', team);
    expect(team.getPlayers()).toEqual({
        team: 'Test Team',
        players: [{
            name: 'Javi'
        }]
    });
});