var table = document.getElementsByTagName("tbody")[0]

var nextSkillId = table.rows.length+1
var skillNameInput = document.getElementById("skill")
var levelInput = document.getElementById("level")
var remarkInput = document.getElementById("remark")


var errorString = document.getElementById("errorMassages");
function AddSkill(){
    errorString.style.visibility="hidden"
    if(CheckSkill()&CheckLevel()&CheckRemark()){
        var row = table.insertRow()
        var id = row.insertCell()
        var skillName = row.insertCell()
        var level = row.insertCell()
        var remark = row.insertCell()
        id.innerHTML=nextSkillId++
        skillName.innerHTML = skillNameInput.value
        level.innerHTML = levelInput.value
        remark.innerHTML = remarkInput.value
        skillNameInput.value=""
        levelInput.value=""
        remarkInput.value=""
        skillNameInput.style.borderColor = "beige"
        levelInput.style.borderColor = "beige"
        remarkInput.style.borderColor = "beige"
    }
    else{
        errorString.style.visibility="visible"
    }
}
function CheckSkill(){
    if(skillNameInput.value.replace(/ /g, '')==""){
        skillNameInput.style.borderColor = "red"
        return false
    }
    else{
        skillNameInput.style.borderColor = "green"
        return true
    }
    
}
function CheckLevel(){
    if(levelInput.value.replace(/ /g, '')==""){
        levelInput.style.borderColor = "red"
        return false
    }
    else{
        levelInput.style.borderColor = "green"
        return true
    }
}
function CheckRemark(){
    if(remarkInput.value.replace(/ /g, '')==""){
        remarkInput.style.borderColor = "red"
        return false
    }
    else{
        remarkInput.style.borderColor = "green"
        return true
    }
}