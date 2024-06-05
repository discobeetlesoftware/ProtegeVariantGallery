import { Rarity } from "./models";

export class Controller {
    static anchor(source: string): string {
        return source.replace(/[(]|[)]|[-]|\s/g, "_");
    }

    static themeKey(source: string): string {
        return source.replace(/[(]|[)]|[-]|\s/g, "");
    }

    static convertRarity(value: number): Rarity {
        if (value <= 4) {
            return Rarity.common;
        }
        if (value <= 7) {
            return Rarity.uncommon;
        }
        if (value <= 9) {
            return Rarity.rare;
        }
        return Rarity.legendary;
    }

    static descriptionForRarity(rarity: Rarity): string {
        switch (rarity) {
            case Rarity.common:
                return "Common";
            case Rarity.uncommon:
                return "Uncommon";
            case Rarity.rare:
                return "Rare";
            case Rarity.legendary:
                return "Legendary";
        }
    }

    static classForRarity(rarity: Rarity): string {
        switch (rarity) {
            case Rarity.common:
                return "rarity_common";
            case Rarity.uncommon:
                return "rarity_uncommon";
            case Rarity.rare:
                return "rarity_rare";
            case Rarity.legendary:
                return "rarity_legendary";
        }
    }

    static linkImage(imageName: string): string {
        return `${import.meta.env.BASE_URL}/images/${imageName}`;
    }
}
