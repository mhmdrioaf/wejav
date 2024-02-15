import { TProduct, TUser } from "@/types/globals";

const SELLER: TUser = {
  user_id: 1,
  user_name: "Rizz Culinary",
  email: "rizzculinary@gmail.com",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  password: "dummypassword",
  profile_picture: "/dummy_profile_pic.jpg",
  role: "SELLER",
};

const PRODUCTS: TProduct[] = [
  {
    id: 1,
    title: "Carbonara Cheese with Raw Vegetables",
    price: 25000,
    images: ["/dummy_product_pic_1.jpg", "/dummy_product_pic_2"],
    description: `
        Sebuah hidangan yang menggabungkan kelezatan dan keanekaragaman nutrisi. Ini adalah interpretasi yang inovatif dari hidangan klasik carbonara yang dikenal dengan cita rasa krimi dan keju yang lezat, diperkaya dengan sentuhan sehat dari topping sayuran segar yang belum dimasak.
        Carbonara, dalam versi ini, dibuat dengan pasta yang diguyur dengan saus krim yang kaya rasa keju, telur, dan parutan keju Parmesan yang melimpah. Sausnya lembut dan kaya, memberikan sensasi kenikmatan yang memanjakan lidah.
        
        Namun, apa yang membuat hidangan ini unik adalah toppingnya yang segar dan beragam. Berbagai jenis sayuran segar seperti selada hijau, tomat cherry, potongan mentimun, irisan paprika, dan wortel disusun dengan indah di atas pasta. Topping ini tidak hanya memberikan kelezatan tambahan tetapi juga meningkatkan nilai nutrisi dan memberikan rasa segar yang menyegarkan.
        
        Gabungan antara cita rasa gurih dari saus carbonara dan kecrispan serta kelembutan sayuran mentah menciptakan pengalaman makan yang unik dan memuaskan. "Carbonara Cheese with Raw Vegetables Topping" adalah pilihan yang sempurna bagi mereka yang menginginkan hidangan yang menggabungkan kelezatan dan kesehatan dalam satu sajian yang menggoda selera.`,
    seller_id: 1,
    seller: SELLER,
  },
  {
    id: 2,
    title: "Spagehetti Carbonara with Raw Vegetables Topping",
    price: 20000,
    images: ["/dummy_product_pic_2.jpg", "/dummy_product_pic_1"],
    description: `
        Sebuah hidangan yang menggabungkan kelezatan dan keanekaragaman nutrisi. Ini adalah interpretasi yang inovatif dari hidangan klasik carbonara yang dikenal dengan cita rasa krimi dan keju yang lezat, diperkaya dengan sentuhan sehat dari topping sayuran segar yang belum dimasak.
        Carbonara, dalam versi ini, dibuat dengan pasta yang diguyur dengan saus krim yang kaya rasa keju, telur, dan parutan keju Parmesan yang melimpah. Sausnya lembut dan kaya, memberikan sensasi kenikmatan yang memanjakan lidah.
        
        Namun, apa yang membuat hidangan ini unik adalah toppingnya yang segar dan beragam. Berbagai jenis sayuran segar seperti selada hijau, tomat cherry, potongan mentimun, irisan paprika, dan wortel disusun dengan indah di atas pasta. Topping ini tidak hanya memberikan kelezatan tambahan tetapi juga meningkatkan nilai nutrisi dan memberikan rasa segar yang menyegarkan.
        
        Gabungan antara cita rasa gurih dari saus carbonara dan kecrispan serta kelembutan sayuran mentah menciptakan pengalaman makan yang unik dan memuaskan. "Carbonara Cheese with Raw Vegetables Topping" adalah pilihan yang sempurna bagi mereka yang menginginkan hidangan yang menggabungkan kelezatan dan kesehatan dalam satu sajian yang menggoda selera.`,
    seller_id: 1,
    seller: SELLER,
  },
];
