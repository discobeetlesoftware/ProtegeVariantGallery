export class Key {
    static chip = "chips";
    static button = "buttons";
    static matsuiPlaque = "matsui_plaques";
    static ceramicPlaque = "ceramic_plaques";
}

export type Variant = {
    image: string;
    group: string;
    rarity: number;
    notes?: string;
    clay_color: {
        base: string;
        spot: string;
        notes?: string;
    };
    inlay: {
        text_color: string;
        text_size: string;
        notes?: string;
    };
};

export type Chip = {
    denom: string;
    proof: string;
    name: {
        en: string;
    };
    color: string;
    variants: Variant[];
};

export type Button = {
    proof: string;
    name: {
        en: string;
    };
    color: string;
    origin: string;
    image: string;
    total?: number;
    finish: string;
    edge: string;
};

export type Plaque = {
    denom: string;
    proof: string;
    name: {
        en: string;
    };
    color: string;
    variants: PlaqueVariant[];
};

export type PlaqueVariant = {
    origin: string;
    image: string;
    material: string;
    total?: number;
    size?: string;
};

export enum Rarity {
    common,
    uncommon,
    rare,
    legendary,
}
