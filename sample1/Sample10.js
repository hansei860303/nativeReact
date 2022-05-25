import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import {Sample09} from './src/Sample09';

export default function App() {
    return(
      <PaperProvider>
        <Sample09 />
      </PaperProvider>
    );
}