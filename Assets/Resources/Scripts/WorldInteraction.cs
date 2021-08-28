using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WorldInteraction : MonoBehaviour
{
    public GameObject obj;
    public string animatorBool;
    private string worldObj;

    // Start is called before the first frame update
    void Start()
    {
        worldObj = gameObject.name;
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    private void OnMouseDown()
    {

        GetComponent<Animator>().SetBool(animatorBool, true);
        obj.SetActive(obj);

    }
}
