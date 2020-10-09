#### MVC

### Model

### View
    html
    displayed grid
    clear turn indication
    clear restart option

### Controller
    input from user
    click handlers on squares 
    click on restart button

#### General
    buildElement(type class id text){
        var
        class
        id
        text
        return
    }
    init(){
        state 0
        build title
        build move
        build board
        for loop to build rows
        for loop to build cols
    }
    gameRules(){
        winData
        move
        for loop running i through winData
    }
    if for tie