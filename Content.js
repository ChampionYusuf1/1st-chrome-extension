let rockImages = [
    "https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681-1024x1024.jpg",
    "https://i.chzbgr.com/full/9203566336/hB0942EC0/human-love-yourself",
    "https://cdn.guff.com/site_2/media/32000/31903/items/f1ec8b5eeacc67607f7e76a6.jpg",
    "https://helios-i.mashable.com/imagery/articles/06ATc9oNDPcAQooYXHxcAfp/images-1.fill.size_2000x2000.v1611698118.jpg",
    "https://i.pinimg.com/564x/57/2d/ca/572dca40fd6d277091e48852d4ef8ead.jpg",
    "https://i.etsystatic.com/15518410/r/il/5fe07c/4500081235/il_570xN.4500081235_dbtr.jpg",
];

const imgs = document.getElementsByTagName("img")
    for(let i = 0; i < imgs.length; i++){
        const randomImg = Math.floor(Math.random() * rockImages.length)
        imgs[i].src = rockImages[randomImg];
    }