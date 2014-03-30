querystring = document.location.href;
mioarray = new Array();
mioarray = querystring.split('nmeetup=');
if (mioarray.length>1) {starturl = mioarray[mioarray.length-1]}
else {starturl = document.referrer.replace("http://beppegrillo.meetup.com/","")};
starturl = starturl.substr(0,4);
nmeetup = "";
for (i = 0; i < 4; i++){
   // Check that current character is number.
   var c = starturl.charAt(i);
   if ((c >= "0") && (c <= "9")) nmeetup = nmeetup + c;
}
if (mioarray.length==1 && nmeetup!='') {document.location.href='http://meetupve.googlepages.com/meetoogle.html?nmeetup='+nmeetup};

function invia(fthis){
nmeetup = fthis.nmeetup.value;
if (nmeetup!='') {
fthis.as_sitesearch[0].value = 'meetup.com/' + nmeetup;
fthis.as_sitesearch[1].value = 'meetup.com/' + nmeetup + '/files';
}
}

function ricerca_avanzata(form_id){
fthis=document.getElementById(form_id);
fthis.action='http://www.google.com/advanced_search';
fthis.action='http://www.google.com/advanced_search';
if (form_id=='meetoogle_1'){invia(fthis);fthis.submit();}
if (form_id=='meetoogle_3'){fthis.submit();}
if (form_id=='meetoogle_4'){invia_disc(fthis)}
return false;
}

function invia_disc(fthis){
disc = fthis.as_sitesearch.value;
disc = disc.replace('http://','');
disc = disc.replace('www.','');
discarray = disc.split('/thread/');
if (discarray.length==1){
   alert('L\'indirizzo della discussione non e\' corretto!');
   return false;
} else {
   alert('Verranno aperte 2 pagine corrispondenti a 2 modalità di ricerca.');
   secarray = discarray[1].split('/');
   url = discarray[0] + '/thread/' + secarray[0];
   fthis.as_sitesearch.value = url;
   fthis.submit();
   fthis.as_sitesearch.value = url.replace('/messages','');
   fthis.action = fthis.action
   fthis.submit();
}
}
