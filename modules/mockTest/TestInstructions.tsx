import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import useTest from './customHooks/useTest';
import SvgWebView from '../../components/SvgWebView';
import WebView from 'react-native-webview';
import Katex from 'react-native-katex';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';



const TestInstructions: React.FC<{ route: any }> = ({ route }) => {
  const { selectedTest } = route.params;
  const { handleInstructionStart } = useTest()
  const [questions, setQuestions] = useState<any>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://192.168.0.101:9721/nodeapi/question/render-latex');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuestions(data?.questions);
      } catch (err) {
        console.error('Error fetching questions:', err);
      }
    };
    fetchQuestions();
  }, []);

  console.log(questions)
  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        source={{ html: questions?.svg }} 
        style={{ flex: 1 }}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     // padding: 20,
//   },
//   button: {
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//     marginHorizontal: 20,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   katex: {
//     marginBottom: 20,
//   },
// });

{/* <View>
      {questions?.map((item:any)=>{
        return(
          <SvgWebView svgContent={item?.svg}/>
        )
      })}
    </View> */}

export default TestInstructions















{/* <MathJaxSvg
      fontSize={16}
      color="#000000"
      fontCache={true}
      style={{flexWrap: 'wrap'}}
    >
      {`
      <div>
    <p>When \\(a \\ne 0\\), there are <u>two solutions</u> to \\(ax^2 + bx + c = 0\\) <span style="color:red;">and</span> they are $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$</p>
    <b>In-line Mathematics</b><br/><p>Finally, while display equations look good for a page of samples, the ability to mix math <mark>and text in a paragraph is also important.</mark><br/><b>This expression \\(\\sqrt{3x-1}+(1+x)^2\\) is an <span style="color:red;font-style:italic;">example of an inline equation</span>.</b>As you see, MathJax equations can be used this way as well, without unduly disturbing the <s>spacing between lines</s>.</p>
    <span><table><tr><th>Company</th><th>Contact</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td></tr></table></span>
    </div>
  `}
    </MathJaxSvg> */}


// <TouchableOpacity
// style={styles.button}
// onPress={() => { handleInstructionStart(selectedTest) }}
// >
// <Text
//   style={styles.buttonText}
// >
//   Start Test
// </Text>
// </TouchableOpacity>



{/* <View style={{ flex: 1, padding: 10 }}>
        {questions?.map((item: any, index: number) => {
          return (
            <WebView
              key={index}
              originWhitelist={['*']}
              source={{ html: item?.htmlContent }}
              javaScriptEnabled={true}  // Enable JavaScript for KaTeX rendering
              startInLoadingState={true}
              scalesPageToFit={true}    // Ensure content scales to fit on the mobile screen
            />
          );
        })}
      </View> */}