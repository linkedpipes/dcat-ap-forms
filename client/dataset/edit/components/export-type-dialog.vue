<template>
  <v-dialog
    v-model="visible"
    width="500"
  >
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-toolbar-title>{{ $t('export_dialog_title') }}</v-toolbar-title>
        <v-spacer />
        <v-btn
          icon
          @click="close"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-radio-group v-model="type">
          <v-radio
            :label="$t('download_new_nkod')"
            :value="EXPORT_NKOD"
          />
          <v-radio
            :label="$t('download_edit_nkod')"
            :value="EXPORT_EDIT"
            :disabled="!exportOptions.allowEdit"
          />
          <v-radio
            :label="$t('download_new_lkod')"
            :value="EXPORT_LKOD"
          />
        </v-radio-group>
        <v-text-field
          v-if="type === EXPORT_LKOD"
          id="dataset_url"
          v-model="lkodIri"
          :label="$t('dataset_url')"
          :hint="$t('hint_dataset_url')"
          :error-messages="errUrl"
          clearable
        />
        <v-text-field
          v-if="type === EXPORT_LKOD"
          id="publisher"
          v-model="publisher"
          :label="$t('publisher')"
          :hint="$t('hint_publisher')"
          :error-messages="errPublisher"
          clearable
        />
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="close"
        >
          {{ $t('export_dialog_title_close') }}
        </v-btn>
        <v-btn
          color="primary"
          text
          :disabled="saveDisabled"
          @click="save"
        >
          {{ $t('export_dialog_title_save') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {provided, url} from "../../../app-service/validators";
import {EXPORT_NKOD, EXPORT_EDIT, EXPORT_LKOD} from "../../dataset-model";

export default {
  "name": "ExportTypeDialog",
  "props": {
    "visible": {"type": Boolean, "required": true},
    "datasetIri": {"type": String},
    "exportOptions": {"type": Object, "required": true},
  },
  "data": () => ({

    "lkodIri": "",
    "publisher": "",
    "type": "nkod",
    //
    "EXPORT_NKOD": EXPORT_NKOD,
    "EXPORT_EDIT": EXPORT_EDIT,
    "EXPORT_LKOD": EXPORT_LKOD,
  }),
  "computed": {
    "errUrl": function () {
      if (this.type !== EXPORT_LKOD) {
        return [];
      }
      if (provided(this.lkodIri) && url(this.lkodIri)) {
        return [];
      } else {
        return [this.$t("dataset_url_invalid")];
      }
    },
    "errPublisher": function () {
      if (this.type !== EXPORT_LKOD) {
        return [];
      }
      if (provided(this.publisher) && url(this.publisher)) {
        return [];
      } else {
        return [this.$t("dataset_publisher_invalid")];
      }
    },
    "saveDisabled": function () {
      return this.errUrl.length > 0;
    },
  },
  "watch": {
    "visible": function (newVisible) {
      if (!newVisible) {
        return;
      }
      this.onOpen();
    },
  },
  "methods": {
    "onOpen": function () {
      this.type = this.exportOptions.type;
      this.lkodIri = this.exportOptions.lkodIri;
      this.publisher = this.exportOptions.publisher;
    },
    "close": function () {
      this.$emit("close");
    },
    "save": function () {
      this.$emit("save", {
        "lkodIri": this.lkodIri,
        "publisher": this.publisher,
        "type": this.type,
      });
    },
  },
};
</script>
