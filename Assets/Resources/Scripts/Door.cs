using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Door : MonoBehaviour
{

    public bool unlocked;
    public string newDescription;

    private Object doorobj;

    // Start is called before the first frame update
    void Start()
    {
        doorobj = GetComponent<Object>();
        
    }

    // Update is called once per frame
    void Update()
    {
        if (unlocked)
        {
            doorobj.description = newDescription;
        }


    }
}
