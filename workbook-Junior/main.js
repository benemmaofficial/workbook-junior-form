var day;
swi tch (new Date().getDay()) {
    case 0:
        day = "It's Sunday, No class!";
        break;
    case 1:
        day = "It's Monday, You've gat class today!";
        break;
    case 2:
        day = "It's Tuesday, You've gat class today!";
        break;
    case 3:
        day = "It's Wednesday, You've gat class today!";
        break;
    case 4:
        day = "It's Thursday, You've gat class today!";
        break;
    case 5:
        day = "It's Friday, You've gat class today!";
        break;
    case 6:
        day = "It's Sarturday, No class!";
        break;
}

document.getElementById("datechecker").innerHTML = day;

function checkInput() {
    var text;
    var lang = getElementById("input").value;
    switch (lang) {
        case "javascript":
            Text = "Yap its javascript!";
            break;
        case "HTML":
            Text = "Yap its HTML!";
            break;
        case "css":
            Text = "Yap its css!";
            break;
        default:
            text = "Please Enter one of the values from the screen";
            break;
            
    }
    document.getElementById("displaytext").value = text;    
}
