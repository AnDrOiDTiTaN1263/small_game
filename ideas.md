# TODO:
   ## Game logic
   -  Level system
    -    as the player completes more quests from the factory they get faster extractor speeds and path speeds i.e. from gridcell to the next gridcell
    - 
   - overall stats 
   - idle system
   ### Factory
   - accept all incoming numbers from all paths around it
   - also has a quest sort of feature where the player has to deliver certain amount of a particular number for example ten 1's.
   ### Extractors
   - these create the numbers
   - need a GridCell in their surrounding with a direction attribute set pointing away from the extractor
   - extract numbers at a certain interval of time
   ### Map
   - consists of tiny squares (**Grid Cell**)
    - **Grid Cells** consists of 3 attributes
        - coordinate (x,y)
        - number
        - direction
- they handle pushing numbers through from one to the neighbouring gridcell

# Some crzy ideas to not implement
- huge (huger) map, normal map will be quite big maybe 100x100 or 1000x1000 which will already be quite hard for the program to handle



