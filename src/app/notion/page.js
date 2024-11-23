'use client';

import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css';

const notion = new NotionAPI();

export default async function NotionPage() {
  try {
    const recordMap = await notion.getPage('1465e927c4a680ccabbaec03618edaab'); // 올바른 페이지 ID 사용
    return (
      <div>
        <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching Notion data:', error);
    return <p>Notion 데이터를 가져오는 중 오류가 발생했습니다.</p>;
  }
}
