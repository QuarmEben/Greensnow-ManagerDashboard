import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';
import tw from "twrnc";
import UserHeader from '../components/UserHeader';
import { images } from '@/assets/images';
import { HeaderShifts } from '../components/HeaderShifts';

export default function ShiftsLayout() {

  return (
    <View style={tw`flex-1 overflow-hidden flex-col px-3 pt-10 pb-6 mx-auto w-full text-center bg-zinc-100 max-w-[480px]`}>
      <HeaderShifts />
        <Stack>
            <Stack.Screen name='ShiftDetailsTaken' options={{ headerShown: false }} />
            <Stack.Screen name='ShiftDetailsPosted' options={{ headerShown: false }} />
            <Stack.Screen name='ShiftDetailsTakenWithReview' options={{ headerShown: false }} />
            <Stack.Screen name='ShiftDetailsTakenWithActionButtons' options={{ headerShown: false }} />
        </Stack>
    </View>
  );
}
