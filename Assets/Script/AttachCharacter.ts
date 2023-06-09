import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Collider } from 'UnityEngine'
import { ZepetoCharacter, ZepetoPlayers } from 'ZEPETO.Character.Controller'

export default class AttachCharacter extends ZepetoScriptBehaviour {

    private zepetoCharacter: ZepetoCharacter;

    Start() {
        // Zepeto character object
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            this.zepetoCharacter = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;
        });
    }
    
    OnTriggerEnter(collider: Collider) 
    {
        if (this.zepetoCharacter == null ) {
            console.log("Character is not loaded");
            return;
        }
        console.log("Character is Enter the zone");

        this.zepetoCharacter.characterController.transform.parent = this.transform;
      
        


    }
    onTriggerExit(collider: Collider)
    {
        if(collider.gameObject == this.zepetoCharacter.gameObject)
        {
            this.zepetoCharacter.transform.parent = null;
        }

    }
}