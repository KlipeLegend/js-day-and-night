let nat = true,
on = "./img/On.png",
off = "./img/Off.png",
k = "./img/kun.png";
t = "./img/tun.png";
btn = document.querySelectorAll(".btn"),
imgs = document.querySelectorAll(".imgs"),
btn_img = document.querySelectorAll(".btn img"),
btn.forEach((btn,i) => {
    btn.addEventListener("click", () => {
    if(nat) {
        btn_img[i].src = on;
        imgs[i].src = k;
        nat = false;
    }else{
        btn_img[i].src = off;
        imgs[i].src = t;
        nat = true;
    }
    });
});
