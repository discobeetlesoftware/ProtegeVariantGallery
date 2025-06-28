import { buttons } from '@data/buttons';
import { chips } from '@data/chips';
import { ceramicPlaques } from '@data/plaques_ceramic';
import { matsuiPlaques } from '@data/plaques_matsui';
import { Controller } from './controller';
import type { Button, Chip, Plaque } from './models';

export var rarityCounts = [0, 0, 0, 0];
chips.forEach(chip => {
	chip.variants.forEach(variant => {
		let rarity = Controller.convertRarity(variant.rarity);
		rarityCounts[rarity] += 1;
	});
});

var counts = {
	chips: {
		total: chips.length,
		variants: chips.reduce((count, chip) => {
			return count + chip.variants.length;
		}, 0),
	},
	buttons: {
		total: buttons.length,
		variants: buttons.reduce((count, button) => {
			return count + button.variants.length;
		}, 0),
	},
	plaques: {
		total: ceramicPlaques.length + matsuiPlaques.length,
		variants: ceramicPlaques.length + matsuiPlaques.length
	}
};

export type Counts = {
	total: number;
	variants: number;
};

export type Protege = {
	buttons: Button[];
	chips: Chip[];
	ceramicPlaques: Plaque[];
	matsuiPlaques: Plaque[];
	count: {
		chips: Counts;
		buttons: Counts;
		plaques: Counts;
	};
};

// count: count,
// total: counts.chips + counts.buttons + counts.plaque.ceramic + counts.plaque.matsui,
// plaquesTotal: counts.plaque.ceramic + counts.plaque.matsui
export var protege: Protege = {
	buttons: buttons,
	chips: chips,
	ceramicPlaques: ceramicPlaques,
	matsuiPlaques: matsuiPlaques,
	count: counts
};
