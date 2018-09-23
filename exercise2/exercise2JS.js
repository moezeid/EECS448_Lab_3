let index=0;
let array=[5];
array[0]="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_koala02%20copy.jpg";
array[1]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfC1tqd6aNkHhMvU1fkPKaDhVTryXmUYrbeLJGAvfiykoX3H3V";
array[2]="https://media.golfdigest.com/photos/5ba81f4e021dc14bde0a2654/1:1/w_768,c_limit/tiger-woods-tour-championship-2018-sunday-arms-raised.jpg";
array[3]="https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/deer-1367217_1920-pixabay.jpg?itok=nzbSdDJY";
array[4]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_gc0MKIH-PeESlin14rzUCU9lDdbrc0B57NDTX5ti-EagE0F2g";




function next(){

if(index>=array.length)
{
  index=0;
}


document.getElementById("pic").src=array[index];
index++;

}


function previous(){

if(index<0)
{
  index= array.length - 1;
}


document.getElementById("pic").src=array[index];
index--;

}
