js or ruby

prompt: write a fx, takes in a string, checks if the string is a palindrome

in: string
out: yes/no palindrome 
process: write a fx that accepts a string, determine if the string reads the same forward or backwards regardless of case, and returns a yes/no

def is_it_palindrome string
    if string.downcase.reverse == string.downcase
        "#{string} is a palindrome"
    else 
        "#{string} is not a palindrome"
    end
end

Racecar
eye
palindrome