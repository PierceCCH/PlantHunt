import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  Button,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import tailwind from "tailwind-rn";
import Svg, { Path } from "react-native-svg";
import * as ImageManipulator from "expo-image-manipulator";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import * as tf from "@tensorflow/tfjs";
import { decodeJpeg } from "@tensorflow/tfjs-react-native";
import { Camera } from "expo-camera";
import { WIDTH } from "./constants";
import { ModelContext } from "./ModelContext";
// import { Button } from "react-native-web";

export default function Home({ navigation }) {
  // COMPONENT VARIABLES
  const [photo, setPhoto] = useState();
  const [status, setStatus] = useState("Waiting for image...");
  const [results, setResults] = useState([]);
  const { model, loading } = useContext(ModelContext);

  // CAMERA VARIABLES
  const cam = useRef();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState("off");
  const [camPermitted, setCamPermitted] = useState(null);

  // COLOR VARIABLES
  const bgColor = " bg-gray-100 ";
  const bgAccent = " bg-gray-300 ";
  const textColor = " text-gray-800 ";
  const textAccent = "text-gray-700";

  useEffect(() => {
    const init = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCamPermitted(status === "granted");
    };
    init();
  }, []);

  useEffect(() => {
    if (photo) {
      const predict = async () => {
        setStatus(() => "Initializing...");
        setResults([]);
        const prediction = await getPrediction(photo);
        setResults(prediction);
        setStatus(() => "Finished.");
      };

      predict();
    } else {
      setStatus("Waiting for image...");
    }
  }, [photo]);

  const getPrediction = async (photo) => {
    try {
      if (!loading) {
        setStatus(() => "Resizing photo...");
        const { uri } = await resizePhoto(photo.uri, [244, 244]);

        setStatus(() => "Converting to tensor3D...");
        const imgB64 = await FileSystem.readAsStringAsync(uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        const imgBuffer = tf.util.encodeString(imgB64, "base64").buffer;
        const raw = new Uint8Array(imgBuffer);
        const tensor = decodeJpeg(raw);

        setStatus(() => "Classifying...");
        const prediction = await model.classify(tensor);
        return prediction;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const pickImage = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setPhoto(result);
    }
  };

  // ImagePicker
  const takePhoto = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setPhoto(result);
    }
  };

  // Expo Cam
  const capturePhoto = async () => {
    if (cam.current) {
      const options = {
        quality: 1,
        base64: true,
        skipProcessing: true,
        onPictureSaved: async (res) => {
          setPhoto(res);
        },
      };
      await cam.current.takePictureAsync(options);
    }
  };

  const resizePhoto = async (uri, size) => {
    const actions = [{ resize: { width: size[0], height: size[1] } }];
    const saveOptions = {
      base64: true,
      format: ImageManipulator.SaveFormat.JPEG,
    };
    return await ImageManipulator.manipulateAsync(uri, actions, saveOptions);
  };

  return (
    <View style={tailwind(`flex flex-1 ${bgColor}`)}>
      {/* Header */}

      {/* Content */}
      <View style={tailwind("flex flex-1")}>
        <View
          style={[tailwind("flex p-2 mt-24"), { width: WIDTH, height: WIDTH }]}
        >
          {photo ? (
            <Image
              style={tailwind(`${bgAccent} flex flex-1 rounded-xl`)}
              source={{ uri: photo.uri }}
            />
          ) : (
            <View
              style={tailwind(
                `${bgAccent} flex flex-1 justify-center overflow-hidden rounded-xl`
              )}
            >
              {camPermitted ? (
                <Camera
                  ref={(ref) => (cam.current = ref)}
                  style={tailwind(`absolute inset-0`)}
                  type={type}
                  flashMode={flashMode}
                  ratio="1:1"
                />
              ) : (
                <Text style={tailwind(`${textColor} text-center`)}>
                  Accept Camera Permission to access
                </Text>
              )}
            </View>
          )}

          {!loading && (
            <View
              style={tailwind(
                "absolute bottom-4 inset-x-4 flex flex-row items-center justify-between"
              )}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setFlashMode(flashMode === "on" ? "off" : "on");
                }}
              >
                {flashMode === "on" ? (
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={tailwind("h-8 w-8 text-gray-200")}
                  >
                    <Path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </Svg>
                ) : (
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={tailwind("h-8 w-8 text-gray-200")}
                  >
                    <Path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </Svg>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  { backgroundColor: "rgba(16,185,129,0.5)" },
                  tailwind("rounded-full p-3"),
                ]}
                onPress={() => {
                  if (photo) {
                    setPhoto(null);
                    setResults([]);
                  } else capturePhoto();
                }}
              >
                {photo ? (
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={tailwind("h-10 w-10 text-white")}
                  >
                    <Path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </Svg>
                ) : (
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={tailwind("h-10 w-10 text-white")}
                  >
                    <Path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <Path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </Svg>
                )}
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7} onPress={pickImage}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={tailwind("h-8 w-8 text-white")}
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <ScrollView style={tailwind("flex h-2/6 px-4 py-2")}>
          <View style={tailwind("flex flex-row items-center justify-between")}>
            <View style={tailwind("flex flex-row")}>
              <Text style={tailwind(`${textColor} font-bold text-xs`)}>
                Status:{" "}
              </Text>
              <Text style={tailwind(`${textColor} text-xs`)}>{status}</Text>
            </View>

            <View style={tailwind("flex flex-row items-center")}>
              <View
                style={tailwind(
                  `h-2 w-2 rounded-full ${
                    loading ? " bg-red-500 " : " bg-green-500 "
                  }`
                )}
              />
              <Text style={tailwind(`${textColor} font-bold text-xs`)}>
                {" "}
                PlantNet:{" "}
              </Text>
              <Text style={tailwind(`${textColor} text-xs`)}>
                {!loading ? "ready" : "loading..."}
              </Text>
            </View>
          </View>

          <View style={tailwind(`flex flex-row justify-center py-2 rounded`)}>
            <Text
              style={tailwind(
                `flex content-center text-center border-r border-gray-400 font-bold ${textColor}`
              )}
            >
              Classname
            </Text>
          </View>

          {results
            ? results.map(({ className }, idx) => (
                <ResultItem
                  key={`result-${idx}`}
                  name={className}
                  //   color={idx % 2 === 0 ? "bg-red-300" : "bg-green-300"}
                  color={bgAccent}
                  textColor={textAccent}
                />
              ))
            : console.log(results)}

          <View style={tailwind("flex h-6  items-center border-solid h-2/3")}>
            <View
              style={tailwind(
                "bg-green-900 w-1/2 text-center text-white items-center justify-center font-bold py-2 px-4 rounded-full"
              )}
            >
              <Button
                title="Log"
                color="#ffffff"
                onPress={() => console.log("h")}
              ></Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

function ResultItem({ name, probability, color = "bg-gray-300", textColor }) {
  return (
    <View
      style={tailwind(
        `flex flex-row ${color} py-2 rounded mt-2 items-center justify-center`
      )}
    >
      <Text
        style={tailwind(
          `${textColor} px-2 flex w-1/2 text-center border-r border-gray-400`
        )}
      >
        {name}
      </Text>
      <Text style={tailwind(`${textColor} px-2 flex w-1/2 text-center`)}>{`${(
        probability * 100
      ).toFixed(2)}%`}</Text>
    </View>
  );
}
