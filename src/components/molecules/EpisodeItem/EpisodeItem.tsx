import { EpisodeItemProps } from './types';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Collapse, Div, Text } from 'react-native-magnus';
import { TranslationsKeys } from '~/i18n';
import { EpisodeBody } from '../EpisodeBody';

const EpisodeItem: FC<EpisodeItemProps> = ({ episodeInfo, episodeNumber }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapse onChange={() => setIsOpen(!isOpen)} bg="transparent">
      <Collapse.Header
        borderBottomWidth={0.3}
        borderColor="secondary.textOpaque"
        bg="transparent"
        active
        px="none"
        py="xl">
        <Div flexDir="row" justifyContent="space-between">
          <Text>
            {t(TranslationsKeys.EpisodesCollapseEpisode, {
              episodeNumber: episodeNumber,
            })}
          </Text>
        </Div>
      </Collapse.Header>
      <Collapse.Body px="none" pt="md">
        <EpisodeBody episode={episodeInfo} />
      </Collapse.Body>
    </Collapse>
  );
};

export { EpisodeItem };
