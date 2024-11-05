import { shallowMount, flushPromises } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AboutView from '@/views/AboutView.vue'
import { projectsRef } from '@/firebase'
import { onValue } from 'firebase/database'

vi.mock('firebase/database')

describe('AboutView.vue', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('從 Firebase 獲取數據並在表格中顯示', async () => {
    const mockData = {
      '0000': {
        id: "0000",
        full_name: "測試項目",
        website: "https://test.com",
        main_category: "測試類別",
        maintainer: "測試維護者",
        maintainer_email: "test@example.com",
        description: "這是一個測試描述"
      }
    }

    vi.mocked(onValue).mockImplementation((ref, callback) => {
      callback({
        val: () => mockData
      } as any)
      return () => {}
    })

    const wrapper = shallowMount(AboutView)

    await flushPromises()

    // 檢查是否調用了正確的 Firebase 引用
    expect(onValue).toHaveBeenCalledWith(projectsRef, expect.any(Function), expect.any(Function))

    // 檢查返回的數據結構
    expect(Array.isArray(wrapper.vm.projects)).toBe(true)
    // expect(wrapper.vm.projects.length).toBe(1)
    expect(wrapper.vm.projects[0]).toHaveProperty('full_name')
    expect(wrapper.vm.projects[0]).toHaveProperty('website')

    // 檢查是否渲染了表格
    const table = wrapper.find('table')
    expect(table.exists()).toBe(true)

    // 檢查表頭
    const tableHeaders = wrapper.findAll('th')
    expect(tableHeaders.length).toBe(5)
    expect(tableHeaders[0].text()).toBe('全名')
    expect(tableHeaders[1].text()).toBe('主要類別')
    expect(tableHeaders[2].text()).toBe('維護者')
    expect(tableHeaders[3].text()).toBe('電子郵件信箱')
    expect(tableHeaders[4].text()).toBe('描述')

    // 檢查表格行數
    const tableRows = wrapper.findAll('tbody tr')
    expect(tableRows.length).toBe(1)

    // 檢查第一行的內容結構
    const firstRowCells = tableRows[0].findAll('td')
    expect(firstRowCells.length).toBe(5)
    expect(firstRowCells[0].find('a').exists()).toBe(true)
  })
})
