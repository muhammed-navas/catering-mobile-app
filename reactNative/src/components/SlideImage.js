import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";

const { width } = Dimensions.get("window");
const cardWidth = width * 0.9;
const cardSpacing = width * 0.1;

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const images = [
    "https://plus.unsplash.com/premium_photo-1664790560022-324e031a6352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGV2ZW50fGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1664790560098-1fac17eb495e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMGV2ZW50fGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1674197235155-fd390a937c3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlZGRpbmclMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
  ];

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (cardWidth + cardSpacing));
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.cardContainer}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.overlay} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 10,
  },
  scrollViewContent: {
    // paddingHorizontal: cardSpacing / 20,
  },
  cardContainer: {
    width: cardWidth,
    marginHorizontal: cardSpacing / 10,
    position: "relative", 
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire Image
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Black with low opacity
    borderRadius: 30,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: "#fff",
  },
  activeDot: {
    width: 26, 
  },
  inactiveDot: {
    width: 8, 
    opacity: 0.3, 
  },
});

export default ImageCarousel;
