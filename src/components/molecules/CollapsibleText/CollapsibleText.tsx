import { FC, useState, useRef } from 'react';
import { StyleSheet, LayoutChangeEvent, TouchableOpacity } from 'react-native';
import { Div, Text, TextProps } from 'react-native-magnus';
import { CollapsibleTextProps } from './types';
import { IconSvg } from '~/components/atoms';

const styles = StyleSheet.create({
  fullTextWrapper: {
    opacity: 0,
    position: 'absolute',
    zIndex: -1,
    left: 0,
    top: 0,
  },
  viewMoreText: {
    color: 'blue',
  },
  transparent: {
    opacity: 0,
    position: 'absolute',
  },
});

const CollapsibleText: FC<CollapsibleTextProps> = ({
  children,
  numberOfLines,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowMore, setShouldShowMore] = useState(false);
  const trimmedTextHeight = useRef<number | null>(null);
  const fullTextHeight = useRef<number | null>(null);

  const onLayoutTrimmedText = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    trimmedTextHeight.current = height;
    if (trimmedTextHeight.current && fullTextHeight.current) {
      setShouldShowMore(trimmedTextHeight.current < fullTextHeight.current);
    }
  };

  const onTextLayout = (event: any) => {
    fullTextHeight.current = event.nativeEvent.lines.reduce(
      (height: number, line: any) => height + line.height,
      0,
    );
    if (trimmedTextHeight.current && fullTextHeight.current) {
      setShouldShowMore(trimmedTextHeight.current < fullTextHeight.current);
    }
  };

  const handlePress = () => setIsExpanded(!isExpanded);

  const defaultProps: TextProps = {
    textAlign: 'justify',
    variant: 'medium',
    color: 'secondary.pinkLight',
  };

  const renderButton = (text: string) => (
    <Div alignItems="center">
      <TouchableOpacity onPress={handlePress}>
        <Div flexDir="row" p="md" alignItems="center">
          <Text mr="sm" color="secondary.textOpaque">
            {text}
          </Text>
          <IconSvg
            name="chevronDown"
            transform={[{ rotate: isExpanded ? '180deg' : '0deg' }]}
            stroke="secondary.textOpaque"
          />
        </Div>
      </TouchableOpacity>
    </Div>
  );

  return (
    <Div p="lg">
      <Div style={isExpanded ? styles.transparent : {}}>
        <Text
          {...defaultProps}
          onLayout={onLayoutTrimmedText}
          numberOfLines={numberOfLines}>
          {children}
        </Text>
        {shouldShowMore && !isExpanded && renderButton('Show More')}
      </Div>
      {!isExpanded && (
        <Div style={styles.fullTextWrapper}>
          <Text {...defaultProps} onTextLayout={onTextLayout}>
            {children}
          </Text>
        </Div>
      )}
      {isExpanded && (
        <Div>
          <Text {...defaultProps}>{children}</Text>
          {renderButton('Show less')}
        </Div>
      )}
    </Div>
  );
};

export { CollapsibleText };
