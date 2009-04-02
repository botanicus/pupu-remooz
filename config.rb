# autocompleter depends on mootools
dependencies :mootools

# javascripts for loading
javascripts "remooz"

# stylesheet
stylesheet "remooz"

parameter :type, :optional => ["local", "request"] do |type|
  javascript "autocompleter.#{type}"
end
