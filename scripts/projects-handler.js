let projectsDiv = document.getElementById("projects");

for(let i=0; i < PROJECTS.length; i++){
    let currentProject = PROJECTS[i];

    //div
    let projectDiv = document.createElement("div");
    let divStyle = document.createAttribute("style");
    divStyle.value = "display:inline-block; width:300px; margin: 10px;";
    projectDiv.setAttributeNode(divStyle)
    //h3
    let title = document.createElement("h3");
    let titleNode = document.createTextNode(currentProject.title);
    title.appendChild(titleNode);

    //img
    let image = document.createElement("img");
    let source = document.createAttribute("src")
    source.value = "./images/" + currentProject.img;
    image.setAttributeNode(source);
    let imgStyle = document.createAttribute("style");
    imgStyle.value = "width: 180px; height: 100px";
    image.setAttributeNode(imgStyle);

    //p

    let p = document.createElement("p");
    let pNode = document.createTextNode(currentProject.description);
    p.appendChild(pNode);

    projectDiv.appendChild(title)
    projectDiv.appendChild(image)
    projectDiv.appendChild(p)

    projectsDiv.appendChild(projectDiv);



}