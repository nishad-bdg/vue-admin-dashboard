<template>
  <div>
    <div class="table-controls">
      <label
        >Show
        <select v-model="perPage" class="custom-select">
          <option v-for="option in perPageOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
        entries
      </label>
      <div class="search-container">
        <i class="search-icon"></i>
        <input type="text" class="search-input" placeholder="Search..." v-model="searchQuery" />
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            @click="column.sortable && sortBy(column.key)"
          >
            <div class="table-head">
              {{ column.label }}
              <IconSort v-if="column.sortable" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in paginatedData" :key="row.id">
          <td v-for="column in columns" :key="column.key">
            <span v-if="column.key !== 'action' && column.key !== 'status'">
              {{ row[column.key] }}
            </span>

            <span v-if="column.key === 'status'">
              <Badge :status="row[column.key]" />
            </span>
            <span v-if="column.key === 'action'"
              ><IconTableDownload style="cursor: pointer"
            /></span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <div class="results">
        Showing {{ startEntry }} to {{ endEntry }} of {{ totalEntries }} entries
      </div>
      <div>
        <button :disabled="currentPage === 1" @click="currentPage -= 1" class="btnPagination">
          Previous
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          class="btn-pages"
          :class="currentPage === page && 'btn-current-page'"
        >
          {{ page }}
        </button>
        <button
          :disabled="currentPage === totalPages"
          @click="currentPage += 1"
          class="btnPagination"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import IconTableDownload from '@/components/icons/IconTableDownload.vue'
import Badge from './Badge.vue'
import IconSort from './IconSort.vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
    required: true
  },
  columns: {
    type: Array,
    default: () => [],
    required: true
  },
  perPageOptions: {
    type: Array,
    default: () => [5, 10, 20]
  }
})

const perPage = ref(props.perPageOptions[0])
const searchQuery = ref('')
const sortColumn = ref(null)
const sortOrder = ref('asc')
const currentPage = ref(1)

const startEntry = computed(() => {
  return (currentPage.value - 1) * perPage.value + 1
})

const endEntry = computed(() => {
  const end = currentPage.value * perPage.value
  return end > props.data.length ? props.data.length : end
})

const totalEntries = computed(() => {
  return props.data.length
})

const sortBy = (column) => {
  if (sortColumn.value === column) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortColumn.value = column
    sortOrder.value = 'asc'
  }
}

const sortedData = computed(() => {
  if (!sortColumn.value) {
    return props.data
  }
  return props.data.slice().sort((a, b) => {
    const aValue = a[sortColumn.value]
    const bValue = b[sortColumn.value]
    if (aValue < bValue) return sortOrder.value === 'asc' ? -1 : 1
    if (aValue > bValue) return sortOrder.value === 'asc' ? 1 : -1
    return 0
  })
})

const filteredData = computed(() => {
  if (!searchQuery.value) return sortedData.value
  const query = searchQuery.value.toLowerCase()
  return sortedData.value.filter((row) => {
    return Object.values(row).some((val) => String(val).toLowerCase().includes(query))
  })
})

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * perPage.value
  return filteredData.value.slice(startIndex, startIndex + perPage.value)
})

const totalPages = computed(() => Math.ceil(filteredData.value.length / perPage.value))
</script>

<style scoped>
label {
  font-size: 14px;
  font-weight: 400;
  color: var(--theme-text-gray-600);
}
.table-controls {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead,
th {
  background: var(--theme-background-table);
  cursor: pointer;
  font-weight: 400;
  font-size: 1rem;
  color: var(--theme-text-gray-600);
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tbody,
tr {
  font-weight: 400;
  font-size: 1rem;
  color: var(--theme-text-gray-600);
}

.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.pagination .results {
  font-size: 14px;
  font-weight: 400;
  color: var(--theme-text-gray);
}

.pagination button {
  margin-right: 5px;
}

/* search input */
.search-container {
  position: relative;
  width: 328px;
  height: 42px;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-image: url('@/assets/icons/search.svg');
  background-size: cover;
}

.search-input {
  width: calc(100% - 0px);
  height: 100%;
  padding-left: 40px;
  border: 1px solid var(--theme-background-border);
  border-radius: 8px;
  font-size: 16px;
  outline: none;
}

.search-input:focus {
  border-color: var(--theme-text-green);
}

.search-input::placeholder {
  color: var(--theme-text-gray);
  font-size: 14px;
  font-weight: 400;
}
/* search input */

.custom-select {
  height: 36px;
  width: 64px;
  border: 1px solid var(--theme-background-border);
  outline: none;
  padding: 7px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--theme-text-sub-heading);
  appearance: none;
  background-image: url('@/assets/icons/select-down-arrow.svg');
  background-repeat: no-repeat;
  background-position: right 10px top 50%;
  cursor: pointer;
}
.btnPagination {
  border-style: none;
  background: none;
  font-size: 14px;
  font-weight: 600;
  color: var(--theme-text-green);
}

.btnPagination:disabled {
  color: var(--theme-text-gray);
}

.btn-pages {
  border-style: none;
  background: none;
  color: var(--theme-text-gray);
  font-size: 14px;
  font-weight: 400;
}
.btn-current-page {
  border: 1px solid var(--theme-text-green);
  color: var(--theme-text-green);
  border-radius: 7px;
  padding: 8px 12px;
}

.table-head {
  display: flex;
  align-items: center;
  column-gap: 2px;
}
</style>
