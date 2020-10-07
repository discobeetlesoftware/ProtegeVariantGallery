#!/usr/bin/env ruby

require_relative 'src/renderer'

if __FILE__ == $0
	x = Renderer.new(ARGV)
	x.run
end
