#pragma strict

import UnityEngine.UI;

var hp : int = 100;

function Update () {
	GameObject.Find("EnemyTowerHP").GetComponent(Text).text = hp.ToString();
}