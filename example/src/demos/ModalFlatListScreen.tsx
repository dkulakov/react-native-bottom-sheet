import {
  Button,
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import { useState } from 'react';
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

const TABLET_WIDTH = 600;

export const ModalFlatListScreen = () => {
  const [index, setIndex] = useState(0);
  const sheetBottomPadding = useSheetBottomPadding();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const maxLength = Math.max(windowWidth, windowHeight);
  const isTablet = maxLength >= TABLET_WIDTH;

  return (
    <DemoScreen
      title="Modal with FlatList"
      sheet={
        <ModalBottomSheet
          index={index}
          detents={[0, '50%', '100%']}
          onIndexChange={setIndex}
          scrimColor={MODAL_SCRIM_COLOR}
          surface={
            <SheetBackground
              style={[
                StyleSheet.absoluteFill,
                {
                  width: isTablet ? TABLET_WIDTH : '100%',
                  marginHorizontal: isTablet
                    ? (windowWidth - TABLET_WIDTH) / 2
                    : 0,
                },
              ]}
            />
          }
        >
          <View
            style={{
              flex: 1,
              width: isTablet ? TABLET_WIDTH : '100%',
              marginHorizontal: isTablet ? (windowWidth - TABLET_WIDTH) / 2 : 0,
            }}
          >
            <SheetHeader
              title="Modal with FlatList"
              onClose={() => setIndex(0)}
            />
            <FlatList
              data={DATA}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingBottom: sheetBottomPadding }}
              renderItem={({ item, index: itemIndex }) => (
                <ListRow item={item} index={itemIndex} />
              )}
            />
          </View>
        </ModalBottomSheet>
      }
    >
      <Button title="Open sheet" onPress={() => setIndex(1)} />
    </DemoScreen>
  );
};
