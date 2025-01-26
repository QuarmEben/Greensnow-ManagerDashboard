import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";

import tw from "twrnc"
import  UserHeader  from "../components/UserHeader";
import  JobCard  from "../components/JobCard";
import { images } from "@/assets/images";
import { router } from "expo-router";

const History: React.FC = () => {
  return (
    
    <View style={tw`flex-1 bg-zinc-100`}>
       
      
         
          <View style={tw`mt-8`}>
            <Text style={tw`text-xl font-extrabold tracking-tight leading-none`}>Previous shifts</Text>
          </View>
        

      {/* Shift card goes here */}
    
              <ScrollView contentContainerStyle={tw`mt-8`}>
    
<TouchableOpacity onPress={() => router.push("/shifts/ShiftDetailsTakenWithReview")}>
<JobCard 
        date = "Tue, 10th Dec"
        time = "12:00 AM"
        location = "Calgary, AB - 8.2km"
        employee = "Evanela Aba Forson"
        employer="Jacobs Construction"
        position = "General Labor"
        hourlyRate = {17.50}
        hours = {8}
        totalAmount = {140.00}
        backgroundImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/5d39e68ac8e6f65c8f0802b579ba00d28ef135baad94913e4bf910ed7bc5a4b4?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        />
        </TouchableOpacity>
<JobCard 
        date = "Tue, 10th Dec"
        time = "12:00 AM"
        location = "Calgary, AB - 8.2km"
        employee = "Evanela Aba Forson"
        employer="Jacobs Construction"
        position = "General Labor"
        hourlyRate = {17.50}
        hours = {8}
        totalAmount = {140.00}
        backgroundImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/5d39e68ac8e6f65c8f0802b579ba00d28ef135baad94913e4bf910ed7bc5a4b4?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        />

</ScrollView>
  
      
      {/* navigation goes here */}
    </View>
 
  );
};

export default History;
