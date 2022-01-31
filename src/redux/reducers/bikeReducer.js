const initialData = {
    bikes : [
        { 
            "id": "100",
            "name": "Pulsar ns 200 bajaj", 
            "image": "https://www.teahub.io/photos/full/337-3374917_pulsar-200-ns-hd-wallpaper-ns200-price-in.jpg", 
            "rentPerHour": "150",
            "fuelType": "petrol", 
            "BookingTimeSlots":[],
            "capacity": 2 
            },
            {
            "id": "101",
            "name": "Splendor Plus", 
            "image": "https://images.91wheels.com//assets/b_images/gallery/heromotocorp/splendor-plus/heromotocorp-splendor-plus-0-1618160003.png?width=300&height=200", 
            "rentPerHour": "150",
            "fuelType": "petrol", 
            "BookingTimeSlots":[],
            "capacity": 2 
            },
            {
            "id": "102",
            "name": "R15 V3", 
            "image": "https://media.zigcdn.com/media/content/2019/Jan/r15_darknight.jpg", 
            "rentPerHour": "150",
            "fuelType": "petrol", 
            "BookingTimeSlots":[],
            "capacity": 2 
            },
            {
            "id": "103",
            "name": "Bajaj cd100", 
            "image": "https://bd.gaadicdn.com/processedimages/bajaj/bajaj-ct-100/494X300/bajaj-ct-1005f96b4505c206.jpg?imwidth=380&impolicy=resize", 
            "rentPerHour": "150",
            "fuelType": "petrol", 
            "BookingTimeSlots":[],
            "capacity": 2 
            },
            {
            "id": "104",
            "name": "Royal Enfield Classic 350", 
            "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/Royal_Enfield_500_Stealth_Blac.png?zdOWkAXPCjiwJYo8M.vAEcbWvvg3WvZT&size=770:433", 
            "rentPerHour": "150",
            "fuelType": "petrol", 
            "BookingTimeSlots":[],
            "capacity": 2 
            },
            {
            "id": "105",
            "name": "Suzuki Gixxer", 
            "image": "https://www.wallpapertip.com/wmimgs/41-412947_suzuki-gsx-r1000-black.jpg", 
            "rentPerHour": "150",
            "fuelType": "petrol", 
            "BookingTimeSlots":[],
            "capacity": 2 
            },
            {
            "id": "106",
            "name": "Yamaha FZ", 
            "image": "https://m.economictimes.com/thumb/msid-83141100,width-1200,height-900,resizemode-4,imgsize-296283/yamaha-cuts-price-of-fz-25-bike-range-by-up-to-rs-19300.jpg", 
            "rentPerHour": "150",
            "fuelType": "petrol", 
            "BookingTimeSlots":[],
            "capacity": 2 
            },
            {
            "id": "107",
            "name": "Duke 200", 
            "image": "https://www.desktopbackground.org/p/2015/07/19/982059_ktm-duke-200-bike-photo-latest-hd-wallpapers_1024x576_h.jpg", 
            "rentPerHour": "150",
            "fuelType": "petrol", 
            "BookingTimeSlots":[],
            "capacity": 2 
            },

    ]
};

export const bikeReducer = (state = initialData , action)=>{

    switch(action.type)
    {
        case 'GET_ALL_BIKES' : {
            return{
                ...state,
                bikes : action.payload
            }
        }

        default:return state
    }
}