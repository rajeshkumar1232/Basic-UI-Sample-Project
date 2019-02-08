//Listem for form Submit

document.getElementById('myForm').addEventListener('submit' , saveBookmark);

function saveBookmark(e){
    //Prevent form for submitting
    e.preventDefault();


    //get Form value
    var siteName = document.getElementById('siteNmae').value;
    var siteUrl = document.getElementById('siteUrl').value;
    //validation inputs
    if(!siteName || !siteUrl){
      alert('Please fill in form');
      return false;
    }
    var expression =

    //crating Variable to store values
    bookmark = {
      name : siteName,
      url : siteUrl
    }
    //Local storage test
    // localStorage.setItem('test','Hello world'); // to insert
    // //console.log(localStorage.getItem('test')); // to load
    // localStorage.removeItem('test');
    // console.log(localStorage.getItem('test'));


    //Validation for null in Bookmarker if
    if(localStorage.getItem('bookmarks') === null){
      //Initializing array
      var bookmarks = [];
      //Add elemet to array
      bookmarks.push(bookmark);
      // set to local localStorage
      localStorage.setItem('bookmarks' , JSON.stringify(bookmarks));
    } else {
      //get book mark form local storeage
      var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      //add book mark to array
      bookmarks.push(bookmark); // whatever is there on screen to take it and push to loacl storeage
      //save back to local storeage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    bookmarksResult.innerHTML ='';
    fetchBookmarks();

}



//fetch Book marker
function fetchBookmarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //console.log(bookmarks);
  var bookmarksResult = document.getElementById('bookmarksResult');
  //building output

if(bookmarks.length >= 1){
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;
    bookmarksResult.innerHTML += '<div class="well">'+
                                  '<h3>'+name+
                                  '<a class="btn btn-default" target="_blank" href="'+url+'"> Visit </a>'+
                                  '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#"> Delete </a>'+
                                  '</h3>'+
                                  '</div';
  }}};

function deleteBookmark(url){
    var bookmarks =JSON.parse(localStorage.getItem('bookmarks'));
    for (var i = 0; i < bookmarks.length; i++) {
      if(bookmarks[i].url == url){
        bookmarks.splice(i,1);
      }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    bookmarksResult.innerHTML ='';
    fetchBookmarks();
}
