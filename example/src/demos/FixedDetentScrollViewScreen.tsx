import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import { ModalBottomSheet } from '@swmansion/react-native-bottom-sheet';

import {
  DATA,
  DemoScreen,
  ListRow,
  MODAL_SCRIM_COLOR,
  SheetBackground,
  SheetHeader,
  useSheetBottomPadding,
} from '../demoShared';

const FIXED_DETENT = 500;

export const FixedDetentScrollViewScreen = () => {
  const [index, setIndex] = useState(0);
  const sheetBottomPadding = useSheetBottomPadding();

  return (
    <DemoScreen
      title="Fixed detent ScrollView"
      sheet={
        <ModalBottomSheet
          index={index}
          detents={[0, FIXED_DETENT]}
          onIndexChange={setIndex}
          scrimColor={MODAL_SCRIM_COLOR}
          surface={<SheetBackground style={StyleSheet.absoluteFill} />}
        >
          <SheetHeader
            title="Fixed detent ScrollView"
            onClose={() => setIndex(0)}
          />
          <ScrollView
            contentContainerStyle={{ paddingBottom: sheetBottomPadding }}
          >
            {DATA.map((item, itemIndex) => (
              <ListRow key={item.id} item={item} index={itemIndex} />
            ))}
          </ScrollView>
        </ModalBottomSheet>
      }
    >
      <Button title="Open sheet" onPress={() => setIndex(1)} />
      <Text>detents: [{`0, ${FIXED_DETENT}`}]</Text>
      <Text>
        Scroll the list to the end: Item {DATA.length} should be reachable.
      </Text>
    </DemoScreen>
  );
};
