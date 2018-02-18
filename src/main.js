// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Result, Round } from './shared';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

type Props = {};

const list1 = new Round(3, 3, 20);
list1.results[0] = 10;
list1.results[1] = 10;
list1.results[2] = 'X';
list1.results[3] = 9;

const list2 = new Round(4, 23, 20);
list2.results[3] = 9;

const res = new Result('test', false, 'INDOOR');
res.rounds = [list1, list2];
res.notes = 'asd';

const ResultContainer = ({ result }: { result: Result }) => (
    <View>
        <Text>{result.title}</Text>
    </View>
);

export default class Main extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ResultContainer result={res} />
            </View>
        );
    }
}
