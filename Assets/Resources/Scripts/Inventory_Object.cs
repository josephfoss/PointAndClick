using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine;

public class Inventory_Object : MonoBehaviour
{
    public string description;
    public GameObject Item;
    public bool debug;
    public float hidetime;

    private bool left;
    private BoxCollider2D box;
    private bool clicked;
    private float timer;
    private Speech_Bubble bubble;
    private string full = "but my backpack is full.";
    private Text text;
    private AudioSource aud;
    private GameObject inventory;

    void Start()
    {
        clicked = false;

        box = GetComponent<BoxCollider2D>();
        bubble = GameObject.Find("Bubble").GetComponent<Speech_Bubble>();
        full = ("but my backpack is full.");
        aud = transform.parent.GetComponent<AudioSource>();
        text = GameObject.Find("bText").GetComponent<Text>();
        inventory = GameObject.Find("I Inset");
    }

    private void Update()
    {
        float curtime = Time.time;

        if (Time.time >= timer && clicked)
        {
            bubble.hidden = true;
            clicked = false;
        }
        if (Time.time <= timer && clicked)
        {
            bubble.hidden = false;
        }
        if (Input.GetMouseButtonDown(1) && left)
        {
            Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            RaycastHit2D hit = Physics2D.Raycast(mousePos, -Vector2.up);

            if (hit.collider != null && hit.collider.tag != "Player")
            {
                clicked = false;
            }
        }

    }

    private void OnMouseOver()
    {
        left = false;
        if (Input.GetMouseButtonDown(1))
        {
            if(inventory.transform.childCount < 20)
            {
                speech(description);

                Instantiate(Item, inventory.transform);
                if (!debug)
                {
                    Destroy(gameObject.transform.GetChild(0).gameObject);
                    Destroy(this.box);
                }
            }
            else
            {
                speech(description + " " + full);
            }

        }

    }
    private void OnMouseExit()
    {
        left = true;
    }

    public void speech(string str)
    {
        text.text = str;
        clicked = true;
        timer = hidetime + Time.time;
    }

}