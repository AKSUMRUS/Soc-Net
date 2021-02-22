import React, {useState} from "react";
import {Button, Pressable, ScrollView, Text, TextInput, View} from "react-native";

const table=[
    {
        "col1": "5 рублей",
        "col2": "15 рублей",
        "col3": "25 человек",
        "col4": "35 человек",
        "col5": "45 человек",
    },
    {
        "col1": "5 рублей",
        "col2": "15 рублей",
        "col3": "25 человек",
        "col4": "35 человек",
        "col5": "45 человек",
    },
    {
        "col1": "5 рублей",
        "col2": "15 рублей",
        "col3": "25 человек",
        "col4": "35 человек",
        "col5": "45 человек",
    },
    {
        "col1": "5 рублей",
        "col2": "15 рублей",
        "col3": "25 человек",
        "col4": "35 человек",
        "col5": "45 человек",
    },
    {
        "col1": "5 рублей",
        "col2": "15 рублей",
        "col3": "25 человек",
        "col4": "35 человек",
        "col5": "45 человек",
    }
];


const TableHeaderContent = ({title}) => {
    return (<View style={{margin:20, borderWidth: 5}}>
                <Text style={{margin:2, color: '#FFFFFF'}}>{title}</Text>
            </View>
    )
}

const TableCellContent = ({title}) => {
    return (<View style={{margin: 0, borderWidth: 3}}>
            <Text style={{margin: 0, color: '#FFFFFF'}}>{title}</Text>
        </View>
    )
}

const TableColl = ({onPress,children}) => {
    return (
        <ScrollView horizontal>
            <Pressable onPress={onPress}>
                <Text style={{margin: 5}}>{children}</Text>
            </Pressable>
        </ScrollView>
    )
}

const TableRow = ({row,cols, header = false, onPressCell}) => {
    const Content = header ? TableHeaderContent : TableCellContent;

    const onPress = (index,text, key) => () => {
        onPressCell(index,text,key)
    }

    return (
        <View>
            <ScrollView horizontal>
                {cols.map((colKey,index) => (
                    <TableColl style={{padding: 1,margin: 1}} key={index} onPress={onPress(index, row[colKey], colKey)}>
                        <Content style={{margin: 1}} title={row[colKey]}/>
                        {/*<Content style={{margin: 10}} title={row[colKey]}/>*/}
                        {/*<Content style={{margin: 10}} title={row[colKey]}/>*/}
                    </TableColl>
                ))}
            </ScrollView>
        </View>
    )
}

export const EditTable = () => {

    const [value, setValue] = useState(0);
    const [row, setRow] = useState(0);
    const [key, setKey] = useState(0);
    const [cell, setCell] = useState(0);
    const cols=Object.keys(table[0]);

    const onPressCell = row => (cell, text, key) => {
        setValue(text)
        setRow(row)
        setKey(key)
        setCell(cell)
        console.log({row,cell,text,key})
    }

    const onChangeValue = (text) => {
        setValue(text)
    }

    const onPressOK = () => {
        //console.log('GOOD',{ row,cell,text,key})
        table[row][key] = value
 //       table[row][cell] = value
    }

    return (
        <View style={{marginBottom: 130}}>
            <View style={{marginTop: 0}}>
                <ScrollView>
                    <ScrollView horizontal>
                        <View >
                            {[...table,...table,...table,...table,...table,...table,...table,...table,...table,...table,...table].map((row,index)=>{
                                return (
                                    <TableRow key={index}
                                          row={row}
                                          cols={cols}
                                          header={index===0}
                                          onPressCell={onPressCell(index)}/>
                                )
                            })}
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
            <View>
                <TextInput
                    value={value}
                    onChangeText={onChangeValue}/>

                <Button title={'OK'} onPress={onPressOK}/>
            </View>
        </View>
    )

}
