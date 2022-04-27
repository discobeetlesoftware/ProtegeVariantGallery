require_relative 'element'

class Button < Element 
	def self.key 
		'buttons'
	end
	
	attr_accessor :origin, :finish, :edge, :total
	
	def initialize(theme, denom, v, name, proof, image, values)
		super(theme, denom, v, name, proof, image)
		self.origin = values['origin']
		self.finish = values['finish']
		self.edge = values['edge']
		self.total = values['total']
		self.thumb_width = 250
	end
end
