import { shallowMount, flushPromises } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AboutView from '@/views/AboutView.vue'
import axios from 'axios'

vi.mock('axios')

describe('AboutView.vue', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('fetches data and displays it in a table', async () => {
    const mockData = [
      {
        id: "0000",
        full_name: "自學地圖",
        website: "https://map.alearn.org.tw",
        main_category: "自學入口頁",
        maintainer: "Bestian Tang",
        maintainer_email: "bestian@alearn.org.tw",
        description: "非學校型態實驗教育入口頁，含高中自學申請流程，適合自學新手"
      },
      {
        id: "0001",
        full_name: "自由數學",
        website: "https://math.alearn.org.tw",
        main_category: "自由數學",
        maintainer: "Bestian Tang",
        maintainer_email: "bestian@alearn.org.tw",
        description: "自學數學的開發教材和學習地圖等資源匯整"
      },
      {
        id: "0002",
        full_name: "自學2.0",
        website: "https://we.alearn.org.tw",
        main_category: "自學2.0",
        maintainer: "Drago Lee",
        maintainer_email: "leechiuhui@alearn.org.tw",
        description: "自學2.0是一個公益尋友平台，免付費、無業配廣告，旨在透過地理位置、個人興趣及專長來協助用戶尋找朋友。平台的核心功能「互助旗」提供公開的自我介紹，讓人們在見面前能初步了解和認識對方。"
      }
    ]

    vi.mocked(axios.get).mockResolvedValue({ data: mockData })

    const wrapper = shallowMount(AboutView)

    await flushPromises()

    // 檢查是否調用了正確的 API
    expect(axios.get).toHaveBeenCalledWith('https://members-backend.alearn13994229.workers.dev/api/projects')

    // 檢查返回的數據結構
    expect(Array.isArray(wrapper.vm.data)).toBe(true)
    expect(wrapper.vm.data.length).toBeGreaterThan(0)
    expect(wrapper.vm.data[0]).toHaveProperty('full_name')
    expect(wrapper.vm.data[0]).toHaveProperty('website')

    // 檢查是否渲染了表格
    const table = wrapper.find('table')
    expect(table.exists()).toBe(true)

    // 檢查表頭
    const tableHeaders = wrapper.findAll('th')
    expect(tableHeaders.length).toBe(7)
    expect(tableHeaders[0].text()).toBe('ID')
    expect(tableHeaders[1].text()).toBe('全名')
    expect(tableHeaders[2].text()).toBe('網站')
    expect(tableHeaders[3].text()).toBe('主要類別')
    expect(tableHeaders[4].text()).toBe('維護者')
    expect(tableHeaders[5].text()).toBe('電子郵件信箱')
    expect(tableHeaders[6].text()).toBe('描述')

    // 檢查表格行數
    const tableRows = wrapper.findAll('tbody tr')
    expect(tableRows.length).toBe(mockData.length)

    // 檢查第一行的內容
    const firstRowCells = tableRows[0].findAll('td')
    expect(firstRowCells[0].text()).toBe('0000')
    expect(firstRowCells[1].text()).toBe('自學地圖')
    expect(firstRowCells[2].find('a').attributes('href')).toBe('https://map.alearn.org.tw')
    expect(firstRowCells[3].text()).toBe('自學入口頁')
    expect(firstRowCells[4].text()).toBe('Bestian Tang')
    expect(firstRowCells[5].text()).toBe('bestian@alearn.org.tw')
    expect(firstRowCells[6].text()).toBe('非學校型態實驗教育入口頁，含高中自學申請流程，適合自學新手')
  })
})
