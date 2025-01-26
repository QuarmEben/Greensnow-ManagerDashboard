import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";

import tw from "twrnc";

import  JobCard  from "../components/JobCard";
import { images } from "@/assets/images";
import { ActionButton } from "../components/ActionButton";
import { router } from "expo-router";
import { JobCardProps } from "./types";
import jobCardData from "../../assets/data/jobCardData.json";



const ShiftsWithPosts: React.FC = () => {

  const [jobCard, setJobCard] = useState<JobCardProps | null>(null);
  
  useEffect(() => {

    setJobCard(jobCardData.jobCard);
  }, []);


  return (
    
    <View style={tw`flex-1 flex-col overflow-hidden pt-8 bg-zinc-100`}>
    
    <View style={tw`flex flex-row items-start gap-2.5 w-64 max-w-full rounded-none w-full`}>
            
            <TouchableOpacity>
            <Text style={tw`grow shrink text-stone-900 text-base font-extrabold tracking-tight leading-loose`}>Posted Shifts</Text>
            </TouchableOpacity>
    
            <TouchableOpacity>
            <Text style={tw`grow text-green-700 text-base font-extrabold tracking-tight leading-loose underline`}>Shifts Taken</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={tw`grow shrink text-stone-900 text-base font-extrabold tracking-tight leading-loose`}>Pending Shifts</Text>
            </TouchableOpacity>
    </View>

        

      <View style={tw`flex-1 flex-col gap-4 justify-center w-full mt-4 max-w-[480px]`}>
        
        {/* Action Button */}
        <ActionButton 
          className="self-start w-[193px] px-2 py-2 mt-3"
          isEnabled = {true}
          label="Create Shift"
          onPress={() => {}}
          //onPress={()=> router.push("/shifts/CreateShift")}
        />
        
        
        <ScrollView>
        <View style={tw`flex-1 flex-col overflow-hidden w-full items-center text-center`}>

        {/* if(!jobCard) ? {
     
      <View><Text>Loading...</Text></View> */}
     
  {/* }  */}
        <TouchableOpacity onPress={() => router.push("/shifts/ShiftDetailsPosted")} style={tw`w-full`}>
          
        <JobCard 
        jobId = {jobCard?.jobId}
        date = {jobCard?.date}
        time = {jobCard?.time}
        location = {jobCard?.location}
        position = {jobCard?.position}
        hourlyRate = {jobCard?.hourlyRate}
        hours = {jobCard?.hours}
        totalAmount = {jobCard?.totalAmount}
        backgroundImage = {jobCard?.backgroundImage}
        employer={jobCard?.employer}
        />
        </TouchableOpacity>
        <JobCard 
        jobId=""
        date = "Tue, 10th Dec"
        time = "12:00 AM"
        location = "Calgary, AB - 8.2km"
        position = "General Labor"
        hourlyRate = {17.50}
        hours = {8}
        totalAmount = {140.00}
        backgroundImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/5d39e68ac8e6f65c8f0802b579ba00d28ef135baad94913e4bf910ed7bc5a4b4?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        />
        
        </View>
        
        </ScrollView>
      </View>
      
    </View>
  );
};

export default ShiftsWithPosts;

