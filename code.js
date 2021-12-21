let i = 1
let a = 0
const alienShips = []
let aliens = class {
    constructor(hull,firepower,accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

}
let uss = {
    hp:20,
    firePower:5,
    accuracy:.7,
}
const playerStats = document.getElementById("playerStats");
const enemyStats = document.getElementById("enemyStats");
for (let y = 0; y < 6; y++) {
    alienShips.push(new aliens((Math.floor(Math.random()*4)+3),(Math.floor(Math.random()*3)+2),((Math.floor(Math.random()*3)+6)/10)))
}
playerStats.innerHTML = `Hull : ${uss.hp}<br>Firepower : ${uss.firePower}<br>Accuracy : ${uss.accuracy}`
enemyStats.innerHTML = `Hull : ${alienShips[a].hull}<br>Firepower : ${alienShips[a].firepower}<br>Accuracy : ${alienShips[a].accuracy}`
function program (){
block_1: 
    while (i<1000){
        let action = prompt("What would you like to do? Retreat or Attack")
        block_2 : {
            if (action == 'attack' || action == 'Attack') {
            while (a < 6){

                if (uss.hp <= 0){
                    alert("You Lose. Reload to try again.")
                    break block_1;
                }
                if (Math.random() < uss.accuracy){
                    alienShips[a].hull = alienShips[a].hull -= uss.firePower;
                    alert(`You Hit the aliens! Their healh is now ${alienShips[a].hull}.`)
                    enemyStats.innerHTML = '';
                    enemyStats.innerHTML = `Hull : ${alienShips[a].hull}<br>Firepower : ${alienShips[a].firepower}<br>Accuracy : ${alienShips[a].accuracy}`;
                }
                else{
                    alert("You Missed.")
                }
                if (alienShips[a].hull <= 0){
                    alert("You beat that ship!")
                    if (a < 5){
                        a++
                        break block_2;
                    }
                    else{
                        alert("You Win! Reload to try again!")
                        break block_1;
                    }
                }
                else{}
                if (Math.random() < alienShips[a].accuracy){
                    uss.hp = uss.hp -= alienShips[a].firepower;
                    alert(`They hit you! Your Health is now ${uss.hp}.`)
                    playerStats.innerHTML = ''
                    playerStats.innerHTML = `Hull : ${uss.hp}<br>Firepower : ${uss.firePower}<br>Accuracy : ${uss.accuracy}`;
                }
                else{
                    alert("They missed.")
                }
            }
            } 
        else if (action == 'retreat' || action == 'Retreat') 
        {
            alert("You Lose. Reload to try again.")
            break block_1;
        }   
        else
        {
            alert("That is not a valid option.")
        }
    
        }
        
            
    
    
    i++




    console.log(alienShips)
    console.log(uss.hp)

}
}