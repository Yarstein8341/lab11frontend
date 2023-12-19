document.getElementById('getDogPics').addEventListener('click', function () {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogGallery = document.getElementById('dogGallery');
            dogGallery.innerHTML = '';
            data.message.forEach(imgUrl => {
                const img = document.createElement('img');
                img.src = imgUrl;
                dogGallery.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Помилка отримання фото собак:', error);
        });
});