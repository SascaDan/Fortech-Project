
//Initial data

let pages = [];
pages.push(document.getElementById("users"));
pages.push(document.getElementById("issues"));
pages.push(document.getElementById("sprint"));

const list = [

  //{
    /*issueId : "1",
    type : "Task",
    name : "Create Todo",
    userIdCreated : "0",
    userIdAssigned : "1",
    description : "Create",
    statusId : "0",
    issueIds : "1",
    commentIds: "3",
    updatedDate: "25.03.2017",
    createdDate: "13.03.2017"*/


//  }
];

var statusList = ['New', 'In progress', 'Feedback', 'Rework', 'Resolved', 'Ready for Testing'];
var classList = ['success', 'danger', 'info', 'warning', 'active'];

//Utils functions

function createGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

function addElementLocal(element) {
  let retrievedList = localStorage.getItem('list') == null ? [] : JSON.parse(localStorage.getItem('list'));
  retrievedList.push(element);
  localStorage.setItem('list', JSON.stringify(retrievedList));
}

function assignInitialList(list) {
  let retrievedList = localStorage.getItem('list') == null ? [] : JSON.parse(localStorage.getItem('list'));
  if (retrievedList.length == 0) {
    localStorage.setItem('list', JSON.stringify(list));
  }
}

function getIssuesList() {
  return localStorage.getItem('list') == null ? [] : JSON.parse(localStorage.getItem('list'));
}

function changeTab(tabName) {
  hideAllPages();
  document.getElementById(tabName).style.display = "inherit";
}

function hideAllPages() {
  pages.forEach(function(item){
    item.style.display= "none";
  });
}

function populateIssues() {
  let tableBody = document.getElementById('issues-body');
  let initialData = tableBody.innerHTML;
  let issueList = getRandomiseStatus();
  let data = '';
  issueList.forEach(function(item, index) {
    let statusClass = item.statusId == 0 ? '' : 'class="' + classList[item.statusId] + '"';
     data += '<tr ' + statusClass + '>' +
                '<td>' + item.issueId + '</td>' +
                '<td>' + item.type + '</td>' +
                '<td>' + item.name + '</td>' +
                '<td>' + item.userIdCreated + '</td>' +
                '<td>' + item.userIdAssigned + '</td>' +
                '<td>' + item.description+ '</td>' +
                '<td>' + item.statusId + '</td>' +
                '<td>' + item.issueIds + '</td>' +
                '<td>' + item.commentIds + '</td>' +
                '<td>' + item.updatedDate + '</td>' +
                '<td>' + item.createdDate + '</td>' +
                '</tr>';
    tableBody.innerHTML = initialData + data;
  });
}

function addElementToTable(item) {
  let tableBody = document.getElementById('issues-body');
  let initialData = tableBody.innerHTML;
  let statusClass = item.statusId == 0 ? '' : 'class="' + classList[item.statusId] + '"';
  let data = '<tr>' +
                '<td>' + item.issueId + '</td>' +
                '<td>' + item.type + '</td>' +
                '<td>' + item.name + '</td>' +
                '<td>' + item.userIdCreated + '</td>' +
                '<td>' + item.userIdAssigned + '</td>' +
                '<td>' + item.description+ '</td>' +
                '<td>' + item.statusId + '</td>' +
                '<td>' + item.issueIds + '</td>' +
                '<td>' + item.commentIds + '</td>' +
                '<td>' + item.updatedDate + '</td>' +
                '<td>' + item.createdDate + '</td>' +
                '</tr>';
    tableBody.innerHTML = initialData + data;
}

function getRandomiseStatus() {
  let issueList = getIssuesList();
  issueList.forEach(function(item){
    item.statusId = Math.floor(Math.random() * 5) + 0;
  });
  return issueList;


}
