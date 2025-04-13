/* To Do: 

Object: Game
    pages
        slug
        img src
        text
        options

    items
        name
        img src
        battle stats
        
    endings
        slug
        img src
        text
        replay option

Array: Inventory (represents the HTML table)
    initialized with false for all slots

Variable: Character battle stats 
    increases if item added to inventory

Function: Start game
    called when start button pressed
    hide landing container
    unhide game container (which already has starting page)

Function: Change page
    called when option is selected 
    receives page or ending slug
    selects main img ById and updates src and alt
    selects text container ById and updates
    selects options container ById and updates

Function: Update inventory
    check for first false slot in inventory array
    change to true
    document.getElementById that slot
    insert the img src for the item (item name is passed into this function) !!! don't forget to make this responsive / accessible !!!
    [maybe: clicking on item shows +stats; check accessibility]
    update character battle stats according to item battle stats

Function: Battle
    while less than 3 rounds
        do battle math (randomize percent health taken by character and opponent; range for random number dependent on items)
        update health percentage and health bar
        display message about battle with percentages (if 0%, then message about attack missing)
        if (certain health percentages) send to certain pages/endings, else next round
    after 3 rounds have passed, continue

Function: End game (user chose not to restart)
    hide game container
    unhide ending container (thanks for playing, link to other game)

*/

