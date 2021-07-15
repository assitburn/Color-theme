async function colorchange(wert){
  const batchPlay = require("photoshop").action.batchPlay;

  const result = await batchPlay(
  [
    {
        "_obj": "set",
        "_target": [
          {
              "_ref": "property",
              "_property": "interfacePrefs"
          },
          {
              "_ref": "application",
              "_enum": "ordinal",
              "_value": "targetEnum"
          }
        ],
        "to": {
          "_obj": "interfacePrefs",
          "kuiBrightnessLevel": {
              "_enum": "uiBrightnessLevelEnumType",
              "_value": wert
          }
        },
        "_isCommand": true,
        "_options": {
          "dialogOptions": "dontDisplay"
        }
    }
  ],{
    "synchronousExecution": false,
    "modalBehavior": "fail"
  });
}

document.getElementById("btn_dark").addEventListener("click", function(){colorchange("kPanelBrightnessDarkGray");});
document.getElementById("btn_dark-light").addEventListener("click", function(){colorchange("kPanelBrightnessMediumGray");});
document.getElementById("btn_light_dark").addEventListener("click", function(){colorchange("kPanelBrightnessLightGray");});
document.getElementById("btn_light").addEventListener("click", function(){colorchange("kPanelBrightnessOriginal");});
