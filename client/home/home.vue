<template>
  <v-container>
    <v-layout justify-left>
      <ul>
        <li>
          <router-link :to="{'name': 'dataset-registration'}">
            {{ $labels.get('home_dataset_register_link') }}
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'catalog-registration'}">
            {{ $labels.get('home_catalog_register_link') }}
          </router-link>
        </li>
      </ul>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        "name": "app-home"
    }
</script>