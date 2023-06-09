import { Quaternion, Vector3 } from 'UnityEngine';
import { LocalPlayer, SpawnInfo, ZepetoPlayers } from 'ZEPETO.Character.Controller'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class CharacterController extends ZepetoScriptBehaviour {

    Start() {    
        const spawnPos = new SpawnInfo();
        //spawnPos.position = new Vector3(-35, 0, -35);
        //spawnPos.position = new Vector3(12, 0, 27); // Inside the house
        spawnPos.position = new Vector3(12, 100, 64); // On the dragon


        spawnPos.rotation = Quaternion.Euler(0,40,0);

        ZepetoPlayers.instance.CreatePlayerWithZepetoId("", "KuVee", spawnPos, true);
        
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            let _player : LocalPlayer = ZepetoPlayers.instance.LocalPlayer; 
        });

    }

}