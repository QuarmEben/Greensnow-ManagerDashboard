import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Modal, TextInput } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import { images } from '@/assets/images';
import { ActionButton } from '../components/ActionButton';
import { router } from 'expo-router';

const UserApproved = () => {

  const [isSuspendAccount, setIsSuspendAccount] = useState(false);
  const [isRemoveAccount, setIsRemoveAccount] = useState(false);
  const [password, setPassword] = useState('');

  return (
    
      <View style={tw`px-4 py-6 bg-gray-100`}>
        {/* Header */}
        
          <Text style={tw`self-start text-2xl font-bold text-stone-900`}>Employer Profile Details</Text>
        
          <ScrollView style={tw`flex w-full`}>
        {/* Profile Section */}
        <View style={tw`flex bg-gray-100 items-center justify-center mb-6 mt-8`}>

          <View style={tw`flex flex-row gap-3 w-full`}>
              <Image source={images.avatarverified} 
              style={tw`object-contain shrink-0 aspect-square w-[60px] self-center`} 
              />
              
              {/* Rating and Assurance */}
              <View style={tw`flex flex-col`}>
                <View style={tw`flex flex-row gap-0.5 items-center`}>
                  <Image source={images.star} 
                  style={tw`object-contain shrink-0 aspect-square w-[16px]`}
                  />
                  <Text>Rating</Text>
                </View>
                <View style={tw`flex-row items-center mt-0.5`}>
                  <FontAwesome name="star" size={20} color="green" />
                  <FontAwesome name="star-o" size={20} color="gray" />
                  <FontAwesome name="star-o" size={20} color="gray" />
                  <FontAwesome name="star-o" size={20} color="gray" />
                  <FontAwesome name="star-o" size={20} color="gray" />
                </View>
                <View style={tw`flex flex-row justify-between w-[87%]`}>
                <View style={tw`flex flex-row gap-0.5 items-center`}>
                  <Image source={images.ranking} 
                  style={tw`object-contain shrink-0 aspect-square w-[16px] mt-2`}
                  />
                <Text style={tw`mt-2`}>Assurance</Text>
                </View>
                <Text style={tw`text-sm text-gray-500 mt-2`}>19/100</Text>
                </View>
                <View style={tw`w-[90%] bg-gray-300 rounded-full h-2 mt-1`}>
                  <View style={tw`bg-green-500 h-2 rounded-full w-[19%]`} />
                </View>
                
              </View>
          </View>

          <Text style={tw`self-start text-2xl font-bold text-stone-900 mt-5`}>Evanela Aba Forson</Text>
        </View>

        {/* Menu Section */}
        <View style={tw`mb-6 border-b border-t border-gray-200 py-4`}>
          
            <TouchableOpacity
            onPress={()=>router.push("/screens/PersonalInfo")}
              style={tw`flex-row items-center justify-between py-2`}
            >
              <View style={tw`flex flex-row gap-3 items-center`}>
                  <Image source={images.personalinfo} />
                  <Text style={tw`text-base text-black`}>Personal Info</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>router.push("/shifts/ShiftDetailsPosted")}
              style={tw`flex-row items-center justify-between py-2`}
            >
              <View style={tw`flex flex-row gap-3 items-center`}>
                  <Image source={images.jobdetails} />
                  <Text style={tw`text-base text-black`}>Job Details</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{}}
              style={tw`flex-row items-center justify-between py-2`}
            >
              <View style={tw`flex flex-row gap-3 items-center`}>
                  <Image source={images.help} />
                  <Text style={tw`text-base text-black`}>Help</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{}}
              style={tw`flex-row items-center justify-between py-2`}
            >
              <View style={tw`flex flex-row gap-3 items-center`}>
                  <Image source={images.refer} />
                  <Text style={tw`text-base text-black`}>Refer Someone for $100</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{}}
              style={tw`flex-row items-center justify-between py-2`}
            >
              <View style={tw`flex flex-row gap-3 items-center`}>
                  <Image source={images.legal} />
                  <Text style={tw`text-base text-black`}>Legal</Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="gray" />
            </TouchableOpacity>
        
        </View>

        {/* Gigs Taken */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-sm text-gray-400 font-bold mb-2`}>5 Gigs Taken</Text>
          {[
            {name:'General Labour', employer: 'Jacob Construction'},
            {name:'Snow Shoveling', employer: 'Madam Mooke'},
            {name:'Snow Shoveling', employer: 'Madam Mooke'},
            {name:'Snow Shoveling', employer: 'Madam Mooke'},
            {name:'Snow Shoveling', employer: 'Madam Mooke'}
          ].map((gig, index) => (
            <View
              key={index}
              style={tw`flex-row items-center justify-between py-0.5`}
            >
              <Text style={tw`text-base text-black text-sm`}><Text style={tw`font-bold`}>{gig.name}</Text> - {gig.employer}</Text>
              <TouchableOpacity>
                <Text style={tw`text-green-600 font-bold`}>View Gig</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Account Verified Section */}
        <View style={tw`mb-6 mt-5 items-center`}>
          <Text style={tw`text-2xl font-bold text-stone-900`}>Account Verified</Text>
          <Text style={tw`text-sm text-gray-500`}>Account setup is <Text style={tw`text-stone-900 font-bold`}>100%</Text> complete</Text>
        </View>

        {/* Buttons */}
        <View style={tw`flex justify-around`}>
         <ActionButton 
         onPress={() => setIsSuspendAccount(true)}
         className=' w-[97%]'
         isEnabled = {false}
         label='Suspend Account'
         />
         <ActionButton 
         onPress={() => setIsRemoveAccount(true)}
         className='bg-red-500 mt-2 mb-8 w-[97%]'
         isEnabled = {true}
         label='Remove Account'
         />
        </View>
        </ScrollView>

    {/* Suspend Account Modal -----------------------------------------------*/}
    
      {/* Modal Container */}
      <Modal 
        visible={isSuspendAccount} 
        onRequestClose={() => setIsSuspendAccount(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
      <View style={tw`bg-white w-11/12 p-6 rounded-xl shadow-lg items-center self-center mt-auto mb-auto`}>
        {/* Close Button */}
        <TouchableOpacity 
      onPress={() => setIsSuspendAccount(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={images.closeicon}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>

        {/* Title */}
        <Text style={tw`self-start text-2xl font-bold text-stone-900 mt-6`}>
          Are You Sure You Want To Suspend Account?
        </Text>

        {/* Description */}
        <Text style={tw`text-gray-600 text-center mt-5 mb-6`}>
          Account won’t be able to pick up or{'\n'}create shifts till you unsuspend.{'\n'}Enter your password to confirm suspension.
        </Text>

        <View style={tw`text-gray-600 self-start mt-3 mb-1`}>
        <Text style={tw`text-gray-600`}>Password</Text>
        </View>
        {/* Password Input */}
        <TextInput
          style={tw`border border-gray-300 rounded-lg p-3 mb-6 w-full`}
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        {/* Suspend Button */}
        <View style={tw``}>
            <ActionButton 
            className='text-gray-300 w-[193px] p-3'
            isEnabled={false}
            label='Suspend'
            onPress={() => setIsSuspendAccount(true)}
        />
        </View>
      </View>
      </Modal>


      {/* Remove Account Modal -----------------------------------------------*/}
    
      {/* Modal Container */}
      <Modal 
        visible={isRemoveAccount} 
        onRequestClose={() => setIsRemoveAccount(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
      <View style={tw`bg-white w-11/12 p-6 rounded-xl shadow-lg items-center self-center mt-auto mb-auto`}>
        {/* Close Button */}
        <TouchableOpacity 
      onPress={() => setIsRemoveAccount(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={images.closeicon}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>

        {/* Title */}
        <Text style={tw`text-center text-2xl font-bold text-stone-900 mt-6`}>
          Are You Sure You Want To Delete Account?
        </Text>

        {/* Description */}
        <Text style={tw`text-gray-600 text-center mt-5`}>
            Account data would be removed from database.{'\n'}Enter your password to confirm deletion.
        </Text>

        <View style={tw`text-gray-600 self-start mt-3 mb-1`}>
        <Text style={tw`text-gray-600 mt-5`}>Password</Text>
        </View>
        {/* Password Input */}
        <TextInput
          style={tw`border border-gray-300 rounded-lg p-3 mb-6 w-full`}
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        {/* Remove Button */}
        <View style={tw``}>
            <ActionButton 
            className='text-gray-300 w-[193px] p-3 bg-red-500'
            isEnabled={true}
            label='Delete'
            onPress={() => setIsRemoveAccount(false)}
        />
        </View>
      </View>
      </Modal>
    </View>

    
    
  );
};


export default UserApproved;
