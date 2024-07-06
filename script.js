let btn = document.querySelector(".btn")
        btn.addEventListener("click" , myfun)
        let img = document.querySelector(".center")

        function myfun(){
            if(btn.textContent=="Switch On"){
                img.src = "https://i.pinimg.com/736x/9d/8c/d0/9d8cd0de1fdf89406909485b66f80328.jpg"
                btn.textContent = "Switch Off";
                btn.style.backgroundColor = 'red'; 
                
            }
            else{
                img.src = "https://i.pinimg.com/474x/ff/7f/1a/ff7f1ac7b9805ea8c2f6193fe066b41f.jpg"
                btn.textContent = "Switch On"
                btn.style.backgroundColor = 'green'; 
                
                
            }
        }