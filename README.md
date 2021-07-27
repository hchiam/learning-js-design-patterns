# My notes for the Udacity course: [JavaScript Design Patterns](https://classroom.udacity.com/courses/ud989)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

## Learning a new/unfamiliar codebase: 5 tips

Remember, seek a **top level** understanding while you do these:

1. **Run** app -> find hints at behaviour, but also see that the change works
2. Explore **file structure** -> find hints at code organization
3. See what JS **files are loaded** -> find hints at dependencies = (where you might change something once to update multiple things)
4. Find out what the **libraries** do (find the **docs** / code)
5. Edit app to **see what breaks/changes**

Think how to **change / break** the application. Example: change order of `<script>` tags.

Leverage understanding of other frameworks to make educated guesses of how things are connected, and also check framework documentation to get more detail (but start from top level stuff).

## BEFORE CONTRIBUTING AN EDIT: consider the following

**Type of change**: "cosmetic" or "profound"? how shown or how data is stored?

**Where change**: view? template? etc. -> which folder? which file?

**Similar/same exists**: related code you can copy or reuse? put related changes in same place?

**Consistency** means you adjust to local conventions, but it helps you understand other parts of the code base more easily. So **"be tofu"** and absorb the local accent of the code dialect. Be a **"tofu detective"** to track down where a change should be made, and integrate seamlessly into the code that's already there.

## Requirements change all the time in response to improvements or new info

That's why it's good to write organized and extensible code.

## MV\*

Model <---> "Octopus" <---> View

The "Octopus" connects the model and view, but also lets you easily modify the code of the model and view independently, without having to modify all the code at once.

Model = data

View = UI

Example: <https://github.com/udacity/ud989-retain>

Example: <https://github.com/udacity/ud989-pizzamvo>
