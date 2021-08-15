import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
// import Envelope from "./assets/Envelope.svg";
import { SvgXml } from "react-native-svg";

const App = () => {
    const EnvelopeOpen = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 5.25L12 13.5L3 5.25" stroke="#191F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="#191F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.3638 12L3.23145 18.538" stroke="#191F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.7687 18.5381L13.6362 12" stroke="#191F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
    const Envelope = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9V18.75C3 18.9489 3.07902 19.1397 3.21967 19.2803C3.36032 19.421 3.55109 19.5 3.75 19.5H20.25C20.4489 19.5 20.6397 19.421 20.7803 19.2803C20.921 19.1397 21 18.9489 21 18.75V9L12 3L3 9Z" stroke="#191F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.3638 14.25L3.23145 19.288" stroke="#191F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.7687 19.288L13.6362 14.2499" stroke="#191F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 9L13.6364 14.25H10.3636L3 9" stroke="#191F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
    const EnvelopeSimple = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 5.25L12 13.5L3 5.25" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`;
    const EnvelopeSimpleOpen = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9V18.75C3 18.9489 3.07902 19.1397 3.21967 19.2803C3.36032 19.421 3.55109 19.5 3.75 19.5H20.25C20.4489 19.5 20.6397 19.421 20.7803 19.2803C20.921 19.1397 21 18.9489 21 18.75V9L12 3L3 9Z" stroke="#191F33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 9L13.6364 14.25H10.3636L3 9" stroke="#191F33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`;
    return (
        <View
            style={{
                justifyContent: "space-evenly",
                flex: 1,
            }}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 20,
                    paddingRight: 20,
                }}
            >
                <Text style={{ fontSize: 20 }}>SGV</Text>
                <View style={{ flexDirection: "row" }}>
                    <SvgXml xml={Envelope} width={50} height={50} />
                    <SvgXml xml={EnvelopeOpen} width={50} height={50} />
                    <SvgXml
                        xml={EnvelopeSimple}
                        width={50}
                        height={50}
                        // style={{ borderColor: "red" }}
                        // color="red"
                        stroke={"red"}
                    />
                    <SvgXml xml={EnvelopeSimpleOpen} width={50} height={50} />
                    <SvgXml xml={Envelope} width={50} height={50} />
                    <SvgXml xml={EnvelopeOpen} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimple} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimpleOpen} width={50} height={50} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <SvgXml xml={Envelope} width={50} height={50} />
                    <SvgXml xml={EnvelopeOpen} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimple} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimpleOpen} width={50} height={50} />
                    <SvgXml xml={Envelope} width={50} height={50} />
                    <SvgXml xml={EnvelopeOpen} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimple} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimpleOpen} width={50} height={50} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <SvgXml xml={Envelope} width={50} height={50} />
                    <SvgXml xml={EnvelopeOpen} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimple} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimpleOpen} width={50} height={50} />
                    <SvgXml xml={Envelope} width={50} height={50} />
                    <SvgXml xml={EnvelopeOpen} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimple} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimpleOpen} width={50} height={50} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <SvgXml xml={Envelope} width={50} height={50} />
                    <SvgXml xml={EnvelopeOpen} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimple} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimpleOpen} width={50} height={50} />
                    <SvgXml xml={Envelope} width={50} height={50} />
                    <SvgXml xml={EnvelopeOpen} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimple} width={50} height={50} />
                    <SvgXml xml={EnvelopeSimpleOpen} width={50} height={50} />
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{ fontSize: 20 }}>PNG</Text>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        source={require("./assets/Envelope.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimple.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimpleOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/Envelope.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimple.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimpleOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        source={require("./assets/Envelope.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimple.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimpleOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/Envelope.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimple.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimpleOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        source={require("./assets/Envelope.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimple.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimpleOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/Envelope.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimple.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimpleOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        source={require("./assets/Envelope.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimple.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimpleOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/Envelope.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimple.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                    <Image
                        source={require("./assets/EnvelopeSimpleOpen.png")}
                        resizeMode={"contain"}
                        style={{ width: 50, height: 50 }}
                    />
                </View>
            </View>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({});
