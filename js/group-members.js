let http = new XMLHttpRequest();
http.open("get", "./json/group-members.json", true);
http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status==200){
        let members = JSON.parse(this.responseText);
        let output = "";

        for(let member of members){
            output+=`
                <div class="member swiper-slide">
                    <img src="${member.image}" alt="${book.title}">
                    <div class="name">
                        <p class="firstname">${member.firstname}</p>
                        <p class="lastname">${member.lastname}</p>
                    </div>
                    <p class="position">${member.position}</p>
                    <div class="linkdin">
                        <i class='bx bxl-linkedin-square' ></i>
                        <p><a href="www.linkdin.com">linkl</a></p>
                    </div>   
                </div> 
            `
        }
        document.querySelector('.group-members').innerHTML = output;
    }
}