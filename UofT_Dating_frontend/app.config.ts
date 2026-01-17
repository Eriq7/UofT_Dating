import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'UofT Dating',
  slug: 'uoft-dating',
  version: "32.0.0",
  orientation: "portrait",
  icon: './assets/icon.png',
  newArchEnabled: true,

  updates: {
    fallbackToCacheTimeout: 0
  },

  assetBundlePatterns: [
    "**/*"
  ],

  androidNavigationBar: {
    barStyle: "light-content",
    backgroundColor: '#002A5C'
  },

  extra: {
    eas: {
      projectId: "a756e088-c07a-4034-b9c5-51f50139ac21"
    },

    // ===== 本地后端地址（与你的 docker compose 对齐）=====
    apiUrl: "http://localhost:5001",
    chatUrl: "ws://localhost:5443",
    imagesUrl: "http://localhost:9090/s3-mock-bucket",
    audioUrl: "http://localhost:9090/s3-mock-audio-bucket",
    statusUrl: "http://localhost:8081",
    inviteUrl: "http://localhost:5001/invite",
    partnerUrl: "http://localhost:5001/partner",

    webVersion: "local",
    tenorApiKey: "",
    notificationIconUrl: "",
    notificationSoundUrl: "",
  },

  web: {
    favicon: "./assets/favicon.png"
  },

  ios: {
    bundleIdentifier: "app.uoftdating",
    supportsTablet: false,
    associatedDomains: ["applinks:get.duolicious.app"],
    appStoreUrl: "https://apps.apple.com/us/app/duolicious-dating-app/id6499066647",
    infoPlist: {
      NSMicrophoneUsageDescription: "This app uses the microphone to capture audio for updating and sharing on your profile.",
      NSCameraUsageDescription: "This app uses the camera to capture images for verifying your profile.",
      ITSAppUsesNonExemptEncryption: false
    },
  },

  android: {
    googleServicesFile: "./google-services.json",
    package: "app.uoftdating",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#002A5C"
    },
    intentFilters: [
      {
        action: "VIEW",
        autoVerify: true,
        data: [
          {
            scheme: "https",
            host: "get.duolicious.app"
          }
        ],
        category: ["BROWSABLE", "DEFAULT"]
      }
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=app.duolicious",
    blockedPermissions: [
      'android.permission.READ_MEDIA_IMAGES',
      'android.permission.READ_MEDIA_VIDEO',
    ],
  },

  plugins: [
    "expo-image-picker",
    "expo-secure-store",
    [
      "expo-notifications",
      {
        icon: "./assets/notification.png",
        color: "#002A5C",
        sounds: [
          "./assets/audio/notification.mp3"
        ]
      }
    ],
    [
      "expo-splash-screen",
      {
        backgroundColor: "#002A5C",
        image: "./assets/splash.png",
        imageWidth: 300,
      }
    ]
  ],
};

export default config;
