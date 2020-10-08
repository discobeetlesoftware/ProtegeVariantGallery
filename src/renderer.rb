# !/usr/bin/env ruby

require 'optparse'
require 'ostruct'
require 'erb'
require 'json'
require 'date'
require_relative 'variant'
require_relative 'theme'
require_relative 'accessory'

class Renderer
	include ERB::Util

	VERSION = '1.0.0'
	DEFAULT_OUTPUT_FILE = "index.html"

	attr_reader :options
	
	def initialize(arguments = "")
		@arguments = arguments
		@options = OpenStruct.new
		@template = template('gallery')
		@thead_chip = template('thead_chip')
		@thead_accessory = template('thead_accessory')
		data = read_data
		@chips = []
		@themes = []
		data['chips'].each do |values|
			denom_id = values.keys.first
			denom_data = values[denom_id]
			@themes << Theme.new(denom_data)
			@chips.push(Variant.hydrate(@themes.last, denom_id, denom_data))
		end
		@accessories = []
		data['accessories'].each do |values|
			denom_id = values.keys.first
			accessory_data = values[denom_id]
			@themes << Theme.new(accessory_data)
			@accessories.push(Accessory.hydrate(@themes.last, denom_id, accessory_data))
		end
	end
	
	def run
		if parsed_options?
			# configure_environment
			execute
		else
			output_usage
		end
	end
	
	def read_data
		data_file = File.join(__dir__, 'data.json')
		contents = File.open(data_file, 'r').read
		JSON.parse(contents)
	end
	
	def template(name)
		path = File.join(__dir__, "#{name}.template")
		File.open(path, 'r').read
	end

	def header_if_needed(element)
		headerChips = [ "5¢ v1", "50¢ v1", "$20 v1", "$500 v1", "$25k v1" ] 
		return @thead_chip if headerChips.include?(element.first.to_s)
		headerAccessories = [ "Dealer Button v1" ]
		return @thead_accessory if headerAccessories.include?(element.first.to_s)
		""
	end
	
	protected
	
	def parsed_options?
		opts = OptionParser.new
		opts.on('-v', '--version') { output_version; exit }
		opts.on('-h', '--help')  { output_help }
		opts.parse!(@arguments) rescue return false
		@options.output = File.expand_path(File.join(__dir__, '..', DEFAULT_OUTPUT_FILE))
		true
	end
	
	def output_help
		output_version
		# puts RDoc::usage
	end
	
	def output_usage
		# RDoc::usage('usage')
	end
	
	def output_version
		puts "#{File.basename(__FILE__)} version #{VERSION}"
	end
	

	private
	
	def render
		ERB.new(@template).result(binding)
	end

	def each_gallery_item
		# Dir[File.join(@options.input, '**', "*.*")].each do |path|
		# 	key = DownieResult.name(path)
		# 	yield path, key
		# end
	end

	def load
		# candidates = {}
		# each_gallery_item do |path, key|
		# 	element = candidates[key]
		# 	if element.nil?
		# 		element = DownieResult.new(path, @options.input)
		# 		candidates[element.name] = element
		# 	else
		# 		element.append(path)
		# 	end
# 		end
# 
# 		result = candidates.values
# 		result = result.select(&:has_result)
# 		result.each(&:populate_json)
# 		result.sort_by(&:name)
	end

	def has_invalid_input
		@options.input.nil?
	end

	def has_invalid_output
		@options.output.nil?
	end

	def configure_environment
		if has_invalid_input
			helper = DownieHelpers.new
			@options.input = helper.download_folder_path
		end
		if has_invalid_output
			@options.output = File.expand_path(File.join("~", "Desktop", DEFAULT_OUTPUT_FILE))
		end
		@source = File.expand_path(File.join(__dir__, '..'))
		def append_includes(*files)
			files.collect { |file| File.join(@source, 'includes', file) }
		end
		@stylesheets = append_includes('DataTables/datatables.min.css')
		@scripts = append_includes('DataTables/datatables.min.js', 'DataTables/Moment-2.8.4/moment.min.js', 'DataTables/Moment-2.8.4/datetime-moment.js')
	end
	
	def execute
		File.open(@options.output, 'w') do |f|
			f.write(render)
		end
	end
end

if __FILE__ == $0
	puts("Loaded #{GalleryRenderer}")
end
