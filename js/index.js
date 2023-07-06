var btn_about = document.getElementById("about-us").addEventListener("click", About_us);
function About_us() {
    document.getElementById("about_mode").style.display = "block";
    document.getElementById("skill_mode").style.display = "none";
    document.getElementById("experience_mode").style.display = "none";

    // ----------For Button ColorChange----------
    document.getElementById("about-us").style.backgroundColor = "gray";
    document.getElementById("about-us").style.color = "white";
    document.getElementById("skill").style.backgroundColor = "";
    document.getElementById("experience").style.backgroundColor = "";

    // ----------For font ColorChange----------
    document.getElementById("about-us").style.color = "white";
    document.getElementById("skill").style.color = "black";
    document.getElementById("experience").style.color = "black";
};

var btn_skill = document.getElementById("skill").addEventListener("click", Skill);
function Skill() {
    document.getElementById("about_mode").style.display = "none";
    document.getElementById("skill_mode").style.display = "block";
    document.getElementById("experience_mode").style.display = "none";

    // ----------For Button ColorChange----------
    document.getElementById("skill").style.backgroundColor = "gray";
    document.getElementById("about-us").style.backgroundColor = "";
    document.getElementById("experience").style.backgroundColor = "";

    // ----------For font ColorChange----------
    document.getElementById("skill").style.color = "white";
    document.getElementById("experience").style.color = "black";
    document.getElementById("about-us").style.color = "black";
};

var btn_experience = document.getElementById("experience").addEventListener("click", Experience);
function Experience() {
    document.getElementById("about_mode").style.display = "none";
    document.getElementById("skill_mode").style.display = "none";
    document.getElementById("experience_mode").style.display = "block";

    // ----------For Button ColorChange----------
    document.getElementById("skill").style.backgroundColor = "";
    document.getElementById("about-us").style.backgroundColor = "";
    document.getElementById("experience").style.backgroundColor = "gray";

    // ----------For font ColorChange----------
    document.getElementById("experience").style.color = "white";
    document.getElementById("skill").style.color = "black";
    document.getElementById("about-us").style.color = "black";
};