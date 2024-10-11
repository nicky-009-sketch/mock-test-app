import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

const convertStringToTable = (dataString: any) => {
 const rows = dataString.split('\n');
 const headers = rows[0].split(',');

 const tableData = rows.slice(1).map((row: any) => {
  const values = row.split(',');
  return headers.reduce((obj: any, header: any, index: any) => {
   obj[header.trim()] = values[index]?.trim() || '';
   return obj;
  }, {});
 });

 return tableData;
};

const TextTable: React.FC<any> = ({ text }) => {
 // const lines = text.split('\n');
 const lines = text.split('\n')?.map((line:any) => line.trim())?.filter((line:any) => line);

 // Identify the first line that looks like a table header (contains commas)
 const headerIndex = lines.findIndex((line: any) => line.includes(','));

 // Extract text above the table
 const aboveText = lines.slice(0, headerIndex).join('\n\n');

 // Extract data lines for the table
 const dataLines = lines.slice(headerIndex).filter((line: any) => line.trim() !== '');

 // Find footer text (lines that do not contain commas)
 const footerIndex = dataLines.findIndex((line: any) => !line.includes(','));
 const dataString = footerIndex === -1 ? dataLines.join('\n') : dataLines.slice(0, footerIndex).join('\n');

 // Extract footer text
 const belowText = footerIndex === -1 ? '' : dataLines.slice(footerIndex).join('\n\n');

 // Convert the data string to table data
 const tableData = convertStringToTable(dataString);

 return (
  <ScrollView style={styles.container}>
   {aboveText && <Text style={styles.text}>{aboveText}</Text>}
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={styles.table}>
     <View style={styles.row}>
      {Object.keys(tableData[0] || {}).map((header, index) => (
       <Text key={index} style={styles.header}>{header}</Text>
      ))}
     </View>
     {tableData.map((row: any, index: any) => (
      <View key={index} style={styles.row}>
       {Object.values(row).map((cell: any, cellIndex) => (
        <Text key={cellIndex} style={styles.cell}>{cell}</Text>
       ))}
      </View>
     ))}
    </View>
   </ScrollView>
   {belowText && <Text style={styles.text}>{belowText}</Text>}
  </ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {

 },
 text: {
  fontWeight:400,
  fontSize:16
 },
 table: {
  borderLeftWidth: 1,
  borderTopWidth: 1,
  borderColor: '#ccc',
  width: 500,
  marginTop:20,
  marginBottom:20
 },
 row: {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
 },
 header: {
  fontWeight: 'bold',
  padding: 10,
  backgroundColor: '#f2f2f2',
  flex: 1,
  borderRightWidth: 1,
  borderRightColor: '#ccc',
 },
 cell: {
  padding: 10,
  flex: 1,
  borderRightWidth: 1,
  borderRightColor: '#ccc',
 },
});

export default TextTable