import {
  View,
  ScrollView,
  RefreshControl,
  Text,
} from "react-native";
import { useState } from "react";
import Loading from "@/components/Loading";

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const onRefresh = () => {
    setRefreshing(true);
    setLoading(true);
    setTimeout(() => {
      setRefreshing(false);
      setLoading(false);
    }, 2000);
  };

  return (
    <ScrollView
      contentContainerStyle={{ minHeight: "100%" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <Loading />
        </View>
      ) : (
        <View className="flex-1 w-screen items-center justify-center">
          <Text className="text-2xl font-bold">Data loaded</Text>
        </View>
      )}
    </ScrollView>
  );
}
