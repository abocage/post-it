import React from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { Link } from "@react-navigation/native";
import styles from "../styles/styles";
import SignUp from "../components/SignUp";

/**
 * Ecran d'inscription de l'application.
 * @param {*} navigation Si il ya des données de Navigation
 * @returns Un formulaire d'inscription.
 */
export default function SignUpScreen({ navigation }) {
  return (
    <>
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={[styles.container, { marginTop: -150 }]}>
          <Image
            source={require("../assets/register.png")}
            style={{ width: 1380 / 4.5, height: 920 / 4.5 }}
          />
          <Text style={styles.veryTinyText}>Image by storyset on Freepik</Text>
          <SignUp />
          <Text style={styles.tinyText}>
            Déjà un compte ?{" "}
            <Link style={styles.link} to={{ screen: "Connexion" }}>
              Se connecter
            </Link>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
