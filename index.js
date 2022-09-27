console.log("loaded");
let song = {
    title : "",
    leng : 0,
}
class Song {
    constructor(title, leng){
        this.title = title;
        this.leng = leng;
    }
    get title(){
        return this.#title;
    }
    set title(title){
        this.#title = title;
    }
    get leng(){
        return this.#leng;
    }
    set leng(leng){
        if(typeof leng === "number" && leng >= 0){
            this.#hossz = hossz;
        }else{
            throw new Error("Hossza 0-nál nagyobb számnak kell lennie");
        }    
    }
    static totallength(zenehossz){
        
    }
}
let fisrtsong = new Song(title,leng);
let i = 0;
const songs = [];
function addsong(){
    document.getElementById("titleofsong").value;
    document.getElementById("lengthofsong").value;
}