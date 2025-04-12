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

Function: Update inventory
    check for first false slot in inventory array
    change to true
    document.getElementById that slot
    insert the img src for the item (item name is passed into this function) !!! don't forget to make this responsive / accessible !!!
    update character battle stats according to item battle stats

Function: Battle
    check if inventory items
    while less than 3 rounds
        update health percentage and health bar
        if (certain health percentages) send to certain pages/endings, else next round
    after 3 rounds have passed, continue


*/

