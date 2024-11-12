import { View } from "react-native";
import WebView from "react-native-webview";

interface SvgWebViewProps {
 svgContent: string;
 height?: number;
}

const SvgWebView: React.FC<SvgWebViewProps> = ({ svgContent, height = 200 }) => {
 const htmlContent = `
<html>
  <head>
   <style>
    body {
     margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #f0f0f0;
         }
    svg {
     width: 100%;
    height: 100%;
         }
   </style>
  </head>
  <body>
   ${svgContent}
  </body>
 </html>
 `;

 return (
  <View style={{ height, marginBottom: 20 }}>
   <WebView
    originWhitelist={['*']}
    source={{ html: htmlContent }}
    javaScriptEnabled={true}
    domStorageEnabled={true}
   />
  </View>
 );
};

export default SvgWebView