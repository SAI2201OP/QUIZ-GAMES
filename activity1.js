function updateScore()
{
    points = points+1
    document.getElementById("Points").innerHTML = "Points" + points;
}
function SaveScore()
{
    localStorage.setItem("points", points);
}
function next_page()
{
    windows.location ="";
}