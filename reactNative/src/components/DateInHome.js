import React, { useRef, useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

const DatePicker = () => {
  const scrollViewRef = useRef(null);
  const [currentDate] = useState(new Date());
  const screenWidth = Dimensions.get("window").width;
  const dateItemWidth = 35;
  const dateItemMargin = 4;
  const totalItemWidth = dateItemWidth + dateItemMargin * 2;

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentDate);

  useEffect(() => {
    if (scrollViewRef.current) {
      const scrollToX =
        (currentDate.getDate() - 1) * totalItemWidth -
        screenWidth / 2 +
        dateItemWidth / 2;
      scrollViewRef.current.scrollTo({ x: scrollToX, animated: false });
    }
  }, []);

  const renderDateItem = (date) => {
    const isCurrentDate = date === currentDate.getDate();
    return (
      <View
        key={date}
        style={[styles.dateItem, isCurrentDate && styles.currentDateItem]}
      >
        <Text
          style={[styles.dateText, isCurrentDate && styles.currentDateText]}
        >
          {date}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {[...Array(daysInMonth)].map((_, index) => renderDateItem(index + 1))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: "center",
  },
  scrollViewContent: {
    alignItems: "center",
    paddingHorizontal: Dimensions.get("window").width / 30 - 17.5,
  },
  dateItem: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    borderColor: "#80C4E9",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
  },
  dateText: {
    color: "black",
  },
  currentDateItem: {
    backgroundColor: "black",
    borderColor: "black",
  },
  currentDateText: {
    color: "white",
  },
});

export default DatePicker;
