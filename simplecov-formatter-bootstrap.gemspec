# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require 'simplecov-formatter-bootstrap/version'

Gem::Specification.new do |s|
  s.name        = "simplecov-formatter-bootstrap"
  s.version     = SimpleCov::Formatter::Bootstrap::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Rodrigo Díaz"]
  s.email       = ["rdiazv89@gmail.com"]
  s.homepage    = "https://github.com/rdiazv/simplecov-html"
  s.summary     = %Q{Default HTML formatter for SimpleCov code coverage tool for ruby 1.9+}
  s.description = %Q{Default HTML formatter for SimpleCov code coverage tool for ruby 1.9+}
  s.license     = "MIT"

  s.rubyforge_project = "simplecov-formatter-bootstrap"

  s.add_development_dependency 'rake'
  s.add_development_dependency 'sprockets', '~> 2.12.2'
  s.add_development_dependency 'sass'

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]
end
