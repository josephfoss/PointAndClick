using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CurrentMap : MonoBehaviour
{
    public string cmap;
    public bool faceright;
    public GameObject ctarget;
    private CameraController cam;

    void Start()
    {
        cam = Camera.main.GetComponent<CameraController>();
        cmap = "LivingRoom";
        transform.localScale = new Vector2(.57f, .57f);
    }

    // Update is called once per frame
    void Update()
    {
        if(cmap == "Room")
        {
            faceright = true;
            GetComponent<PlayerController>().shrinkfactor = 40;
            ctarget = GameObject.Find(cmap + "Target");
        }
        if(cmap == "Hallway")
        {
            GetComponent<PlayerController>().shrinkfactor = 1000;
            ctarget = GameObject.Find(cmap + "Target");
        }
        if(cmap == "LivingRoom")
        {
            GetComponent<PlayerController>().shrinkfactor = 250;
            ctarget = GameObject.Find(cmap + "Target");
        }
        if (cmap == "Garage")
        {
            faceright = true;
            GetComponent<PlayerController>().shrinkfactor = 55;
            ctarget = GameObject.Find(cmap + "Target");
        }
        if (cmap == "JackRoom")
        {
            GetComponent<PlayerController>().shrinkfactor = 40;
            ctarget = GameObject.Find(cmap + "Target");
        }
        if (cmap == "Kitchen")
        {
            faceright = true;
            GetComponent<PlayerController>().shrinkfactor = 40;
            ctarget = GameObject.Find(cmap + "Target");
        }
        if (cmap == "Backyard")
        {
            faceright = true;
            GetComponent<PlayerController>().shrinkfactor = 40;
            ctarget = GameObject.Find(cmap + "Target");
        }



    }

    public void changeMap(GameObject entrypoint, GameObject boundbox, string curmap, float scale)
    {
        gameObject.GetComponent<PlayerController>().timer = Time.time + 0.1f;
        transform.position = entrypoint.transform.position;
        transform.localScale = new Vector2(scale, scale);
        Debug.Log(transform.localScale);
        faceright = false;
        cmap = curmap;
        cam.boundBox = boundbox;
    }
}
