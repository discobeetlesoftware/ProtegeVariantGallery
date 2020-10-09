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
		@themes = []
		@chips = hydrate(data, Variant)
		@accessories = hydrate(data, Accessory)

		@chipVariantCount = @chips.reduce(0) { |sum, list| sum + list.count }
		@accessoryVariantCount = @accessories.reduce(0) { |sum, list| sum + list.reduce(0) { |s, v| s + (v.image == "" ? 0 : 1) } }
	end
	
	def hydrate(data, type)
		data[type.key].map do |values|
			denom_id = values.keys.first
			denom_data = values[denom_id]
			@themes << Theme.new(denom_data)
			type.hydrate(@themes.last, denom_id, denom_data)
		end
	end
	
	def run
		if parsed_options?
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
	def each_variant_image
		index = 0
		@chips.each do |variants|
			variants.each do |variant|
				yield variant, index += 1
			end
		end
		
		@accessories.each do |variants|
			variants.each do |variant|
				next if variant.image == ""
				yield variant, index += 1
			end
		end
	end
		
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
		puts "ruby build.rb"
	end
	
	def output_version
		puts "#{File.basename(__FILE__)} version #{VERSION}"
	end
	
	private
	
	def render
		ERB.new(@template).result(binding)
	end

	def execute
		File.open(@options.output, 'w') do |f|
			f.write(render)
		end
	end
end

if __FILE__ == $0
	puts("Loaded #{__FILE__}")
end
