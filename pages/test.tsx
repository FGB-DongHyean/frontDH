import styles from '@/styles/test.module.css';
import Sidebar from '@/components/common/sidebar';
import menuItems from '@/types/menuItems';
import AdminFrame from '@/components/layout/adminFrame';

export default function Test() {
  const menuItems: menuItems[] = [
    { id: '0', name: '홈', hasDrop: false, dropActive: false, link: '/' },
    {
      id: '1',
      name: '사용자 관리',
      hasDrop: true,
      dropActive: false,
      subItems: [
        {
          id: '1_1',
          name: '사용자 정보',
          link: '/user_info',
        },
        {
          id: '1_2',
          name: '사용자 정보 변경',
          link: '/user_info_change',
        },
      ],
    },
    {
      id: '2',
      name: '팀 관리',
      hasDrop: true,
      dropActive: false,
      subItems: [
        {
          id: '2_1',
          name: '팀 정보',
          link: '/team_info',
        },
      ],
    },
    {
      id: '3',
      name: '프로젝트 관리',
      hasDrop: true,
      dropActive: false,
      subItems: [
        {
          id: '3_1',
          name: '프로젝트 정보',
          link: '/project_info',
        },
      ],
    },
    {
      id: '4',
      name: '커스텀블록 관리',
      hasDrop: true,
      dropActive: false,
      subItems: [
        {
          id: '4_1',
          name: '커스텀블록 정보',
          link: '/customBlock_info',
        },
      ],
    },
    {
      id: '5',
      name: '부품 관리',
      hasDrop: true,
      dropActive: false,
      subItems: [
        {
          id: '5_1',
          name: '부품 정보',
          link: '/tool_info',
        },
      ],
    },
    {
      id: '6',
      name: '발주처 관리',
      hasDrop: true,
      dropActive: false,
      subItems: [
        {
          id: '6_1',
          name: '발주처 정보',
          link: '/client_info',
        },
      ],
    },
    {
      id: '7',
      name: '주문/배송',
      hasDrop: true,
      dropActive: false,
      subItems: [
        {
          id: '7_1',
          name: '주문',
          link: '/order',
        },
        {
          id: '7_2',
          name: '배송',
          link: '/delivery',
        },
      ],
    },
    {
      id: '8',
      name: '문의',
      hasDrop: true,
      dropActive: false,
      subItems: [
        {
          id: '8_1',
          name: '문의 정보',
          link: '/qna_info',
        },
      ],
    },
  ];
  const pageNav = '사용자 관리 > 사용자 정보 > 사용자 상세 정보';

  return (
    <div className={styles.container}>
      <AdminFrame menuItems={menuItems} pageNav={pageNav} />
    </div>
  );
}
