import { ref } from 'vue'
import { defineStore } from 'pinia'
import apiClient from '../api/ApiClient'
import { PropertyFindFilteredAmenity } from '@buf/ahmeddarwish_abc-api.bufbuild_es/abc/v1/properties_property_filters_pb';
import { WebsiteFindResponse } from '../types/types'
import db from '@/common/db/db';
import { PartialMessage } from '@bufbuild/protobuf'
import website_data from './website_data';
import { ThemeDefaults } from '../db/types';
import { useI18n } from 'vue-i18n';
export const useGlobalStore = defineStore('global', () => {
    const i18n = useI18n()
    const propertyId = parseInt(import.meta.env.VITE_PROPERTY_ID)
    const websiteFindResponse = ref<WebsiteFindResponse>({
        website: website_data,
        property: {}
    })
    const theme = ref<ThemeDefaults>({ darkMode: false, preferedLocale: "en" })
    const normalAmenities = ref<PartialMessage<PropertyFindFilteredAmenity>[]>([])
    const featuredAmenities = ref<PartialMessage<PropertyFindFilteredAmenity>[]>([])
    const getFeaturedAmenities = (amenities: PartialMessage<PropertyFindFilteredAmenity>[]) => {
        const searchList = ['San Stefano Grand Plaza Mall', 'Gleem Bay', 'Royal Jewellery Museum', 'Bibliotheca Alexandrina',
            'Graeco-Roman Museum', 'Citadel of Qaitbay']
        const featured: PartialMessage<PropertyFindFilteredAmenity>[] = []
        const nonFeatured: PartialMessage<PropertyFindFilteredAmenity>[] = []
        amenities.forEach((amenity) => {
            if (amenity.amenityName && searchList.includes(amenity.amenityName!)) {
                featured.push(amenity)
            } else {
                nonFeatured.push(amenity)
            }
        })
        normalAmenities.value = nonFeatured
        featuredAmenities.value = featured
    }
    const initProperty = () => {
        console.log("initins")
        return new Promise((resolve, reject) => {
            apiClient.propertyFindFiltered({ filters: {}, propertyId : parseInt(propertyId as any) }).then((result) => {
                websiteFindResponse.value.property = result
                getFeaturedAmenities(result.amenities)
                resolve(websiteFindResponse.value)
            }).catch((err) => {
                reject(err)
                console.log(err , 'initProperty');
                
            });
        })
    }
    const initIcons = (): Promise<void> => {
        return new Promise((resolve) => {
            db.icons.count().then(count => {
                count == 0 ? apiClient.iconsInputList({}).then((response) => {
                    db.icons.clear()
                    db.icons.bulkAdd(response.icons)
                    resolve()
                }).catch((err) => {
                    console.log('cannot load icons', err)
                    
                }) : resolve()
            })

        })
    }

    const loadThemeDefaults = async (): Promise<ThemeDefaults> => {
        const theme = await db.theme.toArray()
        if (theme.length > 0) {
            return theme[0]
        }
        const newThemeId = await db.theme.add({
            darkMode: false,
            preferedLocale: 'en',
        })
        return {
            id: newThemeId,
            darkMode: false,
            preferedLocale: 'en',

        }
    }


    const initTheme = async () => {
        theme.value = await loadThemeDefaults()
        if (theme.value.darkMode) document.documentElement.classList.toggle('my-app-dark');
        const dir = theme.value.preferedLocale == 'ar' ? 'rtl' : 'en'
        document.documentElement.setAttribute('dir', dir)
    }

    const initialCalls = (): Promise<void> => {
        return new Promise((resolve, reject) => {
            Promise.all([initProperty(), initIcons(), initTheme()])
                .then(() => {
                    resolve(); // or resolve(undefined);
                })
                .catch(error => {
                    console.error('One of the promises failed:', error);
                    reject(error); // Re-throw the error if needed
                });
        });
    };
    const toggleDarkMode = async () => {
        theme.value.darkMode = !theme.value.darkMode
        await db.theme.update(theme.value.id, theme.value)
        document.documentElement.classList.toggle('my-app-dark')
    }
    const toggleLocale = async () => {
        theme.value.preferedLocale = theme.value.preferedLocale == 'ar' ? 'en' : "ar"
        const dir = theme.value.preferedLocale == 'ar' ? 'rtl' : 'en'
        await db.theme.update(theme.value.id, theme.value)
        document.documentElement.setAttribute('dir', dir)
        i18n.locale.value = theme.value.preferedLocale


    }


    return {
        initialCalls,
        websiteFindResponse,
        theme,
        featuredAmenities,
        normalAmenities,
        toggleDarkMode,
        toggleLocale
    }
})

