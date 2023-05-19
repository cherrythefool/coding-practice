<!-- Challenges: SQL Country Database
Save your queries in a file if you want to keep them for posterity.

WHERE
<!-- What is the population of the US? (HINT: 278357000) -->
SELECT name, population
FROM country
WHERE name
LIKE 'United States'

<!-- What is the area of the US? (HINT: 9.36352e+06) -->
SELECT name, surfacearea
FROM country
WHERE name
LIKE 'United States'

<!-- Which countries gained their independence before 1963? -->
SELECT name, indepyear
FROM country
WHERE indepyear < 1963

<!-- List the countries in Africa that have a population smaller than 30,000,000 and a life expectancy of more than 45? (HINT: 37 entries) -->
SELECT name, continent, population, lifeexpectancy
FROM country
WHERE continent = 'Africa' AND population < 30000000 AND lifeexpectancy >45

<!-- Which countries are something like a republic? (HINT: Are there 122 or 143?) -->
SELECT name, governmentform
FROM country
WHERE governmentform
LIKE '%epublic'

<!-- Which countries are some kind of republic and achieved independence after 1945? (HINT: 92 entries) -->
SELECT name, governmentform, indepyear
FROM country
WHERE indepyear > 1945 AND governmentform
LIKE '%epublic'

<!-- Which countries achieved independence after 1945 and are not some kind of republic? (HINT: 27 entries) -->
SELECT name, governmentform, indepyear
FROM country
WHERE indepyear > 1945 AND governmentform
NOT LIKE '%epublic'

<!-- ORDER BY -->
<!-- Which fifteen countries have the lowest life expectancy? (HINT: starts with Zambia, ends with Sierra Leonne) -->
SELECT name, lifeexpectancy
FROM country
WHERE lifeexpectancy IS NOT null
ORDER BY lifeexpectancy ASC
LIMIT 15

<!-- Which fifteen countries have the highest life expectancy? (HINT: starts with Andorra, ends with Spain) -->
SELECT name, lifeexpectancy
FROM country
WHERE lifeexpectancy IS NOT null
ORDER BY lifeexpectancy DESC
LIMIT 15

<!-- Which five countries have the lowest population density (density = population / surfacearea)? (HINT: starts with Greenland) -->
SELECT name, population / surfacearea AS density
FROM country
WHERE population > 0
ORDER BY density ASC
LIMIT 5

<!-- Which countries have the highest population density?(HINT: starts with Macao) -->
SELECT name, population / surfacearea AS density
FROM country
WHERE population > 0
ORDER BY density DESC
LIMIT 5

<!-- Which is the smallest country by area? (HINT: .4) -->
SELECT name, surfacearea
FROM country
ORDER BY surfacearea ASC
LIMIT 1

<!-- Which is the smallest country by population? (HINT: 50)? -->
SELECT name, population
FROM country
WHERE population > 0
ORDER BY population ASC
LIMIT 1

<!-- Which is the biggest country by area? (HINT: 1.70754e+07) -->
SELECT name, surfacearea
FROM country
ORDER BY surfacearea DESC
LIMIT 1

<!-- Which is the biggest country by population? (HINT: 1277558000) -->
SELECT name, population
FROM country
ORDER BY population DESC
LIMIT 1

<!-- Who is the most influential head of state measured by population? (HINT: Jiang Zemin) -->
SELECT population, headofstate
FROM country
ORDER BY population DESC
LIMIT 1

<!-- Subqueries: WITH -->
<!-- Of the countries with the top 10 gnp, which has the smallest population? (HINT: Canada) -->
WITH top_ten_gnps AS (
	SELECT name, population, gnp
	FROM country
	WHERE gnp > 0
	ORDER BY gnp DESC
	LIMIT 10
	)
SELECT name, population
FROM top_ten_gnps
ORDER BY population ASC
LIMIT 1

<!-- Of the 10 least populated countries with permament residents (a non-zero population), which has the largest surfacearea? (HINT: Svalbard and Jan Mayen) -->
WITH lowest_ten_pops AS (
	SELECT name, population, surfacearea
	FROM country
	WHERE population > 0
	ORDER BY population ASC
	LIMIT 10 
	)
SELECT name, population, surfacearea
FROM lowest_ten_pops
ORDER BY surfacearea DESC
LIMIT 1

<!-- Aggregate Functions: GROUP BY -->
<!-- Which region has the highest average gnp? (HINT: North America) -->
SELECT region, AVG(gnp) AS avggnp
FROM country
GROUP BY region
ORDER BY avggnp DESC
LIMIT 1

<!-- Who is the most influential head of state measured by surface area? (HINT: Elisabeth II) -->
SELECT name, headofstate, surfacearea
FROM country
GROUP BY name, headofstate, surfacearea
ORDER BY surfacearea DESC

(but I'm showing Putin at 1.70754e+07 and Elisabeth II at 9.97061e+06?)

<!-- What is the average life expectancy for all continents? -->
SELECT AVG(lifeexpectancy) AS lifelength
FROM country
ORDER BY lifelength DESC

66.5

<!-- What are the most common forms of government? (HINT: use count(*)) -->


<!-- How many countries are in North America? -->
<!-- What is the total population of all continents? -->

<!-- Stretch Challenges -->
<!-- Which countries have the letter ‘z’ in the name? How many? -->
<!-- Of the smallest 10 countries by area, which has the biggest gnp? (HINT: Macao) -->
<!-- Of the smallest 10 countries by population, which has the biggest per capita gnp? -->
<!-- Of the biggest 10 countries by area, which has the biggest gnp? -->
<!-- Of the biggest 10 countries by population, which has the biggest per capita gnp? -->
<!-- What is the sum of surface area of the 10 biggest countries in the world? The 10 smallest? -->
<!-- What year is this country database from? Cross reference various pieces of information to determine the age of this database. -->