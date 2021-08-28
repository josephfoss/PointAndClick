using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PauseMenu : MonoBehaviour
{

    private GameObject menu;

    // Start is called before the first frame update
    void Start()
    {
        menu = GameObject.Find("Pause");
        menu.GetComponent<CanvasGroup>().interactable = false;
        menu.GetComponent<CanvasGroup>().blocksRaycasts = false;
        menu.GetComponent<CanvasGroup>().alpha = 0;
    }
    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            menu.GetComponent<CanvasGroup>().interactable = !menu.GetComponent<CanvasGroup>().interactable;
            menu.GetComponent<CanvasGroup>().blocksRaycasts = !menu.GetComponent<CanvasGroup>().blocksRaycasts;
            if (menu.GetComponent<CanvasGroup>().alpha == 0)
            {
                menu.GetComponent<CanvasGroup>().alpha = 1;
            }
            else
            {
                menu.GetComponent<CanvasGroup>().alpha = 0;
            }
        }
    }
    // Update is called once per frame
    public void closegame()
    {
        Debug.Log("dead");
        Application.Quit();
    }
}
