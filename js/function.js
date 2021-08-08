const toast = document.querySelector(".toast");
toast.onclick = () => {
    toast.classList.remove("visible");
};

function showToast(msg,time) {
    toast.textContent = msg;
    toast.classList.add("visible");
    setTimeout(() => {
        toast.classList.remove("visible");
    }, time);
}

function menuCommand(id) {
    require('photoshop').core.performMenuCommand({
      commandID: id,
      kcanDispatchWhileModal: true,
      _isCommand: false
    });
}

async function layeranzahl(){
    const app = require('photoshop').app;
    const myDoc = app.activeDocument;
    const docLayers = myDoc.layers;
    var aai ="";
    var anzahl=0;
    for (let i=0; i< docLayers.length; i++) {
        var anzahl = i;
    }
    layercount = anzahl;
    return anzahl;
}

async function ebenenauswahlaufheben(){
    const batchPlay = require("photoshop").action.batchPlay;
    const result = await batchPlay(
    [
    {
        "_obj": "selectNoLayers",
        "_target": [
            {
                "_ref": "layer",
                "_enum": "ordinal",
                "_value": "targetEnum"
            }
        ],
        "_isCommand": true,
        "_options": {
            "dialogOptions": "dontDisplay"
        }
    }
    ],{
    "synchronousExecution": false,
    "modalBehavior": "fail",
    "historyStateInfo": {
        "name": "Ebenenauswahl aufgehoben",
        "target": {
           "_ref":"document",
           "_enum": "ordinal",
           "_value": "targetEnum"
        }}
    });

}

