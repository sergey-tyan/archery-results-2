// @flow

export type Score = 'E' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'X';
export type ArcheryType = 'INDOOR' | 'OUTDOOR';

export class Round {
    arrows: number;
    ends: number;
    distance: number;
    results: Array<Score>;

    constructor(arrows: number, ends: number, distance: number) {
        this.arrows = arrows;
        this.ends = ends;
        this.distance = distance;
        this.results = Array(arrows * ends).fill('E');
    }
}

const sum = (a, b) => a + b;
const convertScore = (score: Score) => {
    if (score === 'E') {
        return 0;
    }
    if (score === 'X') {
        return 10;
    }
    return score;
};

export class Result {
    createDate: Date;
    lastEditDate: Date;
    title: string;
    notes: string;
    type: ArcheryType;
    isCompetition: boolean;
    rounds: Array<Round>;
    constructor(title: string, isCompetition: boolean, type: ArcheryType) {
        this.title = title;
        this.isCompetition = isCompetition;
        this.createDate = new Date();
        this.lastEditDate = new Date();
        this.type = type;
    }

    getTotal() {
        return this.rounds.map(item => item.arrows * item.ends).reduce(sum, 0);
    }

    getCurrentResult() {
        return this.rounds
            .map(item => item.results.map(convertScore).reduce(sum, 0))
            .reduce(sum, 0);
    }
}
