class Variant
	attr_accessor :denom
	attr_accessor :proof_image
	attr_accessor :variant
	attr_accessor :name
	attr_accessor :image
	attr_accessor :group
	attr_accessor :rarity
	attr_accessor :clay_color_base
	attr_accessor :clay_color_spot
	attr_accessor :notes
	attr_accessor :inlay_text_color
	attr_accessor :inlay_text_size
	attr_accessor :inlay_notes
	attr_accessor :theme
	
	def self.hydrate(theme, id, denom_data)
		results = []
		proof = denom_data['proof']
		name = denom_data['name']['en']
		denom_data['variants'].each_with_index do |vdata, index|
			results << Variant.new(theme, id, index + 1, name, proof, vdata)
		end
		return results
	end

	def initialize(theme, denom, v, name, proof, values)
		self.theme = theme
		self.denom = denom
		self.variant = v
		self.name = name
		self.proof_image = proof
		self.image = values['image']
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

	def variant_img_tag(index)
		path = File.join('images', 'variants', 'thumbs', image)
		%{<img src="#{path}" alt="#{name} v#{variant} variant" width="150" onclick="openLightbox();currentSlide(#{index})" class="hover-shadow" />}
	end
	
	def proof_img_tag
		path = File.join('images', 'designs', proof_image)
		"<img src=\"#{path}\" alt=\"#{name} design\" />"
	end
	
	def lightbox_thumb_img_tag(index)
		path = File.join('images', 'variants', 'thumbs', image)
		%{<img class="wheel" src="#{path}" onclick="currentSlide(#{index})" alt="#{to_s}">}
	end
	
	def lightbox_img_tag
		path = File.join('images', 'variants', image)
		%{<img src="#{path}" style="width:100%">}
	end

	def proof_alt
		"#{name} design"
	end
	
	def to_s
		"#{denom} v#{variant}"
	end
end
