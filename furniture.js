
import navbar from "./script/navbar.js"
document.getElementById("head").innerHTML=navbar();

var objArr=[{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/0046db7ffa714e44681c1a4e7a516985f532252f/Luxury-Folding-Futon-Sofa-Bed.jpg?imwidth=480&impolicy=medium",
     p : 48774,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
     p2 :"luxury folding futon sofa bed",
},
{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/f0d9c7ceb30547b56a59d09e94fa32585ca0db92/Bobran-Modern-Velvet-3-Seater-Sofa-by-Christopher-Knight-Home.jpg?imwidth=480&impolicy=medium",
     p : 63782,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
     p2 :"Bobran Modern Velvet 3-seat Sofa by Christopher Knight Home - 30.00 D x 83.25 W x 30.25 H",
},
{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/069f66fb9aec8cdb311f1fd0066506aaa5e544b4/VIATOL-High-Back-Couch-Mid-century-Suede-Leather-Wood-Legs-Chaise-Sofa.jpg?imwidth=480&impolicy=medium",
     p : 112885,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
     p2 :"VIATOL High Back Couch Mid-century Suede Leather Wood Legs Chaise Sofa",
},
{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/456eefc6f57dc82f2fc295518f0752f816876bfe/Morden-Fort-Couches-for-Living-Room%2C-Sofas-for-Living-Room-Furniture-Sets%2C-Sofa%2C-Fabric%2C-Velvet.jpg?imwidth=480&impolicy=medium",
     p : 73386,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
    p2 :"Morden Fort Tufted Upholstered Chesterfield Couches for Living Room, Living Room Furniture Sets, Sofa, Fabric, Velvet",
},

{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/3c541c23c67c514e2daa59a6937aa28e15b669c9/Porch-%26-Den-Claiborne-California-King-Convertible-Sleeper-Sofa-and-Ottomans.jpg?imwidth=480&impolicy=medium",
     p : 77879,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
     p2 :"orch & Den California King Convertible Sleeper Sofa and Ottomans",
},

{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/2a60b0fc00e7636aab90d390f56f24dd68e66a09/Ovios-High-Back-Couch-Mid-century-Spring-Top-Grain-Leather-Wood-Legs-Chaise-Sofa.jpg?imwidth=480&impolicy=medium",
     p : 95626,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
     p2  : "Ovios High Back Couch Mid-century Spring Faux Suede Leather Wood Legs Chaise Sofa",
},

{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/8ca26cdda8e84d66bdeb5cd266e99bd55291eea8/Square-Arms-Upholstered-Fabric-Sofa-with-Pillows.jpg?imwidth=480&impolicy=medium",
     p : 38067,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
p2  : "Morden Loveseat Square Arms Upholstered Fabric Sofa with Pillows",
},

{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/ca4bbea85d5895af9154b66b88217647fc777794/Cudal-83.9%22-Width-Charlotte-3-Seater-Sofa.jpg?imwidth=480&impolicy=medium",
     p : 102990,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
p2  : "Minimore 83.9 Cudal Corduroy 3-Seater Sofa",
},
{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/0046db7ffa714e44681c1a4e7a516985f532252f/Luxury-Folding-Futon-Sofa-Bed.jpg?imwidth=480&impolicy=medium",
     p : 48774,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
p2 :"luxury folding futon sofa bed",
},
{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/f0d9c7ceb30547b56a59d09e94fa32585ca0db92/Bobran-Modern-Velvet-3-Seater-Sofa-by-Christopher-Knight-Home.jpg?imwidth=480&impolicy=medium",
     p : 63782,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
p2 :"Bobran Modern Velvet 3-seat Sofa by Christopher Knight Home - 30.00 D x 83.25 W x 30.25 H",
},
{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/069f66fb9aec8cdb311f1fd0066506aaa5e544b4/VIATOL-High-Back-Couch-Mid-century-Suede-Leather-Wood-Legs-Chaise-Sofa.jpg?imwidth=480&impolicy=medium",
     p : 112885,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
p2 :"VIATOL High Back Couch Mid-century Suede Leather Wood Legs Chaise Sofa",
},
{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/456eefc6f57dc82f2fc295518f0752f816876bfe/Morden-Fort-Couches-for-Living-Room%2C-Sofas-for-Living-Room-Furniture-Sets%2C-Sofa%2C-Fabric%2C-Velvet.jpg?imwidth=480&impolicy=medium",
     p : 73386,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
p2 :"Morden Fort Tufted Upholstered Chesterfield Couches for Living Room, Living Room Furniture Sets, Sofa, Fabric, Velvet",
},

{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/3c541c23c67c514e2daa59a6937aa28e15b669c9/Porch-%26-Den-Claiborne-California-King-Convertible-Sleeper-Sofa-and-Ottomans.jpg?imwidth=480&impolicy=medium",
     p : 77879,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
       p2 :"orch & Den California King Convertible Sleeper Sofa and Ottomans",
},

{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/2a60b0fc00e7636aab90d390f56f24dd68e66a09/Ovios-High-Back-Couch-Mid-century-Spring-Top-Grain-Leather-Wood-Legs-Chaise-Sofa.jpg?imwidth=480&impolicy=medium",
     p : 95626,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
         p2  : "Ovios High Back Couch Mid-century Spring Faux Suede Leather Wood Legs Chaise Sofa",
},

{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/8ca26cdda8e84d66bdeb5cd266e99bd55291eea8/Square-Arms-Upholstered-Fabric-Sofa-with-Pillows.jpg?imwidth=480&impolicy=medium",
     p : 38067,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
     p2  : "Morden Loveseat Square Arms Upholstered Fabric Sofa with Pillows",
},

{
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/ca4bbea85d5895af9154b66b88217647fc777794/Cudal-83.9%22-Width-Charlotte-3-Seater-Sofa.jpg?imwidth=480&impolicy=medium",
     p : 102990,
   star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
     p2  : "Minimore 83.9 Cudal Corduroy 3-Seater Sofa",
},

{
   image:"https://ak1.ostkcdn.com/images/products/is/images/direct/bd9e62784a9aeaa9081b0a09170bfd597ba3cc45/nuLOOM-Kids-Washable-Round-Alphabet-Rug.jpg?imwidth=480&impolicy=medium",
   p: 9045.70,
   star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
},
    {
     image:"https://ak1.ostkcdn.com/images/products/is/images/direct/e93a98603d48468b42afab7171a0fcadc5f6be81/Marbella-Contemporary-Boho-Indoor-Outdoor-Area-Rug.jpg?imwidth=480&impolicy=medium",
     p: 3000.70,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/eaf5ed2468df8026ad5b5b387dab87ec2ed35a34/nuLOOM-Maple-Machine-Washable-Floral-Medallion-Area-Rug.jpg?imwidth=480&impolicy=medium",
    p: 2000.70,
    star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",  
        p2:"Realife Distressed Vintage Machine Washable Area"
},
    {
     image:"https://ak1.ostkcdn.com/images/products/is/images/direct/96ac0dec87ba3b843089ad3798853293425d132f/nuLOOM-Stella-Machine-Washable-Traditional-Tribal-Area-Rug.jpg?imwidth=480&impolicy=medium",
     p: 3463.70,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/e05b0de8facb5fb852fd99448c2da706e07630a9/nuLOOM-Loni-Solid-Machine-Washable-Shag-Area-Rug.jpg?imwidth=480&impolicy=medium",
    p: 803.70,
    star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
},
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/889d8013f71a27d877ac86b1e09369e592fd8e55/ReaLife-Machine-Washable---Vintage-Distressed-Trellis-Rug.jpg?imwidth=480&impolicy=medium",
    p: 7812.70,
    star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
},
    {
     image:"https://ak1.ostkcdn.com/images/products/is/images/direct/2561a5b81868a6190ee4096be9920a6f8172d716/nuLOOM-Banks-Machine-Washable-Faded-Vintage-Area-Rug.jpg?imwidth=480&impolicy=medium",
     p: 6000.70,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/dc7d07b9d5d6852346bcef6769fe1438b5d9352f/Wallen-Machine-Washable-Artistic-Blue-and-Ivory-Rug.jpg?imwidth=480&impolicy=medium",
    p: 4000.70,
    star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/6789ddabcd391157d3ba841ef2788a299485046c/nuLOOM-Mae-Machine-Washable-Tribal-Motif-Area-Rug.jpg?imwidth=480&impolicy=medium",
    p: 5433.70,
    star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/86d67c9d71d8a1ec07f0e7004304cf2f68b59a16/SAFAVIEH-Kids-Playhouse-Arendine-Hopscotch-Area-Rug.jpg?imwidth=480&impolicy=medium",
    p: 7913.70,
    star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/2d3f040bd3e5e07b4844ae5e86ee1f844bd8ab11/nuLOOM-Kajal-Machine-Washable-Southwestern-Geometric-Area-Rug.jpg?imwidth=480&impolicy=medium",
    p: 5453.70,
    star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/19ee99a979d29edc3f2920e63ef66f6921b38f74/nuLOOM-Medallion-Bordered-Machine-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
    p: 4543.70,
    star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
   },
    {
   image:"https://ak1.ostkcdn.com/images/products/is/images/direct/b3e9cfc4c52d409585c52a2b2e8bc902de0438e5/ReaLife-Distressed-Boho-Border-Rug.jpg?imwidth=480&impolicy=medium",
   p: 9093.70,
   star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/483b25fdd09256be14165e223bd0ad0d036c9cb8/nuLOOM-Elen-Machine-Washable-Natural-Leaves-Area-Rug.jpg?imwidth=480&impolicy=medium",
    p: 7773.70,
    star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/7ef2eee3aa9ace7e612b96e58d2e65fc6390f7cf/SAFAVIEH-Jasmine-Pink-and-Purple-Floral-Area-Rug.jpg?imwidth=480&impolicy=medium",
    p: 5553.70,
    star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
   image:"https://ak1.ostkcdn.com/images/products/is/images/direct/eaaeb6e594a011c0f5b5ecd0d016861c062a76b6/Foliar.jpg?imwidth=480&impolicy=medium",
   p: 3333.70,
   star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
   },
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/8a135632b2502fde4efff0fd5410497d76dd7ab9/Well-Woven-Lotus-Menda-Vintage-Medallion-Machine-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
    p: 1111.70,
    star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/e0a5c879c36b7eb781353cd693aac171ad233e5b/nuLOOM-Rosanne-Machine-Washable-Geometric-Area-Rug.jpg?imwidth=480&impolicy=medium",
     p: 2363.70,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
     p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
     image:"https://ak1.ostkcdn.com/images/products/is/images/direct/e0a5c879c36b7eb781353cd693aac171ad233e5b/nuLOOM-Rosanne-Machine-Washable-Geometric-Area-Rug.jpg?imwidth=480&impolicy=medium",
     p: 8363.70,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
    image:"https://ak1.ostkcdn.com/images/products/is/images/direct/5f5f9fd82bc401952d5c1da384c76efe836df551/Nicole-Curtis-Machine-Washable-Boho-Vintage-Medallion-Area-Rug.jpg?imwidth=480&impolicy=medium",
    p: 7363.70,
    star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
     image:"https://ak1.ostkcdn.com/images/products/is/images/direct/2fdec3638ed6ef0fb61f3a8197465690759498e4/Immacolata-Persian-Machine-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
     p: 6653.70,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/0261398c3e8448506d7bf6beca893ed7259c6888/Momeni-Tahoe-Wool-Hand-Tufted-Multi-Area-Rug.jpg?imwidth=480&impolicy=medium",
      p: 9065.70,
      star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/800b5b8834010577ed3f8ce436420d5cba94b89c/Unique-Loom-Katie-Nostalgia-Rug.jpg?imwidth=480&impolicy=medium",
        p: 5656.00,
        star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/12021881/Snowy-White-Polar-Bear-Pelt-White-Sheepskin-47-x-67-f785de60-0b9d-4c8c-9949-d0f2980f8ea3_320.jpg?imwidth=480&impolicy=medium",
        p: 6056.70,
        star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/c4f5d36530035d42b864a266b72baebbe53c5933/ReaLife-Eco-friendly-Moroccan-Area-Rug.jpg?imwidth=480&impolicy=medium",
        p: 4545.70,
        star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/6f5209cc7b7c05d237f277fd05d4221f117eac28/nuLOOM-Geometric-Romina-Machine-Washable-Diamond-Stripes-Area-Rug.jpg?imwidth=480&impolicy=medium",
        p: 6364.70,
        star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/87706fe1e818e3bc684e7ab64c3fc1856e991377/nuLOOM-Hart-Machine-Washable-Abstract-Tribal-Area-Rug.jpg?imwidth=480&impolicy=medium",
        p: 4545.70,
        star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
        
        image:"https://ak1.ostkcdn.com/images/products/12021881/Snowy-White-Polar-Bear-Pelt-White-Sheepskin-47-x-67-f785de60-0b9d-4c8c-9949-d0f2980f8ea3_320.jpg?imwidth=480&impolicy=medium",
        p: 3131.70,   
         star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/be5e50170c997ab74e3482588fff9c6bf649042d/Uska-Persian-Machine-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
        p: 10901.70,
        star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/c9938ec5eebd89b33926690b3f05a9a3c30740aa/nuLOOM-Marcia-Machine-Washable-Faux-Cowhide-Area-Rug.jpg?imwidth=480&impolicy=medium",
        p: 2433.70,
        star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/c560998bf5c52a05b90a49cf96acf45abb51d74f/Well-Woven-Lotus-Towne-Vintage-Aztec-Medallion-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
        p: 5000.70,
        star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
        image:"https://ak1.ostkcdn.com/images/products/is/images/direct/049648082180d5781cff55bf80ff2446b7a4b95c/Havenside-Home-Misquamicut-Blue-Indoor--Outdoor-Area-Rug.jpg?imwidth=480&impolicy=medium",
        p: 6363.70,
        star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/049648082180d5781cff55bf80ff2446b7a4b95c/Havenside-Home-Misquamicut-Blue-Indoor--Outdoor-Area-Rug.jpg?imwidth=480&impolicy=medium",
      p: 2563.70,
      star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/fda90bb2d82c44b0ad8433c7ca7c152e4b3cba47/SAFAVIEH-Courtyard-Aquata-Indoor--Outdoor-Patio-Backyard-Rug.jpg?imwidth=480&impolicy=medium",
      p: 9363.70,
      star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/1da3d731632f77e245953a81693455a82ece93e9/Well-Woven-Lotus-Amesti-Vintage-Abstract-Machine-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
      p:7363.70,
      star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
   image:"https://ak1.ostkcdn.com/images/products/is/images/direct/b58cb2d26a25e263e50609ad5c1cc32ed5d79f6b/Unique-Loom-Mona-Mangata-Washable-Rug.jpg?imwidth=480&impolicy=medium",
   p: 5363.70,
   star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
},
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/389542b5a3febadc031f884d8c4848d09ee1ebf1/Zakariya-Rose-Vintage-Medallion-Machine-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
      p: 7363.70,
      star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/c104ff99916ea7f50318438d161d9aaae5df79cc/Bergamo-Contemporary-Floral-Indoor-Outdoor-Area-Rug.jpg?imwidth=480&impolicy=medium",
      p: 4003.70,
      star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/4ef84874dda846388fad927549c529241fb77da5/Unique-Loom-Mary-Mangata-Washable-Rug.jpg?imwidth=480&impolicy=medium",
      p: 6563.70,
      star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/812433f19425ce44caedce719aad9aa44c72cc30/Well-Woven-Lotus-Ramon-Vintage-Persian-Machine-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
      p: 9000.70,
      star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/6a2ecc285e169966e3c3fe2a693ecfe2c787de59/Well-Woven-Nile-Murcia-Tribal-Ethnic-Vintage-Machine-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
      p: 3000.70,
      star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
      image:"https://ak1.ostkcdn.com/images/products/is/images/direct/d340b49c2e618885a0831385febb0d058a5de8ad/nuLOOM-Kira-Machine-Washable-Tribal-Geometric-Area-Rug.jpg?imwidth=480&impolicy=medium",
      p: 3454.70,
      star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
     image:"https://ak1.ostkcdn.com/images/products/is/images/direct/3679a2164952becc815b967bbfd8ee690dbf6826/Well-Woven-Lotus-Arcata-Vintage-Abstract-Machine-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
     p: 2646.70,
     star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
    },
    {
  image:"https://ak1.ostkcdn.com/images/products/is/images/direct/4b26e0d9093e6b8303e01b74d406cdc3da9cbaf4/nuLOOM-Anya-Machine-Washable-Casual-Border-Area-Rug.jpg?imwidth=480&impolicy=medium",
  p: 8945.70,
  star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
},
    {
   image:"https://ak1.ostkcdn.com/images/products/is/images/direct/b18bcafe293871e2b32ee4de4551165de695436c/Unique-Loom-Melodie-Mangata-Washable-Rug.jpg?imwidth=480&impolicy=medium",
   p: 200.70,
   star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
},
    {
   image:"https://ak1.ostkcdn.com/images/products/is/images/direct/06c376d4d2ebdd4c051b40af5ba2f4e01d3035fd/Well-Woven-Lotus-Shasta-Vintage-Bohemian-Machine-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
   p: 800.70,
   star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
},
    {
   image:"https://ak1.ostkcdn.com/images/products/is/images/direct/3c9a9074d09ec963ac02df00b85505b71082fe77/Well-Woven-Lotus-Tonti-Vintage-Medallion-Oriental-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
   p: 6000.70,
   star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
},
    {
   image:"https://ak1.ostkcdn.com/images/products/is/images/direct/3c9a9074d09ec963ac02df00b85505b71082fe77/Well-Woven-Lotus-Tonti-Vintage-Medallion-Oriental-Washable-Area-Rug.jpg?imwidth=480&impolicy=medium",
   p: 5453.70,
   star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
},
    {
   image:"https://ak1.ostkcdn.com/images/products/is/images/direct/bd9e62784a9aeaa9081b0a09170bfd597ba3cc45/nuLOOM-Kids-Washable-Round-Alphabet-Rug.jpg?imwidth=480&impolicy=medium",
   p: 9045.70,
   star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
},
    {
   image:"https://ak1.ostkcdn.com/images/products/is/images/direct/b6b5ea49b8dd27dddc7e9f1b5e8bf1882fd2d739/ReaLife-Machine-Washable-Rug--Distressed-Vintage-Medallion.jpg?imwidth=480&impolicy=medium",
   p: 6063.70,
   star:"https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg",
        p2:"Realife Distressed Vintage Machine Washable Area"
},
   







]

console.log("yadav i m here")



objArr.forEach(ele => {
    console.log("arjun i m here")

    var div1=document.createElement("div")



    var image=document.createElement("img")
image.src=ele.image;

var p=document.createElement("h4")
p.innerText=`${"Sale Starts at INR "+ele.p}`;


var stars=document.createElement("img")
stars.setAttribute=("id","star")
stars.src=ele.star;
stars.style.width="39%"
var p2=document.createElement("p")
p2.innerText=ele.p2;

div1.append(image,p,stars,p2)

div1.addEventListener("click",function(){
   

    console.log(ele)
localStorage.setItem("item",JSON.stringify(ele))
window.location.href="productSpecificPage.html"
})


document.getElementById("cards").append(div1)

});


