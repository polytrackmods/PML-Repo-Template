import { PolyMod, MixinType } from "https://cdn.polymodloader.com/cb/polytrackmods/PolyModLoader/0.5.2/PolyModLoader.js";

class YourMod extends PolyMod {
    init = (pml) => {
        // regular init
    }
    postInit = () => {
        // post init
    }
    simInit = () => {
        // sim init here
    } 
}


export let polyMod = new YourMod();
