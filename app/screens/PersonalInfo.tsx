import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import { images } from '@/assets/images';
import { ActionButton } from '../components/ActionButton';
import { DisplayPersonalInfoProps } from './types';
import { router } from 'expo-router';

const UserApproved = () => {
    const userData = 
        {
            desciption: "Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes.",
            name: "Evanela Aba Forson",
            email: "evanlinalone2@gmail.com",
            phone: "+1 (542) 696-3261",
            homeAddress: "6632 Riviero Ln TG, Pilato, OF T678...",
            dateOfBirth: "December 12, 2001",
            Language: "English (EN)",
            identityVerificationStatus: "Pending",
            backgroundCheckStatus: "Pending"
        };
    

  return (
    
      <View style={tw`px-4 py-6 bg-gray-100`}>
        {/* Header */}
        
          <Text style={tw`self-start text-2xl font-bold text-stone-900`}>Personal Info</Text>
        
          <ScrollView style={tw`flex w-full`}>
        {/* description */}
        <Text style={tw`text-zinc-600 tracking-tight text-sm text-neutral-500 mt-5`}>{userData.desciption}</Text>
        

        {/* Menu Section */}
        <View style={tw`pt-4`}>
          {[
            {name: userData.name, label:"Name", icon: images.contactmuted},
            {name: userData.email, label:"Email", icon: images.emailmuted},
            {name: userData.phone, label:"Phone", icon: images.phonemuted},
            {name: userData.homeAddress, label:"Home Address", icon: images.homeaddressmuted},
            {name: userData.dateOfBirth, label:"Date Of Birth", icon: images.dobmuted},
            {name: userData.Language, label:"Language", icon: images.languagemuted},
          ].map((item, index) => (
                <DisplayPersonalInfo key = {index} item={item}/>
          ))}
        </View>


        <TouchableOpacity
  onPress={()=>router.push("/screens/IdentityVerification")}
  style={tw`flex-row items-center justify-between py-2`}
>
    
  <View style={tw`flex flex-row gap-3 items-start`}>

     <View style={tw`flex w-[18px] h-[18px] items-center justify-center mt-1`}>
                    <Image source={images.identityverificationmuted} />
                    <Image source={images.reddot} 
                    style={tw`absolute top-0 right-0`}
                    />
                  </View>
      <View style={tw`flex flex-col`}>
            <Text style={tw`text-base text-gray-500 font-bold`}>Identity Verification</Text>
            <Text style={tw`text-base text-stone-900`}>{userData.identityVerificationStatus}</Text>
      </View>
  </View>
  <FontAwesome name="chevron-right" size={16} color="gray" />
  </TouchableOpacity>

  <TouchableOpacity
  onPress={()=>{}}
  style={tw`flex-row items-center justify-between py-2`}
>

  <View style={tw`flex flex-row gap-3 items-start`}>

     <View style={tw`flex w-[18px] h-[18px] items-center justify-center mt-1`}>
                    <Image source={images.backgroundcheckmuted} />
                    <Image source={images.reddot} 
                    style={tw`absolute top-0 right-0`}
                    />
                  </View>
      <View style={tw`flex flex-col`}>
            <Text style={tw`text-base text-gray-500 font-bold`}>Background Check</Text>
            <Text style={tw`text-base text-stone-900`}>{userData.backgroundCheckStatus}</Text>
      </View>
  </View>
  <FontAwesome name="chevron-right" size={16} color="gray" />
</TouchableOpacity>

        

        <Image 
      source={images.logowithoutcaption} 
      style={tw`absolute bottom-0 left-0`}
     />

      {/* Footer */}
      <View style={tw`mt-35 mb-5 flex items-center`}>
       <Image source={images.logowithcaption} />
      </View>

    
        </ScrollView>
      </View>
    
  );
};


const DisplayPersonalInfo: React.FC<DisplayPersonalInfoProps> = ({item}) => {

    
    return <View style={tw`flex-row items-center justify-between py-2`}>
      

      
    <View style={tw`flex flex-row gap-3 items-start`}>
        <Image source={item.icon} 
          style={tw`mt-2`}
        />
        <View style={tw`flex flex-col`}>
              <Text style={tw`text-sm text-gray-500 font-bold`}>{item.label}</Text>
              <Text style={tw`text-sm text-gray-500`}>{item.name}</Text>
        </View>
    </View>
    <FontAwesome name="chevron-right" size={16} color="gray" />

  </View>

}

export default UserApproved;
