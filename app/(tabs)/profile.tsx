import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Types
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinDate: string;
}

interface UserStats {
  watchedMovies: number;
  favorites: number;
  reviews: number;
}

interface MenuItem {
  icon: any;
  title: string;
  subtitle: string;
  route?: string;
  onPress?: () => void;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [preferences, setPreferences] = useState({
    darkMode: true,
    notifications: false,
    autoplayTrailers: true,
  });

  // Fetch user data from your auth service/API
  const fetchUserData = async () => {
    try {
      setLoading(true);
      // Replace with your actual API calls
      // const userData = await getCurrentUser();
      // const userStats = await getUserStats(userData.id);

      // For now, using placeholder data structure
      const userData: User = {
        id: "user_123",
        name: "User", // You can fetch from auth context
        email: "user@example.com",
        joinDate: "January 2024",
        avatar: undefined, // Will show default avatar
      };

      const userStats: UserStats = {
        watchedMovies: 0,
        favorites: 0,
        reviews: 0,
      };

      setUser(userData);
      setStats(userStats);
    } catch (error) {
      console.error("Error fetching user data:", error);
      Alert.alert("Error", "Failed to load profile data");
    } finally {
      setLoading(false);
    }
  };

  // Load user preferences
  const loadPreferences = async () => {
    try {
      // Replace with your preference storage logic
      // const savedPrefs = await AsyncStorage.getItem('userPreferences');
      // if (savedPrefs) setPreferences(JSON.parse(savedPrefs));
    } catch (error) {
      console.error("Error loading preferences:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
    loadPreferences();
  }, []);

  const togglePreference = async (key: keyof typeof preferences) => {
    const newPrefs = { ...preferences, [key]: !preferences[key] };
    setPreferences(newPrefs);

    try {
      // Save to storage
      // await AsyncStorage.setItem('userPreferences', JSON.stringify(newPrefs));
    } catch (error) {
      console.error("Error saving preferences:", error);
    }
  };

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: () => {
          // Implement your sign out logic
          // signOut();
          // router.replace('/auth/login');
          console.log("Signing out...");
        },
      },
    ]);
  };

  const menuItems: MenuItem[] = [
    {
      icon: icons.star,
      title: "Favorites",
      subtitle: "Movies you love",
      route: "/favorites",
    },
    {
      icon: icons.play,
      title: "Watch History",
      subtitle: "Recently watched",
      route: "/history",
    },
  ];

  const supportItems = [
    { title: "Help Center", onPress: () => console.log("Help Center") },
    { title: "Privacy Policy", onPress: () => console.log("Privacy Policy") },
    {
      title: "Terms of Service",
      onPress: () => console.log("Terms of Service"),
    },
    { title: "About Lumix", onPress: () => console.log("About Lumix") },
  ];

  if (loading) {
    return (
      <View className="flex-1 bg-primary justify-center items-center">
        <ActivityIndicator size="large" color="#A8B5DB" />
        <Text className="text-white mt-4">Loading profile...</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View className="flex-1 bg-primary justify-center items-center px-5">
        <Image
          source={icons.person}
          className="w-16 h-16 mb-4"
          tintColor="#A8B5DB"
        />
        <Text className="text-white text-lg mb-2">Unable to load profile</Text>
        <TouchableOpacity
          onPress={fetchUserData}
          className="bg-white/10 px-6 py-3 rounded-full"
        >
          <Text className="text-white">Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary">
      <StatusBar barStyle="light-content" />
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <SafeAreaView className="flex-1">
        <ScrollView
          className="flex-1 px-5"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* Header */}
          <View className="flex-row justify-between items-center mt-5 mb-8">
            <Text className="text-white text-2xl font-bold">Profile</Text>
            <TouchableOpacity
              className="p-2"
              onPress={() => router.push("/settings" as any)}
            >
              <Image
                source={icons.person}
                className="w-6 h-6"
                tintColor="#A8B5DB"
              />
            </TouchableOpacity>
          </View>

          {/* Profile Card */}
          <View className="bg-black/30 rounded-3xl p-6 mb-6 border border-white/10">
            <View className="flex-row items-center mb-6">
              <View className="relative">
                <Image
                  source={user.avatar ? { uri: user.avatar } : icons.person}
                  className="w-20 h-20 rounded-full border-2 border-white/20"
                  style={!user.avatar && { tintColor: "#A8B5DB" }}
                  resizeMode="cover"
                />
                <View className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-primary" />
              </View>

              <View className="ml-4 flex-1">
                <Text className="text-white text-xl font-bold">
                  {user.name}
                </Text>
                <Text className="text-white/60 text-sm">{user.email}</Text>
                <Text className="text-white/40 text-xs mt-1">
                  Member since {user.joinDate}
                </Text>
              </View>

              <TouchableOpacity
                className="bg-white/10 px-4 py-2 rounded-full"
                onPress={() => router.push("/edit-profile" as any)}
              >
                <Text className="text-white text-sm font-medium">Edit</Text>
              </TouchableOpacity>
            </View>

            {/* Stats */}
            {stats && (
              <View className="flex-row justify-between bg-black/20 rounded-2xl p-4">
                <View className="flex-1 items-center">
                  <Text className="text-white text-2xl font-bold">
                    {stats.watchedMovies}
                  </Text>
                  <Text className="text-white/60 text-sm">Watched</Text>
                </View>
                <View className="flex-1 items-center">
                  <Text className="text-white text-2xl font-bold">
                    {stats.favorites}
                  </Text>
                  <Text className="text-white/60 text-sm">Favorites</Text>
                </View>
                <View className="flex-1 items-center">
                  <Text className="text-white text-2xl font-bold">
                    {stats.reviews}
                  </Text>
                  <Text className="text-white/60 text-sm">Reviews</Text>
                </View>
              </View>
            )}
          </View>

          {/* Menu Items */}
          <View className="bg-black/30 rounded-3xl p-4 mb-6 border border-white/10">
            <Text className="text-white text-lg font-bold mb-4 px-2">
              Quick Access
            </Text>

            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row items-center p-4 rounded-2xl mb-2 bg-white/5 active:bg-white/10"
                onPress={() => {
                  if (item.route) {
                    router.push(item.route as any);
                  } else if (item.onPress) {
                    item.onPress();
                  }
                }}
              >
                <View className="w-10 h-10 bg-white/10 rounded-full items-center justify-center mr-4">
                  <Image
                    source={item.icon}
                    className="w-5 h-5"
                    tintColor="#A8B5DB"
                  />
                </View>

                <View className="flex-1">
                  <Text className="text-white text-base font-medium">
                    {item.title}
                  </Text>
                  <Text className="text-white/50 text-sm">{item.subtitle}</Text>
                </View>

                <Image
                  source={icons.arrow}
                  className="w-4 h-4"
                  tintColor="#A8B5DB"
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Preferences */}
          <View className="bg-black/30 rounded-3xl p-4 mb-6 border border-white/10">
            <Text className="text-white text-lg font-bold mb-4 px-2">
              Preferences
            </Text>

            <TouchableOpacity
              className="flex-row items-center justify-between p-4 rounded-2xl mb-2 bg-white/5"
              onPress={() => togglePreference("darkMode")}
            >
              <Text className="text-white text-base">Dark Mode</Text>
              <View
                className={`w-12 h-6 rounded-full p-1 ${
                  preferences.darkMode ? "bg-blue-500" : "bg-gray-400"
                }`}
              >
                <View
                  className={`w-4 h-4 bg-white rounded-full transition-all ${
                    preferences.darkMode ? "ml-auto" : ""
                  }`}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-between p-4 rounded-2xl mb-2 bg-white/5"
              onPress={() => togglePreference("notifications")}
            >
              <Text className="text-white text-base">Notifications</Text>
              <View
                className={`w-12 h-6 rounded-full p-1 ${
                  preferences.notifications ? "bg-blue-500" : "bg-gray-400"
                }`}
              >
                <View
                  className={`w-4 h-4 bg-white rounded-full transition-all ${
                    preferences.notifications ? "ml-auto" : ""
                  }`}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-between p-4 rounded-2xl bg-white/5"
              onPress={() => togglePreference("autoplayTrailers")}
            >
              <Text className="text-white text-base">Auto-play Trailers</Text>
              <View
                className={`w-12 h-6 rounded-full p-1 ${
                  preferences.autoplayTrailers ? "bg-blue-500" : "bg-gray-400"
                }`}
              >
                <View
                  className={`w-4 h-4 bg-white rounded-full transition-all ${
                    preferences.autoplayTrailers ? "ml-auto" : ""
                  }`}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* Support & About */}
          <View className="bg-black/30 rounded-3xl p-4 border border-white/10">
            <Text className="text-white text-lg font-bold mb-4 px-2">
              Support & About
            </Text>

            {supportItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row items-center justify-between p-4 rounded-2xl mb-2 bg-white/5 active:bg-white/10"
                onPress={item.onPress}
              >
                <Text className="text-white text-base">{item.title}</Text>
                <Image
                  source={icons.arrow}
                  className="w-4 h-4"
                  tintColor="#A8B5DB"
                />
              </TouchableOpacity>
            ))}

            {/* Logout Button */}
            <TouchableOpacity
              className="mt-4 p-4 bg-red-500/20 rounded-2xl border border-red-500/30"
              onPress={handleSignOut}
            >
              <Text className="text-red-400 text-base font-medium text-center">
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
