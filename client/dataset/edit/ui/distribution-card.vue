<template>
  <v-flex xs12>
    <v-card>
      <v-card-title v-if="distribution.title.length > 0">
        <h3 class="headline mb-0">
          {{ distribution.title }}
        </h3>
      </v-card-title>
      <v-layout 
        row 
        wrap>
        <v-flex 
          xs12 
          sm6>
          <v-list 
            two-line 
            subheader>
            <v-subheader>
              {{ $t('headline_distribution_license') }}
            </v-subheader>
            <v-list-tile 
              v-if="distribution.license_author_type == 'CC BY'" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="green white--text">turned_in</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_author_ccby_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_author_ccby_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ distribution.license_author_name }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl('https://creativecommons.org/licenses/by/4.0/')">
                  <v-icon color="green">help_outline</v-icon>
                </v-btn>                    
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile 
              v-if="distribution.license_author_type == 'NO'" 
              avatar >
              <v-list-tile-avatar>
                <v-icon 
                  slot="activator" 
                  class="green white--text">check</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_author_no_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_author_no_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t('license_author_type') }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl('https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/')">
                  <v-icon color="green">help_outline</v-icon>
                </v-btn>                    
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile 
              v-if="distribution.license_author_type == 'MULTI'" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="red white--text">list</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_author_multi_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_author_multi_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t('license_author_type') }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl('https://data.gov.cz/podmínky-užití/obsahuje-více-autorských-děl/')">
                  <v-icon color="red">help_outline</v-icon>
                </v-btn>                    
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile 
              v-if="distribution.license_author_type == 'CUSTOM'" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="red white--text">help</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_author_custom_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_author_custom_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ distribution.license_author_custom }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl(distribution.license_author_custom)">
                  <v-icon color="red">help_outline</v-icon>
                </v-btn>                    
              </v-list-tile-action>
            </v-list-tile>
                        
            <v-list-tile 
              v-if="distribution.license_db_type == 'CC BY'" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="green white--text">turned_in</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_db_ccby_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_db_ccby_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ distribution.license_db_name }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl('https://creativecommons.org/licenses/by/4.0/')">
                  <v-icon color="green">help_outline</v-icon>
                </v-btn>                    
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile 
              v-if="distribution.license_db_type == 'NO'" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="green white--text">check</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_db_no_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_db_no_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t('license_db_type') }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl('https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/')">
                  <v-icon color="green">help_outline</v-icon>
                </v-btn>                    
              </v-list-tile-action>
            </v-list-tile>              
            <v-list-tile 
              v-if="distribution.license_db_type == 'CUSTOM'" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="red white--text">help</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_db_custom_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_db_custom_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ distribution.license_db_custom }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl(distribution.license_db_custom)">
                  <v-icon color="red">help_outline</v-icon>
                </v-btn>                    
              </v-list-tile-action>
            </v-list-tile>
                        
            <v-list-tile 
              v-if="distribution.license_specialdb_type == 'CC0'" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="green white--text">turned_in</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_specialdb_cc0_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_specialdb_cc0_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t('license_specialdb_type') }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl('https://creativecommons.org/publicdomain/zero/1.0/')">
                  <v-icon color="green">help_outline</v-icon>
                </v-btn>                    
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile 
              v-if="distribution.license_specialdb_type == 'NO'" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="green white--text">check</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_specialdb_no_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_specialdb_no_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t('license_specialdb_type') }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl('https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/')">
                  <v-icon color="green">help_outline</v-icon>
                </v-btn>                    
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile 
              v-if="distribution.license_specialdb_type == 'CUSTOM'" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="red white--text">help</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_specialdb_custom_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_specialdb_custom_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ distribution.license_specialdb_custom }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl(distribution.license_specialdb_custom)">
                  <v-icon color="red">help_outline</v-icon>
                </v-btn>                    
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile
              v-if="distribution.license_personal_type == 'NO'" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="green white--text">person</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_personal_no_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_personal_no_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t('license_personal_type') }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl('https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/')">
                  <v-icon color="green">help_outline</v-icon>
                </v-btn>                    
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile 
              v-if="distribution.license_personal_type == 'YES'" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="red white--text">person</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_personal_yes_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_personal_yes_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t('license_personal_type') }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl('https://data.gov.cz/podmínky-užití/obsahuje-osobní-údaje/')">
                  <v-icon color="red">help_outline</v-icon>
                </v-btn>                    
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile 
              v-if="distribution.license_personal_type == 'UNKNOWN'" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="red white--text">help</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_personal_unknown_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_personal_unknown_short') }}
                  </span>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t('license_personal_type') }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex 
          xs12 
          sm6>
          <v-list 
            two-line 
            subheader>         
            <v-subheader>
              {{ $t('headline_distribution_access') }}
            </v-subheader>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon class="blue white--text">cloud_download</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ distribution.url }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t('distribution_download') }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  flat 
                  icon 
                  @click="downloadDistribution">
                  <v-icon color="blue">open_in_new</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon class="blue white--text">description</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ mediaTypeLabel }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t('media_type') }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  flat 
                  icon 
                  @click="openMediaType">
                  <v-icon color="blue">open_in_new</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon class="blue white--text">description</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ formatLabel }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t('distribution_format') }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile 
              v-if="schemaProvided" 
              avatar>
              <v-list-tile-avatar>
                <v-icon class="blue white--text">link</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ distribution.schema }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t('distribution_schema') }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  flat 
                  icon 
                  @click="downloadSchema">
                  <v-icon color="blue">open_in_new</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
    import {getItem} from "../codelists/local-storage";

    export default {
        "name": "app-distribution-card",
        "props": {
            "distribution": {"type": Object, "required": true},
            "codelist": {"type": Object, "required": true}
        },
        "computed": {
            "schemaProvided": function () {
                return this.distribution.schema !== null &&
                    this.distribution.schema.length > 0;
            },
            "mediaTypeLabel": function () {
                const iri = this.distribution.media_type;
                const value = getItem(
                    this.codelist, "media-types", iri,
                    this.$vuetify.lang.current);
                if (value === undefined) {
                    return iri;
                } else {
                    return value;
                }
            },
            "formatLabel": function () {
                const iri = this.distribution.format;
                const value = getItem(
                    this.codelist, "file-type", iri,
                    this.$vuetify.lang.current);
                if (value === undefined) {
                    return iri;
                } else {
                    return value;
                }
            }
        },
        "methods": {
            "downloadDistribution": function () {
                downloadUrl(this.distribution.url);
            },
            "downloadSchema": function () {
                downloadUrl(this.schema.url);
            },
            "openMediaType": function () {
                downloadUrl(this.distribution.media_type);
            },
            "openUrl": function (url) {
                downloadUrl(url);
            }
        }
    }

    function downloadUrl(uri) {
        window.open(uri);
    }

</script>