# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

<!-- 
INSERT INTO properties_schema.amenities ( amenity_group_id, amenity_name, amenity_icon, amenity_input_label, amenity_value_type_id) VALUES
( 1, 'Fridge', 'Fridge', 'Has Fridge', 2),
( 1, 'Dining Table', 'dining-table', 'Has Dining Table', 2),
( 1, 'Bath with rain shower', 'bath-shower', 'Has Bath with rain shower', 2),
( 1, 'Kettle', 'kettle', 'Has Kettle', 2),
( 1, 'Fully equipped kitchen', 'restaurant', 'Offers Fully Equipped Kitchen', 2),
( 1, 'Washing Machine', 'waching-machine', 'Has Washing Machine', 2),
( 1, 'Free Wifi', 'Free WiFi', 'Offers Free Wifi', 2),
( 1, 'Bath with rain shower', 'Ensuite bathroom', 'Bath with rain shower', 2);


-- san property 
INSERT INTO
    properties_schema.properties (
        property_name,
        address_line,
        instant_approve,
        star_rating,
        iframe_url,
        location_url,
        property_type_id,
        location_id,
        compound_id,
        owner_id,
        property_image,
        property_images,
        property_description,
        checkin_time_from,
        checkin_time_to,
        checkout_time_from,
        checkout_time_to
    )
VALUES
    (
        'Rhactus House San Stefano',
        'San Stefano, Alexandria, Egypt',
        true,
        5,
        '!1m14!1m8!1m3!1d13644.248194038719!2d29.9665024!3d31.2467056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5a06c445537%3A0xe7153c1b1640e4c6!2sRhactus%20House%20San%20Stefano!5e0!3m2!1sen!2seg!4v1727721888876!5m2!1sen!2seg',
        'https://maps.app.goo.gl/y5iktuGBW2vBR87f9',
        1,
        5,
        NULL,
        3,
        '/properties/rha-1.webp',
        '/properties/rha-1.webp,/properties/rha-2.webp,/properties/rha-3.webp,/properties/rha-4.webp,/properties/rha-5.webp,/properties/rha-6.webp,/properties/rha-7.webp,/properties/rha-8.webp,/properties/rha-9.webp',
        'Nestled in the heart of Alexandria, Rhactus Hotel offers a unique blend of comfort, luxury, and authentic Egyptian hospitality. Whether you are here for business or leisure, our hotel provides an unforgettable stay with breathtaking views of the Mediterranean Sea and easy access to the city’s historic landmarks.',
        '14:00',
        '22:00',
        '12:00',
        '12:00'
    );


INSERT INTO properties_schema.reservable_units(
    "reservable_unit_name", 
    "reservable_unit_description", 
    "minimum_guests_number", 
    "maximum_guests_number", 
    "unit_area", 
    "reservable_unit_type_id", 
    "property_id", 
    "bathrooms_count", 
    "is_closed", 
    "base_price", 
    "reservable_unit_image", 
    "reservable_unit_images", 
    "created_at", 
    "updated_at", 
    "deleted_at"
)
VALUES
('One-Bedroom Premium Apartment',
 'Experience luxury living in our One-Bedroom Premium Apartment, featuring elegant design, spacious interiors, and modern amenities. Perfect for a comfortable stay, this apartment offers a cozy bedroom, a fully equipped kitchen, and a stylish living area, making it ideal for both relaxation and convenience.',
 1, 5, 100, 3, 9, 1, FALSE, 7000,
 '/units/rhss-1br_premium-12.webp',
 '/units/rhss-1br_premium-1.webp,/units/rhss-1br_premium-2.webp,/units/rhss-1br_premium-3.webp,/units/rhss-1br_premium-5.webp,/units/rhss-1br_premium-6.webp,/units/rhss-1br_premium-7.webp,/units/rhss-1br_premium-8.webp,/units/rhss-1br_premium-11.webp,/units/rhss-1br_premium-12.webp,/units/rhss-1br_premium-13.webp,/units/rhss-1br_premium-14.webp',
 '2024-09-24 01:47:22.391044', NULL, NULL),

('One-Bedroom Deluxe Apartment',
 'The One-Bedroom Deluxe Apartment at Rhactus Hotel combines comfort and style in a spacious one-bedroom setting. Featuring contemporary decor and premium amenities, this apartment offers a cozy living area, a fully equipped kitchenette, and a serene bedroom designed for relaxation. With elegant furnishings and a private balcony, it’s the perfect choice for guests seeking a comfortable, home-like stay with all the luxuries of a high-end hotel.',
 1, 4, 70, 5, 9, 2, FALSE, 8500,
 '/units/rhss-1br_deluxe-7.webp',
 '/units/rhss-1br_deluxe-0.webp,/units/rhss-1br_deluxe-1.webp,/units/rhss-1br_deluxe-2.webp,/units/rhss-1br_deluxe-3.webp,/units/rhss-1br_deluxe-4.webp,/units/rhss-1br_deluxe-5.webp,/units/rhss-1br_deluxe-7.webp,/units/rhss-1br_deluxe-8.webp,/units/rhss-1br_deluxe-10.webp,/units/rhss-1br_deluxe-12.webp,/units/rhss-1br_deluxe-14.webp',
 '2024-09-25 01:09:29.191048', NULL, NULL),

