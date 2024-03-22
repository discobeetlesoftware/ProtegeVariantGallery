require_relative 'element'

class Variant < Element
	def self.key 
		'chips'
	end
	
	attr_accessor :group, :rarity, :notes
	attr_accessor :clay_color_base, :clay_color_spot
	attr_accessor :inlay_text_color, :inlay_text_size, :inlay_notes

	def initialize(theme, denom, v, name, proof, image, values)
		super(theme, denom, v, name, proof, image)
		self.group = values['group']
		rarity_scale = values['rarity']
		self.rarity = convert_range(rarity_scale)
		clay_color = values['clay_color']
		self.clay_color_base = clay_color['base']
		self.clay_color_spot = clay_color['spot']
		self.notes = values['notes']
		inlay = values['inlay']
		self.inlay_text_color = inlay['text_color']
		self.inlay_text_size = inlay['text_size']
		self.inlay_notes = inlay['notes']
	end
	
	def convert_range(scale)
		common = Range.new(1,4)
		uncommon = Range.new(5,7)
		rare = Range.new(8,9)
		legendary = Range.new(10,10)
		
		ranges = [common, uncommon, rare, legendary]
		description = ['Common', 'Uncommon', 'Rare', 'Legendary']
		results = ranges.select.with_index do |range, index|
			range.include?(scale)
		end
		index = ranges.index(results.first)
		description[index]
	end
end
