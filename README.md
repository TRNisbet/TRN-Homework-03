TRN - # 03 JavaScript: Password Generator

Below is the readme given with the assignment.

Please excuse for the layout of the Javascript. I cannot find the setting needed to adjust where it drops down lines.

An earlier attempt put the pwdLgthUser into a interger variable, but later testing showed that this was an un-needed step and was removed.

An earlier version had the variable pwd defined outside the function. The setup caused for the possiblity of unwanted characters being selcted and it was relocated to live within generatePassword function.

The current code allows for the possiblity of a chosen catagory not being selected for the new password. I am trying to figure out how to correct for this but my only current idea would be to parse out letters from each array randomly. Using indiviudal arrays would cause a noticable pattern in the layout itself. Ex: Ab1!Cd2@ and so on. I am of the thinking that given these constraints of my ability, it would be more secure to have each letter have the possibilty of a random character vs the random characters from a set group in a repeating position.

# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

-    The URL of the deployed application.

-    The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---

© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
