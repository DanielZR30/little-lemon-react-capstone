import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const GreekSaladImage = require('../../assets/images/Greek salad.png');
const BruschettaImage = require('../../assets/images/Bruschetta.png');
const GrilledFishImage = require('../../assets/images/Grilled fish.png');
const PastaImage = require('../../assets/images/Pasta.png');
const LemonDessertImage = require('../../assets/images/Lemon dessert.png');


const menuItems = [
  {
    title: "Greek Salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago...",
    price: "$12.99",
    image: GreekSaladImage,
    type: "Starters"
  },
  {
    title: "Bruschetta",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic...",
    price: "$7.99",
    image: BruschettaImage,
    type: "Starters"
  },
  {
    title: "Grilled Fish",
    description: "Barbequed catch of the day, with red onion, crisp capers, chive creme fraiche...",
    price: "$20.00",
    image: GrilledFishImage,
    type: "Mains"
  },
  {
    title: "Pasta",
    description: "Penne with fried aubergines, tomato sauce, fresh chilli, garlic, basil & salted...",
    price: "$18.99",
    image: PastaImage,
    type: "Mains"
  },
  {
    title: "Lemon Dessert",
    description: "Light and fluffy traditional homemade Italian Lemon and ricotta cake",
    price: "$6.99",
    image: LemonDessertImage,
    type: "Desserts"
  }
];

export default function MenuScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Starters');

  const renderItem = ({ item }: { item: typeof menuItems[0] }) => (
    <View style={styles.menuItem}>
      <Image source={item.image} style={styles.menuItemImage} />
      <View style={styles.menuItemTextContainer}>
        <Text style={styles.menuItemTitle}>{item.title}</Text>
        <Text style={styles.menuItemDescription}>{item.description}</Text>
        <Text style={styles.menuItemPrice}>{item.price}</Text>
      </View>
    </View>
  );

  const filteredItems = menuItems.filter(item => item.type === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Little Lemon</Text>
        <Text style={styles.subTitle}>Chicago</Text>
        <Text style={styles.description}>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </Text>
      </View>
      <View style={styles.categories}>
        {['Starters', 'Mains', 'Desserts', 'Drinks'].map(category => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonSelected,
            ]}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.menuList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#495E57',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F4CE14',
  },
  subTitle: {
    fontSize: 18,
    color: '#EDEFEE',
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: '#EDEFEE',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#EDEFEE',
  },
  categoryButtonSelected: {
    backgroundColor: '#495E57',
  },
  categoryButtonText: {
    color: '#333',
  },
  menuList: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  menuItemTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#7E7E7E',
    marginVertical: 5,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495E57',
  },
});
