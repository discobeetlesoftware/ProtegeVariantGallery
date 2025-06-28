import { type Button, ButtonType, ButtonFinish, EdgeAligment } from '../../models';

export const buttons: Button[] = [
	{
		type: ButtonType.nit,
		name: {
			en: "nit"
		},
		variants: [
			{
				proof: "",
				color: "red",
				origin: "Matsui (2024)",
				image: "nit_button_v1.jpg",
				total: 43,
				finish: ButtonFinish["Pearlized Plastic"],
				edge: EdgeAligment.Unaligned
			}
		]
	},
	{
		type: ButtonType.bounty,
		name: {
			en: "bounty"
		},
		variants: [
			{
				proof: "",
				color: "cyan",
				origin: "Matsui (2024)",
				image: "bounty_button_v1.jpg",
				total: 72,
				finish: ButtonFinish["Pearlized Plastic"],
				edge: EdgeAligment.Unaligned
			}
		]
	},
	{
		type: ButtonType.dealer,
		name: {
			en: "dealer"
		},
		variants: [
			{
				proof: "",
				color: "#D9B796",
				origin: "ChipTalk Group Buy",
				image: "dealer_button_v1.jpg",
				finish: ButtonFinish.Matte,
				edge: EdgeAligment.Unaligned
			},
			{
				proof: "",
				color: "#D9B796",
				origin: "Unknown",
				image: "dealer_button_v2.jpg",
				finish: ButtonFinish.Matte,
				edge: EdgeAligment.Unaligned
			},
			{
				proof: "",
				color: "#D9B796",
				origin: "Unknown",
				image: "dealer_button_v3.jpg",
				finish: ButtonFinish.Matte,
				edge: EdgeAligment.Unaligned
			},
			{
				proof: "",
				color: "#D9B796",
				origin: "Sidepot (2013)",
				image: "dealer_button_v4.jpg",
				finish: ButtonFinish.Matte,
				edge: EdgeAligment.Aligned
			},
			{
				proof: "",
				color: "#D9B796",
				origin: "Sidepot (2015)",
				image: "dealer_button_v5.jpg",
				finish: ButtonFinish.Matte,
				edge: EdgeAligment.Unaligned
			},
			{
				proof: "dealer_button_v6.jpg",
				color: "#D9B796",
				origin: "Matsui (2022, 2024)",
				image: "dealer_button_v6.jpg",
				total: [70, 34],
				finish: ButtonFinish["Pearlized Plastic"],
				edge: EdgeAligment.Uniform
			},
			{
				proof: "dealer_button_v7.jpg",
				color: "#D9B796",
				origin: "BrPro Poker (2022)",
				image: "dealer_button_v7.jpg",
				total: 54,
				finish: ButtonFinish.Matte,
				edge: EdgeAligment.Uniform
			},
			{
				proof: "dealer_button_v8.jpg",
				color: "#D9B796",
				origin: "BrPro Poker (2022)",
				image: "dealer_button_v8.jpg",
				total: 57,
				finish: ButtonFinish.Matte,
				edge: EdgeAligment.Uniform
			}
		]
	}
];