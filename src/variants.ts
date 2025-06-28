import * as buttonVariants from '@data/buttons.json';
import * as chipVariants from '@data/chips.json';
import * as ceramicPlaqueVariants from '@data/plaques_ceramic.json';
import * as matsuiPlaqueVariants from '@data/plaques_matsui.json';
import { Controller } from './controller';
import type { Button, Chip, Plaque } from './models';

export var rarityCounts = [0, 0, 0, 0];
chipVariants.forEach(chip => {
	chip.variants.forEach(variant => {
		let rarity = Controller.convertRarity(variant.rarity);
		rarityCounts[rarity] += 1;
	});
});

var counts = {
	chips: chipVariants.reduce((count, chip) => {
		return count + chip.variants.length;
	}, 0),
	buttons: buttonVariants.reduce((count, button) => {
		return count + button.variants.length;
	}, 0),
	plaque: {
		ceramic: ceramicPlaqueVariants.length,
		matsui: matsuiPlaqueVariants.length
	}
};

export type Variants = {
	buttons: Button[];
	chips: Chip[];
	ceramicPlaques: Plaque[];
	matsuiPlaques: Plaque[];
	counts: {
		chips: number;
		buttons: number;
		plaque: {
			ceramic: number;
			matsui: number;
		};
	};
	total: number;
	plaquesTotal: number;
};

export var variants: Variants = {
	buttons: buttonVariants,
	chips: chipVariants,
	ceramicPlaques: ceramicPlaqueVariants,
	matsuiPlaques: matsuiPlaqueVariants,
	counts: counts,
	total: counts.chips + counts.buttons + counts.plaque.ceramic + counts.plaque.matsui,
	plaquesTotal: counts.plaque.ceramic + counts.plaque.matsui
};
