class Team {
    constructor(name) {
        this.teamname = teamname;
        this.trainername = 'ash';
        this.pokemonTeam = [];
    }

    describe() {
        return `${this.teamname} with trainer ${this.trainername} has these pokemon: ${[...this.pokemonTeam]}`;
    }
}
export default Team;