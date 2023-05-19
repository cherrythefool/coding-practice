class Person < ApplicationRecord
end

# Challenge: Rolodex
#✅ As a developer, I have been tasked with creating a database model that will be used in a rolodex application. I want to ensure that the database behaves as expected and the necessary actions can be performed on the database instances.
# ✅ Set Up
# ✅ Create a new Rails app named 'rolodex_challenge'.

rails new five_two_active_record_intro -d postgresql -T
cd five_two_active_record_intro

# ✅ Create the database. The output in the terminal should look like this:
# ✅ Created database 'rolodex_development'
# ✅ Created database 'rolodex_test'

rails db:create
Created database 'five_two_active_record_intro_development'
Created database 'five_two_active_record_intro_test'

# ✅ Generate a model called Person with a first_name, last_name, and phone. All fields should be strings.

rails generate model Person  first_name:string last_name:string phone:string
      invoke  active_record
      create    db/migrate/20230518112740_create_people.rb
      create    app/models/person.rb

# ✅ Run a migration to set up the database.

rails db:migrate
== 20230518112740 CreatePeople: migrating =====================================
-- create_table(:people)
   -> 0.0096s
== 20230518112740 CreatePeople: migrated (0.0097s) ============================

# ✅ Open up Rails console.
code .
rails c
# Actions
# ✅Add five family members into the Person table in the Rails console.

3.2.0 :001 > Person.create first_name: "Petr", last_name:"K", phone:"5555555"
  TRANSACTION (0.2ms)  BEGIN
  Person Create (1.7ms)  INSERT INTO "people" ("first_name", "last_name", "phone", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["first_name", "Petr"], ["last_name", "K"], ["phone", "5555555"], ["created_at", "2023-05-18 11:34:06.066077"], ["updated_at", "2023-05-18 11:34:06.066077"]]       
  TRANSACTION (0.8ms)  COMMIT                                                   
 =>                                                                             
#<Person:0x000000010a8aad30                                                     
 id: 1,                                                                         
 first_name: "Petr",                                                            
 last_name: "K",                                                                
 phone: "5555555",                                                              
 created_at: Thu, 18 May 2023 11:34:06.066077000 UTC +00:00,                    
 updated_at: Thu, 18 May 2023 11:34:06.066077000 UTC +00:00>                    
3.2.0 :002 > Person.create first_name:"Natalie", last_name:"R", phone:"5555555"
  TRANSACTION (0.2ms)  BEGIN
  Person Create (0.6ms)  INSERT INTO "people" ("first_name", "last_name", "phone", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["first_name", "Natalie"], ["last_name", "R"], ["phone", "5555555"], ["created_at", "2023-05-18 11:35:09.597561"], ["updated_at", "2023-05-18 11:35:09.597561"]]    
  TRANSACTION (0.9ms)  COMMIT                                                   
 =>                                                                             
#<Person:0x000000010c4408d8                                                     
 id: 2,                                                                         
 first_name: "Natalie",                                                         
 last_name: "R",                                                                
 phone: "5555555",                                                              
 created_at: Thu, 18 May 2023 11:35:09.597561000 UTC +00:00,                    
 updated_at: Thu, 18 May 2023 11:35:09.597561000 UTC +00:00>                    
3.2.0 :003 > Person.create first_name:"Sarah", last_name:"Cherry", phone:"555555
5"
  TRANSACTION (0.3ms)  BEGIN
  Person Create (0.5ms)  INSERT INTO "people" ("first_name", "last_name", "phone", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["first_name", "Sarah"], ["last_name", "Cherry"], ["phone", "5555555"], ["created_at", "2023-05-18 11:36:01.772042"], ["updated_at", "2023-05-18 11:36:01.772042"]] 
  TRANSACTION (0.8ms)  COMMIT                                                   
 =>                                                                             
#<Person:0x000000010c4a7d08                                                     
 id: 3,                                                                         
 first_name: "Sarah",                                                           
 last_name: "Cherry",                                                           
 phone: "5555555",                                                              
 created_at: Thu, 18 May 2023 11:36:01.772042000 UTC +00:00,                    
 updated_at: Thu, 18 May 2023 11:36:01.772042000 UTC +00:00>                    
3.2.0 :004 > Person.create first_name:"Maggie", last_name:"K", phone:"5555555"
  TRANSACTION (0.3ms)  BEGIN
  Person Create (0.6ms)  INSERT INTO "people" ("first_name", "last_name", "phone", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["first_name", "Maggie"], ["last_name", "K"], ["phone", "5555555"], ["created_at", "2023-05-18 11:36:18.752189"], ["updated_at", "2023-05-18 11:36:18.752189"]]
  TRANSACTION (1.4ms)  COMMIT
 =>                     
