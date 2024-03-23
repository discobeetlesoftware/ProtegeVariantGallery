export class Controller {
    static anchor(source: string): string {
        return source.replace(/[(]|[)]|[-]|\s/g, "_");
    }

    static themeKey(source: string): string {
        return source.replace(/[(]|[)]|[-]|\s/g, "");
    }

    static convertRange(value: number): string {
        if (value <= 4) {
            return "Common";
        }
        if (value <= 7) {
            return "Uncommon";
        }
        if (value <= 9) {
            return "Rare";
        }
        return "Legendary";
    }

    static linkImage(imageName: string): string {
        return `${import.meta.env.BASE_URL}/images/${imageName}`;
    }
}
