export class Pokemon {
    name!: string;
    url!: string;
};

export class ResponseApiPokemon {
    count!: number;
    next!: string;
    previous!: string;
    results!: Pokemon[];
};