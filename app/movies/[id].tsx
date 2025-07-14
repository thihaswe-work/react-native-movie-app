import { icons } from "@/constants/icons";
import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );
  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            resizeMode="stretch"
            className="w-full h-[550px]"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
          />
        </View>
        <View className="flex-col items-start justify-center mt-5 px-5 ">
          <Text className="font-bold text-xl text-white">{movie?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2 ">
            <Text className="text-light-200 text-sm">
              {movie?.release_date?.split("-")[0]}
            </Text>
            <Text className="text-light-200 text-sm">{movie?.runtime}</Text>
          </View>
          <View className="flex-row bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2 items-center">
            <Image source={icons.star} className="size-4" />
            <Text className="font-bold text-sm text-white">
              {Math.round(movie?.vote_average ?? 0) / 10}
            </Text>
            <Text className="text-light-200 text-sm">
              {movie?.vote_count} votes
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
