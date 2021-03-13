# 03 JavaScript: Password Generator

## Password Generator

This password generator uses browser prompts to obtain information from the user about how they want their password structured. The user has a choice of password length (8-128), as well as a choice of including any and all of the four main character types (special, uppercase letters, lowercase letter, and numbers). Each type of character was stored in a seperate array, and random number generation was used to pull random elements from a particular array to append to the password. Putting together the initial generator didn't present too many problems; a handfull of simple functions were created to prompt the user, and then use the information to randomly generate the passwords. 
<br/>
The initial implementation randomly selected a character type from the alloted types by generating a random number from 0-3. This worked perfectly, although due to the random nature of the generation, there was nothing to guarantee that a particular character type ended up being chosen. Obviously for longer passwords, the odds of not rolling a 0-3 at least once are negligible. However, for the minimum password length (8), the odds of any single specific character type not being chosen (if all four were desired) are .75^8, which is roughly 10 percent (actual probability is 10.4%, which includes the very unlikely scenarios of only two, or only one character type being chosen for 8 spots). Thus, the code needed to be changed such that the password generation guaranteed that all desired character types were present. There are doubtless ways to achieve this goal starting from scratch, although this solution simply added onto the exisitng code. Essentially, an array of desired character types was compared to the array of generated character types (in the form [bool, bool, bool, bool] representing each of the four types) after the password was generated, and if the two arrays were not equivalent, then the generation was run until they were. 

## Link
https://levischwartzberg.github.io/PasswordGenerator/


## Screenshot
![Alt text](./assets/images/preview1.jpg?raw=true "Preview image of the generated password")

