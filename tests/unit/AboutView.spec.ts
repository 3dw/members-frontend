import { shallowMount, flushPromises } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AboutView from '@/views/AboutView.vue'
import axios from 'axios'

vi.mock('axios')

describe('AboutView.vue', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('fetches data and displays it', async () => {
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

    // 檢查數據是否正確設置
    expect(wrapper.vm.data).toEqual(mockData)

    // 檢查是否渲染了正確數量的列表項
    const listItems = wrapper.findAll('li')
    expect(listItems.length).toBe(3)

    // 檢查列表項的內容
    expect(listItems[0].text()).toBe('自學地圖')
    expect(listItems[1].text()).toBe('自由數學')
    expect(listItems[2].text()).toBe('自學2.0')
  })

})
