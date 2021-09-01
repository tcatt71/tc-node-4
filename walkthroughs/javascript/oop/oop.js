let team = {
    name: undefined,
    city: undefined,
    roster: [],
    playGame: function (team) {
        console.log(`Playing the ${team.name}`);
    },
};

function createTeam(name, city) {
    let obj = Object.create(team);
    obj.name = name;
    obj.city = city;
    return obj;
}

let teams = [
    createTeam("Trailblazers", "Portland"),
    createTeam("76ers", "Philedelphia"),
];
console.log(teams);
teams[0].playGame(teams[1]);

class Team {
    constructor(city, name) {
        this.city = city;
        this.name = name;
    }

    playGame(team) {
        console.log(`Playing the ${team.name}`);
    }
}

class Person {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }

    greet() {
        console.log("Hello World!");
    }
}

let ben = new Person("Ben", "Hoover");
ben.greet();

class Coder extends Person {
    constructor(name, city, favLang) {
        super(name, city);
        this.favLang = favLang;
    }

    greet() {
        console.log("Coding World!");
    }

    code(msg) {
        return msg
            .split("")
            .map((l, idx) => msg.charCodeAt(idx).toString(2))
            .join(" ");
    }
}

let bryantellius = new Coder(
    "Bryantellius",
    "The Grand Exchange",
    "JavaScript"
);
console.log(bryantellius.code("Hello World!"));
