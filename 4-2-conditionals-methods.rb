# necessary for noecho solution found for hiding input in rock paper scissors 
require 'io/console'

# ❤️ Challenges
# Create a method called sum_these_numbers which takes two integers as an argument and prints their sum to the screen.

# create a method which accepts two integers
def sum_these_numbers num1, num2
    # sum the two params
    num1 + num2

end

# call method to test
p sum_these_numbers 5, 8

# Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.

# create method which accepts one integer
def is_even num
    # determine if number is even (no remainder when div by 0) and return true
    if num % 2 == 0
        true
    # if not even return false
    else
        false
    end
end
# call method to test
p is_even 9

# Create a method that takes a number as an argument and prints "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.

# create a method which accepts a number
def valid_or_no num
    # determine if number is in the range of 1-10 (including both 1 and 10) and return "Valid" if it is
    if num >= 1 && num <=10
        "Valid"
    # if outside of 1-10 inclusive, return "Invalid"
    else
        "Invalid"
    end
end

# call method to test 
p valid_or_no 1
p valid_or_no 0
p valid_or_no 10
p valid_or_no 7


# Create a method that takes in a string and determines if the string is a palindrome.
# create a method that accepts a string
def can_you_flip_it string
    # check to see if the backwards string is the same as the string, accounting for varied casing and return a string interpolated sentence stating whether the input is a palindrome
    if string.downcase.reverse == string.downcase
        "#{string.capitalize} is a palindrome."
    else
        "#{string.capitalize} is not a palindrome."
    end
end

# call method to test
p can_you_flip_it "flipper"
p can_you_flip_it "racecar"
p can_you_flip_it "Anna"

# ✂️ Challenge: Rock, Paper, Scissors
# As the first user, I can see a prompt in the terminal to enter my name.
# As the second user, I can see a prompt in the terminal to enter my name.
# As the first user, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors".
# As the second user, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors".
# As a user, I can see a message in the terminal depicting which user won the round.
# As a user, I can see a message in the terminal noting if there was a tie.

# create a function for a rock paper scissors game
def start_game
    #players enter names, feedback to display name as entered
    p "Player 1, what is your name?"
    player_1 = gets.chomp
    p "Welcome, #{player_1}"
    p "Player 2, what is your name?"
    player_2 = gets.chomp
    p "Welcome, #{player_2}"

    # players are called by chosen username to choose rock, paper or scissors
    p "#{player_1}, choose: rock, paper, or scissors"
    # 
    p_1_choice = STDIN.noecho(&:gets).chomp.downcase #gets.chomp.downcase
    p "#{player_2}, choose: rock, paper, or scissors"
    # this line allows the console to get a user input while not displaying it in the console. This is new to me and I don't fully understand how this works - had to try a few things to get .chomp and .downcase in the right spot.
    p_2_choice = STDIN.noecho(&:gets).chomp.downcase

    # winning cases for rock paper scissors - eliminate ties first and each p1 choice can be given a win or lose case with nested if/elsif statements. Edge case error message at the end
    if p_1_choice == p_2_choice
        "You tied!"
    elsif p_1_choice == "rock"
        if p_2_choice == "scissors"
            "Rock obliterates scissors, #{player_1} wins!"
        else
            "That rock got paper mached! #{player_2} wins!"
        end
    elsif p_1_choice == "scissors"
        if p_2_choice == "paper"
            "#{player_1} made the cut and won!"
        else
            "Rock obliterates scissors, #{player_2} wins!"
        end
    elsif p_1_choice == "paper"
        if p_2_choice == "rock"
            "That rock got paper mached! #{player_1} wins!"
        else
            "#{player_2} made the cut and won!"
        end
    else
        p "How'd you get here? Make sure you entered 'rock', 'paper', or 'scissors'"
    end
    # possible edge case not accounted for - player 2 enters with a misspelled win case and loses. Edge case 'else' would display for player 1 misspelling but not player 2 misspelling.
    # possible fix: change nested if/else statements to if/elsif/if while specifying losing case with 'elsif' and creating edge case catchers with 'else'
end

# play game
p start_game




# ✅ Challenge: Password Checker
# As a developer, you have been tasked with creating the user registration for a secure web site. To test your code, enter the user ID and password in the terminal to find out if they are acceptable. The user ID and password must adhere to the to following criteria:

# User ID and password cannot be the same.
# User ID cannot contain the following characters: !#$ or spaces
# User ID and password must be at least six characters long.
# Password must contain at least one of: !#$
# Password cannot be the word "password".
# User password must contain at least one number.

# Create a function which will accept both a username and password
def validate_login_info user_id, password
    # nest username checker. Only checks if valid or not, does not output error. Needs both user_id and password argument since it compares the two
    def user_id_checker(user_id, password)
        # determine if username meets specifications or not
        if user_id != password && user_id.length > 5 && !user_id.include?('!') &&!user_id.include?('#') &&!user_id.include?('$') && user_id.delete(' ') == user_id
            "user id is valid"
    # if not valid, error messaging explained
    else
        "user id is NOT valid. Error message will contain first error encountered, but user id may contain additional errors. Continue adjusting user id until valid"
    end
end

def password_checker(user_id, password)
    # determine if password meets specifications or not
    if password != user_id && password.length > 5 && (password.include?('!') || password.include?('#') || password.include?('$')) && !password.include?('password') && (password.include?('0') || password.include?('1') || password.include?('2') || password.include?('3') || password.include?('4') || password.include?('5') || password.include?('6') || password.include?('7') || password.include?('8') || password.include?('9'))
        "password is valid"
    # if not valid, error messaging explained
    else
            "password is NOT valid. Error message will contain first error encountered (starting with user id errors), but may contain additional errors. Continue adjusting until valid"
        end
    end

    # error message method returns first invalidating aspect of username/password. will not screen for further down the line though
    def error_message(user_id, password)
        if user_id == password
            "User ID and password cannot be the same."
        elsif user_id.length < 6 || password.length <6
            "User I.D. or password is too short"
        elsif (user_id.include?('!') || user_id.include?('#') || user_id.include?('$') || user_id.include?(' '))
            'User ID cannot contain the following characters: !, #, $, or spaces'
        elsif (!password.include?('!') && !password.include?('#') && !password.include?('$'))
            'Password must contain at least one of: the following characters: !, #, $.'
        elsif password.include?('password')
            "Password cannot be the word 'password'"
        elsif (!password.include?('0') && !password.include?('1') && !password.include?('2') && !password.include?('3') && !password.include?('4') && !password.include?('5') && !password.include?('6') && !password.include?('7') && !password.include?('8') && !password.include?('9'))
            "User password must contain at least one number."
        # if username and password are both valid, a 'no error' message will appear
        else
            "No error!"
        end
    end

    p user_id_checker(user_id, password)
    p password_checker(user_id, password)

    p error_message(user_id, password)
end

validate_login_info('myid hasnospace', 'thisisap$$wrd')