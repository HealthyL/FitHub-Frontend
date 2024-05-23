<script>
import { ProductEntity } from "@/productsManagement/model/product.entity.js";
import { ProductApiService } from "@/productsManagement/services/product-api.service.js";
import ProductCard from "@/productsManagement/components/product-card.component.vue";
import { CategoryEntity } from "@/productsManagement/model/category.entity.js";

export default {
  name: "products-card-list",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
      productsService: new ProductApiService(),
      categoryId: null,
      categoryOptions: []
    }
  },
  created() {
    this.fetchCategoryOptions();
    this.fetchProducts();
  },
  methods: {
    async fetchCategoryOptions() {
      try {
        const response = await this.productsService.getCategory();
        console.log('Fetched Categories:', response.data);  // Debugging
        this.categoryOptions = response.data.map(categoryData => new CategoryEntity(categoryData.id, categoryData.name));
      } catch (error) {
        console.error('Error fetching category data:', error);  // Error handling
      }
    },

    async fetchProducts() {
      try {
        const response = await this.productsService.getProducts();
        console.log('Fetched Products:', response.data);  // Debugging
        this.products = response.data.map(productData => new ProductEntity(productData.id, productData.name, productData.description, productData.price,productData.photoUrl, productData.categoryId));
        console.log('Products after mapping:', this.products);  // Debugging
      } catch (error) {
        console.error('Error fetching product data:', error);  // Error handling
      }
    },
    resetFilter() {
      this.categoryId = null;
    }
  },
  computed: {
    filteredProducts() {
      console.log('Selected Category ID:', this.categoryId);
      if (this.categoryId !== null) {
        const filtered = this.products.filter(product => product.categoryId === Number(this.categoryId));
        console.log('Filtered Products:', filtered);
        return filtered;
      }
      return this.products;
    }
  }
}
</script>

<template>
  <h1 class="titulo-settings">{{ $t('product.title') }}</h1>
  <pv-divider class="divider"></pv-divider>
  <div class="filters">
    <div class="dropdown-container">
      <pv-dropdown class="dropdown-content"
          v-model="categoryId"
          :options="categoryOptions"
          optionLabel="name"
          optionValue="id"
          :placeholder="$t('product.category-select')"
      />
    </div>
    <div class="no-filter">
      <pv-button @click="resetFilter" class="no-filter-button" :disabled="categoryId === null">
        {{ $t('product.no-filter') }}
      </pv-button>
    </div>
  </div>
  <div class="product-card-list">
    <product-card
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
    />
  </div>
</template>

<style scoped>
.titulo-settings {
  margin-left: 3em;
  color: #c5d951;
}
.divider {
  margin: auto auto 3em;
  width: 90%;
}
.product-card-list {
  margin-top: 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.dropdown-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}
.dropdown-content {
  width: 300px;
  border-color: #c5d951;
}
.filters{
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}
.no-filter-button {
  margin-left: 1em;
  padding: 0.5em 1em;
  background-color: #c5d951;
  color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 1em;
  cursor: pointer;
}
.no-filter-button:hover {
  background-color: #95a53a;
  color: #f2f2f2;

}
</style>