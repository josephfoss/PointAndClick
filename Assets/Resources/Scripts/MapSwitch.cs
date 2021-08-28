using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MapSwitch : MonoBehaviour
{
    public string mapto;
    public float scale;
    public GameObject entry;
    public GameObject bound;
    private RoomScreenChange hidebub;
    private PlayerController plr;

    private CurrentMap mapf;

    // Start is called before the first frame update
    void Start()
    {
        plr = GameObject.Find("Mack").GetComponent<PlayerController>();
        hidebub = GameObject.Find("Drawer").GetComponent<RoomScreenChange>();
        mapf = GameObject.Find("Mack").GetComponent<CurrentMap>();

    }

    // Update is called once per frame
    void Update()
    {
        

    }

    private void OnMouseDown()
    {
        if (plr.isMoving == false && gameObject.tag == "Door")
        {
            mapf.changeMap(entry, bound, mapto, scale);
        }
        
    }
}
