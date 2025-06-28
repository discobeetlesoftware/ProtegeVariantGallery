import { type Plaque, PlaqueMaterial } from '../../models';

export const ceramicPlaques: Plaque[] = [
	{
		denom: "$10",
		proof: "",
		name: {
			en: "ten dollar plaque"
		},
		color: "#F9D2AD",
		variants: [
			{
				origin: "Unknown",
				image: "plaque_10dollar_v1.jpg",
				material: PlaqueMaterial.Ceramic
			}
		]
	},
	{
		denom: "$1k",
		proof: "plaque_1k.jpg",
		name: {
			en: "one thousand dollar plaque"
		},
		color: "#F8CE51",
		variants: [
			{
				origin: "Sidepot",
				image: "",
				material: PlaqueMaterial.Ceramic
			}
		]
	},
	{
		denom: "$5k",
		proof: "plaque_5k.jpg",
		name: {
			en: "five thousand dollar plaque"
		},
		color: "#7F3E4F",
		variants: [
			{
				origin: "Sidepot",
				image: "plaque_5k_v1.jpg",
				material: PlaqueMaterial.Ceramic
			}
		]
	},
	{
		denom: "$25k",
		proof: "plaque_25k.jpg",
		name: {
			en: "twenty-five thousand dollar plaque"
		},
		color: "#E88437",
		variants: [
			{
				origin: "Sidepot",
				image: "plaque_25k_v1.jpg",
				material: PlaqueMaterial.Ceramic
			}
		]
	},
	{
		denom: "$100k",
		proof: "plaque_100k.jpg",
		name: {
			en: "one hundred thousand dollar plaque"
		},
		color: "#5991C5",
		variants: [
			{
				origin: "Sidepot",
				image: "",
				material: PlaqueMaterial.Ceramic
			}
		]
	},
	{
		denom: "$500k",
		proof: "plaque_500k.jpg",
		name: {
			en: "five hundred thousand dollar plaque"
		},
		color: "#68A05B",
		variants: [
			{
				origin: "Sidepot",
				image: "",
				material: PlaqueMaterial.Ceramic
			}
		]
	},
	{
		denom: "$1m",
		proof: "plaque_1000k.jpg",
		name: {
			en: "one million dollar plaque"
		},
		color: "#424373",
		variants: [
			{
				origin: "Sidepot",
				image: "",
				material: PlaqueMaterial.Ceramic
			}
		]
	}
];