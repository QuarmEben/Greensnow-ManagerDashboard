import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import { images } from '@/assets/images';
import { ActionButton } from '../components/ActionButton';
import { DisplayPersonalInfoProps } from './types';
import { router } from 'expo-router';

const UserApproved = () => {
    const verificationData = 
        {
            imageStatus: "Uploaded",
            IDCardStatus: "Uploaded",
            PassportStatus: "Uploaded",
            otherCertificateStatus: "Uploaded"
        };
    

  return (
    
      <View style={tw`px-4 py-6 bg-gray-100`}>
        {/* Header */}
        
          <Text style={tw`self-start text-2xl font-bold text-stone-900`}>Verify Account Identity</Text>
        
          <ScrollView style={tw`flex w-full`}>
        {/* description */}
        <Text style={tw`text-zinc-600 tracking-tight text-sm text-neutral-500 mt-5`}>This will enable us complete checks on your background and get your viable for picking gigs. Together, we make Greensnow safe for all of us.</Text>
        

        {/* Menu Section */}
        <TouchableOpacity
  onPress={() => router.push("/screens/UserImageApproved")}
  style={tw`flex-row items-center justify-between py-2 mt-5`}
>
    
  <View style={tw`flex flex-row gap-3 items-start`}>

     <View style={tw`flex w-[18px] h-[18px] items-center justify-center mt-1`}>
                    <Image source={images.personalinfo} />
                    <Image source={images.reddot} 
                    style={tw`absolute top-0 right-0`}
                    />
                  </View>
      <View style={tw`flex flex-col`}>
            <Text style={tw`text-base text-stone-900 font-bold`}>Image</Text>
            <Text style={tw`text-base text-gray-400`}>{verificationData.imageStatus}</Text>
      </View>
  </View>
  <FontAwesome name="chevron-right" size={16} color="gray" />
</TouchableOpacity>

        <TouchableOpacity
  
  style={tw`flex-row items-center justify-between py-2`}
>
    
  <View style={tw`flex flex-row gap-3 items-start`}>

     <View style={tw`flex w-[18px] h-[18px] items-center justify-center mt-1`}>
                    <Image source={images.personalinfo} />
                    <Image source={images.reddot} 
                    style={tw`absolute top-0 right-0`}
                    />
                  </View>
      <View style={tw`flex flex-col`}>
            <Text style={tw`text-base text-stone-900 font-bold`}>ID Card</Text>
            <Text style={tw`text-base text-gray-400`}>{verificationData.IDCardStatus}</Text>
      </View>
  </View>
  <FontAwesome name="chevron-right" size={16} color="gray" />
</TouchableOpacity>
        <TouchableOpacity
  
  style={tw`flex-row items-center justify-between py-2`}
>
    
  <View style={tw`flex flex-row gap-3 items-start`}>

     <View style={tw`flex w-[18px] h-[18px] items-center justify-center mt-1`}>
                    <Image source={images.personalinfo} />
                    <Image source={images.reddot} 
                    style={tw`absolute top-0 right-0`}
                    />
                  </View>
      <View style={tw`flex flex-col`}>
            <Text style={tw`text-base text-stone-900 font-bold`}>Passport</Text>
            <Text style={tw`text-base text-gray-400`}>{verificationData.PassportStatus}</Text>
      </View>
  </View>
  <FontAwesome name="chevron-right" size={16} color="gray" />
</TouchableOpacity>
        <TouchableOpacity
  
  style={tw`flex-row items-center justify-between py-2`}
>
    
  <View style={tw`flex flex-row gap-3 items-start`}>

     <View style={tw`flex w-[18px] h-[18px] items-center justify-center mt-1`}>
                    <Image source={images.personalinfo} />
                    <Image source={images.reddot} 
                    style={tw`absolute top-0 right-0`}
                    />
                  </View>
      <View style={tw`flex flex-col`}>
            <Text style={tw`text-base text-stone-900 font-bold`}>Any Other Certificate</Text>
            <Text style={tw`text-base text-gray-400`}>{verificationData.otherCertificateStatus}</Text>
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

    
  return <TouchableOpacity
  
  style={tw`flex-row items-center justify-between py-2`}
>
    
  <View style={tw`flex flex-row gap-3 items-start`}>

     <View style={tw`flex w-[18px] h-[18px] items-center justify-center mt-1`}>
                    <Image source={item.icon} />
                    <Image source={images.reddot} 
                    style={tw`absolute top-0 right-0`}
                    />
                  </View>
      <View style={tw`flex flex-col`}>
            <Text style={tw`text-base text-gray-500 font-bold`}>{item.label}</Text>
            <Text style={tw`text-base text-stone-900`}>{item.name}</Text>
      </View>
  </View>
  <FontAwesome name="chevron-right" size={16} color="gray" />
</TouchableOpacity>

}

export default UserApproved;
