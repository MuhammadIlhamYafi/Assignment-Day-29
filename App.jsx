import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const menuItems = [
  {
    title: "Cappuccino",
    desc: "Kopi creamy dengan foam susu lembut.",
    price: "Rp 25.000",
    img: "https://media.istockphoto.com/id/1174632449/photo/side-view-of-hot-latte-coffee-with-latte-art-in-a-ceramic-green-cup-and-saucer-isolated-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=61FLuInL5v9dVRMbaGXUOLZBluqvBulRSiCsphy38Y0="
  },
  {
    title: "Espresso",
    desc: "Kopi hitam pekat untuk cita rasa kuat.",
    price: "Rp 20.000",
    img: "https://images.unsplash.com/photo-1582269699306-cfcc37ec6cc0"
  },
  {
    title: "Croissant",
    desc: "Roti khas Perancis, renyah & lembut.",
    price: "Rp 18.000",
    img: "https://images.unsplash.com/photo-1586211566364-0e2e6279607b"
  },
  {
    title: "Nasi Chicken Teriyaki",
    desc: "Nasi hangat dengan ayam teriyaki manis gurih ala Jepang.",
    price: "Rp 35.000",
    img: "https://media.istockphoto.com/id/1872450054/id/foto/paha-ayam-teriyaki-dengan-nasi-merah-rebus-dan-brokoli-batang-empuk-rebus.jpg?s=612x612&w=0&k=20&c=tIv79M8UmkolGfOezctdtjzRHnKNNqccEo_bpiBn2xE="
  },
  {
    title: "Pasta Creamy Mushroom",
    desc: "Pasta creamy dengan saus jamur gurih dan keju parmesan.",
    price: "Rp 38.000",
    img: "https://media.istockphoto.com/id/2170463785/photo/penne-pasta-with-mushrooms-spinach-and-cheese-healthy-food-vegetarian-food.webp"
  },
  {
    title: "Strawberry Sparkling Tea",
    desc: "Minuman teh bersoda dengan rasa stroberi segar.",
    price: "Rp 24.000",
    img: "https://media.istockphoto.com/id/1312600299/id/foto/musim-panas-merah-menyegarkan-minuman-ringan-dengan-es-atau-es-teh-buah-close-up-latar.jpg"
  },
];

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-sans text-white bg-[url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&auto=format&fit=crop&q=60')] bg-cover bg-fixed bg-no-repeat bg-center">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-amber-700/80 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">☕ Cafe Seru</h1>
          <ul className="flex gap-6 text-sm md:text-base font-medium">
            <li><a href="#home" className="hover:text-amber-300">Home</a></li>
            <li><a href="#about" className="hover:text-amber-300">About</a></li>
            <li><a href="#menu" className="hover:text-amber-300">Menu</a></li>
            <li><a href="#contact" className="hover:text-amber-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="text-center py-24 px-6 bg-gradient-to-b from-amber-100/80 to-white/80 text-gray-800" data-aos="fade-up">
        <div className="text-6xl mb-4">☕</div>
        <h2 className="text-5xl font-bold text-amber-700 mb-4">Selamat Datang di Cafe Seru!</h2>
        <p className="text-xl max-w-xl mx-auto mb-6">Tempat terbaik untuk bersantai, menikmati kopi, dan berbagi cerita hangat.</p>
        <a href="#menu" className="inline-block bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-full transition">Lihat Menu</a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6 bg-white/90 rounded-2xl shadow-lg my-12 text-gray-800" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60" className="rounded-xl shadow-lg w-full md:w-1/2" alt="Cafe Interior" />
          <div>
            <h2 className="text-4xl font-bold mb-4 text-amber-700">Tentang Kami</h2>
            <p className="text-lg mb-4">Cafe Seru menghadirkan suasana nyaman dan cita rasa kopi berkualitas tinggi untuk kamu yang ingin melepas penat atau sekadar ngobrol santai.</p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Tempat cozy & estetik</li>
              <li>✅ Kopi premium & fresh</li>
              <li>✅ Staff ramah & pelayanan cepat</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="max-w-6xl mx-auto py-20 px-6 bg-white/90 rounded-2xl shadow-lg my-12 text-gray-800" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-10 text-amber-700">Menu Favorit</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          spaceBetween={20}
        >
          {menuItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-xl shadow hover:scale-105 hover:shadow-xl transition">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <p className="mt-2 text-amber-600 font-bold">{item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto py-20 px-6 bg-white/90 rounded-2xl shadow-lg my-12 text-gray-800" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-6 text-amber-700">Hubungi Kami</h2>
        <div className="grid md:grid-cols-2 gap-10 mt-6">
          <div>
            <p className="mb-4">📍 Alamat: Jl. Kopi Bahagia No. 17, Kota Senja</p>
            <p className="mb-4">📞 Telepon: 0812-3456-7890</p>
            <p className="mb-4">📧 Email: info@cafeseru.id</p>
            <p className="mt-4">Jam Operasional:<br />Senin - Minggu: 08.00 - 22.00</p>
            <iframe className="mt-6 rounded-xl shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!..." width="100%" height="250" allowFullScreen="" loading="lazy"></iframe>
          </div>
          <form className="bg-white p-6 rounded-xl shadow space-y-4">
            <input type="text" placeholder="Nama" className="w-full border border-gray-300 p-3 rounded-md" />
            <input type="email" placeholder="Email" className="w-full border border-gray-300 p-3 rounded-md" />
            <textarea rows="4" placeholder="Pesan" className="w-full border border-gray-300 p-3 rounded-md"></textarea>
            <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-6 rounded-md">Kirim</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-4 bg-amber-700 text-white mt-10">
        &copy; 2025 Cafe Seru. All rights reserved.
      </footer>
    </div>
  );
}



  
// import { useState, useEffect } from 'react';
// import { TodoContext } from './TodoContext';
// import AddTodo from './AddTodo';
// import TodoList from './TodoList';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   useEffect(() => {
//     const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     setTodos(savedTodos);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <TodoContext.Provider value={{ todos, setTodos, input, setInput }}>
//       <div>
//         <h2>To-Do List</h2>
//         <AddTodo />
//         <TodoList />
//       </div>
//     </TodoContext.Provider>
//   );
// }

// export default App;