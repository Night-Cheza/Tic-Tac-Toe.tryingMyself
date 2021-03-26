"use strict";
class PlayZone {
    constructor() {
        this.container = document.getElementById("container");
        this.playArea = document.querySelector("#.play-area");
        this.headerTwo = document.getElementById("winner");
        this.button = document.querySelector("button");
        this.button.addEventListener("onclick", handleClick);
        function handleClick() {
            console.log("Reset");
        }
    }
}
