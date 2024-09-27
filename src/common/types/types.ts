import { PropertyFindFilteredAmenity } from '@buf/ahmeddarwish_abc-api.bufbuild_es/abc/v1/properties_property_filters_pb';
import { PartialMessage } from '@bufbuild/protobuf'
import type { VNode } from 'vue'
import type { ButtonProps } from 'primevue/button';
import type { ImageProps } from "primevue/image"
import { PropertyFindFilteredResponse } from '@buf/ahmeddarwish_abc-api.bufbuild_es/abc/v1/properties_property_filters_pb';
import { SUPPORTED_LOCALES_TYPE } from '../i18n/i18n';
export type Size = SizeObj | number
export type SizeObj = { width: any, height?: any }

export type AppIconProps = {
  icon: number | string
  click?: (e: Event) => void
  size?: 'small' | 'medium' | 'large'
  iconType?: 'primevue' | 'svg'
  color?: string
}
export type AppDialogProps = {
  header?: string,
  description?: string,
  actions?: ButtonProps[]
}

export type AppIconSlots = {
  top(): VNode;
}

export type AppImageProps = {
  src: string
  maxHeight?: string
  imageProps?: ImageProps
  size?: Size
}
export type LocaleType = { dir: 'ltr' | 'rtl', locale: SUPPORTED_LOCALES_TYPE }
export type WebsiteData = {
  email: string
  phone: string
  logo: string
  socialLinks: {
    facebook?: string
    instagram?: string
    tripadvisor?: string
    twitter?: string
  }
  bannerVideo?: string
  discoverImages?: string[]
  bannerImage?: string
  featuredAmenitiesImage?: string
  featuredAmenitiesTitle?: string
  featuredAmenitiesText?: string
  bannerHeadline?: string
  bannerSlogan?: string
  bannerText?: string
  sliderSlogan?: string
  aboutImages?: string[]
  partners: {
    partnerName: string
    partnerImage: string
    partnerDescription?: string
  }[]
  propertyDiscoverMore: {
    article: string
    images: string[]
  }
  footerParagraph: string
}

export type WebsiteFindResponse = {
  website: WebsiteData
  property: PartialMessage<PropertyFindFilteredResponse>
}

export type AmenityPartialProps = {
  amenity: PartialMessage<PropertyFindFilteredAmenity>
}
