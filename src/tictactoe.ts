class PlayZone {
    container: HTMLDivElement;
    headerTwo: HTMLHeadElement;
    button: HTMLButtonElement;
    playArea: HTMLTableElement;
    
    constructor () {
        this.container = <HTMLDivElement> document.getElementById("container");
        this.playArea = <HTMLTableElement> document.querySelector("#.play-area")
        this.headerTwo = <HTMLInputElement> document.getElementById("winner");
        this.button = <HTMLButtonElement> document.querySelector("button");

        this.button.addEventListener ("onclick", handleClick);

        function handleClick () {
            console.log ("Reset");
        }
       
    }

    
}