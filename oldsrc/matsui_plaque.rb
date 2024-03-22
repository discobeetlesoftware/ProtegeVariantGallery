require_relative 'element'

class MatsuiPlaque < Element 
	def self.key 
		'matsui_plaques'
	end
	
	attr_accessor :origin, :material, :total, :size
	
	def initialize(theme, denom, v, name, proof, image, values)
		super(theme, denom, v, name, proof, image)
		self.origin = values['origin']
    self.material = values['material']
    self.total = values['total']
    self.size = values['size']
		self.thumb_width = 250
	end
  
	def to_s
		"#{denom} (Matsui) v#{variant}"
	end
end
