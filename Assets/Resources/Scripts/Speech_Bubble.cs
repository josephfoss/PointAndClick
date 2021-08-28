using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine;

public class Speech_Bubble : MonoBehaviour
{
    private CanvasGroup alpha;
    private Text text;
    public bool hidden;

    // Start is called before the first frame update
    void Start()
    {
        hidden = true;
        alpha = GetComponent<CanvasGroup>();
            
    }

    // Update is called once per frame
    void Update()
    {


        if (!hidden)
        {
            alpha.alpha = 1;
        }
        else
        {
            alpha.alpha = 0;
        }



    }
}
