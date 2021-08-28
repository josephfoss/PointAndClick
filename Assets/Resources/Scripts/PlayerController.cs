using System.Collections;
using System.Collections.Generic;
using UnityEngine.EventSystems;
using UnityEngine;

public class PlayerController : MonoBehaviour
{


    public float walkspeed;
    public float shrinkfactor;
    public bool isMoving;
    public float sleep;
    public bool atTarget;

    private float change;
    public float timer;
    private bool awake;
    private Vector3 curPos = Vector3.zero;
    private Vector3 lastPos = Vector3.zero;

    private SpriteRenderer spr;
    private Animator anim;
    private CurrentMap map;

    void Start()
    {
        spr = GetComponent<SpriteRenderer>();
        anim = GetComponent<Animator>();
        map = GetComponent<CurrentMap>();
    }

    private void Awake()
    {
        timer = Time.time + sleep;
    }

    // Update is called once per frame
    void Update()
    {
        isMoving = false;
        if(Time.time >= timer)
        {
            awake = true;
        }
        else
        {
            awake = false;
        }

        if (awake)
        {
            if (map.faceright)
            {
                transform.position = Vector3.MoveTowards(transform.position, map.ctarget.transform.position + new Vector3(-0.01f, 0, 0), walkspeed * Time.deltaTime);
            }
            else
            {
                transform.position = Vector3.MoveTowards(transform.position, map.ctarget.transform.position, walkspeed * Time.deltaTime);
            }
            
        }
        

        //Sprite Mirror
        if (map.ctarget.transform.position.x > transform.position.x)
        {
            spr.flipX = false;
        }
        else
        {
            spr.flipX = true;
        }


        //Animation + Footsteps
        curPos = this.transform.position;

        if (curPos != map.ctarget.transform.position && awake && !map.faceright)
        {
            isMoving = true;
            change = curPos.y - lastPos.y;

            transform.localScale += new Vector3(-change / shrinkfactor, -change / shrinkfactor);
            //if (!aud.isPlaying) aud.Play();
        }
        if (curPos != map.ctarget.transform.position + new Vector3(-0.01f, 0, 0) && awake && map.faceright)
        {
            isMoving = true;
            change = curPos.y - lastPos.y;

            transform.localScale += new Vector3(-change / shrinkfactor, -change / shrinkfactor);
            //if (!aud.isPlaying) aud.Play();
        }
        if (!isMoving)
        {
            //aud.Stop();
        }
        lastPos = curPos;
        
        anim.SetBool("isMoving", isMoving);

        if(transform.localScale.y <= -0.0000001)
        {
            transform.rotation = new Quaternion(0, 0, -180, 0);
        }
        else
        {
            transform.rotation = new Quaternion(0, 0, 0, 0);
        }

        
    }

}
