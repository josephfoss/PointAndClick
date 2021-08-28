using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Interactions : MonoBehaviour
{
    private Object Object;
    private GameObject Inventory;
    private Animator Firepit;

    void Start()
    {
        Object = GameObject.Find("Map").GetComponent<Object>();
        Inventory = GameObject.Find("I Inset");
        Firepit = GameObject.Find("EmptyPit").GetComponent<Animator>();
    }

    public void interact(Item invitem, Object worlditem)
    {

        if (invitem.iname == "Lockpick" && worlditem.objname == "JackDoor")
        {
            worlditem.tag = "Door";
            worlditem.GetComponent<Object>().description = string.Empty;
            Destroy(invitem.gameObject);
        }
        // MACK INTERACTIONS
        if (invitem.iname == "YoyoWrench" && worlditem.objname == "Mack")
        {
            GameObject w = Instantiate(Resources.Load("Prefabs/Items/Wrench", typeof(GameObject))) as GameObject;
            w.transform.SetParent(GameObject.Find("I Inset").transform);
            GameObject y = Instantiate(Resources.Load("Prefabs/Items/Yoyo", typeof(GameObject))) as GameObject;
            y.transform.SetParent(GameObject.Find("I Inset").transform);
            Destroy(invitem.gameObject);
        }
        // ENGINE REPAIR
        if (invitem.iname == "PowerDrill" && worlditem.objname == "Engine")
        {
            GameObject.Find("Garage").GetComponent<AlmondRacer>().enginefix1 = true;
            Destroy(invitem.gameObject);
        }
        if (invitem.iname == "Wrench" && worlditem.objname == "Engine")
        {
            GameObject.Find("Garage").GetComponent<AlmondRacer>().enginefix2 = true;
            Destroy(invitem.gameObject);
        }
        if (invitem.iname == "Screwdriver" && worlditem.objname == "Engine")
        {
            GameObject.Find("Garage").GetComponent<AlmondRacer>().enginefix3 = true;
            Destroy(invitem.gameObject);
        }
        //FUEL TANK FILL
        if (invitem.iname == "PeanutButter" && worlditem.objname == "Fueltank")
        {
            worlditem.description = "All filled up.";
            GameObject.Find("Cap").GetComponent<Animator>().SetBool("CapOn", true);
            GameObject.Find("Garage").GetComponent<AlmondRacer>().fueltank = true;
            Destroy(invitem.gameObject);
        }
        //BATTERY FILL
        if (invitem.iname == "AABattery" && worlditem.objname == "Battery")
        {
            GameObject.Find("BatCharger").GetComponent<Animator>().SetInteger("BatteriesAnim", GameObject.Find("BatCharger").GetComponent<Animator>().GetInteger("BatteriesAnim") + 1);
            Destroy(invitem.gameObject);
        }
        if (invitem.iname == "Tire" && worlditem.objname == "FlatWheel")
        {
            worlditem.GetComponent<Animator>().SetBool("WheelFixed", true);
            GameObject.Find("Garage").GetComponent<AlmondRacer>().tire = true;
            Destroy(invitem.gameObject);
        }
        //FIRE STARTING (You've never seen spaghetti code like this)
        if(invitem.iname == "Wood" && worlditem.objname == "Firepit" && Firepit.GetInteger("FireStage") == 0)
        {
            GameObject.Find("EmptyPit").GetComponent<Firepit>().wood = true;
            Destroy(invitem.gameObject);
            Firepit.SetInteger("FireStage", 1);
            Firepit.gameObject.GetComponent<Object>().description = "Now I'll need some twigs.";
            Firepit.gameObject.GetComponent<Object>().items[0] = "Twigs";
            Firepit.gameObject.GetComponent<Object>().interaction[0] = "Now I'll need some paper.";
            Firepit.gameObject.GetComponent<Object>().possibleitems[0] = "pee pee";
        }
        if (invitem.iname == "Twigs" && worlditem.objname == "Firepit" && Firepit.GetInteger("FireStage") == 1)
        {
            GameObject.Find("EmptyPit").GetComponent<Firepit>().twigs = true;
            Destroy(invitem.gameObject);
            Firepit.SetInteger("FireStage", 2);
            Firepit.gameObject.GetComponent<Object>().description = "Now I'll need some paper.";
            Firepit.gameObject.GetComponent<Object>().items[0] = "Paper";
            Firepit.gameObject.GetComponent<Object>().interaction[0] = "Now I'll need some sort of flammable liquid.";
            Firepit.gameObject.GetComponent<Object>().possibleitems[1] = "poo poo";
        }
        if (invitem.iname == "Paper" && worlditem.objname == "Firepit" && Firepit.GetInteger("FireStage") == 2)
        {
            GameObject.Find("EmptyPit").GetComponent<Firepit>().paper = true;
            Destroy(invitem.gameObject);
            Firepit.SetInteger("FireStage", 3);
            Firepit.gameObject.GetComponent<Object>().description = "Now I'll need some sort of flammable liquid";
            Firepit.gameObject.GetComponent<Object>().items[0] = "Oil";
            Firepit.gameObject.GetComponent<Object>().interaction[0] = "Now to light the fire.";
            Firepit.gameObject.GetComponent<Object>().possibleitems[2] = "pee poo";
        }
        if (invitem.iname == "Oil" && worlditem.objname == "Firepit" && Firepit.GetInteger("FireStage") == 3)
        {
            GameObject.Find("EmptyPit").GetComponent<Firepit>().oil = true;
            Destroy(invitem.gameObject);
            Firepit.SetInteger("FireStage", 4);
            Firepit.gameObject.GetComponent<Object>().description = "Now to light the fire.";
            Firepit.gameObject.GetComponent<Object>().items[0] = "Lighter";
            Firepit.gameObject.GetComponent<Object>().possibleitems[3] = "pee poo";
        }
        if (invitem.iname == "Lighter" && worlditem.objname == "Firepit" && Firepit.GetInteger("FireStage") == 4)
        {
            Firepit.gameObject.GetComponent<Object>().hidebubble();
            GameObject.Find("EmptyPit").GetComponent<Firepit>().lighter = true;
            Destroy(invitem.gameObject);
            Firepit.SetInteger("FireStage", 5);
            Firepit.gameObject.GetComponent<Object>().description = "Maybe lighting a bonfire three feet away from someone deathly afraid of fire was a bit much...";
        }
    }
}
