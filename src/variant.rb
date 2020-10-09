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
		self.rarity = values['rarity']
		clay_color = values['clay_color']
		self.clay_color_base = clay_color['base']
		self.clay_color_spot = clay_color['spot']
		self.notes = values['notes']
		inlay = values['inlay']
		self.inlay_text_color = inlay['text_color']
		self.inlay_text_size = inlay['text_size']
		self.inlay_notes = inlay['notes']
	end

end
