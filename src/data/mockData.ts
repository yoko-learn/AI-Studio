import { Slide, ServiceItem, NewsItem } from '../types';

export const HERO_SLIDES: Slide[] = [
  {
    id: 'slide-1',
    badge: '全新智能 2.0 系統發表',
    title: '數位轉型，驅動企業未來無限可能',
    subtitle: '為您的企業提供最全面、彈性且高安全性的雲端架構與 AI 智能解決方案，降低維運成本，共創商業新藍圖。',
    primaryCta: '免費體驗諮詢',
    secondaryCta: '了解技術規格',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', // Modern skyscraper downtown sunset
  },
  {
    id: 'slide-2',
    badge: '雲端多活架構升級',
    title: '99.99% 高可用彈性多雲架構',
    subtitle: '打破單一雲端綁定，結合自動跨區域容災備援與動態負載平衡，讓您的企業服務隨時保持最高效能運轉。',
    primaryCta: '立即預約架構健檢',
    secondaryCta: '查看架構白皮書',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', // Global cloud connectivity
  },
  {
    id: 'slide-3',
    badge: '新一代企業 AI 引擎',
    title: '深度挖掘數據價值，賦能即時智慧決策',
    subtitle: '整合專屬企業級大型語言模型與預測分析管線，從海量商業數據中自動提煉決策洞察，精準提升營運效率 40% 以上。',
    primaryCta: '申請 AI 試行專案',
    secondaryCta: '探索應用案例',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop', // AI tech chips and futuristic lights
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'cloud-migration',
    title: '雲端託管與移轉',
    description: '安全、穩定、高彈性的多雲架構設計，協助企業平穩轉移至雲端，實現不中斷服務與自動負載平衡擴充功能。',
    iconName: 'cloud',
    features: [
      '零停機平滑無縫移轉機制',
      '多雲混合環境自動化調度（AWS / GCP / Azure）',
      '微服務架構容器化（Kubernetes / Docker）升級',
      '7x24 小時主動式雲端監控與智慧告警',
    ],
    specs: [
      { label: 'SLA 可用性', value: '99.99%' },
      { label: '平均移轉週期', value: '縮短 45%' },
      { label: '運算成本節省', value: '最高達 35%' },
    ],
  },
  {
    id: 'ai-data-analytics',
    title: 'AI 智能數據分析',
    description: '深度挖掘企業沉睡數據，客製化預測模型與智能化圖表，將大數據轉化為高價值的精準決策依據。',
    iconName: 'brain',
    features: [
      '企業私有數據湖與即時 ETL 管線構建',
      '專屬客製化行業 AI 預測模型訓練',
      '智慧商業智慧（BI）動態視覺化儀表板',
      '自然語言資料查詢與智慧報告生成',
    ],
    specs: [
      { label: '預測模型精準度', value: '> 94.8%' },
      { label: '報表生成耗時', value: '由數天縮至秒級' },
      { label: '決策效率提升', value: '超過 3.5 倍' },
    ],
  },
  {
    id: 'security-compliance',
    title: '企業資安與合規',
    description: '全方位安全漏洞掃描、深度防禦部署與定期資安演練健檢，全面守護企業核心智慧財產與客戶機密隱私。',
    iconName: 'shield',
    features: [
      '零信任（Zero Trust）端到端身份與存取控制',
      '次世代 AI 威脅偵測與自動阻斷（XDR / SIEM）',
      '國際資安合規認證輔導（ISO 27001 / SOC 2）',
      '定時自動化滲透測試與資安紅藍軍演練',
    ],
    specs: [
      { label: '威脅回應速度', value: '< 30 秒' },
      { label: '合規通過率', value: '100%' },
      { label: '漏洞防護覆蓋率', value: '99.9%' },
    ],
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    category: '活動訊息',
    date: '2026/03/12',
    title: '受邀參加 2026 數位科技峰會',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop', // Tech stage conference keynote
    summary: '創峰科技技術長於年度數位科技峰會發表「次世代企業多雲混合架構與 AI 算力落地」專題演講，吸引超過 1,200 位業界領袖參與交流。',
    readTime: '3 分鐘閱讀',
    author: '創峰科技 公關部',
    content: [
      '在昨日舉行的「2026 亞太數位科技趨勢峰會」中，創峰科技（ApexTech）技術長受邀擔任主論壇 Keynote 演講嘉賓，以《多雲架構與 AI Agent 在現代企業的深度融合》為題，向來自全球的雲端與資安專家展示創峰最新研發的架構突破。',
      '技術長指出，隨著企業數據量呈指數級增長，單一雲服務已難以滿足多元商業場景。創峰科技自主研發的智慧多雲調度系統，能依據即時負載與電價模型，動態分派微服務節點，為企業節省巨額運算支出。',
      '現場演示中，創峰團隊展示了在數秒內完成跨跨區域雲端負載移轉與 AI 實時故障轉移，獲得現場專家一致高度評價。',
    ],
  },
  {
    id: 'news-2',
    category: '技術分享',
    date: '2026/03/05',
    title: '如何透過零信任安全架構升級',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop', // Cybersecurity digital padlock system security
    summary: '深入探討現代混合辦公環境下，傳統邊界防禦的局限性，以及如何透過「永不信任、始終驗證」的原則構建堅不可摧的企業防線。',
    readTime: '5 分鐘閱讀',
    author: '資安架構團隊',
    content: [
      '遠距與混合辦公模式已成為企業常態，傳統依賴內外網邊界的防禦思維面臨空前挑戰。當員工與終端設備分散在各地，內部網路不再絕對安全。',
      '零信任架構（Zero Trust Architecture）的核心原則在於「永不信任，始終驗證」。創峰科技提出的三步升級法包括：全面實施微隔離（Micro-segmentation）、動態多因子身份認證（MFA）以及基於行為特徵的即時風險評估。',
      '透過引入 AI 輔助的異常流量監控，企業能夠在威脅進入內部橫向移動之前，精準阻斷可疑連接，將潛在損失降至最低。',
    ],
  },
  {
    id: 'news-3',
    category: '企業榮譽',
    date: '2026/02/28',
    title: '創峰科技榮獲傑出創新企業獎',
    imageUrl: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1200&auto=format&fit=crop', // Elegant crystal award trophy
    summary: '創峰科技憑藉在企業雲端解決方案與人工智慧大數據分析領域的持續技術創新與卓越服務品質，榮獲 2026 國家創新科技傑出企業獎。',
    readTime: '2 分鐘閱讀',
    author: '創峰科技 品牌委員會',
    content: [
      '由國家創新科技發展協會主辦的「2026 年度科技領航卓越獎」評選結果出爐，創峰科技（ApexTech）從百餘家參評企業中脫穎而出，榮獲最高殊榮「傑出創新企業獎」。',
      '評審團在評語中特別強調：「創峰科技在多雲管理平台上的自研算法，以及將生成式 AI 高效賦能至傳統製造與零售領域的解決方案，展現出極高的商業價值與技術引領力。」',
      '創峰科技執行長表示：「這座獎項是對全體研發團隊努力的最高肯定。我們將繼續秉持技術創新精神，為更多企業打造堅韌且靈活的數位底座。」',
    ],
  },
  {
    id: 'news-4',
    category: '雲端科技',
    date: '2026/02/14',
    title: '成功協助大型零售商完成多雲移轉',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop', // Server racks in modern datacenter
    summary: '創峰科技技術團隊耗時三個月，協助亞太知名連鎖零售集團完成橫跨 500+ 間門市的核心交易系統雲端遷移，全流程零停機且營運效能提升 60%。',
    readTime: '4 分鐘閱讀',
    author: '解決方案架構處',
    content: [
      '面對日益增長的全通路新零售業務與節慶尖峰流量，該大型零售集團原有的地端機房面臨擴充瓶頸。創峰科技為其量身打造了混合多雲遷移方案。',
      '透過創峰自動化雲端搬遷工具與雙軌並行驗證機制，在維持既有門市收銀與物流系統完全正常運作的前提下，順利將超過 80TB 的歷史會員與交易數據完成同步。',
      '上雲後的第一個大型促銷節日中，系統成功應對了平時 12 倍的尖峰訪問量，整體 API 回應延遲降低了 42%，雲端維護成本亦顯著降低 30%。',
    ],
  },
];
