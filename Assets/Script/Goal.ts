import { ZepetoCharacter, ZepetoPlayers } from 'ZEPETO.Character.Controller'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Collider, Quaternion, Vector3 } from 'UnityEngine';

export default class Goal extends ZepetoScriptBehaviour {

    private zepetoCharacter: ZepetoCharacter;

    Start() {
        // Zepeto character object
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            this.zepetoCharacter = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;
        });
    }

    OnTriggerEnter(collider: Collider) {
        if (this.zepetoCharacter == null || collider.gameObject != this.zepetoCharacter.gameObject) {
            return;
        }

        // Teleport to Origin Position
        this.zepetoCharacter.Teleport(new Vector3(0, 0, 0), Quaternion.identity);
    }

}