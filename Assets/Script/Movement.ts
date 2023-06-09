import { ZepetoScriptBehaviour } from 'ZEPETO.Script';
import {Vector3, GameObject, Object, Time, Collider} from 'UnityEngine';

export default class Movement extends ZepetoScriptBehaviour {


    public movingTime: number = 1;
    public movingRnageX: number = 0;
    public movingRangeY: number = 0;
    public delta: number = 0;
    private movementFlag: bool = true;
    Start() {    
        console.log("Movement Script Loaded");


    }

    Update()
    {
        this.delta += Time.deltaTime;
        if(this.delta > this.movingTime)
        {
            this.delta = 0;
            this.movementFlag = !this.movementFlag;
        }
        if(this.movementFlag == true)
        {
            // Move UpWard
            this.transform.Translate(this.movingRnageX * Time.deltaTime, this.movingRangeY*Time.deltaTime, 0);
        }
        else
        {
            // Move DownWard
            this.transform.Translate(-1 * this.movingRnageX * Time.deltaTime, -1 * this.movingRangeY*Time.deltaTime, 0);

        }

    }

}