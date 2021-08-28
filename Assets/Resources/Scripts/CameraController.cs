using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{

    public GameObject boundBox;

    private Camera mycam;
    private Vector3 minBounds;
    private Vector3 maxBounds;
    private float halfWidth;
    private float halfHeight;

    // Start is called before the first frame update
    void Start()
    {
        mycam = GetComponent<Camera>();

    }

    // Update is called once per frame
    void Update()
    {
        minBounds = boundBox.GetComponent<BoxCollider2D>().bounds.min;
        maxBounds = boundBox.GetComponent<BoxCollider2D>().bounds.max;

        halfHeight = mycam.orthographicSize;
        halfWidth = halfHeight * Screen.width / Screen.height;
    }


    void LateUpdate()
    {


        float clampedX = Mathf.Clamp(transform.position.x, minBounds.x + halfWidth, maxBounds.x - halfWidth);
        float clampedY = Mathf.Clamp(transform.position.y, minBounds.y + halfHeight, maxBounds.y - halfHeight);

        transform.position = new Vector3(clampedX, clampedY, -8.34f);

    }
}