('Rhactus Penthouse',
 'The Rhactus Penthouse offers a luxurious and exclusive experience with breathtaking views and elegant interiors. This premium unit is designed to provide the ultimate comfort and sophistication, featuring spacious living areas, modern amenities, and a private terrace to enjoy the scenic beauty of Alexandria. Perfect for those seeking a high-end retreat in a prime location, the Rhactus Penthouse is the epitome of refined living.',
 1, 4, 80, 6, 9, 2, FALSE, 9000,
 '/units/rhss-1br_deluxe-18.webp',
 '/units/rhss-1br_deluxe-1.webp,/units/rhss-1br_deluxe-2.webp,/units/rhss-1br_deluxe-3.webp,/units/rhss-1br_deluxe-4.webp,/units/rhss-1br_deluxe-5.webp',
 '2024-09-25 01:06:45.84215', NULL, NULL),

('One-Bedroom Superior Apartment',
 'The One-Bedroom Superior Apartment at Rhactus Hotel provides a perfect blend of elegance and comfort. This beautifully designed one-bedroom apartment features a spacious living area, a modern kitchen, and a stylish bedroom, all equipped with premium amenities. With sophisticated decor and a private balcony offering stunning views, it’s the ideal choice for guests looking for an elevated stay that feels like a luxurious home away from home.',
 2, 5, 90, 1, 9, 2, FALSE, 9000,
 'rhss-1br_superior-2.webp',
 '/units/rhss-1br_superior-1.webp,/units/rhss-1br_superior-2.webp,/units/rhss-1br_superior-3.webp,/units/rhss-1br_superior-4.webp,/units/rhss-1br_superior-5.webp,/units/rhss-1br_superior-6.webp,/units/rhss-1br_superior-7.webp,/units/rhss-1br_superior-8.webp,',
 '2024-09-25 01:12:09.225443', NULL, NULL),

('Two-Bedroom Deluxe Apartment',
 'The Two-Bedroom Deluxe Apartment at Rhactus Hotel offers a perfect mix of style and functionality in an open-concept space. This chic apartment is thoughtfully designed with modern furnishings, a comfortable sleeping area, a well-equipped kitchenette, and a cozy seating nook. Ideal for both business and leisure travelers, it provides all the comforts you need for a memorable stay, complemented by stunning views and a serene atmosphere.',
 2, 4, 90, 2, 9, 1, FALSE, 6000,
 '/units/rhss-premium_studio-1.webp',
 '/units/rhss-premium_studio-1.webp,/units/rhss-premium_studio-2.webp,/units/rhss-premium_studio-3.webp',
 '2024-09-25 01:14:28.694049', NULL, NULL),

('Premium Studio',
 'Spacious 1 bedroom apartment with modern amenities',
 1, 2, 70, 1, 9, 1, FALSE, 12000,
 '/units/rhss-premium_studio-3.webp',
 '/units/rhss-premium_studio-1.webp,/units/rhss-premium_studio-2.webp,/units/rhss-premium_studio-3.webp,/units/rhss-premium_studio-4.webp',
 '2024-09-27 02:08:44.563888', NULL, NULL);


INSERT INTO properties_schema.unit_amenities (unit_id, unit_type, amenity_id, amenity_value)
SELECT 
    9, -- unit_id
    'property', -- unit_type
    a.amenity_id, -- amenity_id fetched based on name
    true
FROM properties_schema.amenities a
WHERE a.amenity_name = any(array[
    'Fridge', 'Air Conditioning', 'Fully equipped kitchen', 'Washing Machine', 'Free Wifi', 
    'Bath with rain shower', 'Flat-screen TV', 'Room Service', 'Satellite Channels', 'Heating'
]);-- fix icons
INSERT INTO properties_schema.unit_amenities (unit_id, unit_type, amenity_id, amenity_value)
SELECT 
    9, -- unit_id
    'property', -- unit_type
    a.amenity_id, -- amenity_id fetched based on name
    true
FROM properties_schema.amenities a
WHERE a.amenity_name = any(array[
    'San Stefano Grand Plaza Mall', 'Gleem Bay', 'Royal Jewellery Museum', 'Bibliotheca Alexandrina',
    'Graeco-Roman Museum', 'Citadel of Qaitbay']);-- fix icons



INSERT INTO properties_schema.unit_amenities (unit_id, unit_type, amenity_id, amenity_value)
VALUES
(9 , 'property' , get_amenity_id_by_name('Fridge') , true),
(9 , 'property' , get_amenity_id_by_name('Dining Table') , true),
(9 , 'property' , get_amenity_id_by_name('Bath with rain shower') , true),
(9 , 'property' , get_amenity_id_by_name('Kettle') , true),
(9 , 'property' , get_amenity_id_by_name('Fully equipped kitchen') , true),
(9 , 'property' , get_amenity_id_by_name('Washing Machine') , true),
(9 , 'property' , get_amenity_id_by_name('Room Service') , true),
(9 , 'property' , get_amenity_id_by_name('Satellite Channels') , true),
(9 , 'property' , get_amenity_id_by_name('Air Conditioning') , true),
(9 , 'property' , get_amenity_id_by_name('Flat-screen TV') , true),
(9 , 'property' , get_amenity_id_by_name('Free Wifi') , true),
(9 , 'property' , get_amenity_id_by_name('Bath with rain shower') , true); -->