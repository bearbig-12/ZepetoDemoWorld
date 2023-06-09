import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import  RotateTrigger  from './RotateTrigger';

export default class Rotate extends ZepetoScriptBehaviour {
    public rotationX: number = 0;
    public rotationY: number = 1;
    public rotationZ: number = 0;
    public Checking: bool = false;

    Start() {    
        console.log("Rotate Script Loaded");
        this.gameObject.AddComponent<RotateTrigger>();

    }

    Update()
    {
        const rotateTriggerCheck = this.gameObject.GetComponent<RotateTrigger>();

        this.Checking = rotateTriggerCheck.isTriggered;
        if(this.Checking)
        {
            this.transform.Rotate(this.rotationX, this.rotationY, this.rotationZ);

        }
        
    }

}