#<Person:0x000000010c4ad708
 id: 4,                 
 first_name: "Maggie",  
 last_name: "K",
 phone: "5555555",
 created_at: Thu, 18 May 2023 11:36:18.752189000 UTC +00:00,
 updated_at: Thu, 18 May 2023 11:36:18.752189000 UTC +00:00> 
3.2.0 :005 > Person.create first_name:"Andrea", last_name:"G", phone:"5555555"
  TRANSACTION (0.3ms)  BEGIN
  Person Create (0.7ms)  INSERT INTO "people" ("first_name", "last_name", "phone", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["first_name", "Andrea"], ["last_name", "G"], ["phone", "5555555"], ["created_at", "2023-05-18 11:36:51.983426"], ["updated_at", "2023-05-18 11:36:51.983426"]]
  TRANSACTION (1.2ms)  COMMIT
 => 
#<Person:0x000000010c4849c0
 id: 5,
 first_name: "Andrea",
 last_name: "G",
 phone: "5555555",
 created_at: Thu, 18 May 2023 11:36:51.983426000 UTC +00:00,
 updated_at: Thu, 18 May 2023 11:36:51.983426000 UTC +00:00> 


# ✅Retrieve all the items in the database.

3.2.0 :006 > Person.all
  Person Load (2.2ms)  SELECT "people".* FROM "people"
 =>                                                           
[#<Person:0x000000010c4ec958                                  
  id: 1,                                                      
  first_name: "Petr",                                         
  last_name: "K",                                             
  phone: "5555555",                                           
  created_at: Thu, 18 May 2023 11:34:06.066077000 UTC +00:00, 
  updated_at: Thu, 18 May 2023 11:34:06.066077000 UTC +00:00>,
 #<Person:0x000000010c4ec818                                  
  id: 2,                                                      
  first_name: "Natalie",                                      
  last_name: "R",                                             
  phone: "5555555",                                           
  created_at: Thu, 18 May 2023 11:35:09.597561000 UTC +00:00, 
  updated_at: Thu, 18 May 2023 11:35:09.597561000 UTC +00:00>,
 #<Person:0x000000010c4ec6d8
  id: 3,
  first_name: "Sarah",
  last_name: "Cherry",
  phone: "5555555",
  created_at: Thu, 18 May 2023 11:36:01.772042000 UTC +00:00,
  updated_at: Thu, 18 May 2023 11:36:01.772042000 UTC +00:00>,
 #<Person:0x000000010c4ec598
  id: 4,
  first_name: "Maggie",
  last_name: "K",
  phone: "5555555",
  created_at: Thu, 18 May 2023 11:36:18.752189000 UTC +00:00,
  updated_at: Thu, 18 May 2023 11:36:18.752189000 UTC +00:00>,
 #<Person:0x000000010c4ec458
  id: 5,
  first_name: "Andrea",
  last_name: "G",
  phone: "5555555",
  created_at: Thu, 18 May 2023 11:36:51.983426000 UTC +00:00,
  updated_at: Thu, 18 May 2023 11:36:51.983426000 UTC +00:00>] 


# ✅Add yourself to the Person table.
# ✅Retrieve all the entries that have the same last_name as you.

3.2.0 :009 > Person.where last_name: "Cherry"
  Person Load (0.9ms)  SELECT "people".* FROM "people" WHERE "people"."last_name" = $1  [["last_name", "Cherry"]]                             
 =>                                                           
