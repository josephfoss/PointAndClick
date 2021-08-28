using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RoomScreenChange : MonoBehaviour
{



    public GameObject room;
    public GameObject trigger;
    public GameObject screen;

    private Object bub;
    private Speech_Bubble speechbub;
    private bool switched;
    private GameObject bubble;
    private CameraController cam;

    // Start is called before the first frame update
    void Start()
    {
        speechbub = GameObject.Find("Bubble").GetComponent<Speech_Bubble>();
        bub = GameObject.Find("Map").GetComponent<Object>();
        bubble = GameObject.Find("bParent");
        cam = Camera.main.GetComponent<CameraController>();
    }

    // Update is called once per frame
    void Update()
    {

        if (Input.GetMouseButtonDown(0))
        {
            Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            RaycastHit2D hit = Physics2D.Raycast(mousePos, Vector3.forward);

            if (hit.collider.gameObject == trigger && trigger.tag == "Trigger")
            {
                switched = true;
                bubble.transform.SetParent(GameObject.Find("Cursor").transform);
                cam.boundBox = screen;
            }

        }
        if (switched)
        {
            bubble.transform.localPosition = new Vector3(-17.4f, -38.9f, 0);
        }

    }
    public void backbutton()
    {
        switched = false;
        bub.clicked = false;
        bub.left = false;
        speechbub.hidden = true;
        bubble.transform.SetParent(GameObject.Find("Mack").transform);
        cam.boundBox = room;
        bubble.transform.localPosition = new Vector2(0, 0);
    }
    public void hidebub()
    {
        bub.clicked = false;
        bub.left = false;
        speechbub.hidden = true;
    }
}
