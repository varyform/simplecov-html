Bootstrap Formatter for SimpleCov
====================================

**Note**: To learn more about SimpleCov check out the main repo at https://github.com/colszowka/simplecov

Generates a nice HTML report of your SimpleCov ruby code coverage results using [Bootstrap](http://getbootstrap.com/).

## Usage

Add the gem to your Gemfile:

```ruby
gem 'simplecov-formatter-bootstrap', '~> 1.0.0'
```

Add the formatter after SimpleCov initializes:

```ruby
SimpleCov.start
SimpleCov.formatters = [SimpleCov::Formatter::Bootstrap]
```
