var siteName=document.getElementById('siteName');
var websiteUrl=document.getElementById('websiteUrl');
var errorShow=document.getElementById('errorShow');
var websiteRecords=[];

if (localStorage.getItem('list')!==null){

    websiteRecords=JSON.parse(localStorage.getItem('list'));
    displayWeb(websiteRecords);
}

function addWeb (){
    if(siteName.classList.contains('is-valid') &&
    websiteUrl.classList.contains('is-valid')){
        errorShow.classList.add('d-none')
        websiteDetails={
            name:siteName.value,
            url:websiteUrl.value,
        }
       websiteRecords.push(websiteDetails);
       localStorage.setItem('list',JSON.stringify(websiteRecords))
       displayWeb(websiteRecords) ;
       clearForm() ;
    } else{
        errorShow.classList.remove('d-none')
    }

  

   
} 

function displayWeb(arr){
    var container='' ;

    for ( var i=0 ; i<arr.length; i++ ){
        container+=`<tr class="text-font fs-5 fw-bold ">
        <td >${i+1}</td>
        <td >${arr[i].name}</td>
        <td><a class="btn vis btn-sm py-2 px-4 text-white" target="_blank" href="${arr[i].url}" role="button"><i class="fa-solid fa-eye me-1 fs-5"></i> Visit</a></td>
        <td><button class="btn del btn-sm btn-danger px-3 py-2" onclick="removeWebsite(${i})"><i class="fa-solid fa-trash me-1 fs-5"></i> Delete</button></td>
    </tr>
        `
    }

    document.getElementById('addingWeb').innerHTML=container;
}

function clearForm() {
    siteName.value ='';
    websiteUrl.value ='';

}

function removeWebsite(index){

        websiteRecords.splice(index,1) ;
        localStorage.setItem('list',JSON.stringify(websiteRecords));
        displayWeb(websiteRecords);
}

function validateName() {

        var regex=  /^[a-zA-Z]{3,15}$/gm ;
        var siteNameError=document.getElementById('siteNameError') ;
       if( regex.test(siteName.value)){
            siteName.classList.add('is-valid');
            siteName.classList.remove('is-invalid');
          
            return true;
       }else{
           
            siteName.classList.add('is-invalid');
            siteName.classList.remove('is-valid');
            return false ;
       }
}

function validUrl() {
    
    var regex= /^https:\/\/www\.\w{3,30}.com$/gm ;
    var websiteUrlError=document.getElementById('websiteUrlError');

     if (regex.test(websiteUrl.value)){
        websiteUrl.classList.add('is-valid');
        websiteUrl.classList.remove('is-invalid');
        return true ;
     } else{
        websiteUrl.classList.remove('is-valid') ;
        websiteUrl.classList.add('is-invalid') ;
        return false;
     }
}

function errorClose(){
    errorShow.classList.add('d-none');
}