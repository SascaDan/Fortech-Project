
changeTab('sprint');

assignInitialList(list);

populateIssues();


function saveData() {
  let type = document.getElementById("type");
  let uIdA = document.getElementById("userIdAssigned");

  let data = {
    issueId : createGuid(),
    type : type.options[type.selectedIndex].text,
    name : document.getElementById("name").value,
    userIdCreated : 0,
    userIdAssigned : uIdA.options[uIdA.selectedIndex].text,
    description : document.getElementById("description").value,
    statusId : 0,
    issueIds : document.getElementById("issueIds").value,
    commentIds : document.getElementById("commentIds").value,
    updatedDate : new Date(),
    createdDate : new Date()
  }

  addElementLocal(data);
  addElementToTable(data);
  return false;
}
