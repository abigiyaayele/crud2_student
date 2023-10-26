var selectedrow=null;
//show alert
function showAlert(message,className)
{
    const div = document.createElement("div");
    div.className=`alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);
    setTimeout(() => document.querySelector(".alert").remove(),3000);

}
//clear all fields
function clearfields() {
    document.querySelector("#firstName").value="";
    document.querySelector("#lastName").value="";
    document.querySelector("#id").value="";
    document.querySelector("#batch").value="";
}
//add data
document.querySelector("#student-form").addEventListener("submit",(e) => {
    e.preventDefault();
    //get form values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const id = document.querySelector("#id").value;
    const batch = document.querySelector("#batch").value;
    //validate
    if(firstName=="" || lastName=="" || id=="" || batch=="") {
        showAlert("please fill in the fields","danger");
    }
    else{
        if(selectedrow==null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${firstName}</td>
                 <td>${lastName}</td>
                <td>${id}</td>
                <td>${batch}</td>
                 <td>
                   <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                   <a href="#" class="btn btn-danger btn-sm delete">delete</a>
            `;
        list.appendChild(row); 
        selectedrow = null;
        showAlert("student added","success");

    }
    else{
        selectedrow.childern[0].textcontent = firstName;
        selectedrow.childern[1].textcontent = lastName;
        selectedrow.childern[2].textcontent =id;
        selectedrow.childern[3].textcontent = batch;
        selectedrow=null;
        showAlert("student information updated","info");
    }
    clearfields();
    }

});
//delete the data
 document.querySelector("#student-list").addEventListener("click",(e) =>{
    target=e.target;
    if(target.classlist.contains("delete")){
        target.parentelement.parentelement.remove();
        showAlert("student list deleted","danger");
 }});
 //edit data
 document.querySelector("#student-list").addEventListener("click", (e) =>{
    target=e.target;
    if(target.classlist.contains("edit")){
        selectedrow=target.parentelement.parentElement;
        document.querySelector("#firstName").value=selectedrow.childern[0].textcontent ;
        document.querySelector("#lastName").value=selectedrow.childern[1].textcontent ;
        document.querySelector("#id").value=selectedrow.childern[2].textcontent ;
        document.querySelector("#batch").value=selectedrow.childern[3].textcontent ;
    }
 });
