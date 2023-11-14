function changeImage() {
    let displayImage = document.getElementById('image')
    let detail = document.querySelector('.detail')
    if ( displayImage.src.match('pictures/starbuck1.png')){
        displayImage.src = 'pictures/starbuck2.png'
        detail.innerHTML="New Products 2"
    }else if ( displayImage.src.match('pictures/starbuck2.png')){
        displayImage.src = 'pictures/starbuck3.png'
        detail.innerHTML="New Products 3"
    }
    else{
        displayImage.src = 'pictures/starbuck1.png'
    }
}