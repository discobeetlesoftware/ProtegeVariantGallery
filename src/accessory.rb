class Accessory
	def self.hydrate(theme, id, denom_data)
		results = []
		proof = denom_data['proof']
		origin = denom_data['orign']
		name = denom_data['name']['en']
		denom_data['variants'].each_with_index do |vdata, index|
			results << Accessory.new(theme, id, index + 1, name, proof, vdata)
		end
		return results
	end
	
	attr_accessor :theme
	attr_accessor :denom
	attr_accessor :variant
	attr_accessor :name
	attr_accessor :proof_image
	attr_accessor :image
	attr_accessor :origin
	
	def initialize(theme, denom, v, name, proof, values)
		self.theme = theme
		self.denom = denom
		self.variant = v
		self.name = name
		self.proof_image = proof
		self.image = values['image']
		self.origin = values['origin']
	end
	
	def variant_img_tag
		return "🚫" if image == ""
		path = File.join('images', 'variants', image)
		"<img src=\"#{path}\" alt=\"#{name} v#{variant} variant\" width=\"250\" />"
	end
	
	def proof_img_tag
		return "🚫" if proof_image == ""
		path = File.join('images', 'designs', proof_image)
		"<img src=\"#{path}\" alt=\"#{name} design\" width=\"250\" />"
	end
		
	def lightbox_thumb_img_tag(index)
		path = File.join('images', 'variants', 'thumbs', image)
		%{<img class="wheel" src="#{path}" onclick="currentSlide(#{index}" alt="#{to_s}">}
	end
	
	def lightbox_img_tag
		path = File.join('images', 'variants', image)
		%{<img src="#{path}" style="width:100%">}
	end

	def to_s
		"#{denom} v#{variant}"
	end
end