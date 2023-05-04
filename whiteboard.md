prompt: secret society named first letter of each of names
input: array of names (first first namees only for now)
output: secret society - first letter of names

take in array of names, iterate through it and determine first letter, assemble first letters into string 
let namesArray = ["Sarah", "Will", "Rashaan", "CRod", "Luke"]

const secretNameClub = (array) => {
    return array.map((value) => value[0]).join("")
}

"SWRCL"