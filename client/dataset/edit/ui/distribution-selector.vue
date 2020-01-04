<template>
  <div class="centred">
    <v-btn 
      :disabled="value < 1"
      text
      icon 
      @click="onPrevious"
    >
      <v-icon>navigate_before</v-icon>
    </v-btn>
    <v-btn
      v-for="(item, index) in distributions"
      :key="index"
      text
      icon
      @click="onSelect(index)"
    >
      <v-icon :color="index === value ? 'blue' : (isValid(index) ? undefined : 'red')">
        lens
      </v-icon>
    </v-btn>
    <v-btn 
      text
      icon 
      @click="onNew"
    >
      <v-icon color="green">
        add_circle
      </v-icon>
    </v-btn>
    <v-btn 
      :disabled="value + 1 >= distributions.length"
      text
      icon 
      @click="onNext"
    >
      <v-icon>navigate_next</v-icon>
    </v-btn>
  </div>
</template>

<script>
import {isDistributionValid} from "./../distribution-model";

export default {
  "name": "app-item-selector",
  "props": {
    "value": {"type": Number, "required": true},
    "distributions": {"type": Array, "required": true}
  },
  "methods": {
    "onPrevious": function () {
      this.$emit("input", this.value - 1);
    },
    "onNew": function () {
      this.$emit("add");
    },
    "onNext": function () {
      this.$emit("input", this.value + 1);
    },
    "onSelect": function (index) {
      this.$emit("input", index);
    },
    "isValid": function(index) {
      const distribution = this.distributions[index];
      if (!distribution.$validators.force) {
        // Newly added distribution. User does not
        // visited last step after adding this one.
        return true;
      }
      return isDistributionValid(distribution);
    }
  }
};
</script>

<style scoped>
    .centred {
        text-align: center;
    }
    .active {
        color: blue;
    }
</style>