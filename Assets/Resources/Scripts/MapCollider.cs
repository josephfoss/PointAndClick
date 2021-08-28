using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MapCollider : MonoBehaviour
{

    private PlayerController plr;

    // Start is called before the first frame update
    void Start()
    {
        plr = GameObject.Find("Mack").GetComponent<PlayerController>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

}
