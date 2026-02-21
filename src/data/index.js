// 博客标签配置
export const blogTags = [
  { id: 'all', name: '全部', color: '#e6c84b' },
  { id: 'embedded', name: '嵌入式', color: '#7cb342' },
  { id: 'ai', name: '人工智能', color: '#64b5f6' }
]

// 示例博客数据
export const articles = [
  {
    id: 1,
    title: 'ESP32 环境搭建与第一个程序',
    date: '2025-01-15',
    tags: ['embedded'],
    excerpt: '记录 ESP32 开发环境配置过程，以及如何编写第一个 Blink 程序...'
  },
  {
    id: 2,
    title: '强化学习基础概念入门',
    date: '2025-01-20',
    tags: ['ai'],
    excerpt: '介绍强化学习的基本概念，包括 Agent、Environment、State、Action 等核心要素...'
  },
  {
    id: 3,
    title: 'ESP32 WiFi 连接与网络通信',
    date: '2025-02-01',
    tags: ['embedded'],
    excerpt: '讲解 ESP32 如何连接 WiFi，以及实现简单的 HTTP 请求...'
  },
  {
    id: 4,
    title: 'Q-Learning 算法实现',
    date: '2025-02-10',
    tags: ['ai'],
    excerpt: '手把手实现经典的 Q-Learning 算法，并用 Python 编写代码示例...'
  }
]

// 项目数据
export const projects = [
  {
    id: 1,
    title: '智能温湿度监控系统',
    description: '基于 ESP32 和 DHT11 传感器实现的温湿度监测系统，支持数据上报和远程查看',
    tech: ['ESP32', 'DHT11', 'WiFi', 'JSON'],
    github: 'https://github.com/lao-biebiebie',
    demo: null
  },
  {
    id: 2,
    title: '强化学习机械臂控制',
    description: '使用深度强化学习算法控制机械臂完成抓取任务',
    tech: ['Python', 'PyTorch', 'OpenAI Gym'],
    github: 'https://github.com/lao-biebiebie',
    demo: null
  },
  {
    id: 3,
    title: 'ESP32 物联网网关',
    description: '支持多种传感器接入的物联网网关，实现数据聚合与上传',
    tech: ['ESP32', 'MQTT', 'Node-RED'],
    github: 'https://github.com/lao-biebiebie',
    demo: null
  }
]
