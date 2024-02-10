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
          <th v-for="column in columns" :key="column.key" @click="sortBy(column.key)">
            {{ column.label }}
            <span v-if="sortColumn === column.key">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in paginatedData" :key="row.id">
          <td v-for="column in columns" :key="column.key">
            {{ row[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <div class="results">Total {{ paginatedData.length }}</div>
      <div>
        <button :disabled="currentPage === 1" @click="currentPage -= 1">Previous</button>
        <button v-for="page in totalPages" :key="page" @click="currentPage = page">
          {{ page }}
        </button>
        <button :disabled="currentPage === totalPages" @click="currentPage += 1">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const data = ref([
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
    phone: '123456789',
    address: '123 Street',
    city: 'New York',
    country: 'USA'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    email: 'jane@example.com',
    phone: '987654321',
    address: '456 Avenue',
    city: 'Los Angeles',
    country: 'USA'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    age: 35,
    email: 'bob@example.com',
    phone: '555555555',
    address: '789 Road',
    city: 'Chicago',
    country: 'USA'
  }
  // More data...
])

const perPageOptions = [5, 10, 20]
const perPage = ref(perPageOptions[0])
const searchQuery = ref('')
const sortColumn = ref(null)
const sortOrder = ref('asc')
const currentPage = ref(1)

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'address', label: 'Address' },
  { key: 'city', label: 'City' },
  { key: 'country', label: 'Country' }
]

const sortBy = (column) => {
  if (sortColumn.value === column) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortColumn.value = column
    sortOrder.value = 'asc'
  }
}

const sortedData = computed(() => {
  let sorted = [...data.value]
  if (sortColumn.value) {
    sorted = sorted.sort((a, b) => {
      const aValue = a[sortColumn.value]
      const bValue = b[sortColumn.value]
      return sortOrder.value === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    })
  }
  return sorted
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
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  cursor: pointer;
}

.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.pagination .results {
	font-size: 14px;
	font-weight: 400;
	color: var(--theme-text-gray)
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
</style>
