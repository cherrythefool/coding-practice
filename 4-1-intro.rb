# ❤️ Challenges
# Remember that floats are fractional numbers whereas integers are whole numbers. In Ruby, 1 and 1.0 are defined by different data types with slightly different behaviors.

# Open the IRB terminal. Exit the terminal and reopen the terminal.
# Add, subtract, multiply, and divide integers.
# Add, subtract, multiply, and divide floats.
# Find the remainder of dividing two numbers using the modulo operator (%).
# Divide an integer by 0.
# Divide a float by 0.
# Divide 0 by 0.
# Create a variable and assign an integer.
# Calculate the variable divided by 2.
# Find the remainder of the variable when divided by 3.
# Create another variable and assign it the integer 13.
# Use the relational operators on the two variables.
# Reassign the value of one variable to be 7.
# Reassign the value of one variable to be 26 times its current value.

# Complete the following challenges in the IRB console.
# coding-practice|17May23⚡ ⇒ irb
# 3.2.0 :001 > exit
# coding-practice|17May23⚡ ⇒ irb
# 3.2.0 :001 > 5/2
#  => 2 
# 3.2.0 :002 > 5%2
#  => 1 
# 3.2.0 :003 > 4.76859+3
#  => 7.76859 
# 3.2.0 :004 > 4.76859/3
#  => 1.5895299999999999 
# 3.2.0 :005 > 0/0
# (irb):5:in `/': divided by 0 (ZeroDivisionError)                              
#         from (irb):5:in `<main>'       
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/gems/irb-1.6.4/exe/irb:9:in `<top (required)>'                 
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/irb:25:in `load'    
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/irb:25:in `<main>'  
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `eval'
# 	from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `<main>'
# 3.2.0 :006 > whiteboards = 1
#  => 1 
# 3.2.0 :007 > whiteboards/2
#  => 0 
# 3.2.0 :008 > computers = 5
#  => 5 
# 3.2.0 :009 > computers/2
#  => 2 
# 3.2.0 :010 > computers %3
#  => 2 
# 3.2.0 :011 > computers + 7
#  => 12 
# 3.2.0 :012 > computers %3
#  => 2 
# 3.2.0 :013 > computers!+7
# (irb):13:in `<main>': undefined method `computers!' for main:Object (NoMethodError)                        
# Did you mean?  Complex       
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/gems/irb-1.6.4/exe/irb:9:in `<top (required)>'       
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/irb:25:in `load'
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/irb:25:in `<main>'
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `eval'               
# 	from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `<main>'
# 3.2.0 :014 > computers = computers + 7
#  => 12 
# 3.2.0 :015 > computers
#  => 12 
# 3.2.0 :016 > computers %3
#  => 0 
# 3.2.0 :017 > friday = 13
#  => 13 
# 3.2.0 :018 > friday - computers
#  => 1 
# 3.2.0 :019 > friday = 7
#  => 7 
# 3.2.0 :020 > friday
#  => 7 
# 3.2.0 :021 > friday < computers
#  => true 
# 3.2.0 :022 > friday >comp
# (irb):22:in `<main>': undefined local variable or method `comp' for main:Object (NameError)                         
# Did you mean?  Complex                
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/gems/irb-1.6.4/exe/irb:9:in `<top (required)>'                
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/irb:25:in `load'   
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/irb:25:in `<main>' 
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `eval'                       
# 	from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `<main>'
# 3.2.0 :023 > friday >computers
#  => false 
# 3.2.0 :024 > computer = computer * 26
# (irb):24:in `<main>': undefined method `*' for nil:NilClass (NoMethodError)   
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/gems/irb-1.6.4/exe/irb:9:in `<top (required)>'                 
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/irb:25:in `load'    
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/irb:25:in `<main>'  
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `eval'                         
#         from /Users/learnacademy/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `<main>'
# 3.2.0 :025 > computers = computers * 26

#  => 312 
# 3.2.0 :026 > 



# Complete the following challenges in a Ruby file.

# Create a variable and return it in a sentence using string interpolation.

COUCH = "fluffy"
def couch_describe
    "My couch is pretty #{COUCH}. It's so #{COUCH}!"
end
# Create a variable that contains a string and test some of the Ruby string methods:
# .upcase
# .reverse
# .include?
# .capitalize
# .delete
# .index
# .swapcase
p couch_describe.reverse
p couch_describe.include?("fluffy")
p couch_describe.index("fluffy")
p couch_describe.capitalize
p couch_describe.swapcase

# Create an array that contains the name of at least five TV shows you enjoy.
my_shows = ["NCIS", "Doctor Who", "Star Trek", "Steven Universe", "Criminal Minds"]

# Find the length of the array.
p my_shows.length
# Return the first item in the array.
p my_shows.first
# Return the fourth item in the array.
p my_shows.at(3)
# Permanently reverse the order of the array.
p my_shows.reverse!
# Create a new empty array for your top favorite TV shows.
top_shows = Array.new
# Using the full TV show array, add your top two favorite shows to the empty array.
top_shows << my_shows.at(1) <<my_shows.at(3)
p top_shows