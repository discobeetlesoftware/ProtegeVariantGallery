class Element 
	attr_accessor :theme
	attr_accessor :denom, :variant
	attr_accessor :name
	attr_accessor :proof_image, :thumb_width
	attr_accessor :image
		
	def self.hydrate(theme, id, denom_data)
		results = []
		proof = denom_data['proof']
		name = denom_data['name']['en']
		denom_data['variants'].each_with_index do |vdata, index|
			results << self.new(theme, id, index + 1, name, proof, vdata['image'], vdata)
		end
		return results
	end
	
	def initialize(theme, denom, v, name, proof, image)
		self.theme = theme
		self.denom = denom
		self.variant = v
		self.name = name
		self.proof_image = proof
		self.image = image
		self.thumb_width = 150
	end
	
	def proof_path
		File.join('images', 'designs', proof_image)
	end
	
	def thumb_path
		File.join('images', 'variants', 'thumbs', image)
	end
	
	def variant_path
		File.join('images', 'variants', image)
	end
	
	def variant_img_tag
		return "🚫" if image == ""
		index = yield
		alt = "#{name} v#{variant} variant"
		%{<img src="#{thumb_path}" alt="#{alt}" width="#{thumb_width}" onclick="openLightbox();currentSlide(#{index})" class="hover-shadow" />}
	end
	
	def proof_img_tag
		return "🚫" if proof_image == ""
		%{<img src="#{proof_path}" alt="#{proof_alt}" width="#{thumb_width}" />}
	end
		
	def lightbox_thumb_img_tag(index)
		%{<img class="wheel" src="#{thumb_path}" onclick="currentSlide(#{index})" alt="#{to_s}" />}
	end
	
	def lightbox_img_tag
		%{<img src="#{variant_path}" style="width:100%" />}
	end

	def proof_alt
		"#{name} design"
	end
	
	def to_s
		"#{denom} v#{variant}"
	end
end