import { type Plaque, PlaqueMaterial } from '../../models';

export const matsuiPlaques: Plaque[] = [
	{
		denom: "$20",
		proof: "plaque_matsui_20.jpg",
		name: {
			en: "twenty dollar plaque (Matsui)"
		},
		color: "#FEDD00",
		variants: [
			{
				origin: "Matsui (2022)",
				image: "plaque_matsui_20_v1.jpg",
				material: PlaqueMaterial.Plastic,
				total: 141,
				size: "82x57x6mm",
				mould: "CC450",
				mfg_color: "P/T Yellow C"
			}
		]
	},
	{
		denom: "$100",
		proof: "plaque_matsui_100.jpg",
		name: {
			en: "one hundred dollar plaque (Matsui)"
		},
		color: "#333F48",
		variants: [
			{
				origin: "Matsui (2022)",
				image: "plaque_matsui_100_v1.jpg",
				material: PlaqueMaterial.Plastic,
				total: 201,
				size: "95x66x6mm",
				mould: "CC450",
				mfg_color: "P/T 432 C"
			}
		]
	},
	{
		denom: "$500",
		proof: "plaque_matsui_500.jpg",
		name: {
			en: "five hundred dollar plaque (Matsui)"
		},
		color: "#7d26cd",
		variants: [
			{
				origin: "Matsui (2022)",
				image: "plaque_matsui_500_v1.jpg",
				material: PlaqueMaterial.Plastic,
				total: 73,
				size: "102x70x6mm",
				mould: "CC450",
				mfg_color: "P/T 2088 C"
			}
		]
	},
	{
		denom: "$1k",
		proof: "plaque_matsui_1000.jpg",
		name: {
			en: "one thousand dollar plaque (Matsui)"
		},
		color: "#FEDD00",
		variants: [
			{
				origin: "Matsui (2022)",
				image: "plaque_matsui_1k_v1.jpg",
				material: PlaqueMaterial.Plastic,
				total: 54,
				size: "108x75x6mm",
				mould: "CC450",
				mfg_color: "P/T Yellow C"
			}
		]
	},
	{
		denom: "$5k",
		proof: "plaque_matsui_5000.jpg",
		name: {
			en: "five thousand dollar plaque (Matsui)"
		},
		color: "#FF8200",
		variants: [
			{
				origin: "Matsui (2022)",
				image: "plaque_matsui_5k_v1.jpg",
				material: PlaqueMaterial.Plastic,
				total: 28,
				size: "119x82x6mm",
				mould: "CC450",
				mfg_color: "P/T 151 C"
			}
		]
	},
	{
		denom: "$100k",
		proof: "plaque_matsui_500000.jpg",
		name: {
			en: "five hundred thousand dollar plaque (Matsui)"
		},
		color: "#FFFFFF",
		variants: [
			{
				origin: "Matsui (2022)",
				image: "plaque_matsui_500k_v1.jpg",
				material: PlaqueMaterial.Plastic,
				total: 60,
				size: "108x75x6mm",
				mould: "CC450",
				mfg_color: "White"
			}
		]
	}
];