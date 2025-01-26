import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import tw from "twrnc";
import  UserHeader  from "../components/UserHeader";
import  NotificationItem  from "../components/NotificationItem";
import { images } from "@/assets/images";



const Notifications: React.FC = () => {
  return (
    <View style={tw`flex-1 overflow-hidden pt-8 flex-col items-center bg-zinc-100`}>
  
      <View style={tw`mt-4`}>
      <ScrollView>
      <NotificationItem 
        iconUrl={images.bag}
        title="Someone took the shift"
        message="Review shift details and prepare for it."
      />
      <NotificationItem 
        iconUrl={images.bag}
        title="Someone took the shift"
        message="Review shift details and prepare for it."
      />
      <NotificationItem 
        iconUrl={images.bag}
        title="Someone took the shift"
        message="Review shift details and prepare for it."
      />
      </ScrollView>
      </View>
      
    </View>
  );
};

export default Notifications;



