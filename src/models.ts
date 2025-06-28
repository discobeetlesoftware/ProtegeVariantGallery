export class Key {
    static chip = "chips";
    static button = "buttons";
    static matsuiPlaque = "matsui_plaques";
    static ceramicPlaque = "ceramic_plaques";
}

export type EmptyString = '';
export type ImageName = `${string}.jpg` | EmptyString;
export type LocalizedString = {
    en: string;
};
export type HexColor = `#${string}`;
export enum Rarity {
    common,
    uncommon,
    rare,
    legendary,
}

//// CHIP TYPES

export type Chip = {
    denom: string;
    proof: ImageName;
    name: LocalizedString;
    color: string;
    variants: ChipVariant[];
};

export type ChipVariant = {
    image: ImageName;
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
        notes ? : string;
    };
};

//// BUTTON TYPES

export enum EdgeAligment {
    'Unaligned', 'Aligned', 'Uniform'
};

export enum ButtonType {
    dealer, bounty, nit
};

export enum ButtonFinish {
    "Matte", "Pearlized Plastic"
}

export type ButtonVariant = {
    proof?: ImageName;
    color: string;
    origin: string;
    image: ImageName;
    finish: ButtonFinish;
    edge: EdgeAligment;
    total?: number | number[];
}

export type Button = {
    name: LocalizedString;
    type: ButtonType;
    variants: ButtonVariant[];
};

//// PLAQUE TYPES

export enum PlaqueMaterial {
    Ceramic, Plastic
}

export type Plaque = {
    denom: string;
    proof: ImageName;
    name: LocalizedString;
    color: HexColor;
    variants: PlaqueVariant[];
};

export type PlaqueVariant = {
    origin: string;
    image: ImageName;
    material: PlaqueMaterial;
    total?: number | number[];
    size?: string;
    mould?: string;
    mfg_color?: string;
};