async function check_ebenen_nach_oben_zusammenfassen() {
    const app = require('photoshop').app;
    const myDoc = app.activeDocument;
    const docLayers = myDoc.layers;
    var aai ="";
    var nummer=0;
        for (let i=0; i< docLayers.length; i++) {
            var nummer = i;
        }
        
        if (nummer > 0){
            await ebenen_nach_oben_zusammenfassen();
        }
    
}
async function ebenen_nach_oben_zusammenfassen(){
    const batchPlay = require("photoshop").action.batchPlay;
    const result = await batchPlay(
    [
       {
          "_obj": "mergeVisible",
          "duplicate": true,
          "_isCommand": true,
          "_options": {
             "dialogOptions": "dontDisplay"
          }
       },
       {
          "_obj": "move",
          "_target": [
             {
                "_ref": "layer",
                "_enum": "ordinal",
                "_value": "targetEnum"
             }
          ],
          "to": {
             "_ref": "layer",
             "_enum": "ordinal",
             "_value": "front"
          },
          "_isCommand": true,
          "_options": {
             "dialogOptions": "dontDisplay"
          }
       },
       {
        "_obj": "move",
        "_target": [
           {
              "_ref": "layer",
              "_enum": "ordinal",
              "_value": "targetEnum"
           }
        ],
        "to": {
           "_ref": "layer",
           "_enum": "ordinal",
           "_value": "front"
        },
        "_isCommand": true,
        "_options": {
           "dialogOptions": "dontDisplay"
        }
     },
       {
          "_obj": "set",
          "_target": [
             {
                "_ref": "layer",
                "_enum": "ordinal",
                "_value": "targetEnum"
             }
          ],
          "to": {
             "_obj": "layer",
             "name": label_zusammengefasst
          },
          "_isCommand": true,
          "_options": {
             "dialogOptions": "dontDisplay"
          }
       }
    ],{
       "synchronousExecution": false,
       "modalBehavior": "fail",
       "historyStateInfo": {
        "name": label_zusammengefasst,
        "target": {
        "_ref":"document",
        "_enum": "ordinal",
        "_value": "targetEnum"
        }}
    });

}
async function alle_ebenen_auswaehlen(){
    const batchPlay = require("photoshop").action.batchPlay;
    const result = await batchPlay(
    [
    {
        "_obj": "selectAllLayers",
        "_target": [
            {
                "_ref": "layer",
                "_enum": "ordinal",
                "_value": "targetEnum"
            }
        ],
        "_isCommand": true,
        "_options": {
            "dialogOptions": "dontDisplay"
        }
    }
    ],{
    "synchronousExecution": false,
    "modalBehavior": "fail",
    "historyStateInfo": {
     "name": label_alle_ebenen_auswaehlen,
     "target": {
     "_ref":"document",
     "_enum": "ordinal",
     "_value": "targetEnum"
     }}
    });

}
async function check_start(info){
        
    //Check ob Dokument geöffnet
    const app = require('photoshop').app;
    var currentDocument = app.activeDocument;
    if (currentDocument == null){ 
        console.log(label_kein_doc_geladen);
        showToast_red(label_kein_doc_geladen);
        
        return false;
    }

    //Check 32 Bit
    const batchPlay = require("photoshop").action.batchPlay;
    const result = await batchPlay(
        [{
          "_obj": "get",
          "_target": [{
              "_property": "depth"
            },
            {
              "_ref": "document",
              "_enum": "ordinal",
              "_value": "targetEnum"
            }
          ],
          "_options": {
            "dialogOptions": "dontDisplay"
          }
        }], {
          "synchronousExecution": false,
          "modalBehavior": "fail"
        });
    var documentDepth = result[0].depth;
    
    if (documentDepth == '32'){
        console.log(label_32bitohneunterstützung);
        showToast_red(label_32bitohneunterstützung);
        return false;
    }

    //check RGBColor
    const result2 = await batchPlay(
    [
        {
            "_obj": "get",
            "_target": [
                {
                "_property": "mode"
                },
                {
                "_ref": "document",
                "_enum": "ordinal",
                "_value": "targetEnum"
                }
            ],
            "_options": {
                "dialogOptions": "dontDisplay"
            }
        }
    ],{
        "synchronousExecution": false,
        "modalBehavior": "fail"
    });
    let colormod = result2[0].mode._value;
    if (colormod!="RGBColor"){
        console.log(label_nur_rgb_farbraum);
        showToast_red(label_nur_rgb_farbraum);
       
        return false;
    }
}
const toast_red_breit = document.querySelector(".toast_red_breit");
toast_red_breit.onclick = () => {
    toast_red_breit.classList.remove("visible");
};

function showToast_red(msg) {
    toast_red_breit.textContent = msg;
    toast_red_breit.classList.add("visible");
    setTimeout(() => {
        toast_red_breit.classList.remove("visible");
    }, 10000);
}

function removetoast_red(){
    toast_red_breit.classList.remove("visible");
}

async function switch_kopie_check(){
    if(document.getElementById("switch_kopie").checked){
        document.getElementById("switch_kopie").innerHTML="Kopie links / unten";
        
        showToast("Kopie wird links / unten angezeigt",5000);
    }else{
        document.getElementById("switch_kopie").innerHTML="Kopie rechts / oben";
        showToast("Kopie wird rechts / oben angezeigt",5000);
    }   
}
function laden(key,default_wert) {
    const savedPreference = localStorage.getItem(key);
    return (savedPreference === undefined) ? default_wert : savedPreference;
}

function speichern(key,wert) {
    localStorage.setItem(key, wert.toString());
}
async function autostart(){
    const version_nummer = require("uxp").versions.plugin;
    const copyright_text= "&copy; 2021 Carsten Gerdes Version "+version_nummer;
    document.getElementById("copyright").innerHTML = copyright_text;    
    document.getElementById("FQ-rand-slider").value = laden("rand","15");
}
autostart();
async function rand_reset(){
    document.getElementById("FQ-rand-slider").value=10;
}
document.getElementById("switch_kopie").addEventListener("click",switch_kopie_check);
document.getElementById("btn_rand_reset").addEventListener("click",rand_reset);