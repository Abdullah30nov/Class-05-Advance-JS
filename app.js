// openweatherapi
// opennewsapi
// let cart = [\
//     {
//         p_id:1,
//         p_name:"Samsung A2",
//         p_img_src:"https://images.priceoye.pk/samsung-galaxy-a2-core-pakistan-priceoye-jgy1e.jpg"
//     },
//     {
//         p_id:2,
//         p_name:"infinix note 7",
//         p_img_src:"https://images.priceoye.pk/infinix-note-7-pakistan-priceoye-j870u.jpg"
//     },
//     {
//         p_id:3,
//         p_name:"realme c53",
//         p_img_src:'https://www.moosani.pk/images/product_gallery/1715602323_gold.webp'
//     },
//     {
//         p_id:4,
//         p_name:"iphone11",
//         p_img_src:"https://regen.pk/cdn/shop/files/REGEN-iPhone11-Backfront-Purple-Pakistan.png?v=1684752662"
//     },
//     {
//         p_id:5,
//         p_name:"qmobile",
//         p_img_src:"https://qmobile.com.pk/cdn/shop/files/Main-Image_0b3fbc87-845f-4f4c-a511-3309c4b6a9f9_1024x1024.png?v=1707292182"
//     }
// ];

//======================================================== API full form  (Application Programming Interface)

//======================================================== Fetch Method
// get
// post
// update
// delete

//========================================================= There are three stage of Promise
// 1) pending 2) fulfilled 3) reject

//========================================================= fetch Method
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log("err==>", err));

//========================================================= There are 3 way to make code  ASynchronous
// 1) Call back
// 2) Promise
// 3) async await

//========================================================= Promise (code ASynchronous)
//========================================================= Promise (With if else condition)
// let promise = new Promise((resolve, reject) => {
    //   let Mt20WC = "JeetGaye";
    //   if (Mt20WC == "Jeet Gaye") {
        //     resolve(Mt20WC);
        //   } else {
            //     reject(Mt20WC);
            //   }
            // })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));


//========================================================= Promise (With fetch Method)
// let promise = new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((response) => {
//          resolve(response);
//       })
//       .catch((err) => console.log("err==>", reject(err)));
// })
// promise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
