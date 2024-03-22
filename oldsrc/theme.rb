class Theme
	attr_accessor :key
	attr_accessor :color
	
	def initialize(values)
		name = values['name']['en']
		self.key = name.gsub(" ", "_").gsub("-", "_").gsub("(", "").gsub(")", "")
		self.color = values['color']
	end
end