using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Firepit : MonoBehaviour
{
    public bool wood;
    public bool twigs;
    public bool paper;
    public bool oil;
    public bool lighter;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(wood && twigs && paper && oil && lighter){
            //gameObject.GetComponent<Animator>
        }


    }
}
