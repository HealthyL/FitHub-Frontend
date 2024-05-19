<script>
import {ProductEntity} from "@/productsManagement/model/product.entity.js";

export default {
  name: "product-card",
  props: {
    product: ProductEntity
  }
}

</script>

<template>
  <pv-card class="card-content">
    <template #header>
      <img :alt="product.name" :src="product.photoUrl">
    </template>
    <template #content>
      <h3>{{ product.name }}</h3>
      <p class="flex align-content-start flex-wrap mt-4">
        {{$t('product.price')}}: {{ product.price }}
      </p>
      <p class="flex align-content-start flex-wrap mt-4">
        {{$t('product.description')}}: {{ product.description }}
      </p>
    </template>
  </pv-card>
</template>

<style scoped>
.card-content{
  width:100%;
  max-width: 350px;
  margin: 1em ;
  align-items:center;
  border-radius:2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color:grey;
}
img{
  width:100%;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
}

</style>