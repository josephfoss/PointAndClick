using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AlmondRacer : MonoBehaviour
{
    public bool enginefix1;
    public bool enginefix2;
    public bool enginefix3;
    public bool fueltank;
    public bool battery;
    public bool tire;

    public GameObject bat;
    public GameObject wheel;
    public GameObject fixedalmond;
    public int batterycount = 0;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        batterycount = GameObject.Find("BatCharger").GetComponent<Animator>().GetInteger("BatteriesAnim");


        if (batterycount == 7)
        {
            bat.GetComponent<Object>().description = "Battery charged.";
        }
        else
        {
            bat.GetComponent<Object>().description = "Batteries out of juice. I'll need to find " + (7 - batterycount) + " AA batteries to recharge it.";
        }
        if (tire)
        {
            if(wheel != null)
            {
                wheel.GetComponent<Object>().description = "This tire should do.";
            }  
        }

        if (enginefix1 && enginefix2 && enginefix3)
        {
            GameObject.Find("Engine").GetComponent<Object>().description = "This engine looks as good as new.";
            GameObject.Find("Engine").GetComponent<Animator>().SetBool("EngineRepaired", true);

        }
        if(batterycount == 7)
        {
            battery = true;
        }


        if (enginefix1 && enginefix2 && enginefix3 && fueltank && battery && tire)
        {
            if(GameObject.Find("Almond Racer") != null)
            {
                Destroy(GameObject.Find("Almond Racer"));
            }
            GameObject.Find("Trunk Collider").tag = "Untagged";
            fixedalmond.SetActive(true);
        }

    }
}
