<template>
  <v-menu
    ref="menu"
    :id="id"
    v-model="menu"
    :return-value="value"
    :nudge-right="40"
    :close-on-content-click="false"
    transition="scale-transition"
    min-width="15rem"
    lazy 
    offset-y 
    full-width>
    <v-text-field
      slot="activator"
      :value="value"
      :label="label"
      :hint="hint"
      :persistent-hint="persistentHint"
      prepend-icon="event"
      append-outer-icon="help_outline"
      readonly
      clearable
      @input="onInput" 
      @click:append-outer="$h(id)"/>
    <v-date-picker
      ref="picker"
      :locale="$vuetify.lang.current"
      :value="value"
      @change="save"/>
  </v-menu>
</template>

<script>
    export default {
        "name": "app-date-picker",
        "props": {
            "id": {"required": true},
            "value": {"required": true},
            "label": {"type": String, "required": true},
            "hint": {"type": String, "required": false},
            "persistentHint": {"type": Boolean, "required": false}
        },
        "data": () => ({
            "menu": false
        }),
        "methods": {
            "save": function (date) {
                this.$refs.menu.save(date);
                this.$emit("input", date);
            },
            "onInput": function (value) {
                this.$emit("input", value);
            }
        }
    };
</script>