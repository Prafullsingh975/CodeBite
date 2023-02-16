// Hotel Cards
var rowData = [
    {
        card1: {
            image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            hotelName: "Radisson Hotel",
            hoteladd: "Opposite Sivoy Complex, E8 Bawadiya Kalan,Gulmohar Bhopal",
            wifi: "ri-wifi-line",
            bed: "./icons/double-bed.png",
            geyser: "./icons/geyser.png",
            ac: "./icons/AC.png",
            heater: "./icons/roomheater.png",
            rating: "object",
            price: "450INR/Night",
            offer: "20%"
        }
    }
]
var row = document.querySelector(".rowsHotel");
var clutterRow = "";

rowData.forEach(function (val1, index) {
    var card = document.querySelector(".cards");
    var clutter = "";
    console.log(index)
    clutter += `
    <img src="${rowData[index].card1.image}
    " alt="">
    <div class="cardcontent">
        <h2>${rowData[index].card1.hotelName}</h2>
        <h5>${rowData[index].card1.hoteladd}</h5>
        <div class="cardicon">
            <div class="icons">
                <i class="${rowData[index].card1.wifi}"></i>
                <h5>Wi-fi</h5>
            </div>
            <div class="icons">
                <i><img src="${rowData[index].card1.bed}" alt=""></i>
                <h5>Double Bed</h5>
            </div>
            <div class="icons">
                <i><img src="${rowData[index].card1.geyser}" alt=""></i>
                <h5>Geyser</h5>
            </div>
            <div class="icons">
                <i><img id="AC" src="${rowData[index].card1.ac}" alt=""></i>
                <h5>AC</h5>
            </div>
        </div>
        <div class="cardicon">
            <div class="icons">
                <i><img src="${rowData[index].card1.heater}" alt=""></i>
                <h5>Room heater</h5>
            </div>
        </div>
        <div class="rating">
            <h5>Rating:</h5>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-half-s-fill"></i>
        </div>
        <div class="price">
            <h2>${rowData[index].card1.price}</h2>
            <button>View Availability</button>
        </div>
        <div class="offer">
            <h5>${rowData[index].card1.offer}OFF</h5>
        </div>
    `
    card.innerHTML = clutter;
    clutterRow += clutter;

    
    row.innerHTML = clutterRow;
});
function cardContentLoader(params) {
    var hotelData = [
        {
            image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            hotelName: "Radisson Hotel",
            hoteladd: "Opposite Sivoy Complex, E8 Bawadiya Kalan,Gulmohar Bhopal",
            wifi: "ri-wifi-line",
            bed: "./icons/double-bed.png",
            geyser: "./icons/geyser.png",
            ac: "./icons/AC.png",
            heater: "./icons/roomheater.png",
            rating: "object",
            price: "450INR/Night",
            offer: "20%"
        },
        // {
        //     image:"",
        //     hotelName:"Taj Lakefront Bhopal",
        //     hoteladd:"Bhadbhada Road Link Road No 3.Chouraha Bhopal",
        //     wifi:"",
        //     bed:"",
        //     geyser:"",
        //     ac:"",
        //     heater:"",
        //     price:"",
        //     offer:""
        // },
        // {
        //     image:"",
        //     hotelName:"Courtyard By Marriott",
        //     hoteladd:"DB City,Areara Hill,Bhopal",
        //     wifi:"",
        //     bed:"",
        //     geyser:"",
        //     ac:"",
        //     heater:"",
        //     price:"",
        //     offer:""
        // },
        // {
        //     image:"",
        //     hotelName:"Hotel Golden Bliss",
        //     hoteladd:"Danish Nagar Hoshangabad Road,Bhopal",
        //     wifi:"",
        //     bed:"",
        //     geyser:"",
        //     ac:"",
        //     heater:"",
        //     price:"",
        //     offer:""
        // },
        // {
        //     image:"",
        //     hotelName:"",
        //     hoteladd:"",
        //     wifi:"",
        //     bed:"",
        //     geyser:"",
        //     ac:"",
        //     heater:"",
        //     price:"",
        //     offer:""
        // },
        // {
        //     image:"",
        //     hotelName:"",
        //     hoteladd:"",
        //     wifi:"",
        //     bed:"",
        //     geyser:"",
        //     ac:"",
        //     heater:"",
        //     price:"",
        //     offer:""
        // },
        // {
        //     image:"",
        //     hotelName:"",
        //     hoteladd:"",
        //     wifi:"",
        //     bed:"",
        //     geyser:"",
        //     ac:"",
        //     heater:"",
        //     price:"",
        //     offer:""
        // },
        // {
        //     image:"",
        //     hotelName:"",
        //     hoteladd:"",
        //     wifi:"",
        //     bed:"",
        //     geyser:"",
        //     ac:"",
        //     heater:"",
        //     price:"",
        //     offer:""
        // },
        // {
        //     image:"",
        //     hotelName:"",
        //     hoteladd:"",
        //     wifi:"",
        //     bed:"",
        //     geyser:"",
        //     ac:"",
        //     heater:"",
        //     price:"",
        //     offer:""
        // },
        // {
        //     image:"",
        //     hotelName:"",
        //     hoteladd:"",
        //     wifi:"",
        //     bed:"",
        //     geyser:"",
        //     ac:"",
        //     heater:"",
        //     price:"",
        //     offer:""
        // },
        // {
        //     image:"",
        //     hotelName:"",
        //     hoteladd:"",
        //     wifi:"",
        //     bed:"",
        //     geyser:"",
        //     ac:"",
        //     heater:"",
        //     price:"",
        //     offer:""
        // },
        // {
        //     image:"",
        //     hotelName:"",
        //     hoteladd:"",
        //     wifi:"",
        //     bed:"",
        //     geyser:"",
        //     ac:"",
        //     heater:"",
        //     price:"",
        //     offer:""
        // }
    ];
    var card = document.querySelector(".cards");

    var clutter = "";
    hotelData.forEach(function (val, index) {
        clutter += `
        <img src="${val.image}
        " alt="">
        <div class="cardcontent">
            <h2>${val.hotelName}</h2>
            <h5>${val.hoteladd}</h5>
            <div class="cardicon">
                <div class="icons">
                    <i class="${val.wifi}"></i>
                    <h5>Wi-fi</h5>
                </div>
                <div class="icons">
                    <i><img src="${val.bed}" alt=""></i>
                    <h5>Double Bed</h5>
                </div>
                <div class="icons">
                    <i><img src="${val.geyser}" alt=""></i>
                    <h5>Geyser</h5>
                </div>
                <div class="icons">
                    <i><img id="AC" src="${val.ac}" alt=""></i>
                    <h5>AC</h5>
                </div>
            </div>
            <div class="cardicon">
                <div class="icons">
                    <i><img src="${val.heater}" alt=""></i>
                    <h5>Room heater</h5>
                </div>
            </div>
            <div class="rating">
                <h5>Rating:</h5>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-half-s-fill"></i>
            </div>
            <div class="price">
                <h2>${val.price}</h2>
                <button>View Availability</button>
            </div>
            <div class="offer">
                <h5>${val.offer}OFF</h5>
            </div>
        </div>`
        card.innerHTML = clutter;
    });
}

cardContentLoader();