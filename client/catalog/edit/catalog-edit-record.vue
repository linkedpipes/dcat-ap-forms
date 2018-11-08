<template>
  <v-container 
    fluid 
    grid-list-lg 
    pa-0>
    <v-text-field
      id="catalog_title"
      v-model="catalog.title"
      :label="$labels.get('catalog_title')"
      :error-messages="err_title"
      :hint="$labels.get('hint_catalog_title')"
      prepend-icon="label"
      append-outer-icon="help_outline"
      required
      clearable 
      @click:append-outer="$h('catalog_title')"/>
    <v-layout 
      row 
      wrap>
      <v-flex 
        xs12 
        md6>
        <v-text-field
          id="contact_point_name"
          v-model="catalog.contact_point_name"
          :label="$labels.get('catalog_contact_point_name')"
          :error-messages="err_contact_point_name"
          :hint="$labels.get('hint_catalog_contact_point_name')"
          prepend-icon="person"
          append-outer-icon="help_outline"
          required
          clearable
          @click:append-outer="$h('catalog_contact_point_name')"/>
      </v-flex>
      <v-flex 
        xs12 
        md6>
        <v-text-field
          id="contact_point_email"
          v-model="catalog.contact_point_email"
          :label="$labels.get('catalog_contact_point_email')"
          :error-messages="err_contact_point_email"
          :hint="$labels.get('hint_catalog_contact_point_email')"
          prepend-icon="alternate_email"
          append-outer-icon="help_outline"
          required
          type="email"
          clearable 
          @click:append-outer="$h('catalog_contact_point_email')"/>
      </v-flex>
    </v-layout>
    <v-autocomplete
      id="catalog_type"
      v-model="catalog.type"
      :items="catalogTypes"
      :label="$labels.get('catalog_type')"
      :item-text="$vuetify.lang.current"
      prepend-icon="category" 
      item-value="value"
      append-outer-icon="help_outline"
      required
      @click:append-outer="$h('catalog_type')"/>
    <v-text-field
      id="catalog_url"
      v-model="catalog.url"
      :label="$labels.get('catalog_url')"
      :error-messages="err_url"
      :hint="$labels.get('hint_catalog_url')"
      prepend-icon="link"
      append-outer-icon="help_outline"
      required
      clearable 
      @click:append-outer="$h('catalog_url')"/>
    <v-text-field
      id="catalog_homepage"
      v-model="catalog.homepage"
      :label="$labels.get('homepage')"
      :error-messages="err_homepage"
      :hint="$labels.get('hint_homepage')"
      prepend-icon="home"
      append-outer-icon="help_outline"
      clearable
      @click:append-outer="$h('homepage')"/>
  </v-container>
</template>

<script>
    import {createCatalogValidators} from "./catalog-model";
    import CatalogTypeCodelist from "./codelists/catalog-type";

    export default {
        "name": "app-dataset-record-edit",
        "components": {},
        "props": {
            "catalog": {"type": Object, "required": true}
        },
        "data": () => ({
            "catalogTypes": CatalogTypeCodelist
        }),
        "computed": {
            ...createCatalogValidators()
        }
    };

</script>