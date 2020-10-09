require_relative 'element'

class Accessory < Element 
	def self.key 
		'accessories'
	end
	
	attr_accessor :origin
	
	def initialize(theme, denom, v, name, proof, image, values)
		super(theme, denom, v, name, proof, image)
		self.origin = values['origin']
		self.thumb_width = 250
	end
end
