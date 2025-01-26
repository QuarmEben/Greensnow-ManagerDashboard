import { images } from '@/assets/images';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import { ActionButton } from '../components/ActionButton';

const UserImage: React.FC = () => {
  return (
    <View style={tw`flex-1 mt-5 bg-gray-100 p-1 items-center`}>

      {/* Header */}
      <Text style={tw`self-start text-2xl font-bold text-stone-900`}>User Image</Text>

<ScrollView contentContainerStyle={tw`items-center`}>
      {/* Description */}
      <Text style={tw`text-gray-600 mt-5 mb-7`}>
        Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes.
      </Text>

      {/* User Image */}
    
      <Image
        source={images.userimage} // Replace with actual image URL
        style={tw`object-contain h-[341px] mb-15`}
      />
      

      {/* Action Buttons */}
      <View style={tw`flex justify-around`}>
         <ActionButton 
         onPress={() => {}}
         className='w-[327px]'
         isEnabled = {true}
         label='Verify Account'
         />
         <ActionButton 
         onPress={() => {}}
         className='bg-red-500 mt-2 w-[327px] mb-9'
         isEnabled = {true}
         label='Remove Account'
         />
        </View>
      

      {/* Footer */}
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

export default UserImage;
