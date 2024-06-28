import { RoomType } from '../enum/scene';

export const floatButton = [
  {
    id: '1',
    icon: '/icons/common/full-screen.svg',
    name: 'full-screen',
    isShowHallWay: true,
    roomShowed: [
      RoomType.EXAMINATION,
      RoomType.TESTING,
      RoomType.VIP_TESTING,
      RoomType.STUDY,
      RoomType.MATHEMETIC_EXPERIENCE,
      RoomType.MATHEMETIC_HISTORY,
    ],
  },
  {
    id: '2',
    icon: '/icons/common/infomation.svg',
    name: 'information',
    isShowHallWay: false,
    roomShowed: [
      RoomType.EXAMINATION,
      RoomType.TESTING,
      RoomType.VIP_TESTING,
      RoomType.STUDY,
    ],
  },
  {
    id: '3',
    icon: '/icons/common/viewer.svg',
    name: 'viewer',
    isShowHallWay: false,
    roomShowed: [RoomType.STUDY],
  },
  {
    id: '4',
    icon: '/icons/common/questions.svg',
    name: 'instruct',
    isShowHallWay: true,
    roomShowed: [
      RoomType.EXAMINATION,
      RoomType.TESTING,
      RoomType.VIP_TESTING,
      RoomType.STUDY,
      RoomType.MATHEMETIC_EXPERIENCE,
      RoomType.MATHEMETIC_HISTORY,
    ],
  },
];
