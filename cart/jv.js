var additemid=0;
function addtocart(item){
    additemid+=1;
    var selecteditem=document.createElement('div');
    selecteditem.classList.add('cartimg');
    selecteditem.setAttribute('id',additemid);
    var img=document.createElement('img');
    var hr=document.createElement('hr');
    img.setAttribute('src',item.children[0].currentSrc);
    var title= document.createElement('p');
    title.innerText=item.children[1].innerText;
    var price=document.createElement('h6');
    price.innerText=item.children[2].innerText;
    var cartitems=document.getElementById('title2');
    var delbtn=document.createElement('button');
    delbtn.innerText='Delete';
    delbtn.setAttribute('onclick','del('+additemid+')');
    selecteditem.append(img);
    selecteditem.append(title);
    selecteditem.append(price);
    selecteditem.append(delbtn);
    cartitems.append(selecteditem);
    selecteditem.append(hr);
}
function del(item){
    document.getElementById(item).remove();
}