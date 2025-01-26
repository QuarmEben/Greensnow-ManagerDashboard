import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import EmployersListItem from "../components/EmployersListItem";
import { images } from "@/assets/images";
import { router } from "expo-router";



const Employers: React.FC = () => {
  return (
    <View style={tw`flex-1 overflow-hidden flex-col items-center w-full bg-zinc-100`}>
       <View style={tw`flex flex-row items-start gap-2.5 w-64 max-w-full rounded-none w-full mt-8`}>
            
            <TouchableOpacity>
            <Text style={tw`grow shrink text-green-700 text-base font-extrabold tracking-tight leading-loose underline`}>Approved</Text>
            </TouchableOpacity>
    
            <TouchableOpacity>
            <Text style={tw`grow text-stone-900 text-base font-extrabold tracking-tight leading-loose`}>Pending</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={tw`grow shrink text-stone-900 text-base font-extrabold tracking-tight leading-loose`}>Requested</Text>
            </TouchableOpacity>
    </View>
      <View style={tw`mt-4`}>
      <ScrollView>
        <TouchableOpacity onPress={() => router.push("/screens/UserPending")}>
      <EmployersListItem 
       avatar={images.avatarverified}
       name="Diane Christine Brownne"
       ratings={-10}
       
       ranking={-35}
      />
      </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/screens/UserApproved")}>
      <EmployersListItem 
       avatar={images.avatarverified}
       name="Diane Christine Brownne"
       ratings={-10}
       ranking={-35}
      />
      </TouchableOpacity>
   
      </ScrollView>
      </View>
      
    </View>
  );
};

export default Employers;