[#<Person:0x000000010c4e99d8                                  
  id: 3,                                                      
  first_name: "Sarah",                                        
  last_name: "Cherry",                                        
  phone: "5555555",                                           
#   created_at: Thu, 18 May 2023 11:36:01.772042000 UTC +00:00, 
#   updated_at: Thu, 18 May 2023 11:36:01.772042000 UTC +00:00>] 


# ✅Update the phone number of the last entry in the database.
# probably could've been Person.last
3.2.0 :011 > andrea = Person.find 5 
  Person Load (11.8ms)  SELECT "people".* FROM "people" WHERE "people"."id" = $1 LIMIT $2  [["id", 5], ["LIMIT", 1]]                                   
 =>                                                                    
#<Person:0x000000010c4e0b58                                            
...                                                                    
3.2.0 :012 > andrea
 => 
#<Person:0x000000010c4e0b58                                            
 id: 5,                                                                
 first_name: "Andrea",                                   
 last_name: "G",                                         
 phone: "5555555",                                       
 created_at: Thu, 18 May 2023 11:36:51.983426000 UTC +00:00,
 updated_at: Thu, 18 May 2023 11:36:51.983426000 UTC +00:00> 
3.2.0 :013 > andrea.phone = "555-5555"
 => "555-5555" 
3.2.0 :014 > andrea.save

# ✅Retrieve the first_name of the third Person in the database.
3.2.0 :019 > sarah = Person.find 3
  Person Load (0.8ms)  SELECT "people".* FROM "people" WHERE "people"."id" = $1 LIMIT $2  [["id", 3], ["LIMIT", 1]]                                   
 =>                                                                   
#<Person:0x000000010c4e6418                                           
...                                                                   
3.2.0 :020 > sarah.first_name
 => "Sarah" 
3.2.0 :021 > 
                                                
# Stretch Challenges
# ✅Update all the family members with the same last_name as you, to have the same phone number as you.



# * Remove all family members that do not have your last_name.

3.2.0 :003 > not_k = Person.where.not(last_name:'K')
  Person Load (0.4ms)  SELECT "people".* FROM "people" WHERE "people"."last_name" != $1  [["last_name", "K"]]     
  3.2.0 :005 > not_k
  => 
 [#<Person:0x000000010bbc3520                              
   id: 2,                                                  
   first_name: "Natalie",                                  
   last_name: "R",                                         
   phone: "5555555",                                       
   created_at: Thu, 18 May 2023 11:35:09.597561000 UTC +00:00,
   updated_at: Thu, 18 May 2023 11:35:09.597561000 UTC +00:00>,
  #<Person:0x000000010bbc3480                              
   id: 5,                                                  
   first_name: "Andrea",                                   
   last_name: "G",                                         
   phone: "555-5555",                                      
   created_at: Thu, 18 May 2023 11:36:51.983426000 UTC +00:00,
   updated_at: Thu, 18 May 2023 11:41:20.040150000 UTC +00:00>,
  #<Person:0x000000010bbc33e0                              
   id: 3,                                                  
   first_name: "Sarah",                                    
   last_name: "Cherry",                                    
   phone: "(555)555-5555",                                 
   created_at: Thu, 18 May 2023 11:36:01.772042000 UTC +00:00,
   updated_at: Thu, 18 May 2023 16:56:40.257650000 UTC +00:00>] 
 3.2.0 :006 > 
 
 3.2.0 :010 > not_k.destroy_all
 TRANSACTION (2.6ms)  BEGIN
 Person Destroy (8.9ms)  DELETE FROM "people" WHERE "people"."id" = $1  [["id", 2]]                                                                  
 TRANSACTION (4.3ms)  COMMIT                                         
 TRANSACTION (0.3ms)  BEGIN                                          
 Person Destroy (0.7ms)  DELETE FROM "people" WHERE "people"."id" = $1  [["id", 5]]                                                                  
 TRANSACTION (0.8ms)  COMMIT                                         
 TRANSACTION (0.2ms)  BEGIN                                          
 Person Destroy (0.5ms)  DELETE FROM "people" WHERE "people"."id" = $1  [["id", 3]]                                                                  
 TRANSACTION (0.7ms)  COMMIT                                         
=>                                                                   
[#<Person:0x000000010bbc3520                                          
 id: 2,                                                              
 first_name: "Natalie",                                              
 last_name: "R",                                                     
 phone: "5555555",                                                   
 created_at: Thu, 18 May 2023 11:35:09.597561000 UTC +00:00,         
 updated_at: Thu, 18 May 2023 11:35:09.597561000 UTC +00:00>,        
#<Person:0x000000010bbc3480
 id: 5,
 first_name: "Andrea",
 last_name: "G",
 phone: "555-5555",
 created_at: Thu, 18 May 2023 11:36:51.983426000 UTC +00:00,
 updated_at: Thu, 18 May 2023 11:41:20.040150000 UTC +00:00>,
#<Person:0x000000010bbc33e0
 id: 3,
 first_name: "Sarah",
 last_name: "Cherry",
 phone: "(555)555-5555",
 created_at: Thu, 18 May 2023 11:36:01.772042000 UTC +00:00,
 updated_at: Thu, 18 May 2023 16:56:40.257650000 UTC +00:00>] 