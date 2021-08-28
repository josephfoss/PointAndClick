using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Cursor : MonoBehaviour
{

    public float offset;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        var mouse = Camera.main.ScreenToWorldPoint(Input.mousePosition);

        transform.position = new Vector2(mouse.x + offset, mouse.y);
    }
}
