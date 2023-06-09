import { ZepetoCharacter, ZepetoPlayers } from 'ZEPETO.Character.Controller'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Collider, Quaternion, Vector3 } from 'UnityEngine';
export default class RotateTrigger extends ZepetoScriptBehaviour {

    private zepetoCharacter: ZepetoCharacter;
    public isTriggered: bool = false;

    Start() {
        // Zepeto character object
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            this.zepetoCharacter = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;
        });
    }

    OnTriggerEnter(collider: Collider) 
    {
        if (this.zepetoCharacter == null || collider.gameObject != this.zepetoCharacter.gameObject) {
            return;
        }
        
        this.isTriggered = true;


    }

}