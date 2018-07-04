let all_link = document.querySelectorAll('a');
for (let i = 0; i < all_link.length; i++) {
    let temp = all_link[i].getAttribute("href");
    if (temp.indexOf("http") < 0) {

        if(temp.indexOf("javascript:")<0&&temp!="#")
        {
          console.log(temp);
        }
        
    }
}