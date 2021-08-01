async function auto_run(){
  button_set();
  await require("photoshop").core.executeAsModal(readout);
}
async function readout(){
  const batchPlay = require("photoshop").action.batchPlay;
  const result = await batchPlay(
  [
    {
        "_obj": "get",
        "_target": [
          {
              "_property": "kuiBrightnessLevel"
          },
          {
              "_ref": "application",
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
  });
  const pinned = result[0].kuiBrightnessLevel._value;
  
  if (pinned == "kPanelBrightnessDarkGray"){
    document.getElementById("btn_dark").innerHTML ='<div slot="icon" class="icon"><svg height="20" viewBox="0 0 20 20" width="20" slot="icon" focusable="false" aria-hidden="true" role="img"><rect x="0" y="0" width="20" height="20" style="fill:#353535;"/><path d="M0.763,17.985l6.95,-9.365l-6.129,-8.605l2.832,0l3.26,4.609c0.678,0.956 1.161,1.692 1.447,2.206c0.4,-0.653 0.874,-1.336 1.421,-2.047l3.616,-4.768l2.587,0l-6.313,8.47l6.803,9.5l-2.942,-0l-4.523,-6.411c-0.253,-0.368 -0.515,-0.768 -0.784,-1.201c-0.401,0.654 -0.687,1.103 -0.858,1.348l-4.511,6.264l-2.856,-0Z" style="fill:#fff;fill-rule:nonzero;"/></svg></div>';  
  }
  if (pinned == "kPanelBrightnessMediumGray"){
    document.getElementById("btn_dark-light").innerHTML ='<div slot="icon" class="icon"><svg height="20" viewBox="0 0 20 20" width="20" slot="icon" focusable="false" aria-hidden="true" role="img"><rect x="0" y="0" width="20" height="20" style="fill:#545454;"/><path d="M0.763,17.985l6.95,-9.365l-6.129,-8.605l2.832,0l3.26,4.609c0.678,0.956 1.161,1.692 1.447,2.206c0.4,-0.653 0.874,-1.336 1.421,-2.047l3.616,-4.768l2.587,0l-6.313,8.47l6.803,9.5l-2.942,-0l-4.523,-6.411c-0.253,-0.368 -0.515,-0.768 -0.784,-1.201c-0.401,0.654 -0.687,1.103 -0.858,1.348l-4.511,6.264l-2.856,-0Z" style="fill:#fff;fill-rule:nonzero;"/></svg></div>';  
  }
  if (pinned == "kPanelBrightnessLightGray"){
    document.getElementById("btn_light_dark").innerHTML ='<div slot="icon" class="icon"><svg height="20" viewBox="0 0 20 20" width="20" slot="icon" focusable="false" aria-hidden="true" role="img"><rect x="0" y="0" width="20" height="20" style="fill:#b6b7b7;"/><path d="M0.763,17.985l6.95,-9.365l-6.129,-8.605l2.832,0l3.26,4.609c0.678,0.956 1.161,1.692 1.447,2.206c0.4,-0.653 0.874,-1.336 1.421,-2.047l3.616,-4.768l2.587,0l-6.313,8.47l6.803,9.5l-2.942,-0l-4.523,-6.411c-0.253,-0.368 -0.515,-0.768 -0.784,-1.201c-0.401,0.654 -0.687,1.103 -0.858,1.348l-4.511,6.264l-2.856,-0Z" /></svg></div>';  
  }
  if (pinned == "kPanelBrightnessOriginal"){
    document.getElementById("btn_light").innerHTML ='<div slot="icon" class="icon"><svg height="20" viewBox="0 0 20 20" width="20" slot="icon" focusable="false" aria-hidden="true" role="img"><rect x="0" y="0" width="20" height="20" style="fill:#eff0ef;"/><path d="M0.763,17.985l6.95,-9.365l-6.129,-8.605l2.832,0l3.26,4.609c0.678,0.956 1.161,1.692 1.447,2.206c0.4,-0.653 0.874,-1.336 1.421,-2.047l3.616,-4.768l2.587,0l-6.313,8.47l6.803,9.5l-2.942,-0l-4.523,-6.411c-0.253,-0.368 -0.515,-0.768 -0.784,-1.201c-0.401,0.654 -0.687,1.103 -0.858,1.348l-4.511,6.264l-2.856,-0Z" /></svg></div>';  
  }
}
async function button_set(){
  document.getElementById("btn_dark").innerHTML ='<div slot="icon" class="icon"><svg height="20" viewBox="0 0 20 20" width="20" slot="icon" focusable="false" aria-hidden="true" role="img"><rect x="0" y="0" width="20" height="20" style="fill:#353535;"/></svg></div>';
  document.getElementById("btn_dark-light").innerHTML ='<div slot="icon" class="icon"><svg height="20" viewBox="0 0 20 20" width="20" slot="icon" focusable="false" aria-hidden="true" role="img"><rect x="0" y="0" width="20" height="20" style="fill:#545454;"/></svg></div>';
  document.getElementById("btn_light_dark").innerHTML ='<div slot="icon" class="icon"><svg height="20" viewBox="0 0 20 20" width="20" slot="icon" focusable="false" aria-hidden="true" role="img"><rect x="0" y="0" width="20" height="20" style="fill:#b6b7b7;"/></svg></div>';
  document.getElementById("btn_light").innerHTML ='<div slot="icon" class="icon"><svg height="20" viewBox="0 0 20 20" width="20" slot="icon" focusable="false" aria-hidden="true" role="img"><rect x="0" y="0" width="20" height="20" style="fill:#eff0ef;"/></svg></div>';
}
async function colorchange(wert){
  await require("photoshop").core.executeAsModal(function(){colorchange_action(wert)});
  button_set();
  await require("photoshop").core.executeAsModal(readout);
}

async function colorchange_action(theme){
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
              "_value": theme
          }
        },
        "_isCommand": true,
        "_options": {
          "dialogOptions": "dontDisplay"
        }
    }
  ],{
    "synchronousExecution": false,
    
  });
}
document.addEventListener("load",auto_run);

document.getElementById("btn_dark").addEventListener("click", function(){colorchange("kPanelBrightnessDarkGray");});
document.getElementById("btn_dark-light").addEventListener("click", function(){colorchange("kPanelBrightnessMediumGray");});
document.getElementById("btn_light_dark").addEventListener("click", function(){colorchange("kPanelBrightnessLightGray");});
document.getElementById("btn_light").addEventListener("click", function(){colorchange("kPanelBrightnessOriginal");});
