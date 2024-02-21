import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../Menu.css';
import ImageOne from '../images/Gemini_Generated_Image_two.jpeg';
import ImageTwo from '../images/Gemini_Generated_Image_three.jpeg';
import ImageThree from '../images/Gemini_Generated_Image_four.jpeg';
import ImageFour from '../images/Gemini_Generated_Image_five.jpeg';
import ImageFive from '../images/Gemini_Generated_Image_six.jpeg';
import ImageSix from '../images/Gemini_Generated_Image_seven.jpeg';
import ImageSeven from '../images/Gemini_Generated_Image_eight.jpeg';
import ImageEight from '../images/Gemini_Generated_Image_nine.jpeg';
import ImageNine from '../images/Gemini_Generated_Image_ten.jpeg';
import ImageTen from '../images/Gemini_Generated_Image_eleven.jpeg';
import ImageEleven from '../images/Gemini_Generated_Image_twelve.jpeg';
import ImageTwelve from '../images/Gemini_Generated_Image_thirteen.jpeg';
import ImageThirteen from '../images/Gemini_Generated_Image_fourteen.jpeg';
import ImageFourteen from '../images/Gemini_Generated_Image_fifteen.jpeg';
import ImageFifteen from '../images/Gemini_Generated_Image_sixteen.jpeg';
import ImageSixteen from '../images/Gemini_Generated_Image_seventeen.jpeg';
import ImageSeventeen from '../images/Gemini_Generated_Image_eighteen.jpeg';
import ImageEighteen from '../images/Gemini_Generated_Image_nineteen.jpeg';
import ImageNineteen from '../images/Gemini_Generated_Image_twenty.jpeg';
import ImageTwenty from '../images/Gemini_Generated_Image_twentyone.jpeg';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../store.js/store';




export const menuItems = [
  { id: 1, name: 'Croissants', description: 'Flaky and buttery perfection', price: '$3.67', image: ImageOne}, 
  { id: 2, name: 'Baguettes', description: 'Crusty exterior, soft and chewy inside', image: ImageTwo},
  { id: 3, name: 'Éclair', description: 'Cream-filled pastry with chocolate glaze', image: ImageThree},
  { id: 4, name: 'Macarons', description: 'Colorful, delicate almond cookies', image: ImageFour},
  { id: 5, name: 'Fruit Tart', description: 'Fresh fruit on a bed of sweet custard', image: ImageFive },
  { id: 6, name: 'Cinnamon Roll', description: 'Warm, gooey, and packed with cinnamon flavor', image: ImageSix},
  { id: 7, name: 'Chocolate Chip Cookie', description: 'Classic cookie with melted chocolate chips', image: ImageSeven },
  { id: 8, name: 'Donut', description: 'Fried dough with sweet glaze or frosting', image: ImageEight },
  { id: 9, name: 'Muffins', description: 'Available in various flavors like blueberry, banana nut, etc.', image: ImageNine },
  { id: 10, name: 'Scones', description: 'Lightly sweet with a crumbly texture', image: ImageTen },
  { id: 11, name: 'Coffee Cake', description: 'Moist cake with a sweet streusel topping', image: ImageEleven },
  { id: 12, name: 'Brownies', description: 'Rich, fudgy, and oh-so-chocolatey', image: ImageTwelve },
  { id: 13, name: 'Cheesecake', description: 'Creamy and decadent, with a variety of toppings', image: ImageThirteen },
  { id: 14, name: 'Tiramisu', description: 'Layered Italian dessert with coffee-soaked ladyfingers', image: ImageFourteen },
  { id: 15, name: 'Biscotti', description: 'Twice-baked, crunchy Italian cookies', image: ImageFifteen },
  { id: 16, name: 'Pound Cake', description: 'Dense, buttery cake perfect for serving plain or with toppings', image: ImageSixteen },
  { id: 17, name: 'Danish', description: 'Flaky pastry filled with fruit or cream cheese', image: ImageSeventeen },
  { id: 18, name: 'Brioche', description: 'Rich, buttery bread with a slightly sweet flavor', image: ImageEighteen },
  { id: 19, name: 'Pretzels', description: 'Soft or hard, with classic salt or unique flavors', image: ImageNineteen },
  { id: 20, name: 'Focaccia', description: 'Flatbread with herbs and olive oil', image: ImageTwenty },
  
];









const Menu = ({ product}) => {
  const [selectedItem, setSelectedItem] = useState(null); 
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);

  const Home = () => {
    navigate('/');
  }

  const handleAddToCart = (product) => {
    addItem(product);
    navigate('/cart');
  }


  
 
return (

  <>
  <button className='back-to-home' onClick={Home}> Back to home</button>
  <div className="card-grid">
  {menuItems.map((item) => (
    <motion.div
      className="card-item"
      key={item.id}
      onClick={() => setSelectedItem(item.id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img src={item.image} alt={item.name} layoutId={`image-container-${item.id}`} />
      <div className="card-content">
        <h3>{item.name}</h3>
        <motion.div className="card-item-details">
          <p>{item.description}</p>
        </motion.div>
        <div>
          <button onClick={() => handleAddToCart(product)}>add to cart</button>
        </div>
      </div>
    </motion.div>
  ))}

  
</div>
</>

  );
  
};

export default Menu;
