using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine.UI;
using UnityEngine;

public class Object : MonoBehaviour
{
    public string objname;
    public string description;
    public float hidetime = 4;
    public bool inventoryobj;
    public bool speechtog = true;
    public GameObject Item;
    [Space(10)]
    [Header("Item Interaction Manager")]
    public string[] items;
    public string[] interaction;
    public string[] possibleitems;


    private float timer;
    [HideInInspector]
    public bool left;
    public bool clicked;
    private bool lootable = true;
    private string nointeraction = "That doesn't do anything.";
    private string possibleinteraction = "Let's not do that quite yet.";
    private string full = "but my backpack is full.";
    private Speech_Bubble bubble;
    private Text text;
    private AudioSource aud;
    private BoxCollider2D box;
    private SpriteRenderer spr;
    private GameObject inventory;
    private PlayerController plr;

    void Start()
    {
        clicked = false;
        bubble = GameObject.Find("Bubble").GetComponent<Speech_Bubble>();
        text = GameObject.Find("bText").GetComponent<Text>();
        inventory = GameObject.Find("I Inset");
        aud = GetComponent<AudioSource>();
        box = GetComponent<BoxCollider2D>();
        spr = GetComponentInChildren<SpriteRenderer>();
        plr = GameObject.Find("Mack").GetComponent<PlayerController>();
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
        if (Input.GetMouseButtonDown(0) && left)
        {
            Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            RaycastHit2D hit = Physics2D.Raycast(mousePos, Vector3.forward);


            if (hit.collider != null && hit.collider.tag != "Player" && hit.collider.tag != "Map")
            {
                clicked = false;
                left = false;
            }

        }
        if (Input.GetMouseButtonDown(0))
        {
            Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            RaycastHit2D hit = Physics2D.Raycast(mousePos, Vector3.forward);

            if (hit.collider.tag == "Door" || hit.collider.tag == "Trigger" || hit.collider.tag == "BackButton")
            {
                clicked = false;
                left = false;
                bubble.hidden = true;
            }

        }
    }
    private void OnMouseOver()
    {
        left = false;
        if (Input.GetMouseButtonDown(0))
        {
            if (inventoryobj)
            {
                if (inventory.transform.childCount < 20 && lootable)
                {
                    lootable = false;
                    spr.enabled = false;
                    speech(description);
                    Instantiate(Item, inventory.transform);
                }
                else
                {
                    if (lootable)
                    {
                        speech(description + " " + full);
                    }
                    
                }
            }
            else
            {
                if (speechtog)
                {
                    speech(description);
                }

            }
        }

    }
    private void OnMouseExit()
    {
        left = true;
    }

    public bool Interaction(Item item)
    {
        if (items.Contains(item.iname))
        {
            var pos = System.Array.IndexOf(items, item.iname);

            if (!string.IsNullOrEmpty(interaction[pos]))
            {
                speech(interaction[pos]);
            }
            return true;
        }
        else if (possibleitems.Contains(item.iname))
        {
            speech(possibleinteraction);
            return false;
        }
        else
        {
            speech(nointeraction);

            return false;
        }


    }

    public void speech(string str)
    {
        text.text = str;
        clicked = true;
        timer = hidetime + Time.time;
    }
    public void hidebubble()
    {
        clicked = false;
        left = false;
        bubble.hidden = true;
    }

    //watermelon
}
